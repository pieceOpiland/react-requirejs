# React-RequireJS
This project is just an example of how React can be setup with RequireJS and Babel to circumvent the need
for the create-react-app cli tool. This gives developers much more control over their environment. This
setup should be fairly straight forward, and integrating other technologies like Redux.js or Less should be
very easy.

Included in this project is a simple requirejs configuration that loads react and react-dom. It also is configured
with the requirejs-babel plugin to compile jsx on the client. Additionally, this contains an optimization script for
a production minified build. The build process compiles the jsx and es6 with Babel 5, and the produced artifact
uses almond.

For browser compatibility, the babel-polyfill is included, so this should run browers that aren't up to spec. If you
don't want to include this polyfill, you can remove it from `config.js` and from the build configuration.