import express from 'express';
import connectDB from './db.js';
// import itemModel from './models/items.js';
import { listing } from '../controllers/postController.js';
import cors from 'cors';
const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(cors());
connectDB();

// app.get('/', async (req, res) => {
//     const items = await itemModel.find();
//     res.json(items);
// });

// app.get('/', async (req, res) => {
//     const items = await getlistings.find();
//     res.json(items);
// });

app.use('/', listing)

app.listen(port, () => console.log(`Server is running on port: ${port}`));