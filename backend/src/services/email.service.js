import { transporter } from '../config/email.config.js';

export const sendContactEmail = async ({ name, email, message }) => {
    const mailOptions = {
        from: process.env.EMAIL_USER,             
        to: 'prathamesh.official.79@gmail.com',   
        replyTo: email,                          
        subject: `System Message // Portfolio Contact from ${name}`,
        text: `NEW INCOMING TRANSMISSION:\n\nIdentity: ${name}\nReturn Address: ${email}\n\nPayload:\n${message}`,
    };

    return await transporter.sendMail(mailOptions);
};