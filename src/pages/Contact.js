import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import '../styles/Contact.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Contact = () => {
    // State to handle form data
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        setTimeout(() => {
            const alert = document.querySelector('.alert');
            if (alert) {
                alert.style.display = 'none';
            }
        }, 5000); // Dismiss after 5 seconds

        emailjs.send(
            'service_0uztorh', 
            'template_3mt8wo9', 
            formData,
            '_Q3rGfyaNlr9Y1xXg'
        ).then(
            (result) => {
                console.log('Email successfully sent!', result.text);
                alert('Message sent successfully!');
                // Reset form fields
                setFormData({ name: '', email: '', message: '' });
            },
            (error) => {
                console.error('Failed to send email:', error.text);
                alert('Failed to send message. Please try again.');
            }
        );
    };

    return (
        <div className="contact-container">
            {/* Form Section */}
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
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <textarea
                        name="message"
                        rows="6"
                        placeholder="Message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>
                    <button type="submit">Send Message</button>
                </form>
            </div>

            {/* Contact Information Section */}
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
        </div>
    );
};

export default Contact;