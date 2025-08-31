import "./index.css";
import {Link} from 'react-router-dom'
import logo_transparent from "../../assets/logo_transparent.png";
import {
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
  FaFacebook,
  FaPhoneAlt,
  FaInstagramSquare
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => (
    <>
  <div className="footer">
    <div className="section1">
      <div>
        <Link to='/' className="link"><img loading='lazy' src={logo_transparent} alt="logo" className="logo_footer" /></Link>
        <Link to='/' className="link"><h1 className="footer_sec_1_heading">Robby Artistry</h1></Link>
      </div>
      <p className="desc_footer">
        Exclusive offers and festive updates await you — stay tuned by following
        our socials
      </p>
      <div className="contanier_social_links">
        <a href="https://www.instagram.com/robby_artistry/" target="_blank" className="link"><div className="insta_footer_container insta_icon">
          <FaInstagram className="icon_footer_links insta_footerIcon" />
        </div></a>
        <a href="https://wa.me/7200127265" target="_blank" className="link"><div  className="whatsapp_footer_container">
          <FaWhatsapp className="icon_footer_links" />
        </div></a>
        <a href="https://www.youtube.com/@robbyartistry" target="_blank" className="link"><div  className="youtube_footer_container">
          <FaYoutube className="icon_footer_links" />
        </div></a>
        <a href="https://www.facebook.com/share/19ZQgAXNKf/" target="_blank" className="link"><div  className="facebook_footer_container">
          <FaFacebook className="icon_footer_links" />
        </div></a>
      </div>
    </div>
    <div className="section2">
      <h1 className="footer_sec2_heading">Services</h1>
      <Link to='/arts' className="link"><p className="link_sec2">Blood Art</p></Link>
      <Link to='/arts' className="link"><p className="link_sec2">Photo Frames</p></Link>
      <Link to='/arts' className="link"><p className="link_sec2">Digital Artworks</p></Link>
      <Link to='/arts' className="link"><p className="link_sec2">Imaginary Artworks</p></Link>
    </div>
    <div className="section3">
      <h1 className="footer_sec2_heading">Contact</h1>
      <a href="tel:+917200127265" className="link"><p className="link_sec2"><FaPhoneAlt/>+91 72001 27265</p></a>
      <a href="tel:+917200127265" className="link"><p className="link_sec2"><span><FaPhoneAlt/></span>+91 94443 12265</p></a>
      <a href="https://www.instagram.com/robby_artistry/" target="_blank" className="link"><p className="link_sec2"><span><FaInstagramSquare/></span>robby_artistry</p></a>
      <p className="link_sec2"><span><FaLocationDot/></span>Kanchipuram, TN.</p>
    </div>
  </div>
  <div className="final_footer">
    <p>© {new Date().getFullYear()} Robby Artistry. All rights reserved.</p>
  </div>
  </>
);

export default Footer;
