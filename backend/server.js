const express = require('express'); 
const cors = require('cors'); 
const mongoose = require('mongoose'); 
require('dotenv').config(); 
const connectdb = require("./mongodb");
// const todoRoute = require("./routes/todoRoute");

//Execute express 
const app = express();

//Middlewares
app.use(express.json()); 
app.use(cors()); 

connectdb();
// app.use("/api", todoRoute);

const port = 4001; 
app.listen(port, () => console.log(`Server is running on port ${port}`)); 