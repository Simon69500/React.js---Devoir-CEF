// Serveur pour tester maildev , a lancer avant l'envoie du formulaire en local

const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Configuration de Nodemailer pour Gmail
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'simonsola67@gmail.com',
        pass: 'xsyi evvm ikyz hzrx',
    },
});

// Envoi de l'email
app.post('/send', (req, res) => {
    const { name, objet, message } = req.body;

    const mailOptions = {
        from: '"Contact Form" <simonsola67@gmail.com>',
        to: 'acalasama@gmail.com',
        subject: objet,
        text: `Nom: ${name}\nMessage: ${message}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Erreur lors de l\'envoi du mail:', error);
            return res.status(500).send('Erreur lors de l\'envoi du mail.');
        }
        res.status(200).send('Message envoyé : ' + info.response);
    });
});

// Démarrage du serveur
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

