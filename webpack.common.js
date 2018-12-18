const path = require('path')
const htmlWebpackPlugin =  require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
    entry: {
        app: './src/index.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'build'),
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    compilerOptions: {
                        preserveWhitespace: false
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'//loader加载顺序是从右到左或者从下到上
                ],
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            }

    ]
    },
    resolve: {
        extensions: ['.js', '.vue', '.less'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',//必备
            '@': path.resolve(__dirname, 'src'),
            'css': path.resolve(__dirname, 'src/css')
        }
    },
    plugins: [
        new VueLoaderPlugin(),//使用vue-loader时必须使用这个插件
        new htmlWebpackPlugin({
            template: 'index.html'
        })
    ]

}