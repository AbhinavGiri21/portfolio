import React from 'react';
import './contact.css';

const Contact = () => {
    return (
        <div className="contact">
            <div className="contact-container">
                <form action="https://api.web3forms.com/submit" method="post" className="contact-form">
                    <div className="contact-title">
                        <h2>Get In Touch</h2>
                    </div>
                    <hr />
                    <div className="input-details">
                        <input type="hidden" name="access_key" value="72e17cd3-863f-4d95-b62c-f65cd17c5fe5" />
                        <input type="text" name="name" placeholder="Your name" className="contact-inputs" required />
                        <input type="email" name="email" placeholder="Your email" className="contact-inputs" required />
                        <textarea name="message" placeholder="Your message" className="contact-inputs" required></textarea>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;
