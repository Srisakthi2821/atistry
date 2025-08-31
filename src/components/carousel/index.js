import { useState, useEffect } from "react";
import './index.css';
import { Link } from "react-router-dom";
import ButtonHome from "../button_home";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";


import recent_arts_1 from "../../assets/arts/recent_arts_1.jpg";
import recent_arts_2 from "../../assets/arts/recent_arts_2.jpg";
import recent_arts_3 from "../../assets/arts/recent_arts_3.jpg";
import recent_arts_4 from "../../assets/arts/recent_arts_4.jpg";
import recent_arts_5 from "../../assets/arts/recent_arts_5.jpg";
import recent_arts_6 from "../../assets/arts/recent_arts_6.jpg";
import { GiNextButton, GiPreviousButton } from "react-icons/gi";

const RecentArtWorks = () => {
  const [isMobile, setIsMobile] = useState(false);

  const desktopSettings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
  };

  const mobileSettings = {
    dots: true,
    infinite: true,
    slidesToShow: 1, // single image per slide
    slidesToScroll: 1,
    autoplay: true,
    speed: 800,
  };

  const images = [
    recent_arts_1,
    recent_arts_2,
    recent_arts_3,
    recent_arts_4,
    recent_arts_5,
    recent_arts_6,
  ];

  return (
    <div className="sm_dev_recent_art_works">
      <h1>Featured <span>Art works</span></h1>

      <div id="artCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="2000">
        <div className="carousel-inner">

          <div className="carousel-item active">
            <img loading='lazy' src={recent_arts_1} alt="..." />
          </div>

          <div className="carousel-item">
            <img loading='lazy' src={recent_arts_2} alt="..." />
          </div>

          <div className="carousel-item">
            <img loading='lazy' src={recent_arts_3} alt="..." />
          </div>

        </div>

        <button
          className="carousel-control-prev button_nxt_prev"
          type="button"
          data-bs-target="#artCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span><GiPreviousButton/></span>
        </button>

        <button
          className="carousel-control-next button_nxt_prev"
          type="button"
          data-bs-target="#artCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span><GiNextButton/></span>
        </button>
      </div>

      <Link className="link" to='/arts' style={{margin:'0.6rem 1rem'}}><ButtonHome name={'View More'} className="button_home"/></Link>
    </div>
  );
};

export default RecentArtWorks;
