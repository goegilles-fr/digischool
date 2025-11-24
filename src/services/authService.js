const userRepository = require('../repositories/userRepository');

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.login = async (email, password) => {
    const user = await userRepository.getUserByEmail(email);
    if (!user) return null;
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) return null;
    const token = jwt.sign({ id: user.id, role: user.role, email: user.email }, process.env.JWT_SECRET);
    return token;
};

exports.register = async (email, password) => {
    const hashedPassword = await bcrypt.hash(password, 10);
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!emailRegex.test(email)) return null;
    const user = await userRepository.createUser({ email: email, password: hashedPassword, role: 'user' });
    const token = jwt.sign({ id: user.id, role: user.role, email: user.email }, process.env.JWT_SECRET);
    return token;
};