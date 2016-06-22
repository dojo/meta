# dojo-meta

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

* [`dojo/core`](https://github.com/dojo/core) - The foundational code of the Dojo 2 platform
* [`dojo/loader`](https://github.com/dojo/loader) - A TypeScript based AMD loader
* [`dojo/dom`](https://github.com/dojo/dom) - A set of APIs for manipulating the DOM
* [`dojo/compose`](https://github.com/dojo/compose) - A mixin/trait based composition library
* [`dojo/actions`](https://github.com/dojo/actions) - A command like library for Dojo 2 applications
* [`dojo/i18n`](https://github.com/dojo/i18n) - A set of internationalization tooling
* [`dojo/routing`](https://github.com/dojo/routing) - A routing service to build web applications with
* [`dojo/crypto`](https://github.com/dojo/crypto) - A set of libraries to deal with cryptography
* [`dojo/widgets`](https://github.com/dojo/widgets) - A set of rich UI elements
* [`dojo/stores`](https://github.com/dojo/stores) - Data stores for Dojo 2
* [`dojo/app`](https://github.com/dojo/app) - An application framework for Dojo 2

We have also deprecated a package:

* [`dojo/parser`](https://github.com/dojo/parser) - A HTML document parser for instantiating objects declaratively - *This is likely to be deprecated in lieu of functionality provided by `dojo/app`.

### Support Packages

There are several packages which are designed to support the Dojo 2 platform:

* [dojo/cli](https://github.com/dojo/cli) - Command Line Tooling for Dojo 2 Applications
* [dojo/dojo2-package-template](https://github.com/dojo/dojo2-package-template) - The standard template for Dojo 2 packages, including build and packaging templates
* [dojo/grunt-dojo2](https://github.com/dojo/grunt-dojo2) - A set of Grunt tasks for use with Dojo 2 packages.

### Status

The following tables contain status information for the packages:

|Package|CI Status|Code Coverage|npm       |Stage|
|-------|---------|-------------|----------|-----|
|[dojo/core](https://github.com/dojo/core)|[![Build Status](https://travis-ci.org/dojo/core.svg?branch=master)](https://travis-ci.org/dojo/core)|[![codecov.io](https://codecov.io/gh/dojo/core/branch/master/graph/badge.svg)](https://codecov.io/gh/dojo/core/branch/master)|[![npm version](https://badge.fury.io/js/dojo-core.svg)](https://badge.fury.io/js/dojo-core)|Alpha|
|[dojo/loader](https://github.com/dojo/loader)|[![Build Status](https://travis-ci.org/dojo/loader.svg?branch=master)](https://travis-ci.org/dojo/loader)|[![codecov.io](https://codecov.io/gh/dojo/loader/branch/master/graph/badge.svg)](https://codecov.io/gh/dojo/loader/branch/master)|[![npm version](https://badge.fury.io/js/dojo-loader.svg)](https://badge.fury.io/js/dojo-loader)|Beta|
|[dojo/compose](https://github.com/dojo/compose)|[![Build Status](https://travis-ci.org/dojo/compose.svg?branch=master)](https://travis-ci.org/dojo/compose)|[![codecov.io](https://codecov.io/gh/dojo/compose/branch/master/graph/badge.svg)](https://codecov.io/gh/dojo/compose/branch/master)|[![npm version](https://badge.fury.io/js/dojo-compose.svg)](https://badge.fury.io/js/dojo-compose)|Beta|
|[dojo/actions](https://github.com/dojo/actions)|[![Build Status](https://travis-ci.org/dojo/actions.svg?branch=master)](https://travis-ci.org/dojo/actions)|[![codecov.io](https://codecov.io/gh/dojo/actions/branch/master/graph/badge.svg)](https://codecov.io/gh/dojo/actions/branch/master)|[![npm version](https://badge.fury.io/js/dojo-actions.svg)](https://badge.fury.io/js/dojo-actions)|Alpha|
|[dojo/widgets](https://github.com/dojo/widgets)|[![Build Status](https://travis-ci.org/dojo/widgets.svg?branch=master)](https://travis-ci.org/dojo/widgets)|[![codecov.io](https://codecov.io/gh/dojo/widgets/branch/master/graph/badge.svg)](https://codecov.io/gh/dojo/widgets/branch/master)|[![npm version](https://badge.fury.io/js/dojo-widgets.svg)](https://badge.fury.io/js/dojo-widgets)|Alpha|
|[dojo/dom](https://github.com/dojo/dom)|[![Build Status](https://travis-ci.org/dojo/dom.svg?branch=master)](https://travis-ci.org/dojo/dom)|[![codecov.io](https://codecov.io/gh/dojo/dom/branch/master/graph/badge.svg)](https://codecov.io/gh/dojo/dom/branch/master)|[![npm version](https://badge.fury.io/js/dojo-dom.svg)](https://badge.fury.io/js/dojo-dom)|Alpha|
|[dojo/routing](https://github.com/dojo/routing)|[![Build Status](https://travis-ci.org/dojo/routing.svg?branch=master)](https://travis-ci.org/dojo/routing)|[![codecov.io](https://codecov.io/gh/dojo/routing/branch/master/graph/badge.svg)](https://codecov.io/gh/dojo/routing/branch/master)|[![npm version](https://badge.fury.io/js/dojo-routing.svg)](https://badge.fury.io/js/dojo-routing)|Alpha|
|[dojo/app](https://github.com/dojo/app)|[![Build Status](https://travis-ci.org/dojo/app.svg?branch=master)](https://travis-ci.org/dojo/app)|[![codecov.io](https://codecov.io/gh/dojo/app/branch/master/graph/badge.svg)](https://codecov.io/gh/dojo/app/branch/master)|[![npm version](https://badge.fury.io/js/dojo-app.svg)](https://badge.fury.io/js/dojo-app)|Alpha|
|[dojo/stores](https://github.com/dojo/stores)|[![Build Status](https://travis-ci.org/dojo/stores.svg?branch=master)](https://travis-ci.org/dojo/stores)|[![codecov.io](https://codecov.io/gh/dojo/stores/branch/master/graph/badge.svg)](https://codecov.io/gh/dojo/stores/branch/master)| |Proposal|
|[dojo/i18n](https://github.com/dojo/i18n)| | | |*Prototype*|
|[dojo/crypto](https://github.com/dojo/crypto)| | | |Proposal|
|[dojo/parser](https://github.com/dojo/parser)|[![Build Status](https://travis-ci.org/dojo/parser.svg?branch=master)](https://travis-ci.org/dojo/parser)|[![codecov.io](https://codecov.io/gh/dojo/parser/branch/master/graph/badge.svg)](https://codecov.io/gh/dojo/parser/branch/master)| |*Deprecated*|
|[dojo/cli](https://github.com/dojo/cli/)| | | |Proposal|
|[dojo/grunt-dojo2](https://github.com/dojo/grunt-dojo2/)|[![Build Status](https://travis-ci.org/dojo/grunt-dojo2.svg?branch=master)](https://travis-ci.org/dojo/grunt-dojo2)|[![codecov.io](https://codecov.io/gh/dojo/grunt-dojo2/branch/master/graph/badge.svg)](https://codecov.io/gh/dojo/grunt-dojo2/branch/master)|[![npm version](https://badge.fury.io/js/grunt-dojo2.svg)](https://badge.fury.io/js/grunt-dojo2)|Beta|
