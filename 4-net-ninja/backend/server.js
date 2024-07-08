require('dotenv').config();

const express = require('express');


// Create express app
const app = express();

// Middleware
app.use((req, res, next) =>{
    console.log(req.method, req.path);
    next();
});


// Listen to a request to the root url
app.listen(process.env.PORT , () => {
    console.log(`Server is running on port ${process.env.PORT}`);  
});

// App routes
app.get('/', (req, res) => {
    res.json({
        message: 'Hello World'
    })
});