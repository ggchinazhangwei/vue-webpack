const path = require('path');

module.exports = (env) => {
    return {
        //通过HtmlWebpackPlugin插件生成的html文件存放在这个目录下面
        path: path.join(__dirname, '../../dist'),
        //编译生成的js文件存放到根目录下面的js目录下面,如果js目录不存在则自动创建,这里判断是否为production环境，是的话在js资源后加上hash值
        filename: env === 'production' ? 'js/[name].website.[chunkhash].js' : 'js/[name].website.js',
        // chunkFilename用来打包require.ensure方法中引入的模块,如果该方法中没有引入任何模块则不会生成任何chunk块文件
        chunkFilename: env === 'development' ? 'js/[name].website.[chunkhash].js' : 'js/[name].website.js'
    };
};