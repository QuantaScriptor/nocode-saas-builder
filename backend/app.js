
/**
 * Title: Main Backend Application
 * Description: Initializes the backend server and routes.
 * Status: Finalized
 * Author: Reece Dixon
 * Date Created: 2024-08-05
 * Path: /backend/app.js
 * Proprietary: YES - **NOT FOR PUBLIC ACCESS**
 */

const express = require('express');
const app = express();
const authRoutes = require('./routes/authRoutes');
const chatRoutes = require('./routes/chatRoutes');
const { sanitizeInput } = require('./middleware/inputValidation');

app.use(express.json());
app.use(sanitizeInput);
app.use('/api/auth', authRoutes);
app.use('/api/chat', chatRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
            