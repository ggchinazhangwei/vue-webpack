const path = require('path');

module.exports = (env) => {
    return {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            // vue$: 'vue/dist/vue.common.js',

            '@asset': path.join(__dirname, '../../src/asset/'),
            '@component': path.join(__dirname, '../../src/component/'),
            '@module': path.join(__dirname, '../../src/module'),
        }
    };
};