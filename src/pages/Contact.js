import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import '../styles/Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [emailError, setEmailError] = useState('');
    const dialogRef = useRef(null);

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === 'email') {
            validateEmail(value);
        }

        setFormData({ ...formData, [name]: value });
    };

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setEmailError(email && !emailRegex.test(email) ? 'Please enter a valid email address.' : '');
    };

    const showDialog = (message) => {
        if (dialogRef.current) {
            dialogRef.current.querySelector('.dialog-message').textContent = message;
            dialogRef.current.showModal();
            setTimeout(() => dialogRef.current.close(), 5000);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (emailError) {
            showDialog('Please correct the errors before submitting.');
            return;
        }

        emailjs
            .send('service_0uztorh', 'template_3mt8wo9', formData, '_Q3rGfyaNlr9Y1xXg')
            .then(
                () => {
                    showDialog('Message sent successfully!');
                    setFormData({ name: '', email: '', message: '' });
                },
                () => showDialog('Failed to send message. Please try again.')
            );
    };

    return (
        <div className="contact-container">
            <div className="contact-form">
                <h2>Get in touch.</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <div className="input-wrapper">
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        {emailError && <p className="error">{emailError}</p>}
                    </div>
                    <textarea
                        name="message"
                        rows="6"
                        placeholder="Message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>
                    <button type="submit" disabled={emailError}>Send Message</button>
                </form>
            </div>

            <div className="contact-info">
                <p>
                    If you want to know more about me or my work, or if you would just like to say hello, send me a message. I'd love to hear from you.
                </p>
                <div>
                    <i className="fas fa-envelope"></i> alcordoroxanne@gmail.com
                </div>
                <div>
                    <i className="fab fa-github"></i> roxsand
                </div>
            </div>

            <dialog ref={dialogRef} className="dialog-box">
                <div className="dialog-message"></div>
                <button onClick={() => dialogRef.current.close()}>Close</button>
            </dialog>
        </div>
    );
};

export default Contact;
