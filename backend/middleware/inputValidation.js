
/**
 * Title: Input Validation Middleware
 * Description: Sanitizes and validates user inputs to prevent injection attacks.
 * Status: Finalized
 * Author: Reece Dixon
 * Date Created: 2024-08-05
 * Path: /middleware/inputValidation.js
 * Proprietary: YES - **NOT FOR PUBLIC ACCESS**
 */

const sanitizeHtml = require('sanitize-html');
const { check, validationResult } = require('express-validator');

function sanitizeInput(req, res, next) {
    req.body.message = sanitizeHtml(req.body.message);
    next();
}

const validateRequest = [
    check('email').isEmail(),
    check('password').isLength({ min: 6 }),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

module.exports = { sanitizeInput, validateRequest };
                