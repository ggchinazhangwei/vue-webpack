module.exports = (env) => {
    return {
        vendors: ['vue', 'vue-router', 'vuex'],
    //    bundle: './src/main.js',
        bundle: ["babel-polyfill", "./src/main.js"],
        app: ["babel-polyfill", "./src/main.js"],
        
    };
};