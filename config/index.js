require('dotenv').config();

module.exports = {
    dev : process.env.NODE_ENV !== 'production',
    port: process.env.PORT || 3000,
    cors: process.env.CORS,
    redis_url: process.env.REDIS_URL || "",
    redis_port: process.env.REDIS_PORT || "",
};