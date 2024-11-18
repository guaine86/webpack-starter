const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js',
        print: './src/print.js',
    },
    devtool: 'inline-source-map',
    devServer:{
        static: './dist',
    },
    module:{
        rules:[
            {
                test: /\.css$/,
                exclude: /styles\.css$/,
                use: ['style-loader','css-loader']
            },
            {
                test: /styles\.css$/,
                use: [MiniCssExtractPlugin.loader,'css-loader']
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif|webp|avif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(csv|tsv)$/i,
                use: ['csv-loader'],
            },
            {
                test: /\.xml$/i,
                use: ['xml-loader'],
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: {minimize:false},
                    }
                ]
            },
        ]
    },
    optimization:{
        runtimeChunk: 'single',
        minimize: false,
        minimizer:[
            new CssMinimizerPlugin(),
        ],
    },
    plugins:[
        new HtmlWebPackPlugin({
            filename:'./index.html',
            template: './src/index.html',
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
    ],
    output:{
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname,'dist'),
        clean:true,
    },   
}