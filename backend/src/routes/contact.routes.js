import express from 'express';
import { handleContactSubmission } from '../controllers/contact.controller.js';

const contactRouter = express.Router();

contactRouter.post('/', handleContactSubmission);

export { contactRouter };