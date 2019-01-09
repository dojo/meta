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

### Less Active Packages

We have some other packages which are not actively used by Dojo or still in their planning stages:

* [`dojo/crypto`](https://github.com/dojo/crypto) - A set of libraries to deal with cryptography
* [`dojo/dataviz`](https://github.com/dojo/dataviz) - A data visualization library for Dojo
* [`dojo/dgrid`](https://github.com/dojo/dgrid) - Reactive extensive grid for Dojo (We encourage looking at [`@dojo/widgets/grid`](https://github.com/dojo/widgets/tree/master/src/grid)
* [`dojo/loader`](https://github.com/dojo/loader) - A TypeScript based AMD loader
* [`dojo/streams`](https://github.com/dojo/streams) - WHATWG Streams implementation

We have some deprecated packages:

* [`dojo/actions`](https://github.com/dojo/actions) - A command like library for Dojo applications - *This is deprecated because we have not found this abstraction to add value*
* [`dojo/app`](https://github.com/dojo/app) - An application framework for Dojo - *This is deprecated because widgets + routing + stores are sufficient to deal with higher order application concerns*
* [`dojo/cli-build-webpack`](https://github.com/dojo/cli-build-webpack) - A legacy application and widget build command - *This is deprecated as it has been superseded by `@dojo/cli-build-app` and `@dojo/cli-build-widget` *
* [`dojo/compose`](https://github.com/dojo/compose) - A mixin/trait based composition library - *This is deprecated because TypeScript now offers mixin behavior*
* [`dojo/dom`](https://github.com/dojo/dom) - A set of APIs for manipulating the DOM - *This is deprecated because Dojo fully abstracts away DOM access.*
* [`dojo/interfaces`](https://github.com/dojo/interfaces) - Common interfaces and types for Dojo - *This has been deprecated as interfaces now live in their respective repositories*
* [`dojo/parser`](https://github.com/dojo/parser) - A HTML document parser for instantiating objects declaratively - *This is deprecated in lieu of functionality provided using Custom Elements from `@dojo/widget-core`.*

### Examples

We have added a repository of examples which have been built on Dojo.  Those examples are available
in the [dojo/examples](https://github.com/dojo/examples) repository and are _live_ at [dojo.github.io/examples](https://dojo.github.io/examples).

### Support Packages

There are several packages which are designed to support the Dojo platform.  Generally these packages are not directly used by end developers:

* [`dojo/dojo2-package-template`](https://github.com/dojo/dojo2-package-template) - The standard template for Dojo packages, including build and packaging templates
* [`dojo/grunt-dojo2`](https://github.com/dojo/grunt-dojo2) - A set of Grunt tasks for use with Dojo packages.
* [`dojo/grunt-dojo2-extras`](https://github.com/dojo/grunt-dojo2-extras) - Additional tasks and code supporting continuous delivery with Dojo packages.
* [`dojo/scripts`](https://github.com/dojo/scripts) - A package of scripts to aid with Dojo package development.
* [`dojo/webpack-contrib`](https://github.com/dojo/webpack-contrib) - Specialized webpack loaders and plugins used by the Dojo toolchain.

There are additional packages which are not actively used:

* [`dojo/diagnostics`](https://github.com/dojo/diagnostics) - A set of modules that can be used to instrument Dojo 2 applications to provide additional diagnostic information.
* [`dojo/devtool`](https://github.com/dojo/devtool) - A devtool extension for Chrome and Firefox that provides an interface to the `dojo/diagnostics` information.
* [`dojo/test-extras`](https://github.com/dojo/test-extras) - A set of modules to help with testing Dojo (relevant features moved into `@dojo/framework`)
* [`dojo/web-editor`](https://github.com/dojo/web-editor) - A web editor that can run projects exported from `cli-export-project`. Today we recommend using the [Dojo template on CodeSandbox](https://codesandbox.io/s/github/dojo/dojo-codesandbox-template/tree/master/).


### Status

The following tables contain status information for the packages:

|Package|CI Status|Code Coverage|npm       |Stage|
|-------|---------|-------------|----------|-----|
|[dojo/cli](https://github.com/dojo/cli/)|[![Build Status](https://travis-ci.org/dojo/cli.svg?branch=master)](https://travis-ci.org/dojo/cli)|[![codecov.io](https://codecov.io/gh/dojo/cli/branch/master/graph/badge.svg)](https://codecov.io/gh/dojo/cli/branch/master)|[![npm version](https://badge.fury.io/js/%40dojo%2Fcli.svg)](https://badge.fury.io/js/%40dojo%2Fcli)|4.0|
|[dojo/framework](https://github.com/dojo/framework)|[![Build Status](https://travis-ci.org/dojo/framework.svg?branch=master)](https://travis-ci.org/dojo/framework)|[![codecov.io](https://codecov.io/gh/dojo/framework/branch/master/graph/badge.svg)](https://codecov.io/gh/dojo/framework/branch/master)|[![npm version](https://badge.fury.io/js/%40dojo%2Fframework.svg)](https://badge.fury.io/js/%40dojo%2Fframework)|4.0|
|[dojo/interop](https://github.com/dojo/interop)|[![Build Status](https://travis-ci.org/dojo/interop.svg?branch=master)](https://travis-ci.org/dojo/interop)|[![codecov.io](https://codecov.io/gh/dojo/interop/branch/master/graph/badge.svg)](https://codecov.io/gh/dojo/interop/branch/master)|[![npm version](https://badge.fury.io/js/%40dojo%2Finterop.svg)](https://badge.fury.io/js/%40dojo%2Finterop)|4.0|
|[dojo/themes](https://github.com/dojo/themes)|[![Build Status](https://travis-ci.org/dojo/themes.svg?branch=master)](https://travis-ci.org/dojo/themes)|[![codecov.io](https://codecov.io/gh/dojo/themes/branch/master/graph/badge.svg)](https://codecov.io/gh/dojo/themes/branch/master)|[![npm version](https://badge.fury.io/js/%40dojo%2Fthemes.svg)](https://badge.fury.io/js/%40dojo%2Fthemes)|4.0|
|[dojo/widgets](https://github.com/dojo/widgets)|[![Build Status](https://travis-ci.org/dojo/widgets.svg?branch=master)](https://travis-ci.org/dojo/widgets)|[![codecov.io](https://codecov.io/gh/dojo/widgets/branch/master/graph/badge.svg)](https://codecov.io/gh/dojo/widgets/branch/master)|[![npm version](https://badge.fury.io/js/%40dojo%2Fwidgets.svg)](https://badge.fury.io/js/%40dojo%2Fwidgets)|4.0|

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
|[dojo/cli-export-project](https://github.com/dojo/cli-export-project)|[![Build Status](https://travis-ci.org/dojo/cli-export-project.svg?branch=master)](https://travis-ci.org/dojo/cli-export-project)|[![codecov.io](https://codecov.io/gh/dojo/cli-export-project/branch/master/graph/badge.svg)](https://codecov.io/gh/dojo/cli-export-project/branch/master)|[![npm version](https://badge.fury.io/js/%40dojo%2Fcli-export-project.svg)](https://badge.fury.io/js/%40dojo%2Fcli-export-project)|Alpha|
|[dojo/cli-test-intern](https://github.com/dojo/cli-test-intern)|[![Build Status](https://travis-ci.org/dojo/cli-test-intern.svg?branch=master)](https://travis-ci.org/dojo/cli-test-intern)|[![codecov.io](https://codecov.io/gh/dojo/cli-test-intern/branch/master/graph/badge.svg)](https://codecov.io/gh/dojo/cli-test-intern/branch/master)|[![npm version](https://badge.fury.io/js/%40dojo%2Fcli-test-intern.svg)](https://badge.fury.io/js/%40dojo%2Fcli-test-intern)|4.0|

#### Enhancements and Extensions

These are packages which provide extended functionality, usually to other tools, which are used by Dojo.  For those using the _out of the box_ tooling, there is little value in these packages, but for those having to integrate Dojo into an existing development pipeline, these packages are likely to be of use.

|Package|CI Status|Code Coverage|npm       |Stage|
|-------|---------|-------------|----------|-----|
|[dojo/devtool](https://github.com/dojo/devtool)|[![Build Status](https://travis-ci.org/dojo/devtool.svg?branch=master)](https://travis-ci.org/dojo/devtool)|[![codecov.io](https://codecov.io/gh/dojo/devtool/branch/master/graph/badge.svg)](https://codecov.io/gh/dojo/devtool/branch/master)|[![npm version](https://badge.fury.io/js/%40dojo%2Fdevtool.svg)](https://badge.fury.io/js/%40dojo%2Fdevtool)| Alpha |
|[dojo/diagnostics](https://github.com/dojo/diagnostics)|[![Build Status](https://travis-ci.org/dojo/diagnostics.svg?branch=master)](https://travis-ci.org/dojo/diagnostics)|[![codecov.io](https://codecov.io/gh/dojo/diagnostics/branch/master/graph/badge.svg)](https://codecov.io/gh/dojo/diagnostics/branch/master)|[![npm version](https://badge.fury.io/js/%40dojo%2Fdiagnostics.svg)](https://badge.fury.io/js/%40dojo%2Fdiagnostics)| Alpha |

#### Internal and Support Packages

In addition to `dojo/cli` there are some packages which are designed to be used both by the Dojo team internally, but also
others who are developing Dojo applications:

|Package|CI Status|Code Coverage|npm       |Stage|
|-------|---------|-------------|----------|-----|
|[dojo/grunt-dojo2](https://github.com/dojo/grunt-dojo2/)|[![Build Status](https://travis-ci.org/dojo/grunt-dojo2.svg?branch=master)](https://travis-ci.org/dojo/grunt-dojo2)|[![codecov.io](https://codecov.io/gh/dojo/grunt-dojo2/branch/master/graph/badge.svg)](https://codecov.io/gh/dojo/grunt-dojo2/branch/master)|[![npm version](https://badge.fury.io/js/grunt-dojo2.svg)](https://badge.fury.io/js/grunt-dojo2)|4.0|
|[dojo/grunt-dojo2-extras](https://github.com/dojo/grunt-dojo2-extras/)|[![Build Status](https://travis-ci.org/dojo/grunt-dojo2-extras.svg?branch=master)](https://travis-ci.org/dojo/grunt-dojo2-extras)|[![codecov.io](https://codecov.io/gh/dojo/grunt-dojo2-extras/branch/master/graph/badge.svg)](https://codecov.io/gh/dojo/grunt-dojo2-extras/branch/master)|[![npm version](https://badge.fury.io/js/grunt-dojo2-extras.svg)](https://badge.fury.io/js/grunt-dojo2-extras)|4.0|
|[dojo/scripts](https://github.com/dojo/scripts)|[![Build Status](https://travis-ci.org/dojo/scripts.svg?branch=master)](https://travis-ci.org/dojo/scripts)|[![codecov.io](https://codecov.io/gh/dojo/scripts/branch/master/graph/badge.svg)](https://codecov.io/gh/dojo/scripts/branch/master)|[![npm version](https://badge.fury.io/js/%40dojo%2Fscripts.svg)](https://badge.fury.io/js/%40dojo%2Fscripts)|3.1|
|[dojo/webpack-contrib](https://github.com/dojo/webpack-contrib)|[![Build Status](https://travis-ci.org/dojo/webpack-contrib.svg?branch=master)](https://travis-ci.org/dojo/webpack-contrib)|[![codecov.io](https://codecov.io/gh/dojo/webpack-contrib/branch/master/graph/badge.svg)](https://codecov.io/gh/dojo/webpack-contrib/branch/master)|[![npm version](https://badge.fury.io/js/%40dojo%2Fwebpack-contrib.svg)](https://badge.fury.io/js/%40dojo%2Fwebpack-contrib)|4.0|

#### Example app packages

|Package|CI Status|Code Coverage|
|-------|---------|-------------|
|[dojo/examples](https://github.com/dojo/examples)|[![Build Status](https://travis-ci.org/dojo/examples.svg?branch=master)](https://travis-ci.org/dojo/examples)|[![codecov.io](https://codecov.io/gh/dojo/examples/branch/master/graph/badge.svg)](https://codecov.io/gh/dojo/examples/branch/master)|



#### Inactive or Deprecated packages

|Package|CI Status|Code Coverage|npm       |
|-------|---------|-------------|----------|
|[dojo/actions](https://github.com/dojo/actions)|[![Build Status](https://travis-ci.org/dojo/actions.svg?branch=master)](https://travis-ci.org/dojo/actions)|[![codecov.io](https://codecov.io/gh/dojo/actions/branch/master/graph/badge.svg)](https://codecov.io/gh/dojo/actions/branch/master)| |
|[dojo/app](https://github.com/dojo/app)|[![Build Status](https://travis-ci.org/dojo/app.svg?branch=master)](https://travis-ci.org/dojo/app)|[![codecov.io](https://codecov.io/gh/dojo/app/branch/master/graph/badge.svg)](https://codecov.io/gh/dojo/app/branch/master)| |
|[dojo/cli-build-webpack](https://github.com/dojo/cli-build-webpack)|[![Build Status](https://travis-ci.org/dojo/cli-build-webpack.svg?branch=master)](https://travis-ci.org/dojo/cli-build-webpack)|[![codecov.io](https://codecov.io/gh/dojo/cli-build-webpack/branch/master/graph/badge.svg)](https://codecov.io/gh/dojo/cli-build-webpack/branch/master)|[![npm version](https://badge.fury.io/js/%40dojo%2Fcli-build-webpack.svg)](https://badge.fury.io/js/%40dojo%2Fcli-build-webpack)|
|[dojo/cli-css-typings](https://github.com/dojo/cli-css-typings)| | | |
|[dojo/compose](https://github.com/dojo/compose)|[![Build Status](https://travis-ci.org/dojo/compose.svg?branch=master)](https://travis-ci.org/dojo/compose)|[![codecov.io](https://codecov.io/gh/dojo/compose/branch/master/graph/badge.svg)](https://codecov.io/gh/dojo/compose/branch/master)|[![npm version](https://badge.fury.io/js/%40dojo%2Fcompose.svg)](https://badge.fury.io/js/%40dojo%2Fcompose)|
|[dojo/crypto](https://github.com/dojo/crypto)| | | | |
|[dojo/dataviz](https://github.com/dojo/dataviz)|[![Build Status](https://travis-ci.org/dojo/dataviz.svg?branch=master)](https://travis-ci.org/dojo/dataviz)| | | |
|[dojo/dgrid](https://github.com/dojo/dgrid)|[![Build Status](https://travis-ci.org/dojo/dgrid.svg?branch=master)](https://travis-ci.org/dojo/dgrid)|[![codecov.io](https://codecov.io/gh/dojo/dgrid/branch/master/graph/badge.svg)](https://codecov.io/gh/dojo/dgrid/branch/master)|[![npm version](https://badge.fury.io/js/%40dojo%2Fdgrid.svg)](https://badge.fury.io/js/%40dojo%2Fdgrid)|Alpha|
|[dojo/dom](https://github.com/dojo/dom)|[![Build Status](https://travis-ci.org/dojo/dom.svg?branch=master)](https://travis-ci.org/dojo/dom)|[![codecov.io](https://codecov.io/gh/dojo/dom/branch/master/graph/badge.svg)](https://codecov.io/gh/dojo/dom/branch/master)| |
|[dojo/interfaces](https://github.com/dojo/interfaces)|[![Build Status](https://travis-ci.org/dojo/interfaces.svg?branch=master)](https://travis-ci.org/dojo/interfaces)| |[![npm version](https://badge.fury.io/js/%40dojo%2Finterfaces.svg)](https://badge.fury.io/js/%40dojo%2Finterfaces)|
|[dojo/loader](https://github.com/dojo/loader)|[![Build Status](https://travis-ci.org/dojo/loader.svg?branch=master)](https://travis-ci.org/dojo/loader)|[![codecov.io](https://codecov.io/gh/dojo/loader/branch/master/graph/badge.svg)](https://codecov.io/gh/dojo/loader/branch/master)|[![npm version](https://badge.fury.io/js/%40dojo%2Floader.svg)](https://badge.fury.io/js/%40dojo%2Floader)|2.0|
|[dojo/parser](https://github.com/dojo/parser)| | | |
|[dojo/streams](https://github.com/dojo/streams)|[![Build Status](https://travis-ci.org/dojo/streams.svg?branch=master)](https://travis-ci.org/dojo/streams)|[![codecov.io](https://codecov.io/gh/dojo/streams/branch/master/graph/badge.svg)](https://codecov.io/gh/dojo/streams/branch/master)|[![npm version](https://badge.fury.io/js/%40dojo%2Fstreams.svg)](https://badge.fury.io/js/%40dojo%2Fstreams)|Alpha|
|[dojo/test-extras](https://github.com/dojo/test-extras/)|[![Build Status](https://travis-ci.org/dojo/test-extras.svg?branch=master)](https://travis-ci.org/dojo/test-extras)|[![codecov.io](https://codecov.io/gh/dojo/test-extras/branch/master/graph/badge.svg)](https://codecov.io/gh/dojo/test-extras/branch/master)|[![npm version](https://badge.fury.io/js/%40dojo%2Ftest-extras.svg)](https://badge.fury.io/js/%40dojo%2Ftest-extras)|2.0|
|[dojo/web-editor](https://github.com/dojo/web-editor/)|[![Build Status](https://travis-ci.org/dojo/web-editor.svg?branch=master)](https://travis-ci.org/dojo/web-editor)|[![codecov.io](https://codecov.io/gh/dojo/web-editor/branch/master/graph/badge.svg)](https://codecov.io/gh/dojo/web-editor/branch/master)|[![npm version](https://badge.fury.io/js/%40dojo%2Fweb-editor.svg)](https://badge.fury.io/js/%40dojo%2Fweb-editor)|Alpha|


## Licensing information

© 2019 [JS Foundation](https://js.foundation/) & contributors. [New BSD](http://opensource.org/licenses/BSD-3-Clause) license.
