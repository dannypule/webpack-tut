var path = require('path');
var webpack = require('webpack');

var DEVELOPMENT = process.env.NODE_ENV === 'development';
var PRODUCTION = process.env.NODE_ENV === 'production';

var entry = PRODUCTION 
    ? ['./src/index.js']
    : [
        './src/index.js',
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:8080'
    ];

var plugins = PRODUCTION 
    ? [
        new webpack.optimize.UglifyJsPlugin(
            {
                comments: true,
                mangle: false,
                compress: {
                    warnings: true
                }
            }
        )
    ]
    : [
        new webpack.HotModuleReplacementPlugin()    
    ];

plugins.push(
    new webpack.DefinePlugin({
        DEVELOPMENT: JSON.stringify(DEVELOPMENT),
        PRODUCTION: JSON.stringify(PRODUCTION)
    })
);

module.exports = {
    devtool: 'source-map',
    entry: entry,
    plugins: plugins,
    module: {
        loaders: [
            {
                test: '/\.js$/',
                loaders: ['babel-loader'],
                exclude: '/node_modules/'
            },
            {
                test: '/\.(png|jpg|gif)$/',
                use: 'url-loader',
                options: {
                    name: '[path][name].[hash].[ext]'   
                },
                exclude: '/node_modules/'
            },
            {
                test: '/\.css$/',
                loaders: ["style-loader", "css-loader?localIdentName=[path][name]---[local]"],
                exclude: '/node_modules/'
            }
        ]
    },
    output: {
        path: path.join(__dirname, 'dist'), // path.join says join the current directory location with 'dist'   
        publicPath: '/dist/', // when we require a file it's going to look for it in this folder
        filename: 'bundle.js' // output filename
    }
}