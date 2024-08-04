
/**
 * Title: Auth Routes
 * Description: Manages user authentication and authorization with enhanced security.
 * Status: Finalized
 * Author: Reece Dixon
 * Date Created: 2024-08-05
 * Path: /routes/authRoutes.js
 * Proprietary: YES - **NOT FOR PUBLIC ACCESS**
 */

const express = require('express');
const router = express.Router();
const { registerUser, loginUser, verifyBiometric } = require('../controllers/authController');

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/biometric', verifyBiometric);

module.exports = router;
                