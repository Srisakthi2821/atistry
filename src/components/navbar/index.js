import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import home_gif from "../../assets/navbar/home_gif.gif";
import about_gif from "../../assets/navbar/about_gif.gif";
import gallery_gif from "../../assets/navbar/gallery_gif.gif";
import contact_gif from "../../assets/navbar/contact_gif.gif";
import logo_transparent from "../../assets/logo_transparent.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import "./index.css";

const Navbar = () => {
 const [smNavActive, setSmNavActive] = useState(false);

const toggleSmNavActive = () => {
  setSmNavActive(prev => !prev);
};
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <>
    <nav className="navbar">
      <Link to='/' className="link"><div className="navbar-logo">
        <img loading='lazy' src={logo_transparent} className="logo" alt="logo" />
        <h1 className="navbar-title">Robby Artistry</h1>
      </div>
      </Link>

      <div className="navbar-links">
        <Link
          to="/"
          className={`navbar-link ${currentPath === "/" ? "active_navbar" : ""}`}
        >
          <img loading='lazy' src={home_gif} alt="nav icon" />
          Home
        </Link>

        <Link
          to="/arts"
          className={`navbar-link ${currentPath === "/arts" ? "active_navbar" : ""}`}
        >
          <img loading='lazy' src={gallery_gif} alt="nav icon" />
          Arts
        </Link>

        <Link
          to="/about"
          className={`navbar-link ${currentPath === "/about" ? "active_navbar" : ""}`}
        >
          <img loading='lazy' src={about_gif} alt="nav icon" />
          About
        </Link>

        <Link
          to="/contact"
          className={`navbar-link ${currentPath === "/contact" ? "active_navbar" : ""}`}
        >
          <img loading='lazy' src={contact_gif} alt="nav icon" />
          Contact
        </Link>
      </div>
      {
        smNavActive?(
          <IoMdClose onClick={toggleSmNavActive} className="hamburger_smdev"/>
        ):(
          <RxHamburgerMenu onClick={toggleSmNavActive} className="hamburger_smdev"/>
        )
      }
    </nav>
      <div className={smNavActive?'navbar-links-sm-devices nav-active-sm-devices container_sidebar':'navbar-links-sm-devices container_sidebar'}>
      <div>
         <Link
          to="/"
          className={`navbar-link ${currentPath === "/" ? "active_navbar" : ""}`}
        >
          <img loading='lazy' src={home_gif} alt="nav icon" />
          Home
        </Link>

        <Link
          to="/arts"
          className={`navbar-link ${currentPath === "/arts" ? "active_navbar" : ""}`}
        >
          <img loading='lazy' src={gallery_gif} alt="nav icon" />
          Arts
        </Link>

        <Link
          to="/about"
          className={`navbar-link ${currentPath === "/about" ? "active_navbar" : ""}`}
        >
          <img loading='lazy' src={about_gif} alt="nav icon" />
          About
        </Link>

        <Link
          to="/contact"
          className={`navbar-link ${currentPath === "/contact" ? "active_navbar" : ""}`}
        >
          <img loading='lazy' src={contact_gif} alt="nav icon" />
          Contact
        </Link>
        </div>
        <div className="part2_sidebar">
          <p
          className='navbar-link'
        >
          Contact Us
        </p>
         <a className="link" href="https://wa.me/7200127265" target="_blank"><p
          className='navbar-link-number'
        >
          +91 72001 27265
        </p></a>
        </div>
      </div>
      </>
  );
};

export default Navbar;
