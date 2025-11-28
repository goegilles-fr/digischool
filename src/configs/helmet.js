const { crossOriginEmbedderPolicy } = require("helmet");

/**
 * Helmet options
 * @type {Object}
 * @property {Object} crossOriginResourcePolicy - Cross-Origin Resource Sharing policy
 * @property {boolean} crossOriginEmbedderPolicy - Cross-Origin Embedder Policy
 */
const helmetOptions = {
    crossOriginResourcePolicy: { policy: "same-site" },
    crossOriginEmbedderPolicy: false,
};

module.exports = helmetOptions;
