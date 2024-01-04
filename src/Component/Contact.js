import React from "react";

const Contact = () => {
  return (
    <div className="contact-page-wrapper">
      <h2 className="primary-heading text-center">We Are Located In</h2>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.7967566571397!2d80.79812942589783!3d6.022615043962819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae14ad03c6441dd%3A0xc28cb7c1a1dad59e!2sTangalle%20Beach!5e0!3m2!1sen!2slk!4v1704178508810!5m2!1sen!2slk" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className="map"></iframe>
    </div>
  );
};

export default Contact;