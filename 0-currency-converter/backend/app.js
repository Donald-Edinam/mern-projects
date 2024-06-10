const express = require('express');
const dotenv = require('dotenv').config();
const axios = require('axios');
const rateLimit = require('express-rate-limit');
// const randomNumber = () => {
//     return Math.floor(Math.random() * 1000);
// }
const PORT = process.env.PORT || 4000;
const app = express();

// API URL
const API_KEY = process.env.EXCHANGE_RATE_API_KEY;
const API_URL = 'https://v6.exchangerate-api.com/v6/';   


// Rate limit
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // limit each IP to 100 requests per windowMs
});

// Middleware
app.use(express.json()); // pass json data
app.use(limiter); // apply rate limit

// Routes
app.post('/api/convert', async(req, res) => {
    // get user data
    try {
        const {from, to, amount} = req.body;
        console.log({from, to, amount});
        
        // Construct API URL
        const URL = `${API_URL}${API_KEY}/pair/${from}/${to}/${amount}`;
        const response = await axios.get(URL); 
        if(response.status === 200) {
            res.json({
                base: from,
                target: to,
                conversionRate: response.data.conversion_rate,
                convertedAmount: response.data.conversion_result,
                date: response.data.time_last_update_utc
            });   
            console.log(response.data);
        } else {
            res.json({message: "Failed to convert currency"});
        }
    }catch(err) {
        console.log("error", err);
    }
});


// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});