import { sendContactEmail } from '../services/email.service.js';

export const handleContactSubmission = async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: 'Identity, Address, and Payload are required.' });
    }

    try {
        await sendContactEmail({ name, email, message });
        res.status(200).json({ message: 'Transmission Successful.' });
    } catch (error) {
        console.error('Transmission Error:', error);
        res.status(500).json({ error: 'Failed to process transmission.' });
    }
};