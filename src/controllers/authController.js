const authService = require('../services/authService');

/**
 * Login user and return a JWT token
 * @param {Object} req.body - request body
 * @param {String} req.body.email - user email
 * @param {String} req.body.password - user password
 * @param {Object} res - response object
 * @returns {Promise<Object>} - response with JWT token
 */
exports.login = async (req, res) => {
    const { email, password } = req.body;
    const token = await authService.login(email, password);
    if (!token) return res.status(400).json({ error: 'Invalid email or password' });
    res.status(200).json({ token });
}

/**
 * Register user and return a JWT token
 * @param {Object} req.body - request body
 * @param {String} req.body.email - user email
 * @param {String} req.body.password - user password
 * @param {Object} res - response object
 * @returns {Promise<Object>} - response with JWT token
 */
exports.register = async (req, res) => {
    const { email, password } = req.body;
    const token = await authService.register(email, password);
    if (!token) return res.status(400).json({ error: 'Invalid email or password' });
    res.status(200).json({ token });
}



module.exports = exports;