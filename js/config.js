(function() {
    require.config({
        "baseUrl": "js",
        "paths": {
            "react": "../node_modules/react/umd/react.production.min",
            "react-dom": "../node_modules/react-dom/umd/react-dom.production.min",
            "create-react-class": "../node_modules/create-react-class/create-react-class.min",

            "es6": "../node_modules/requirejs-babel-plugin/es6",
            "babel": "../node_modules/babel-standalone/babel.min",
            "babel-polyfill": "../node_modules/babel-polyfill/dist/polyfill.min",

            // Using jQuery just for utilities.
            "jquery": "../node_modules/jquery/dist/jquery.min"
        },
        "shim": {
            "babel": {
                "deps": ["babel-polyfill"]
            }
        },
        "babel": {
            "plugins": ["transform-es2015-modules-amd"],
            "presets": ["es2015", "es2016", "es2017", "react"],
            "resolveModuleSource": function(source) {
                // don't compile what doesn't need to be compiled.
                // this simply tests to see if  we're loading a library.
                // if we are, don't compile it (assuming we don't want to)
                // this can be added on to as more libraries are added.
                if(!/^babel|^react|^jquery|^create-react-class/.test(source)) {
                    return "es6!" + source;
                } else {
                    return source;
                }
            }
        }
    });
})();
