import path from 'path'

import htmlWebpackPlugin from 'html-webpack-plugin'
import VueLoaderPlugin from 'vue-loader/lib/plugin'
module.exports = {
    entry: ["@babel/polyfill","./src/index.js"],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'build'),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                 exclude: /node_modules/, 
                 loader: "babel-loader"
            },
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
            '@api': path.resolve(__dirname, 'src/api'),
            '@images': path.resolve(__dirname, 'src/images'),
            '@libs': path.resolve(__dirname, 'src/libs'),
            '@router': path.resolve(__dirname, 'src/router'),
            '@store': path.resolve(__dirname, 'src/store'),
            '@styles': path.resolve(__dirname, 'src/styles'),
            '@template': path.resolve(__dirname, 'src/template'),
            '@view': path.resolve(__dirname, 'src/view'),
        }
    },
    plugins: [
        new VueLoaderPlugin(),//使用vue-loader时必须使用这个插件
        new htmlWebpackPlugin({
            template: 'index.html'
        })
    ]

}