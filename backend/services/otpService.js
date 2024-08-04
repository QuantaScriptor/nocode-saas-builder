
/**
 * Title: OTP Service
 * Description: Handles OTP generation and verification.
 * Status: Finalized
 * Author: Reece Dixon
 * Date Created: 2024-08-05
 * Path: /services/otpService.js
 * Proprietary: YES - **NOT FOR PUBLIC ACCESS**
 */

const crypto = require('crypto');
const nodemailer = require('nodemailer');

const otpDatabase = new Map(); // Simple in-memory storage for OTPs

async function sendOtp(email) {
    const otp = crypto.randomInt(100000, 999999).toString();
    otpDatabase.set(email, otp);
    await sendEmail(email, otp);
}

function verifyOtp(email, otp) {
    const storedOtp = otpDatabase.get(email);
    return storedOtp === otp;
}

async function sendEmail(email, otp) {
    // Implement your email sending logic here
    console.log(`Sending OTP ${otp} to ${email}`);
}

module.exports = { sendOtp, verifyOtp };
                