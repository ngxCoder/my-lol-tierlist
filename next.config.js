const webpack = require('webpack');
const path = require('path')

module.exports = {
    webpack(config) {
        config.plugins.push(new webpack.EnvironmentPlugin(['APIKEY', 'REDIS_HOSTNAME', 'REDIS_PORT', 'REDIS_PASSWORD']))
        config.plugins = config.plugins || []

        config.plugins = [
            ...config.plugins,
        ]

        return config
    }
}