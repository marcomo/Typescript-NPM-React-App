# My-NPM-React-App
A boilerplate setup for React, with Redux, Webpack, NPM, Sass, Typescript, and ES6.

## Webpack Config

### loaders

#### `.ts` `.tsx`
- `react-hot`: allows instantaneous live refresh without losing state while editing React components
- `ts-loader`: pre-compiles typescript
- `strip-loader`: strips custom functions from your code (eg. console.log) in production

#### `.css` `.scss`
These loaders are listed here in order of transformation but appear in the config right-to-left.
- `sass-loader`: precompiles `.scss` to `.css`
- `autoprefixer`: PostCSS plugin to parse CSS and add vendor prefixes to CSS rules
- `css-loader`: resolves @import at-rules and url(...) values as require()

#### `.ttf` `.eot` `.svg` `.woff`
- `file-loader`: emits _font_ assets as files in the output directory

#### `.jpg` `.png`
- `file-loader`: emits _image_ assets as files in the output directory

### plugins

- `ExtractTextPlugin`: moves required css from JS into a file .css file
- `HtmlWebpackPlugin`: injects resources into index.html
- `webpack.HotModuleReplacementPlugin`: exchanges, adds, or removes modules while an application is running without a page reload
- `webpack.DefinePlugin`: allows you to create global constants which can be configured at compile time

### preLoaders  
- `source-map-loader`: uses any TypeScript-generated sourcemaps in webpack sourcemaps

### Available Global Constants:
- `NODE_ENV`: The build environment passed with webpack command as `NODE_ENV=<environment>`,  
  - defaults to `development`
- `VERSION`: The package.json version number (eg. `0.1.0`)