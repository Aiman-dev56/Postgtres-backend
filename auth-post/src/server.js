const express = require('express');
const cors = require('cors');

require('dotenv').config();

const authRoutes = require('./routes/authRoutes');

const app = express();

//Middleware

app.use(cors());
app.use(express.json());

//test routes
app.get('/', (req, res) => {
    res.json({
        message: "Backend API is running",
    });
});

//auth routes
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;

//start server
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
})