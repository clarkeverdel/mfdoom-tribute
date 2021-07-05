const withTM = require('next-transpile-modules')(['three']);

module.exports = withTM({
    /* config options here */
    // target: 'serverless',
    webpack(config) {
        config.module.rules.push({
            test: /\.md$/,
            use: [
                'json-loader',
                'front-matter-loader',
            ],
        });

        return config;
    }
});
