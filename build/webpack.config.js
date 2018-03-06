// 用来获得packagejson种--define的参数
const argv = require('yargs').argv;

//定义入口文件
const _entry =require('./config/entry');
//定义输出文件
const _output = require('./config/output');
// 合并路径
const _resolve = require('./config/resolve');
// 各种Loader配置：module参数
const _module = require('./config/module');
// 添加额外功能：plugins参数
const _plugins = require('./config/plugins');

const path =require('path');

const build = (env) => {
    let config = {
        entry: _entry(env),
        output: _output(env),
        module: _module(env),
        resolve: _resolve(env),
        plugins: _plugins(env),
    };
    // 判断当环境为生产环境时候启动本地服务
    if(process.env.NODE_ENV === 'development') {
        config['devServer'] = {
            //启动服务时候对应的目录
            contentBase: path.join(__dirname,'../dist/'),
            inline: true,
            historyApiFallback: true,
            hot: true,
            progress: true,
            compress: true,
            proxy: {
                '/pms': {
                    // target: 'http://192.168.31.118:8080',
                    // target: 'http://test.pmssaas.com',
                    // target: 'http://192.168.31.201:8080',
                    // target: 'http://47.100.2.119:8080',
                    //target: 'http://192.168.31.201:8080',
                    target: 'http://192.168.1.182:8080',
                    //target: 'http://192.168.1.113:8080',
                    changeOrigin: true
                }
            }
        };
        //当环境为线上本地测试环境开启source-map debug模式
        config['devtool'] = '#source-map';
    }
    
    return config;
};

module.exports = build(argv.define);