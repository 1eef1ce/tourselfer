const path = require('path');
const { i18n } = require('./next-i18next.config');

module.exports = {
    reactStrictMode: true,
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    i18n,
    resolve: {
        modules: ['node_modules'],
        extensions: ['.js', '.css']
    },

    resolveLoader: {
        modules: ['node_modules']
    },
    trailingSlash: true,
    generateEtags: false
};
