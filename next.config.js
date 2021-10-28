const { parsed: localEnv } = require('dotenv').config()
const webpack = require('webpack');

const path = require('path')

module.exports = {
    webpack(config) {
        config.plugins.push(new webpack.EnvironmentPlugin(localEnv))
        config.node = {fs: "empty"};
        config.plugins = config.plugins || []

        config.plugins = [
            ...config.plugins,
        ]

        return config
    }
}