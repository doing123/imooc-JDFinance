const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin")

module.exports = env => { // 开发环境配置
    return {
        entry: {
            app: './app/js/main.js'
        },
        devServer: {
            contentBase: path.join(__dirname, "dist"), // 静态文件在哪输出
            compress: true, // gzip压缩
            port: 9000
        },
        module: {
            loaders: [
                {
                    test: /\.html$/,
                    loader: "html-loader"
                },
                {
                    test: /\.vue$/,
                    loader: "vue-loader",
                    /*options: {
                        cssModules: { // cssModule
                            localIdentName: '[path][name]---[local]---[hash:base64:5]',
                            camelCase: true
                        },
                        loaders: { // px 转 rem
                            scss: 'vue-style-loader!css-loader!px2Rem-loader?remUnit=75&remPrecision=8!sass-loader', // <style lang="scss">
                            css: 'vue-style-loader!css-loader!px2Rem-loader?remUnit=75&remPrecision=8'
                        }
                    }*/
                    options: { // css文件 提取
                        cssModules: { // cssModule
                            localIdentName: '[path][name]---[local]---[hash:base64:5]',
                            camelCase: true
                        },
                        loaders: { // px 转 rem

                            scss: ExtractTextPlugin.extract({
                                use: 'css-loader!px2Rem-loader?remUnit=75&remPrecision=8!sass-loader',
                                fallback: 'vue-style-loader' // <- 这是vue-loader的依赖，所以如果使用npm3，则不需要显式安装
                            }), // <style lang="scss">
                            css: ExtractTextPlugin.extract({
                                use: 'css-loader!px2Rem-loader?remUnit=75&remPrecision=8',
                                fallback: 'vue-style-loader' // <- 这是vue-loader的依赖，所以如果使用npm3，则不需要显式安装
                            })
                        }
                    }
                },
                {
                    test: /\.scss$/,
                    loader: "style-loader!css-loader!sass-loader"
                }
            ]
        },
        plugins: [
            new CleanWebpackPlugin(['dist']),
            new HtmlWebpackPlugin({
                title: 'Development',
                template: './app/views/index.html' // 模板index文件
            }),
            new ExtractTextPlugin("style.css") // 提取 CSS 文件
        ],
        resolve: {
            alias: { // 使用 vue 完整版
                'vue$': 'vue/dist/vue.esm.js' // 用 webpack 1 时需用 'vue/dist/vue.common.js'
            }
        },
        output: {
            filename: "[name].min.js",
            path: path.resolve(__dirname, 'dist')
        }
    }
}