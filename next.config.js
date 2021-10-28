const Dotenv = require('dotenv-webpack');
const webpack = require('webpack');
const path = require('path')

module.exports = {
    webpack(config) {
        config.plugins.push(new Dotenv({
            path: '.env.production.local',
            safe: true
        }))
        config.plugins = config.plugins || []

        config.plugins = [
            ...config.plugins,
        ]

        return config
    }
}