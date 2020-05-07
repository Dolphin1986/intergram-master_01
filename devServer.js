let webpack = require('webpack');
let WebpackDevServer = require('webpack-dev-server');
let config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true
}).listen(3000, 'https://intergram-master.herokuapp.com/', function (err, result) {
    if (err) {
        console.log(err);
    }

    console.log('Listening at localhost:3000');
});
