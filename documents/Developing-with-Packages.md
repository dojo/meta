# Developing Dojo 2 Packages

## Working with Unpublished Packages

There will likely be a time when you are working on multiple, dependent, modules.
To help with this, you can set up your modules to pull in local copies of your dependencies.

As an example, let's say we are creating a new shim in `dojo-shim` that we want to use in `dojo-core`.

In your `dojo-shim` working directory, compile the dependency for distribution,

```
$ grunt dist
```

Make the module available to `npm`,

```
$ grunt link
```

Now from your `dojo-core` working directory, [link](https://docs.npmjs.com/cli/link) the dependency,

```
$ npm link dojo-shim
```

This will create a symlink in your `node_modules/dojo-shim` directory to your `dojo-shim` working directory. 