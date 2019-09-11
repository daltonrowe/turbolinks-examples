# Turbolinks Examples

## Table of Contents:

1. Basic Implementation
2. data-turbolinks-track="reload"
3. Flash of Unstyled content
4. Managing styles


### Bundle Annotated Turbolinks

1. `npm install` - Install Turbolinks dependencies
2. `npm clean && npm build` - Build Turbolinks `/dist` folder.

### View Examples

1. Bundle Turbolinks as mentioned above
2. `cd examples`
3. `yarn install` - Install examples dependencies 
4. `yarn run dist:start` - Build and serve Turbolinks Examples at http://localhost:3000

### Develop Examples


1. `cd examples`
2. `yarn install` - Install examples dependencies
3. `yarn run dev:bundle` - Watch `examples/src` directory with Webpack
4. `yarn run dev:tbl` - Clean and rollup Turbolinks
   1. TODO: Watch Turbolinks files
   2. TODO: Trigger Webpack after Turbolinks build
5. `yarn run dev:serve` - Run `nodemon` to watch for server changes

### Logging

The version of Turbolinks is annotated for debugging and greater transparency. 
Logging functionality can be found in `src/ExampleLogger.ts`.

<hr>

[Forked from turbolinks/turbolinks](https://github.com/turbolinks/turbolinks)

Turbolinks © 2019 Basecamp, LLC.

Turbolinks Examples by Dalton Rowe MIT
