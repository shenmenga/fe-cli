oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![GitHub license](https://img.shields.io/github/license/oclif/hello-world)](https://github.com/oclif/hello-world/blob/main/LICENSE)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g qm-fe-cli
$ fe-cli COMMAND
running command...
$ fe-cli (--version)
qm-fe-cli/2.0.0 darwin-x64 node-v16.16.0
$ fe-cli --help [COMMAND]
USAGE
  $ fe-cli COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`fe-cli build PERSON`](#fe-cli-build-person)
* [`fe-cli build world`](#fe-cli-build-world)
* [`fe-cli create [NAME]`](#fe-cli-create-name)
* [`fe-cli help [COMMANDS]`](#fe-cli-help-commands)
* [`fe-cli plugins`](#fe-cli-plugins)
* [`fe-cli plugins:install PLUGIN...`](#fe-cli-pluginsinstall-plugin)
* [`fe-cli plugins:inspect PLUGIN...`](#fe-cli-pluginsinspect-plugin)
* [`fe-cli plugins:install PLUGIN...`](#fe-cli-pluginsinstall-plugin-1)
* [`fe-cli plugins:link PLUGIN`](#fe-cli-pluginslink-plugin)
* [`fe-cli plugins:uninstall PLUGIN...`](#fe-cli-pluginsuninstall-plugin)
* [`fe-cli plugins:uninstall PLUGIN...`](#fe-cli-pluginsuninstall-plugin-1)
* [`fe-cli plugins:uninstall PLUGIN...`](#fe-cli-pluginsuninstall-plugin-2)
* [`fe-cli plugins update`](#fe-cli-plugins-update)
* [`fe-cli publish PERSON`](#fe-cli-publish-person)

## `fe-cli build PERSON`

build project and auto publish code to server

```
USAGE
  $ fe-cli build PERSON [-h] [--ip] [--dir]

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -h, --help  Show CLI help.
  --dir       打包目录名称，默认同package.josn name
  --ip        服务器ip

DESCRIPTION
  build project and auto publish code to server

EXAMPLES
  qm build --ip=

  qm build --dir=
```

_See code: [src/commands/build/index.ts](https://github.com/code/fe-cli/blob/v2.0.0/src/commands/build/index.ts)_

## `fe-cli build world`

Say hello world

```
USAGE
  $ fe-cli build world

DESCRIPTION
  Say hello world

EXAMPLES
  $ fe-cli build world
  hello world! (./src/commands/hello/world.ts)
```

_See code: [src/commands/build/world.ts](https://github.com/code/fe-cli/blob/v2.0.0/src/commands/build/world.ts)_

## `fe-cli create [NAME]`

初始化项目

```
USAGE
  $ fe-cli create [NAME] [-h]

ARGUMENTS
  NAME  create project name

FLAGS
  -h, --help  Show CLI help.

DESCRIPTION
  初始化项目

EXAMPLES
  fe create project-name
```

_See code: [src/commands/create.ts](https://github.com/code/fe-cli/blob/v2.0.0/src/commands/create.ts)_

## `fe-cli help [COMMANDS]`

Display help for fe-cli.

```
USAGE
  $ fe-cli help [COMMANDS] [-n]

ARGUMENTS
  COMMANDS  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for fe-cli.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.2.20/src/commands/help.ts)_

## `fe-cli plugins`

List installed plugins.

```
USAGE
  $ fe-cli plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ fe-cli plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.9.4/src/commands/plugins/index.ts)_

## `fe-cli plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ fe-cli plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ fe-cli plugins add

EXAMPLES
  $ fe-cli plugins:install myplugin 

  $ fe-cli plugins:install https://github.com/someuser/someplugin

  $ fe-cli plugins:install someuser/someplugin
```

## `fe-cli plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ fe-cli plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ fe-cli plugins:inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.9.4/src/commands/plugins/inspect.ts)_

## `fe-cli plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ fe-cli plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ fe-cli plugins add

EXAMPLES
  $ fe-cli plugins:install myplugin 

  $ fe-cli plugins:install https://github.com/someuser/someplugin

  $ fe-cli plugins:install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.9.4/src/commands/plugins/install.ts)_

## `fe-cli plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ fe-cli plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help      Show CLI help.
  -v, --verbose
  --[no-]install  Install dependencies after linking the plugin.

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ fe-cli plugins:link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.9.4/src/commands/plugins/link.ts)_

## `fe-cli plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ fe-cli plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ fe-cli plugins unlink
  $ fe-cli plugins remove
```

## `fe-cli plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ fe-cli plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ fe-cli plugins unlink
  $ fe-cli plugins remove
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.9.4/src/commands/plugins/uninstall.ts)_

## `fe-cli plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ fe-cli plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ fe-cli plugins unlink
  $ fe-cli plugins remove
```

## `fe-cli plugins update`

Update installed plugins.

```
USAGE
  $ fe-cli plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.9.4/src/commands/plugins/update.ts)_

## `fe-cli publish PERSON`

publish project to npm ,

```
USAGE
  $ fe-cli publish PERSON [-h]

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -h, --help  Show CLI help.

DESCRIPTION
  publish project to npm ,

EXAMPLES
  fe publish
```

_See code: [src/commands/publish/index.ts](https://github.com/code/fe-cli/blob/v2.0.0/src/commands/publish/index.ts)_
<!-- commandsstop -->
