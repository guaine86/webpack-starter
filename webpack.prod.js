const HtmlWebPackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
module.exports = {
    mode: 'production',
    optimization:{
        minimizer:[
            new CssMinimizerPlugin(),'...'
        ]
    },
    output:{
        filename: 'main.[contenthash].js',
        clean:true
    },
    module:{
        rules:[
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader",
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
            },
            {
                test: /\.css$/,
                exclude: /styles\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
           },
           {
                test: /styles\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
           },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: {minimize:true},
                    }
                ]
            },
        ]
    },
    plugins:[
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename:'./index.html',
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
            ignoreOrder: false
        }),
        new CopyPlugin({
            patterns:[
                {from: 'src/assets', to:'assets/'}
            ]
        })
    ]
}