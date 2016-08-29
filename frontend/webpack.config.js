const path = require('path');

const PATHS = {
    app: path.resolve('app'),
    build: path.resolve('../ubiquityRSS/static')
};

module.exports = {
    context: __dirname,
    // the '' resolve extension is needed to allow imports without an extension.
    // if '.jsx' is not specified, webpack will not build .jsx files
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    entry: {
        app: PATHS.app
    },
    output: {
        path: PATHS.build,
        filename: 'app.js'
    },
    module: {
        loaders: [
            {
                // Test expects a RegExp! Note the slashes!
                test: /\.css$/,
                loaders: ['style', 'css'],
                // Include accepts either a path or an array of paths.
                include: PATHS.app
            },
            // Set up jsx. This accepts js too thanks to RegExp
            {
                test: /\.jsx?$/,
                // Enable caching for improved performance during development
                // It uses default OS directory by default.
                loaders: ['babel?cacheDirectory'],
                // Parse only app files! Without this it will go through entire project.

                include: PATHS.app
            }
        ]
    }
};
