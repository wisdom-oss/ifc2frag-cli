<div align="center">
<img height="150px" src="https://raw.githubusercontent.com/wisdom-oss/brand/main/svg/standalone_color.svg">
<h1 align="center"><code>.ifc</code> to <code>.frag</code> CLI</h1>
<h3 align="center">ifc2frag-cli</h3>
<p align="center">🧩 Convert IFC models into lightweight fragments.</p>

![App Version](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fraw.githubusercontent.com%2Fwisdom-oss%2Fifc2frag-cli%2Frefs%2Fheads%2Fmain%2Fdeno.json&query=version&prefix=v&style=for-the-badge&label=version&color=%230088AA)
![Deno Version](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fraw.githubusercontent.com%2Fwisdom-oss%2Fifc2frag-cli%2Frefs%2Fheads%2Fmain%2Fdeno.json&query=denoVersion&prefix=v&style=for-the-badge&label=Deno&color=%2370FFAF)
[![License](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fraw.githubusercontent.com%2Fwisdom-oss%2Ffrontend%2Frefs%2Fheads%2Fmain%2Fpackage.json&query=license&style=for-the-badge&label=license&color=%23003399)](./LICENSE)

</div>

## About

[That Open Company](https://github.com/ThatOpen) makes great tools for working
with [`.ifc` files](https://technical.buildingsmart.org/standards/ifc/) and
rendering them in the browser.\
To speed up loading times, we convert our BIM models into
[fragments](https://docs.thatopen.com/Tutorials/Components/Core/IfcLoader#%EF%B8%8F-getting-ifc-and-fragments).\
This repo gives you a CLI to do exactly that, quick and easy.

## Usage

Just pass `.ifc` files to the CLI and it will create `.ifc.frag` files right
next to them:

```shell
ifc2frag <files...>
```

Add `--properties` to also export the IFC properties as `.json` files:

```shell
ifc2frag --properties <files...>
```

## Installation

Grab a prebuilt release for Linux x86_64, aarch64, or Windows x86_64 from the
[Releases](https://github.com/wisdom-oss/ifc2frag-cli/releases) page.

## Build

If you want to build it yourself, you’ll need [Deno](https://deno.com), ideally
the same version used in the [CI](./.github/workflows/checks.yml).\
Then just run:

```shell
deno task install
deno task compile
```
