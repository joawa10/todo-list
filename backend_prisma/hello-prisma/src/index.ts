import express, { Application } from 'express';
import cors from 'cors';
import todoRoute from '../prisma/routes/todoRoute';
import dotenv from 'dotenv';

dotenv.config();

const app: Application = express();

app.use(express.json());
app.use(cors());

app.use('/api', todoRoute);

console.log("Connected to database:", process.env.DATABASE_URL); // Log the connection URL

const port = process.env.PORT || 4001;
app.listen(port, () => console.log(`Server is running on port ${port}`));