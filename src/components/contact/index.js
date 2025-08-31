import { useState ,useEffect} from "react";
import AOS from 'aos'
import "./index.css";
import {
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
  FaFacebook,
  FaPhoneAlt,
  FaInstagramSquare,
} from "react-icons/fa";
import ButtonHome from "../button_home";
import contact_img from "../../assets/contact_img.png";
import { use } from "echarts/core";

const Contact = () => {
  const [customerName, setCustomerName] = useState("");
  const [category, setCategory] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    AOS.init({ duration:800,   
      once: false,     
      easing: "ease-in-out", }); 
  }, []);

  const handleCustomerName = (event) => {
    setCustomerName(event.target.value);
  };
  const handleCustomerCategory = (event) => {
    setCategory(event.target.value);
  };
  const handleCustomerMessage = (event) => {
    setMessage(event.target.value);
  };
  const submitContactForm = () => {
    const text = `
      Hi Sir,  
      My name is ${customerName} and I recently came across your work on Blood Art.  
      I am highly interested in learning more about this service and exploring how I can proceed further.  

      I want to know more about:  
      - Category : ${category}    

      Message :
      
      ${message}

      Looking forward to your response.  
      Thank you.  
      `;

    const encodedText = encodeURIComponent(text);

    // WhatsApp link (replace with your number)
    const whatsappUrl = `https://wa.me/917200127265?text=${encodedText}`;

    // Open in new tab
    window.open(whatsappUrl, "_blank");
    setCustomerName('')
    setMessage('')
  };

  return (
    <div className="contatiner_contact">
      <div className="section_1_arts">
        <div className="innerContainer_sec1_arts">
          <h1 className="heading_art_gallery Contact_Heading">Get In Touch</h1>
          <p className="para_art_gallery">
            Get in touch with me for inquiries, collaborations, or commissions.
            I’m always open to connect and discuss creative possibilities.
          </p>
        </div>
      </div>
      <div className="section_2_contact">
        <div className="contact_details" data-aos="fade-up">
          <h1 className="heading_c_details">Contact Details</h1>
          <p className="para_c_details">
            Robby artistry, no.64 mariyamman kovil street, orikkai, kanchipuram,
            Tamilnadu - 631 502
          </p>
          <h1 className="subHeading_c_details">Whats App</h1>
          <p className="para_c_details">+91 72001 27265</p>
          <h1 className="subHeading_c_details">Social Links</h1>
          <div className="contanier_social_links">
            <div className="insta_footer_container">
              <FaInstagram className="icon_footer_links insta_footerIcon" />
            </div>
            <div className="whatsapp_footer_container">
              <FaWhatsapp className="icon_footer_links" />
            </div>
            <div className="youtube_footer_container">
              <FaYoutube className="icon_footer_links" />
            </div>
            <div className="facebook_footer_container">
              <FaFacebook className="icon_footer_links" />
            </div>
          </div>
        </div>
        <div className="form" data-aos="fade-up">
          <img loading='lazy' src={contact_img} className="contact_img" alt="contact" data-aos="slide-left"/>
          <h1 className="heading_form">Anything else to convey?</h1>
          <label htmlFor="name">Name :</label>
          <input
            type="text"
            onChange={handleCustomerName}
            placeholder="Enter Your name"
            id="name"
          />
          <label htmlFor="category">Category :</label>
          <select
            id="category"
            className="dropdown_contact"
            onChange={handleCustomerCategory}
          >
            <option>Blood Art</option>
            <option>Pencil Art</option>
            <option>Photo Frames</option>
            <option>Digital Art</option>
            <option>Imaginary Art</option>
          </select>
          <label htmlFor="message">Explain :</label>
          <input
            type="textarea"
            className="text_area"
            placeholder="Describe..."
            id="message"
            onChange={handleCustomerMessage}
          />
          <ButtonHome
            name="Enquiry"
            className="button_home"
            onClick={submitContactForm}
          />
        </div>
      </div>
      <div className="container_map" data-aos="fade-up">
        <h1 className="heading_c_details">Find Us on Map!</h1>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.6321984257147!2d79.7049589748383!3d12.802369587497683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52c300373f6b23%3A0x8cf48088b4f04c4e!2sRobby%20Artistry!5e0!3m2!1sen!2sin!4v1756111468334!5m2!1sen!2sin"
          className="google_map"
          style={{ border: 0 }}
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          loading="eager" // 👈 loads immediately
        />
      </div>
    </div>
  );
};

export default Contact;
