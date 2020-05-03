const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MomentLocalesPlugin = require('moment-locales-webpack-plugin');
const SpritesmithPlugin = require('webpack-spritesmith');

module.exports = {
    resolve: {
        extensions: ['*', '.js', '.jsx'],
    },
    entry: {
        bundle: path.resolve(__dirname, 'src/index.js'),
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.(png|jpg|jpeg|svg)$/,
                loader: 'url-loader',
                options: {
                    esModule: false,
                },
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                loader: 'url-loader?limit=100000',
            },
            {
                test: /\.(html)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'html-loader',
                    options: { minimize: true },
                },
            },
        ],
    },
    // optimization: {
    //     splitChunks: {
    //         cacheGroups: {
    //             vendor: {
    //                 test: /[\\/]node_modules[\\/]/,
    //                 chunks: 'all',
    //                 name: 'vendor',
    //             },
    //         },
    //     },
    // },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public/index.html'),
        }),

        new MomentLocalesPlugin({
            localesToKeep: ['es', 'es-us'],
        }),
        new SpritesmithPlugin({
            src: {
                cwd: path.resolve(__dirname, 'src/styles/images/png-icons'),
                glob: '*.png',
            },
            target: {
                image: path.resolve(__dirname, 'src/styles/images/sprite.png'),
                css: path.resolve(__dirname, 'src/styles/images/sprite.scss'),
            },
            apiOptions: {
                cssImageRef: '../styles/images/sprite.png',
                generateSpriteName: (fullPathToSourceFile) => {
                    const { name } = path.parse(fullPathToSourceFile);
                    return `sprite-${name}`;
                },
            },
        }),
    ],
};
