<p align="center">
	<img src="https://raw.githubusercontent.com/dojo/meta/master/images/Dojo-New.png" alt="Dojo Logo" height="128" width="128" />
</p>

# dojo-meta

[![Join the chat at https://discordapp.com/invite/M7yRngE](https://img.shields.io/discord/471607790213922816.svg?logo=discord)](https://discordapp.com/invite/M7yRngE)

This repository contains information regarding Dojo (versions 2 and newer) that crosses package boundaries.

Visit us at [dojo.io](https://dojo.io/) for documentation, tutorials, cookbooks, and other materials.  This repository contains detailed information on the structure of Dojo, while `dojo.io` is focused on getting started with and learning Dojo.

## Guidelines and Style Guide

There are several documents that are relevant for contributing to Dojo.

* [Contributing Guidelines](CONTRIBUTING.md) - Guidelines for contributing code (or documentation) to Dojo.
* [Code Of Conduct](CODE_OF_CONDUCT.md) - Guidelines for participation in all Dojo OSS communities.
* [Style Guide](STYLE.md) - The style guide for Dojo for packages that do not use [prettier](https://prettier.io).
* [tslint.json](https://github.com/dojo/dojo2-package-template/blob/master/tslint.json) - The configuration file [tslint](https://palantir.github.io/tslint/) that is used to validate Dojo code.

## Dependent Technologies

While Dojo tries to provide a holistic set of tools to build web applications, there are several key technologies where we feel that Dojo would be better integrating and building upon versus building from the ground up.

In order to ensure that Dojo is a solid set of JavaScript tools and libraries, Dojo is built on [TypeScript](https://www.typescriptlang.org/).  This provides us with structural design time typing as well as an effective way to communicate the intent of the Dojo APIs.  It also provides us the ability to adopt ES6+ syntax features but make distributables that will be backwards compatible to the target browsers for Dojo.

### TypeScript and Dojo Compatibility Matrix

TypeScript and Dojo both iterate rapidly. In general Dojo strives for maximum compatibility, with a plan to periodically increase the minimum TypeScript version so we can begin relying on newer TypeScript features. Please review this list when using Dojo:

|Dojo version|TypeScript version (minimum)|TypeScript version (maximum)|
|-------|---------|-------------|
|2.0|2.6.x|2.6.x|
|3.0|2.6.x|2.6.x|
|4.0|2.6.x|3.1.x|

## Packages

There are several packages that makeup the Dojo platform:

* [`dojo/framework`](https://github.com/dojo/framework) - Progressive framework for Modern Web apps including a virtual DOM system for widgets, reactive architecture, feature detection, routing, internationalization tooling, shims, lightweight state container, a set of testing modules, and more.
* [`dojo/cli`](https://github.com/dojo/cli) - Command Line Tooling for Dojo Applications
  * [`dojo/cli-build-app`](https://github.com/dojo/cli-build-app) - A CLI command for building Dojo applications
  * [`dojo/cli-build-widget`](https://github.com/dojo/cli-build-widget) - A CLI command for building widgets
  * [`dojo/cli-create-app`](https://github.com/dojo/cli-create-app) - Command for creating application boilerplates
  * [`dojo/cli-create-theme`](https://github.com/dojo/cli-create-theme) - Command for scaffolding a widget theme
  * [`dojo/cli-create-widget`](https://github.com/dojo/cli-create-widget) - Command for creating a widget template and all   associated boilerplate
  * [`dojo/cli-test-intern`](https://github.com/dojo/cli-test-intern) - Command for testing projects with [Intern](https://theintern.github.io)
* [`dojo/interop`](https://github.com/dojo/interop) - Interoperability with other frameworks (currently Dojo 1 Dijits and Redux)
* [`dojo/themes`](https://github.com/dojo/themes) - Collection of Dojo themes.
* [`dojo/widgets`](https://github.com/dojo/widgets) - A set of rich UI elements
* [`dojo/loader`](https://github.com/dojo/loader) - A TypeScript based AMD loader

### Examples

We have added a repository of examples which have been built on Dojo.  Those examples are available
in the [dojo/examples](https://github.com/dojo/examples) repository and are _live_ at [dojo.github.io/examples](https://dojo.github.io/examples).

### Support Packages

There are several packages which are designed to support the Dojo platform.  Generally these packages are not directly used by end developers:

* [`dojo/scripts`](https://github.com/dojo/scripts) - A package of scripts to aid with Dojo package development.
* [`dojo/webpack-contrib`](https://github.com/dojo/webpack-contrib) - Specialized webpack loaders and plugins used by the Dojo toolchain.

### Status

The following tables contain status information for the packages:

|Package|CI Status|Code Coverage|npm       |Stage|
|-------|---------|-------------|----------|-----|
|[dojo/cli](https://github.com/dojo/cli/)|[![Build Status](https://travis-ci.org/dojo/cli.svg?branch=master)](https://travis-ci.org/dojo/cli)|[![codecov.io](https://codecov.io/gh/dojo/cli/branch/master/graph/badge.svg)](https://codecov.io/gh/dojo/cli/branch/master)|[![npm version](https://badge.fury.io/js/%40dojo%2Fcli.svg)](https://badge.fury.io/js/%40dojo%2Fcli)|4.0|
|[dojo/framework](https://github.com/dojo/framework)|[![Build Status](https://travis-ci.org/dojo/framework.svg?branch=master)](https://travis-ci.org/dojo/framework)|[![codecov.io](https://codecov.io/gh/dojo/framework/branch/master/graph/badge.svg)](https://codecov.io/gh/dojo/framework/branch/master)|[![npm version](https://badge.fury.io/js/%40dojo%2Fframework.svg)](https://badge.fury.io/js/%40dojo%2Fframework)|4.0|
|[dojo/interop](https://github.com/dojo/interop)|[![Build Status](https://travis-ci.org/dojo/interop.svg?branch=master)](https://travis-ci.org/dojo/interop)|[![codecov.io](https://codecov.io/gh/dojo/interop/branch/master/graph/badge.svg)](https://codecov.io/gh/dojo/interop/branch/master)|[![npm version](https://badge.fury.io/js/%40dojo%2Finterop.svg)](https://badge.fury.io/js/%40dojo%2Finterop)|4.0|
|[dojo/themes](https://github.com/dojo/themes)|[![Build Status](https://travis-ci.org/dojo/themes.svg?branch=master)](https://travis-ci.org/dojo/themes)|[![codecov.io](https://codecov.io/gh/dojo/themes/branch/master/graph/badge.svg)](https://codecov.io/gh/dojo/themes/branch/master)|[![npm version](https://badge.fury.io/js/%40dojo%2Fthemes.svg)](https://badge.fury.io/js/%40dojo%2Fthemes)|4.0|
|[dojo/widgets](https://github.com/dojo/widgets)|[![Build Status](https://travis-ci.org/dojo/widgets.svg?branch=master)](https://travis-ci.org/dojo/widgets)|[![codecov.io](https://codecov.io/gh/dojo/widgets/branch/master/graph/badge.svg)](https://codecov.io/gh/dojo/widgets/branch/master)|[![npm version](https://badge.fury.io/js/%40dojo%2Fwidgets.svg)](https://badge.fury.io/js/%40dojo%2Fwidgets)|4.0|
|[dojo/loader](https://github.com/dojo/loader)|[![Build Status](https://travis-ci.org/dojo/loader.svg?branch=master)](https://travis-ci.org/dojo/loader)|[![codecov.io](https://codecov.io/gh/dojo/loader/branch/master/graph/badge.svg)](https://codecov.io/gh/dojo/loader/branch/master)|[![npm version](https://badge.fury.io/js/%40dojo%2Floader.svg)](https://badge.fury.io/js/%40dojo%2Floader)|2.0|

#### CLI Packages

The `dojo/cli` will provide extensible functionality via a variety of packages that can be plugged
into the CLI.

|Package|CI Status|Code Coverage|npm       |Stage|
|-------|---------|-------------|----------|-----|
|[dojo/cli-build-app](https://github.com/dojo/cli-build-app)|[![Build Status](https://travis-ci.org/dojo/cli-build-app.svg?branch=master)](https://travis-ci.org/dojo/cli-build-app)|[![codecov.io](https://codecov.io/gh/dojo/cli-build-app/branch/master/graph/badge.svg)](https://codecov.io/gh/dojo/cli-build-app/branch/master)|[![npm version](https://badge.fury.io/js/%40dojo%2Fcli-build-app.svg)](https://badge.fury.io/js/%40dojo%2Fcli-build-app)|4.0|
|[dojo/cli-build-widget](https://github.com/dojo/cli-build-widget)|[![Build Status](https://travis-ci.org/dojo/cli-build-widget.svg?branch=master)](https://travis-ci.org/dojo/cli-build-widget)|[![codecov.io](https://codecov.io/gh/dojo/cli-build-widget/branch/master/graph/badge.svg)](https://codecov.io/gh/dojo/cli-build-widget/branch/master)|[![npm version](https://badge.fury.io/js/%40dojo%2Fcli-build-widget.svg)](https://badge.fury.io/js/%40dojo%2Fcli-build-widget)|4.0|
|[dojo/cli-create-app](https://github.com/dojo/cli-create-app)|[![Build Status](https://travis-ci.org/dojo/cli-create-app.svg?branch=master)](https://travis-ci.org/dojo/cli-create-app)|[![codecov.io](https://codecov.io/gh/dojo/cli-create-app/branch/master/graph/badge.svg)](https://codecov.io/gh/dojo/cli-create-app/branch/master)|[![npm version](https://badge.fury.io/js/%40dojo%2Fcli-create-app.svg)](https://badge.fury.io/js/%40dojo%2Fcli-create-app)|4.0|
|[dojo/cli-create-theme](https://github.com/dojo/cli-create-theme)|[![Build Status](https://travis-ci.org/dojo/cli-create-theme.svg?branch=master)](https://travis-ci.org/dojo/cli-create-theme)|[![codecov.io](https://codecov.io/gh/dojo/cli-create-theme/branch/master/graph/badge.svg)](https://codecov.io/gh/dojo/cli-create-theme/branch/master)|[![npm version](https://badge.fury.io/js/%40dojo%2Fcli-create-theme.svg)](https://badge.fury.io/js/%40dojo%2Fcli-create-theme)|4.0|
|[dojo/cli-create-widget](https://github.com/dojo/cli-create-widget)|[![Build Status](https://travis-ci.org/dojo/cli-create-widget.svg?branch=master)](https://travis-ci.org/dojo/cli-create-widget)|[![codecov.io](https://codecov.io/gh/dojo/cli-create-widget/branch/master/graph/badge.svg)](https://codecov.io/gh/dojo/cli-create-widget/branch/master)|[![npm version](https://badge.fury.io/js/%40dojo%2Fcli-create-widget.svg)](https://badge.fury.io/js/%40dojo%2Fcli-create-widget)|4.0|
|[dojo/cli-test-intern](https://github.com/dojo/cli-test-intern)|[![Build Status](https://travis-ci.org/dojo/cli-test-intern.svg?branch=master)](https://travis-ci.org/dojo/cli-test-intern)|[![codecov.io](https://codecov.io/gh/dojo/cli-test-intern/branch/master/graph/badge.svg)](https://codecov.io/gh/dojo/cli-test-intern/branch/master)|[![npm version](https://badge.fury.io/js/%40dojo%2Fcli-test-intern.svg)](https://badge.fury.io/js/%40dojo%2Fcli-test-intern)|4.0|

#### Internal and Support Packages

In addition to `dojo/cli` there are some packages which are designed to be used both by the Dojo team internally, but also
others who are developing Dojo applications:

|Package|CI Status|Code Coverage|npm       |Stage|
|-------|---------|-------------|----------|-----|
|[dojo/scripts](https://github.com/dojo/scripts)|[![Build Status](https://travis-ci.org/dojo/scripts.svg?branch=master)](https://travis-ci.org/dojo/scripts)|[![codecov.io](https://codecov.io/gh/dojo/scripts/branch/master/graph/badge.svg)](https://codecov.io/gh/dojo/scripts/branch/master)|[![npm version](https://badge.fury.io/js/%40dojo%2Fscripts.svg)](https://badge.fury.io/js/%40dojo%2Fscripts)|3.1|
|[dojo/webpack-contrib](https://github.com/dojo/webpack-contrib)|[![Build Status](https://travis-ci.org/dojo/webpack-contrib.svg?branch=master)](https://travis-ci.org/dojo/webpack-contrib)|[![codecov.io](https://codecov.io/gh/dojo/webpack-contrib/branch/master/graph/badge.svg)](https://codecov.io/gh/dojo/webpack-contrib/branch/master)|[![npm version](https://badge.fury.io/js/%40dojo%2Fwebpack-contrib.svg)](https://badge.fury.io/js/%40dojo%2Fwebpack-contrib)|4.0|

#### Example app packages

|Package|CI Status|Code Coverage|
|-------|---------|-------------|
|[dojo/examples](https://github.com/dojo/examples)|[![Build Status](https://travis-ci.org/dojo/examples.svg?branch=master)](https://travis-ci.org/dojo/examples)|[![codecov.io](https://codecov.io/gh/dojo/examples/branch/master/graph/badge.svg)](https://codecov.io/gh/dojo/examples/branch/master)|

## Licensing information

© 2019 [JS Foundation](https://js.foundation/) & contributors. [New BSD](http://opensource.org/licenses/BSD-3-Clause) license.
