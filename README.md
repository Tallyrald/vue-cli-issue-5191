# vue-cli issue #5191

This project has been created as a minimal reproduction repo for [this issue](https://github.com/vuejs/vue-cli/issues/5191).

The project has been created by using `vue create`.
The following options were selected (manually selected features):

```txt
+ Features:
    - Babel
    - Typescript
    - PWA
    - Router
    - Vuex
    - CSS Pre-processors
    - Linter / Formatter
+ Class component syntax - yes
+ Use Babel alongside Typescript - yes
+ History mode for router - yes
+ CSS Pre-processor: Sass/SCSS (with node-sass)
+ ESLint + Standard config (overwritten later with my own config & removed rules to reduce clutter)
+ Lint on save - yes
+ Config in dedicated config files
```

Steps to reproduce:

1. Have the ability to run a build in docker (Version 18.09.2 Community)
2. Run `docker build -t vue-cli-issue-5191 .`
3. Witness how linting errors are thrown for every file in the project while building in docker step 5 (`npm run build`) and the build fails
