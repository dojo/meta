# Dojo 2 Committer Workflow

## Contributing as a Committer

This is documented in the [CONTRIBUTING.md](../CONTRIBUTING.md) which provides the contribution guidelines for Dojo 2 as well as a well defined workflow for submitting Pull Requests to the repositories.

As a committer, you should use the contribution workflow for landing non-trival changes in areas which you are not directly responsible for, or you want/need to have a level of peer review prior to the change being merged.

If you prefer the command line, there are several tools which can issue pull requests from the command line. The most feature rich is [hub](https://hub.github.com/) which also provides many other features that make command line integration with GitHub easier.

Also, since generally you want to be rebasing to avoid merge commits, you may want to set it so that `git pull` is always a rebase pull:

```sh
$ git config --global --bool pull.rebase true
```

What this will do though is make git complain when you have unstaged changes. You will have to commit or stash them before you can do a `git pull` then.

### Branching

As a committer, you can use your own fork of a repository to issue your pull requests, or create a feature or issue branch off of master for your work in progress and issuing a Pull Request.

You should either name your branch to start with `feature-` or `issue-`.

## Accepting a Pull Request

### Using GitHub

GitHub repositories should be configured to only allow *squash and merge* for landing pull requests. This is the preferred way of accepting a pull request. Please make sure the merge description is accurate and readable.

### Locally

The *squash and merge* approach is not always sufficient. Perhaps individual commits need to be retained or additional fixes need to be made. Just remember that generally all pull requests should be squashed into a single commit in a main branch.

#### Setting up a Branch with the Pull Request

If you do not yet have a local branch containing the pull request you can create one. Let's assume you are merging pull request #200 into `dojo-core` into `master`. You should ensure you have an up-to date master:

```sh
$ git checkout master
$ git pull
```

You should then create a branch for the PR.  You shouldn't push this branch to the remote repository, so the name is irrelevant, but it is good practice to keep them named logically:

```sh
$ git checkout -b pr-200
```

Next you should pull in the PR, supplying the contributors repository and branch (this information is available via the view *command line instructions* link on GitHub):

```sh
$ git pull https://github.com/someone/core.git some-fix
```

If the patch does not cleanly reply, you should use the `git mergetool` to resolve conflicts and then commit the results.

#### Final Review

Now is your opportunity to review the Pull Request.  Even though Travis CI should have validated the PR and Codecov.io commented on the coverage changes, you are the last step for it getting merged, especially when we are merging something that might have had conflicts.

At a very least, you should run, to perform a development build and test against node:

```sh
$ grunt test
$ grunt dist
```

#### Manual *squash and Merge*

Checkout `master`:

```sh
$ git checkout master
```

And squash merge the commits:

```sh
$ git merge --squash pr-200
```

Now the commits will be staged as a single commit.  You may want to do one last `git status` to make sure you are ready to go and then commit signing-off with the appropriate author:

```sh
$ git commit --author "Someone <someone@example.com>"
```

You will need the appropriate e-mail address for the author.  If you are not sure of the e-mail address, `git log` can provide you with the information:

```sh
$ git log pr-200
commit 2c5e83668d8cfab0da61d3688874b0dc2e513956
Author: Someone <someone@example.com>
Date:   Tue Mar 1 08:00:00 2016 +0000

    Some wonderful PR!
```

We need to write our commit message then.  We should have a clear single line description of the commit, followed by a blank line and more details as well as referencing any issues or PRs we need to mention.  For example, if PR #200 also fixed issue #190, we would write something like this:

```
Fixed some sort of code in module (#200)

* Updated the tests
* Made a change

Closes #200
Fixes #190
```

Also, if for some reason we don't want to run the CI for this commit, don't forget to add `[ci skip]` to the body of the commit message.

You should now be ready to push:

```sh
$ git push
```

#### Fast-forward only Merges

If you want to retain individual commits you can perform a *fast-forward only* merge.

First checkout `master`:

```sh
$ git checkout master
```

Then merge the commits:

```sh
$ git merge --ff-only pr-200
```

This will fail if a *fast-forward only* merge is not possible. In that case checkout your local branch and rebase it against master, then try again:

```sh
$ git checkout pr-200
$ git rebase master
$ git checkout master
$ git merge --ff-only pr-200
```

You should now be ready to push:

```sh
$ git push
```

## Publishing a Package on npm

To publish a package, you should ensure you have a current checked out `master` branch.

Validate the version of the package you are going to publish, by ensuring you are planning the right
tag and the right right version on npm:

```
$ git tag
2.0.0-alpha.3
2.0.0-alpha.4
2.0.0-alpha.5
2.0.0-alpha.6
2.0.0-alpha.7
2.0.0-beta.1
2.0.0-beta.2
2.0.0-rc.1
2.0.0
2.0.1

$ npm view
```

The tag you are going to create should match the semver version of the package on npm exactly.

The only change that should be part of a release commit is the update to the `package.json`:

```json
{
    "version": "2.1.0"
}
```

Commit this change with a release comment similar to:

```
$ git commit -a -m "Release 2.1.0"
```

Then tag the release:

```
$ git tag 2.1.0
```

Publish to npm:

```
$ npm publish
```

Then update the `package.json` one more time:

```json
{
    "version": "2.1.1-pre"
}
```

Then commit this change:

```
$ git commit -a -m "Update package metadata"
```

Then push the changes upstream:

```
$ git push && git push --tags
```
