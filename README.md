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
$ npm install -g qm-cli
$ qm COMMAND
running command...
$ qm (--version)
qm-cli/0.0.0 darwin-arm64 node-v16.17.1
$ qm --help [COMMAND]
USAGE
  $ qm COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`qm hello PERSON`](#qm-hello-person)
* [`qm hello world`](#qm-hello-world)
* [`qm help [COMMANDS]`](#qm-help-commands)
* [`qm plugins`](#qm-plugins)
* [`qm plugins:install PLUGIN...`](#qm-pluginsinstall-plugin)
* [`qm plugins:inspect PLUGIN...`](#qm-pluginsinspect-plugin)
* [`qm plugins:install PLUGIN...`](#qm-pluginsinstall-plugin-1)
* [`qm plugins:link PLUGIN`](#qm-pluginslink-plugin)
* [`qm plugins:uninstall PLUGIN...`](#qm-pluginsuninstall-plugin)
* [`qm plugins:uninstall PLUGIN...`](#qm-pluginsuninstall-plugin-1)
* [`qm plugins:uninstall PLUGIN...`](#qm-pluginsuninstall-plugin-2)
* [`qm plugins update`](#qm-plugins-update)

## `qm hello PERSON`

Say hello

```
USAGE
  $ qm hello PERSON -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/projj/qm-cli/blob/v0.0.0/dist/commands/hello/index.ts)_

## `qm hello world`

Say hello world

```
USAGE
  $ qm hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ qm hello world
  hello world! (./src/commands/hello/world.ts)
```

## `qm help [COMMANDS]`

Display help for qm.

```
USAGE
  $ qm help [COMMANDS] [-n]

ARGUMENTS
  COMMANDS  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for qm.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.2.10/src/commands/help.ts)_

## `qm plugins`

List installed plugins.

```
USAGE
  $ qm plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ qm plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.4.7/src/commands/plugins/index.ts)_

## `qm plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ qm plugins:install PLUGIN...

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
  $ qm plugins add

EXAMPLES
  $ qm plugins:install myplugin 

  $ qm plugins:install https://github.com/someuser/someplugin

  $ qm plugins:install someuser/someplugin
```

## `qm plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ qm plugins:inspect PLUGIN...

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
  $ qm plugins:inspect myplugin
```

## `qm plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ qm plugins:install PLUGIN...

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
  $ qm plugins add

EXAMPLES
  $ qm plugins:install myplugin 

  $ qm plugins:install https://github.com/someuser/someplugin

  $ qm plugins:install someuser/someplugin
```

## `qm plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ qm plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ qm plugins:link myplugin
```

## `qm plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ qm plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ qm plugins unlink
  $ qm plugins remove
```

## `qm plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ qm plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ qm plugins unlink
  $ qm plugins remove
```

## `qm plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ qm plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ qm plugins unlink
  $ qm plugins remove
```

## `qm plugins update`

Update installed plugins.

```
USAGE
  $ qm plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
