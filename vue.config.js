const SVGSpritemapPlugin = require('svg-spritemap-webpack-plugin');
const path = require('path');

module.exports = {
    configureWebpack: {
        devServer: {
            writeToDisk: (filePath) => {
                return /icon-sprite.svg$/.test(filePath);
            },
            watchOptions: {
                ignored: [/node_modules/, /public\/icon-sprite.svg/],
            }
        },
        plugins: [
            new SVGSpritemapPlugin('./src/assets/icons/*.svg', {
                output: {
                    filename: './public/img/icons/icon-sprite.svg',
                    svg4everybody: true,
                    svgo: {
                        removeTitle: true,
                        removeStyleElement: true,
                        cleanupNumericValue: true,
                        removeUselessStrokeAndFill: true,
                        removeAttrs: {
                            attrs: '*:(stroke|fill):((?!^none$).)*'
                        }
                    },
                },
                sprite: {
                    prefix: false,
                },
            }),
        ],
    },
}