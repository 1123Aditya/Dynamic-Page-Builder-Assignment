const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

// Comment out authRoutes for now if auth.js doesn't exist
// const authRoutes = require('./routes/auth');
const pageRoutes = require('./routes/pages');
const recordRoutes = require('./routes/records');

const app = express();
// index.js in backend

app.use(cors({ origin: "http://localhost:3000" }));

app.use(bodyParser.json());

// Routes
// app.use('/api/auth', authRoutes); // temporarily disabled
app.use('/api/pages', pageRoutes);
app.use('/api/records', recordRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
