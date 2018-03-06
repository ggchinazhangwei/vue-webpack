const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const ExtractText = require('extract-text-webpack-plugin');
const path = require('path');

module.exports = (env) => {
    let plugins = [
        // 复制所有图片文件到打包文件当中
        new CopyWebpackPlugin([
            {
                context: 'src/asset/img',
                from: '**/*',
                to: 'img'
            }
        ]),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '\'' + env + '\''
            }
        }),
        // 清除dist目录下所以文件
        new CleanWebpackPlugin(
            [
                path.join(__dirname,'../../dist/img'),
                path.join(__dirname,'../../dist/js'),
                path.join(__dirname,'../../dist/css'),
                path.join(__dirname,'../../dist/font'),
                path.join(__dirname,'../../dist/**.html'),
            ], {
                root: __dirname,
                verbose: true,
                dry: false,
                allowExternal: true
            }
        ),
    ];
    if (env === 'development') {
        // 当环境为开发时候
        plugins = plugins.concat([
            //生成对应的html文件        
            new HtmlWebpackPlugin({
                filename: './index.html',
                template: './src/template/index.ejs',
                env: 'development'
            }),
            //提取公共代码
            new webpack.optimize.CommonsChunkPlugin({
                names: 'vendors',
                minChunks: Infinity
            }),
            //防止css错乱,sass加载
            new ExtractText('css/style.css'),
            // 开启热模块
            new webpack.HotModuleReplacementPlugin(),
            new OpenBrowserPlugin({ url: 'http://localhost:8080' })
            
        ]);
    }else{
        plugins = plugins.concat([
            new webpack.optimize.CommonsChunkPlugin({
                names: ['vendors', 'manifest'],
                minChunks: Infinity
            }),
            //生成对应的html文件        
            new HtmlWebpackPlugin({
                filename: './index.html',
                template: './src/template/index.ejs',
                env: 'production'
            }),
            //防止css错乱,sass加载
            new ExtractText('css/style.[contenthash].css'),
            //该插件会根据模块的相对路径生成一个四位数的hash作为模块id, 建议用于生产环境
            new webpack.HashedModuleIdsPlugin(),
            new webpack.optimize.CommonsChunkPlugin({
                names: 'vendors',
                minChunks: Infinity
            }),
             //压缩代码
             new webpack.optimize.UglifyJsPlugin({
                compress: {
                    warnings: false
                }
            }),
            // 启动查看打包文件大小服务
            new BundleAnalyzerPlugin({
                analyzerMode: 'server',
                analyzerPort: 8888,
                reportFilename: 'report.html',
                defaultSizes: 'parsed',
                openAnalyzer: true,
                generateStatsFile: false,
                statsFilename: 'stats.json',
                statsOptions: null,
                logLevel: 'info'
            }),
        ]);
    }
    return plugins;
};