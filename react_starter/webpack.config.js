const path = require('path');

module.exports = {
    entry: [
        './src/index.js'
    ],
    output: {
        path: path.resolve(__dirname),
        publicPath: '/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                loaders: [ 'babel-loader' ],
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                loaders: [ 'style-loader', 'css-loader', 'sass-loader' ]
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: [
                {
                    loader: 'url-loader',
                    options: {
                        limit: 10000
                    }
                },
                'image-webpack-loader' ]
            }
        ]
    },
    devServer: {
        historyApiFallback: true,
        contentBase: './'
    }
};
