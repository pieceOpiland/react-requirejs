(function() {
    require.config({
        "baseUrl": "js",
        "paths": {
            "react": "../node_modules/react/dist/react.min",
            "react-dom": "../node_modules/react-dom/dist/react-dom.min",

            // Why we aren't using the babel packaged with the requirejs-babel plugin?
            // It doesn't contain the polyfill.
            "es6": "../node_modules/requirejs-babel/es6",
            "babel": "../node_modules/babel-core/browser.min",
            "babel-polyfill": "../node_modules/babel-core/browser-polyfill.min",

            // Using jQuery just for utilities.
            "jquery": "../node_modules/jquery/dist/jquery.min"
        },
        "shim": {
            "babel": {
                "deps": ["babel-polyfill"]
            }
        },
        "config": {
            "es6": {
                "resolveModuleSource": function(source) {
                    // don't compile what doesn't need to be compiled.
                    // this simply tests to see if  we're loading a library.
                    // if we are, don't compile it (assuming we don't want to)
                    // this can be added on to as more libraries are added.
                    if(!/^babel|^react|^jquery/.test(source)) {
                        return "es6!" + source;
                    } else {
                        return source;
                    }
                }
            }
        }
    });
})();
