({
    baseUrl: "js",
    name: "../node_modules/almond/almond",
    mainConfigFile: "js/config.js",
    out: "dist/main.min.js",
    stubModules: ["es6"],
    include: ["bootstrap", "babel-polyfill"],
    excludeShallow: ["babel"]
})