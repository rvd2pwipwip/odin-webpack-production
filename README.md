# odin-webpack-production
odin class at 
https://www.theodinproject.com/lessons/node-path-javascript-revisiting-webpack

## npm scripts
**npm scripts** can be written in `package.json` by adding a `"scripts"` property containing an object of scripts.

Scripts can be written in the form `"name": "command"`, and are executed by running `npm run <name>` in the terminal. 

For example:
```
{
  // package.json
  // ...
  "scripts": {
    "build": "webpack",
    "dev": "webpack serve",
    "deploy": "git subtree push --prefix dist origin gh-pages"
  },
  // ...
}
```