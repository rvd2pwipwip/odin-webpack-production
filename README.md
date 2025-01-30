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
- `npm run build` is the same as running `npx webpack`
- `npm run dev` is the same as `npx webpack serve`
- `npm run deploy` runs `git subtree push --prefix dist origin gh-pages`
> `npx` was only needed in front of `webpack` and `webpack serve` so they ran directly in the terminal without npm scripts.

## Webpack modes
To avoid having to manually edit the configuration file every time you wish to switch modes, such as before bundling into `dist` or before going back to use your dev server, you can have two different configuration files (e.g. `webpack.dev.js` and `webpack.prod.js`), and then have your build and dev npm scripts specify which configuration files to use (omitting the `--config` option makes Webpack search for `webpack.config.js` by default):
```
// package.json

"build": "webpack --config webpack.prod.js",
"dev": "webpack serve --config webpack.dev.js"

```
## Webpack merge
> Webpack documentation: https://webpack.js.org/guides/production/
In **development**, we want strong source mapping and a localhost server with live reloading or hot module replacement.
In **production**, our goals shift to minified bundles, lighter weight source maps, and optimized assets to improve load time.

With separate production and development configurations, maintain a "common" configuration to keep things DRY with `webpack-merge`.
```
npm install --save-dev webpack-merge
```
Replace `webpack.config.js` with `webpack.common.js`:
```
// webpack.common.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Production',
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  ...
};
```
`webpack.dev.js`:
```
// webpack.dev.js
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
  },
});
```
`webpack.prod.js`:
```
// webpack.prod.js
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
});
```

## Template repositories
When creating a new repository on Github, there is an option near the top for a `Repository template`.

Check this box to have the `Repository template` dropdown with templates to select when creating a new repository.