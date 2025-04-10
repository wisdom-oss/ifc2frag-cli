// @ts-types="npm:@types/yargs"
import yargs from "yargs";
import { Components, FragmentsManager, IfcLoader } from "@thatopen/components";

import denoJson from "./deno.json" with { type: "json" };

const { version, description } = denoJson;
const name = "ifc2frag";

async function main() {
  const argv = await yargs(Deno.args)
    .scriptName(name)
    .version(version)
    .usage("$0 <files...>", description)
    .option("properties", {
      type: "boolean",
      describe: "Export IFC properties as JSON next to frag files",
      default: false,
    })
    .help()
    .example("$0 model.ifc", "Convert model.ifc to fragment format")
    .parse();

  const components = new Components();
  const fragments = components.get(FragmentsManager);
  const fragmentsIfcLoader = components.get(IfcLoader);
  fragmentsIfcLoader.settings.wasm = {
    path: "./",
    absolute: false,
  };

  const files = argv.files as string[];

  for (const file of files) {
    console.info(`Converting ${file}...`);
    const buffer = await Deno.readFile(file);
    await fragmentsIfcLoader.load(buffer);
  }

  const groups = Array.from(fragments.groups.values());
  for (const i in files) {
    const file = files[i];
    const group = groups[i];
    const data = fragments.export(group);
    await Deno.writeFile(file + ".frag", data);

    if (argv.properties) {
      const properties = group.getLocalProperties();
      await Deno.writeTextFile(file + ".json", JSON.stringify(properties));
    }
  }
}

if (import.meta.main) await main();
