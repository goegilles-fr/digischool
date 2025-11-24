const { crossOriginEmbedderPolicy } = require("helmet");

const helmetOptions = {
    crossOriginResourcePolicy: { policy: "same-site" },
    crossOriginEmbedderPolicy: false,
};

module.exports = helmetOptions;