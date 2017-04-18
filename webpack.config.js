var webpack = require('webpack');
var path = require('path');

var SRC = path.resolve(__dirname, 'src');
var DIST = path.resolve(__dirname, 'dist');

var config = {
    context: SRC,
    entry: [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        './index.js'
    ],
    output: {
        path: DIST,
        filename: 'bundle.js',
        publicPath: '/'
    },
    devtool: 'inline-source-map',
    devServer: {
        hot: true,
        contentBase: DIST,
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.css$/,
                use: [ 
                    'style-loader', 
                    'css-loader?modules', 
                    'postcss-loader'
                ]
            }
        ]
    },
    // plugins: [
    //     new webpack.HotModuleReplacementPlugin(),
    //     new webpack.NamedModulesPlugin(),
    // ]
};

module.exports = config;