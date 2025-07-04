const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./config/db');
const router = require('./routes/routes')
dotenv.config();
const app = express();
const PORT = process.env.PORT;
connectDB();
app.use(express.json())
app.use(router)
app.listen(PORT,() =>{
    console.log(`server running on port http://localhost:${PORT}`);
})