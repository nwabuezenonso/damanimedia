import React, { useState } from 'react';
import { FaWhatsapp, FaMailBulk  } from 'react-icons/fa';
import { client } from '../../../client';
import './Footer.css';

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    // submit data and settingit to true
    setLoading(true);

    // following the sanity
    const contact = {
      _type: 'contact',
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };
 
    client.create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>

      <div className='footer'>

        <h2 className="head-text">Chat with me</h2>

        <div className="app__footer-cards">
          <div className="app__footer-card ">
            <div style={{margin:"10px"}}>
              <FaMailBulk />
            </div>
            <a href="mailto:hello@micael.com" className="p-text">hello@damanimedia.com</a>
          </div>
          <div className="app__footer-card">
          <div style={{margin:"10px"}}>
              <FaWhatsapp />
            </div>
            <a href="tel:+1 (123) 456-7890" className="p-text">+1 (123) 456-7890</a>
          </div>
        </div>
        {!isFormSubmitted ? (
          <div className="app__footer-form app__flex">
            <div className="app__flex">
              <input className="p-text" type="text" placeholder="Your Name" name="name" value={name} onChange={handleChangeInput} />
            </div>
            <div className="app__flex">
              <input className="p-text" type="email" placeholder="Your Email" name="email" value={email} onChange={handleChangeInput} />
            </div>
            <div>
              <textarea
                className="p-text"
                placeholder="Your Message"
                value={message} 
                name="message"
                onChange={handleChangeInput}
              />
            </div>
            <button type="button" className="p-text" onClick={handleSubmit}>{!loading ? 'Send Message' : 'Sending...'}</button>
          </div>
        ) : (
          <div>
            <h3 className="head-text">
              Thank you for getting in touch!
            </h3>
          </div>
        )}


        <div style={{textAlign: "center", color: "#fff", fontFamily: "var(--font-base)", padding: "10px"}}>
          <p>Copyright ??2022 All rights reserved</p>
        </div>

      </div>
    </>
  );
};

export default Footer