const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const paths = {
    DIST: path.resolve(__dirname, 'dist'),
    SRC: path.resolve(__dirname, 'src'),
    JS: path.resolve(__dirname, 'src/js'),
    STYLE: path.resolve(__dirname, 'src/style')
};

module.exports = {
    entry: path.join(paths.JS, 'app.js'),
    output: {
        path: paths.DIST,
        filename: 'app.bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(paths.SRC, 'index.html')
        }),
        new ExtractTextPlugin('style.bundle.css')
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)?$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.(css|scss)?$/,
                loader: ExtractTextPlugin.extract({
                    use: ['css-loader', 'sass-loader'],
                    publicPath: paths.STYLE,
                }),
            },
            {
                test: /\.(png|jpg|gif)?$/,
                use: 'file-loader'
            },
        ]
    },
    devtool: '',
    context: __dirname,
    target: 'web',
    resolve: {
        modules: [
            'node_modules',
            path.resolve(__dirname, 'app'),
        ],
        extensions: ['.js', '.json', '.jsx', '.css', '.scss']
    },
    cache: false,
    watch: true,
    watchOptions: {
        aggregateTimeout: 1000,
        poll: true,
    },
};
