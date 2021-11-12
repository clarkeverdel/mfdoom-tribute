const withTM = require('next-transpile-modules')(['three']);

module.exports = withTM({
    /* config options here */
    // target: 'serverless',
    images: {
      formats: ['image/avif', 'image/webp']
    },

    webpack(config) {
        config.module.rules.push(
          {
            test: /\.md$/,
            use: [
                'json-loader',
                'front-matter-loader',
            ],
          },
          {
            test: /\.svg$/,
            use: [{
              loader: '@svgr/webpack',
              options: {
                svgoConfig: {
                  plugins: {
                    removeViewBox: false
                  }
                },
                ref: true
              }
            }]
          },
        );

        return config;
    }
});
