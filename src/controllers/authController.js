const authService = require('../services/authService');

exports.login = async (req, res) => {
    const { email, password } = req.body;
    const token = await authService.login(email, password);
    res.status(200).json({ token });
}

exports.register = async (req, res) => {
    const { email, password } = req.body;
    const token = await authService.register(email, password);
    res.status(200).json({ token });
}


module.exports = exports;