const express = require('express');
const dotenv = require('dotenv').config();
const rateLimit = require('express-rate-limit');
const randomNumber = () => {
    return Math.floor(Math.random() * 1000);
}
const PORT = process.env.PORT || randomNumber();
const app = express();

// API URL
const API_KEY = process.env.EXCHANGE_RATE_API_KEY;
const API_URL = 'https://v6.exchangerate-api.com/v6/YOUR-API-KEY/pair/EUR/GBP';   


// Rate limit
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // limit each IP to 100 requests per windowMs
});

// Middleware
app.use(express.json()); // pass json data
app.use(limiter); // apply rate limit

// Routes
app.post('api/convert', async(req, res) => {
    // get user data
    try {
        const data = req.body;
        console.log(data);
    }catch(err) {
        console.log(err);
    }
});


// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});