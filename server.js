const express = require('express');
const app = express();
require('dotenv').config();

const dbConfig = require('./db');

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));