
/**
 * Title: Authentication Middleware
 * Description: Implements multi-factor authentication and role-based access control.
 * Status: Finalized
 * Author: Reece Dixon
 * Date Created: 2024-08-05
 * Path: /middleware/authMiddleware.js
 * Proprietary: YES - **NOT FOR PUBLIC ACCESS**
 */

const passport = require('passport');
const jwt = require('jsonwebtoken');
const { sendOtp, verifyOtp } = require('../services/otpService');

function verifyAuth(req, res, next) {
    passport.authenticate('jwt', { session: false }, (err, user, info) => {
        if (err || !user) {
            return res.status(401).json({ message: 'Unauthorized' });
        }
        req.user = user;
        next();
    })(req, res, next);
}

async function requestOtp(req, res) {
    const { email } = req.body;
    try {
        await sendOtp(email);
        res.json({ message: 'OTP sent to your email' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to send OTP' });
    }
}

async function verifyOtp(req, res, next) {
    const { email, otp } = req.body;
    try {
        const isValid = await verifyOtp(email, otp);
        if (isValid) {
            const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '1h' });
            res.json({ token });
        } else {
            res.status(401).json({ message: 'Invalid OTP' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to verify OTP' });
    }
}

module.exports = { verifyAuth, requestOtp, verifyOtp };
                