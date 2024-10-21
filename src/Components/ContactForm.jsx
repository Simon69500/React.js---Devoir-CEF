import { useState } from "react";
import '../SCSS/ContactForm.scss';

// Formulaire de Contact avec maildev

const ContactForm = () => {

    const [name, setName] = useState('');
    const [objet, setObjet] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch('http://localhost:5000/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',  // pour sécuriser l'envoie de données 
            },
            body: JSON.stringify({ name, objet, message }),
        });

        if (response.ok) {
            alert('Votre message est envoyé avec succès !');
        } else {
            alert('Erreur lors de l\'envoi du message.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
        
            <div className="form">
                <h4>Nous contacter</h4>

                <label htmlFor="name">Nom :</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Votre Nom..."
                />

                <label htmlFor="objet">Objet :</label>
                <input
                    type="text"
                    id="objet"
                    value={objet}
                    onChange={(e) => setObjet(e.target.value)}
                    placeholder="Objet du message..."
                />

                <label htmlFor="message">Message :</label>
                <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    placeholder="Votre message..."
                />

                <button className="button-form" type="submit">Envoyer</button>
            </div>
        </form>
    );
};

export default ContactForm;
