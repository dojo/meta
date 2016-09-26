# dojo-meta

[![Join the chat at https://gitter.im/dojo/dojo2](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/dojo/dojo2?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

This repository contains information regarding Dojo 2 that crosses package boundaries.

## Guidelines and Style Guide

There are several documents that are relevent for contributing to Dojo 2.

* [Contributing Guidelines](CONTRIBUTING.md) - Guidelines for contributing code (or documentation) to Dojo 2
* [Style Guide](STYLE.md) - The style guide for Dojo 2.
* [tslint.json](tslint.json) - The configuration file [tslint](https://palantir.github.io/tslint/) that is used to validate Dojo 2 code against

## Dependent Technologies

While Dojo 2 tries to provide a holistic set of tools to build web applications, there are several key technologies where we feel that Dojo 2 would be better integrating and building upon versus building from the ground up.

In order to ensure that Dojo 2 is a solid set of JavaScript tools and libraries, Dojo 2 is built on [TypeScript](https://www.typescriptlang.org/).  This provides us with structural design time typing as well as an effective way to communicate the intent of the Dojo 2 APIs.  It also provides us the ability to adopt ES6+ syntax features but make distributables that will be backwards compatible to the target browsers for Dojo 2.

In addition, there are some core runtime technologies that parts of Dojo 2 are built on:

* [MaquetteJS](http://maquettejs.org/) a minimalistic virtual DOM built in TypeScript
* [RxJS 5 Observables](https://github.com/ReactiveX/RxJS) an implementation of [ES Observable](https://zenparsing.github.io/es-observable/) built in TypeScript
* [ImmutableJS](https://facebook.github.io/immutable-js/) immutable collections for JavaScript

## Packages

There are several packages that makeup the Dojo 2 platform:

* [`dojo/actions`](https://github.com/dojo/actions) - A command like library for Dojo 2 applications
* [`dojo/app`](https://github.com/dojo/app) - An application framework for Dojo 2
* [dojo/cli](https://github.com/dojo/cli) - Command Line Tooling for Dojo 2 Applications
* [`dojo/compose`](https://github.com/dojo/compose) - A mixin/trait based composition library
* [`dojo/core`](https://github.com/dojo/core) - The foundational code of the Dojo 2 platform
* `dojo/data` - A data querying, transformation and materialization library for Dojo 2
* [`dojo/dataviz`](https://github.com/dojo/dataviz) - A data vizualization library for Dojo 2
* [`dojo/dom`](https://github.com/dojo/dom) - A set of APIs for manipulating the DOM
* [`dojo/has`](https://github.com/dojo/has) - A feature detection library
* [`dojo/loader`](https://github.com/dojo/loader) - A TypeScript based AMD loader
* [`dojo/routing`](https://github.com/dojo/routing) - A routing service to build web applications with
* [`dojo/shim`](https://github.com/dojo/shim) - Modules that provide fills of ES6+ functionality
* [`dojo/stores`](https://github.com/dojo/stores) - Data stores for Dojo 2
* [`dojo/widgets`](https://github.com/dojo/widgets) - A set of rich UI elements
* [`dojo/i18n`](https://github.com/dojo/i18n) - A set of internationalization tooling

We also have packages that are still in their planning stages and as such might not be part of the initial Dojo 2 release.

* [`dojo/crypto`](https://github.com/dojo/crypto) - A set of libraries to deal with cryptography


We have deprecated a package:

* [`dojo/parser`](https://github.com/dojo/parser) - A HTML document parser for instantiating objects declaratively - *This is deprecated in lieu of functionality provided by `dojo/app`.*

### Examples

We have added a repository of examples which have been built on Dojo 2.  Those examples are available
in the [dojo/examples](https://github.com/dojo/examples) repository.

### Support Packages

There are several packages which are designed to support the Dojo 2 platform:

* [dojo/dojo2-package-template](https://github.com/dojo/dojo2-package-template) - The standard template for Dojo 2 packages, including build and packaging templates
* [dojo/grunt-dojo2](https://github.com/dojo/grunt-dojo2) - A set of Grunt tasks for use with Dojo 2 packages.

These packages are aimed at Dojo 2 contributors rather than Dojo 2 end users.

### Status

The following tables contain status information for the packages:

|Package|CI Status|Code Coverage|npm       |Stage|Maintainer|
|-------|---------|-------------|----------|-----|----------|
|[dojo/actions](https://github.com/dojo/actions)|[![Build Status](https://travis-ci.org/dojo/actions.svg?branch=master)](https://travis-ci.org/dojo/actions)|[![codecov.io](https://codecov.io/gh/dojo/actions/branch/master/graph/badge.svg)](https://codecov.io/gh/dojo/actions/branch/master)|[![npm version](https://badge.fury.io/js/dojo-actions.svg)](https://badge.fury.io/js/dojo-actions)|Alpha| |
|[dojo/app](https://github.com/dojo/app)|[![Build Status](https://travis-ci.org/dojo/app.svg?branch=master)](https://travis-ci.org/dojo/app)|[![codecov.io](https://codecov.io/gh/dojo/app/branch/master/graph/badge.svg)](https://codecov.io/gh/dojo/app/branch/master)|[![npm version](https://badge.fury.io/js/dojo-app.svg)](https://badge.fury.io/js/dojo-app)|Alpha| |
|[dojo/compose](https://github.com/dojo/compose)|[![Build Status](https://travis-ci.org/dojo/compose.svg?branch=master)](https://travis-ci.org/dojo/compose)|[![codecov.io](https://codecov.io/gh/dojo/compose/branch/master/graph/badge.svg)](https://codecov.io/gh/dojo/compose/branch/master)|[![npm version](https://badge.fury.io/js/dojo-compose.svg)](https://badge.fury.io/js/dojo-compose)|Beta|@maier49|
|[dojo/cli](https://github.com/dojo/cli/)|[![Build Status](https://travis-ci.org/dojo/cli.svg?branch=master)](https://travis-ci.org/dojo/cli)|[![codecov.io](https://codecov.io/gh/dojo/cli/branch/master/graph/badge.svg)](https://codecov.io/gh/dojo/cli/branch/master)|[![npm version](https://badge.fury.io/js/dojo-cli.svg)](https://badge.fury.io/js/dojo-cli)|Alpha|@Tomdye|
|[dojo/core](https://github.com/dojo/core)|[![Build Status](https://travis-ci.org/dojo/core.svg?branch=master)](https://travis-ci.org/dojo/core)|[![codecov.io](https://codecov.io/gh/dojo/core/branch/master/graph/badge.svg)](https://codecov.io/gh/dojo/core/branch/master)|[![npm version](https://badge.fury.io/js/dojo-core.svg)](https://badge.fury.io/js/dojo-core)|Alpha| |
|[dojo/dataviz](https://github.com/dojo/dataviz)| | | |Prototype| |
|[dojo/dom](https://github.com/dojo/dom)|[![Build Status](https://travis-ci.org/dojo/dom.svg?branch=master)](https://travis-ci.org/dojo/dom)|[![codecov.io](https://codecov.io/gh/dojo/dom/branch/master/graph/badge.svg)](https://codecov.io/gh/dojo/dom/branch/master)|[![npm version](https://badge.fury.io/js/dojo-dom.svg)](https://badge.fury.io/js/dojo-dom)|Alpha| |
|[dojo/has](https://github.com/dojo/has)|[![Build Status](https://travis-ci.org/dojo/has.svg?branch=master)](https://travis-ci.org/dojo/has)|[![codecov.io](https://codecov.io/gh/dojo/has/branch/master/graph/badge.svg)](https://codecov.io/gh/dojo/has/branch/master)|[![npm version](https://badge.fury.io/js/dojo-has.svg)](https://badge.fury.io/js/dojo-has)|Alpha|@kitsonk|
|[dojo/shim](https://github.com/dojo/shim)|[![Build Status](https://travis-ci.org/dojo/shim.svg?branch=master)](https://travis-ci.org/dojo/shim)|[![codecov.io](https://codecov.io/gh/dojo/shim/branch/master/graph/badge.svg)](https://codecov.io/gh/dojo/shim/branch/master)|[![npm version](https://badge.fury.io/js/dojo-shim.svg)](https://badge.fury.io/js/dojo-shim)|Alpha|@kitsonk|
|[dojo/loader](https://github.com/dojo/loader)|[![Build Status](https://travis-ci.org/dojo/loader.svg?branch=master)](https://travis-ci.org/dojo/loader)|[![codecov.io](https://codecov.io/gh/dojo/loader/branch/master/graph/badge.svg)](https://codecov.io/gh/dojo/loader/branch/master)|[![npm version](https://badge.fury.io/js/dojo-loader.svg)](https://badge.fury.io/js/dojo-loader)|Beta| |
|[dojo/widgets](https://github.com/dojo/widgets)|[![Build Status](https://travis-ci.org/dojo/widgets.svg?branch=master)](https://travis-ci.org/dojo/widgets)|[![codecov.io](https://codecov.io/gh/dojo/widgets/branch/master/graph/badge.svg)](https://codecov.io/gh/dojo/widgets/branch/master)|[![npm version](https://badge.fury.io/js/dojo-widgets.svg)](https://badge.fury.io/js/dojo-widgets)|Alpha|@kitsonk|
|[dojo/routing](https://github.com/dojo/routing)|[![Build Status](https://travis-ci.org/dojo/routing.svg?branch=master)](https://travis-ci.org/dojo/routing)|[![codecov.io](https://codecov.io/gh/dojo/routing/branch/master/graph/badge.svg)](https://codecov.io/gh/dojo/routing/branch/master)|[![npm version](https://badge.fury.io/js/dojo-routing.svg)](https://badge.fury.io/js/dojo-routing)|Alpha| |
|[dojo/stores](https://github.com/dojo/stores)|[![Build Status](https://travis-ci.org/dojo/stores.svg?branch=master)](https://travis-ci.org/dojo/stores)|[![codecov.io](https://codecov.io/gh/dojo/stores/branch/master/graph/badge.svg)](https://codecov.io/gh/dojo/stores/branch/master)|[![npm version](https://badge.fury.io/js/dojo-stores.svg)](https://badge.fury.io/js/dojo-stores)|Prototype|@maier49|
|dojo/data| | | |*Proposal*| |
|[dojo/i18n](https://github.com/dojo/i18n)| | | |*Prototype*| |

#### Example app packages

|Package|CI Status|Code Coverage|npm       |Stage|Maintainer|
|-------|---------|-------------|----------|-----|----------|
|[dojo/examples](https://github.com/dojo/examples)|[![Build Status](https://travis-ci.org/dojo/examples.svg?branch=master)](https://travis-ci.org/dojo/examples)|[![codecov.io](https://codecov.io/gh/dojo/examples/branch/master/graph/badge.svg)](https://codecov.io/gh/dojo/examples/branch/master)| | | |

#### CLI Packages

The `dojo/cli` will provide extensiable functionality via a variety of packages that can be plugged
into the CLI.

|Package|CI Status|Code Coverage|npm       |Stage|Maintainer|
|-------|---------|-------------|----------|-----|----------|
|[dojo/cli-build](https://github.com/dojo/cli-build)|[![Build Status](https://travis-ci.org/dojo/cli-build.svg?branch=master)](https://travis-ci.org/dojo/cli-build)|[![codecov.io](https://codecov.io/gh/dojo/cli-build/branch/master/graph/badge.svg)](https://codecov.io/gh/dojo/cli-build/branch/master)|[![npm version](https://badge.fury.io/js/dojo-cli-build.svg)](https://badge.fury.io/js/dojo-cli-build)|Prototype| |
|[dojo/cli-create-app](https://github.com/dojo/cli-create-app)|[![Build Status](https://travis-ci.org/dojo/cli-create-app.svg?branch=master)](https://travis-ci.org/dojo/cli-create-app)|[![codecov.io](https://codecov.io/gh/dojo/cli-create-app/branch/master/graph/badge.svg)](https://codecov.io/gh/dojo/cli-create-app/branch/master)|[![npm version](https://badge.fury.io/js/dojo-cli-create-app.svg)](https://badge.fury.io/js/dojo-cli-create-app)|Prototype| |

#### Deprecated/proposed/internal packages

|Package|CI Status|Code Coverage|npm       |Stage|Maintainer|
|-------|---------|-------------|----------|-----|----------|
|[dojo/crypto](https://github.com/dojo/crypto)| | | |Proposal| |
|~~[dojo/parser](https://github.com/dojo/parser)~~| | | |**Deprecated**|@kitsonk|
|[dojo/grunt-dojo2](https://github.com/dojo/grunt-dojo2/)|[![Build Status](https://travis-ci.org/dojo/grunt-dojo2.svg?branch=master)](https://travis-ci.org/dojo/grunt-dojo2)|[![codecov.io](https://codecov.io/gh/dojo/grunt-dojo2/branch/master/graph/badge.svg)](https://codecov.io/gh/dojo/grunt-dojo2/branch/master)|[![npm version](https://badge.fury.io/js/grunt-dojo2.svg)](https://badge.fury.io/js/grunt-dojo2)|Beta| |
