import React from 'react';
import Nav from '../nav';
import Footer from '../footer';

class Contact extends React.Component {
    render () {
        return (
                <div className="contact_container">
                    <Nav />
                    <section id="contactSection">
                        <section className="bg_color">
                    <h3>Connect With The Team</h3>
                    <form className="contact-box">
                        <input type="text" className="input-field" placeholder="Your Name" />
                        <input type="email" className="input-field" placeholder="Your Email" />
                        <input
                        type="text"
                        className="input-field"
                        placeholder="Your Phone Number (123)-456-7890"
                        />
                        <input type="text" className="input-field" placeholder="Subject" />
                        <textarea
                        className="input-field textarea-field"
                        placeholder="Your Message"
                        defaultValue={""}
                        />
                        <button type="button" className="submitBtn">
                        Send Message
                        </button>
                    </form>
                    </section>
                    </section>
                    <Footer />
                </div>
        );
    }
}
export default Contact;