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
        <img src={logo_transparent} className="logo" alt="logo" />
        <h1 className="navbar-title">Robby Artistry</h1>
      </div>
      </Link>

      <div className="navbar-links">
        <Link
          to="/"
          className={`navbar-link ${currentPath === "/" ? "active_navbar" : ""}`}
        >
          <img src={home_gif} alt="nav icon" />
          Home
        </Link>

        <Link
          to="/arts"
          className={`navbar-link ${currentPath === "/arts" ? "active_navbar" : ""}`}
        >
          <img src={gallery_gif} alt="nav icon" />
          Arts
        </Link>

        <Link
          to="/about"
          className={`navbar-link ${currentPath === "/about" ? "active_navbar" : ""}`}
        >
          <img src={about_gif} alt="nav icon" />
          About
        </Link>

        <Link
          to="/contact"
          className={`navbar-link ${currentPath === "/contact" ? "active_navbar" : ""}`}
        >
          <img src={contact_gif} alt="nav icon" />
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
      <div className={smNavActive?'navbar-links-sm-devices nav-active-sm-devices':'navbar-links-sm-devices'}>
         <Link
          to="/"
          className={`navbar-link ${currentPath === "/" ? "active_navbar" : ""}`}
        >
          <img src={home_gif} alt="nav icon" />
          Home
        </Link>

        <Link
          to="/arts"
          className={`navbar-link ${currentPath === "/arts" ? "active_navbar" : ""}`}
        >
          <img src={gallery_gif} alt="nav icon" />
          Arts
        </Link>

        <Link
          to="/about"
          className={`navbar-link ${currentPath === "/about" ? "active_navbar" : ""}`}
        >
          <img src={about_gif} alt="nav icon" />
          About
        </Link>

        <Link
          to="/contact"
          className={`navbar-link ${currentPath === "/contact" ? "active_navbar" : ""}`}
        >
          <img src={contact_gif} alt="nav icon" />
          Contact
        </Link>
      </div>
      </>
  );
};

export default Navbar;
