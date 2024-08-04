
/**
 * Title: Chat Routes
 * Description: Handles user interactions and processes chat commands.
 * Status: Finalized
 * Author: Reece Dixon
 * Date Created: 2024-08-05
 * Path: /routes/chatRoutes.js
 * Proprietary: YES - **NOT FOR PUBLIC ACCESS**
 */

const express = require('express');
const router = express.Router();
const nluProcessor = require('../ai/nlu_processor');
const { verifyAuth } = require('../middleware/authMiddleware');

router.post('/message', verifyAuth, async (req, res) => {
    const { message } = req.body;
    try {
        const intent = await nluProcessor.getIntent(message);
        const response = await nluProcessor.generateResponse(intent);
        res.json({ reply: response });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
                