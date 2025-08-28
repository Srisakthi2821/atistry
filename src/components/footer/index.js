import "./index.css";
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
        <img src={logo_transparent} alt="logo" className="logo_footer" />
        <h1 className="footer_sec_1_heading">Robby Artistry</h1>
      </div>
      <p className="desc_footer">
        Exclusive offers and festive updates await you — stay tuned by following
        our socials
      </p>
      <div className="contanier_social_links">
        <div className="insta_footer_container">
          <FaInstagram className="icon_footer_links insta_footerIcon" />
        </div>
        <div  className="whatsapp_footer_container">
          <FaWhatsapp className="icon_footer_links" />
        </div>
        <div  className="youtube_footer_container">
          <FaYoutube className="icon_footer_links" />
        </div>
        <div  className="facebook_footer_container">
          <FaFacebook className="icon_footer_links" />
        </div>
      </div>
    </div>
    <div className="section2">
      <h1 className="footer_sec2_heading">Services</h1>
      <p className="link_sec2">Blood Art</p>
      <p className="link_sec2">Photo Frames</p>
      <p className="link_sec2">Digital Artworks</p>
      <p className="link_sec2">Imaginary Artworks</p>
    </div>
    <div className="section3">
      <h1 className="footer_sec2_heading">Contact</h1>
      <p className="link_sec2"><span><FaPhoneAlt/></span>+91 72001 27265</p>
      <p className="link_sec2"><span><FaPhoneAlt/></span>+91 94443 12265</p>
      <p className="link_sec2"><span><FaInstagramSquare/></span>robby_artistry</p>
      <p className="link_sec2"><span><FaLocationDot/></span>Kanchipuram, TN.</p>
    </div>
  </div>
  <div className="final_footer">
    <p>© {new Date().getFullYear()} Robby Artistry. All rights reserved.</p>
  </div>
  </>
);

export default Footer;
