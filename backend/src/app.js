import express from 'express';
import cors from 'cors';
import { contactRouter } from './routes/contact.routes.js';

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/contact', contactRouter);

export default app;