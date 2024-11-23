import React, { useState } from 'react';
import './Contact.css';
import Emailjs from '@emailjs/browser';
import { useRef } from "react";

const Contact = () => {
    const form = useRef();
    const [done, setDone] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault(); // Mencegah pengiriman form default

        // Kirim form menggunakan emailjs
        Emailjs.sendForm(
            'service_evf6l46',
            'template_euqstwj',
            form.current,
            'hMHn2cn6BhKIbt5fo'
        )
        .then(
            (result) => {
                console.log('Email sent successfully:', result);
                setDone(true);
            },
            (error) => {
                console.error('Error occurred while sending email:', error);
                alert('Failed to send email. Please try again later.');
            }
        );
    };

    return (
        <div className="contact-form" id="Contact">
            {/* Bagian kiri */}
            <div className="w-left">
                <div className="awesome">
                    <span>Get in Touch</span>
                    <span>Contact Me</span>
                    <div
                        className="blur s-blur1"
                        style={{ background: '#ABF1FF94' }}
                    ></div>
                </div>
            </div>

            {/* Bagian kanan */}
            <div className="c-right">
                <form ref={form} onSubmit={sendEmail}>
                    <input
                        type="text"
                        name="user_name"
                        className="user"
                        placeholder="Name"
                        required
                    />
                    <input
                        type="email"
                        name="user_email"
                        className="user"
                        placeholder="Email"
                        required
                    />
                    <textarea
                        name="message"
                        className="user"
                        placeholder="Message"
                        required
                    />
                    <input type="submit" value="Send" className="button" />
                    {done && <span>Thanks for contacting me!</span>}
                    <div
                        className="blur c-blur1"
                        style={{ background: 'var(--purple)' }}
                    ></div>
                </form>
            </div>
        </div>
    );
};

export default Contact;