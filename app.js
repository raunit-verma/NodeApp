// File: server.js

const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();

app.get('/', (req, res) => {
    res.send('Hello from the backend!');
});

app.get('/', (req, res) => {
    res.send("Home Route Working")
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});