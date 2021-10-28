const Dotenv = require('dotenv-webpack');
const webpack = require('webpack');
const path = require('path')

module.exports = {
    webpack(config) {
        config.plugins.push(new Dotenv())
        config.plugins = config.plugins || []

        config.plugins = [
            ...config.plugins,
        ]

        return config
    }
}