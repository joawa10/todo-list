const express = require('express');
const cors = require('cors');
const todoRoute = require('../prisma/routes/todoRoute');
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api', todoRoute);

const port = process.env.PORT || 4001;
app.listen(port, () => console.log(`Server is running on port ${port}`));