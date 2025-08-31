import { Component } from "react";
import {Link} from 'react-router-dom'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css";

import "./index.css";

import { TbArrowBadgeRightFilled } from "react-icons/tb";
import { MdVerified } from "react-icons/md";
import ButtonHome from "../button_home";
import ButtonHomeRed from "../button_home_2";
import RecentArtWorks from '../carousel'
import { GiTakeMyMoney, GiHalfHeart, GiTick } from "react-icons/gi";

import home_main_img from "../../assets/home_main_img.png";
import bg_dotted from "../../assets/bg_dotted.png";
import image_art_process from "../../assets/image_art_process.png";
import premium from "../../assets/premium.png";
import happy_customers from "../../assets/happy_customers.png";
import afffordable_icon from "../../assets/icons/afffordable_icon.gif";
import customization_icon from "../../assets/icons/customization_icon.gif";
import detailing_icon from "../../assets/icons/detailing_icon.gif";
import trusted_icon from "../../assets/icons/trusted_icon.gif";
import paintbrush_wcu from "../../assets/paintbrush_wcu.png";
import get_art_image from "../../assets/get_art_image.png";
import categories_image__ from "../../assets/categories_image__.png";
import paint_dot_1 from '../../assets/paint_dot_1.png'
import clock from '../../assets/clock.gif';
import booked_img from '../../assets/booked_img.png';
import logo_transparent from '../../assets/logo_transparent.png'

import blood_art from "../../assets/blood_art.mp4";
import imaginary_arts from "../../assets/imaginary_arts.mp4";
import photo_frames from "../../assets/photo_frames.mp4";
import Digital_arts from '../../assets/Digital_arts.mp4'


import recent_arts_1 from '../../assets/arts/recent_arts_1.jpg'
import recent_arts_2 from '../../assets/arts/recent_arts_2.jpg'
import recent_arts_3 from '../../assets/arts/recent_arts_3.jpg'
import recent_arts_4 from '../../assets/arts/recent_arts_4.jpg'
import recent_arts_5 from '../../assets/arts/recent_arts_5.jpg'
import recent_arts_6 from '../../assets/arts/recent_arts_6.jpg'

/*<p className="para_home">
            Get premium designs at the lowest prices without compromising on
            quality. We bring you unique, eye-catching creations that stand out,
            all while staying budget-friendly.
          </p>
          */
class Home extends Component {
 state = {
    recentSoldImage: "",
    recentSoldName: "",
    recentSoldPlace: "",
    recentSoldCategory:"",
    currentIndex: 0,
  };
  recentSoldList = [
  { name: 'Ruby', place: 'Villupuram', bought: recent_arts_1, category: 'Pencil Art' },
  { name: 'Divya', place: 'Chennai', bought: recent_arts_2, category: 'Blood Art' },
  { name: 'Nisha', place: 'Delhi', bought: recent_arts_3, category: 'Pencil Art' },
  { name: 'Nikita', place: 'Maharashtra', bought: recent_arts_4, category: 'Blood Art' },
  { name: 'Santosh', place: 'Hyderabad', bought: recent_arts_5, category: 'Blood Art' },
  { name: 'Surya', place: 'Kanyakumari', bought: recent_arts_6, category: 'Blood Art' },
  { name: 'Surya', place: 'Bangalore', bought: recent_arts_2, category: 'Blood Art' },
  { name: 'Suja', place: 'Kerala', bought: recent_arts_3, category: 'Pencil Art' },
  { name: 'Haritha', place: 'Tirupur', bought: recent_arts_4, category: 'Blood Art' },
  { name: 'Manisha', place: 'Kanchipuram', bought: recent_arts_5, category: 'Blood Art' },
  { name: 'Sanjana', place: 'Chengalpattu', bought: recent_arts_6, category: 'Blood Art' },
  { name: 'Lokesh', place: 'Tiruvannamalai', bought: recent_arts_1, category: 'Pencil Art' },
  { name: 'James', place: 'Gujarat', bought: recent_arts_2, category: 'Blood Art' },
  { name: 'Deepak', place: 'Gudalur', bought: recent_arts_3, category: 'Pencil Art' },
  { name: 'Venkat', place: 'Chennai', bought: recent_arts_4, category: 'Blood Art' },
  { name: 'Kumaresan', place: 'Thoothukudi', bought: recent_arts_5, category: 'Blood Art' },
  { name: 'Kavya', place: 'Chengalpattu', bought: recent_arts_6, category: 'Blood Art' },
  { name: 'Pavitra', place: 'Coimbatore', bought: recent_arts_1, category: 'Pencil Art' },
  { name: 'Stella', place: 'Kerala', bought: recent_arts_2, category: 'Blood Art' },
  { name: 'David', place: 'Kerala', bought: recent_arts_3, category: 'Pencil Art' },
  { name: 'Dinakaran', place: 'Ariyalur', bought: recent_arts_4, category: 'Blood Art' },
  { name: 'Vijay Kumar', place: 'Dindigul', bought: recent_arts_5, category: 'Blood Art' },
  { name: 'Shalini', place: 'Pondicherry', bought: recent_arts_6, category: 'Blood Art' },
  { name: 'Priya', place: 'Karaikal', bought: recent_arts_1, category: 'Pencil Art' },
  { name: 'Pavithran', place: 'Erode', bought: recent_arts_2, category: 'Blood Art' },
  { name: 'Raja', place: 'Valparai', bought: recent_arts_3, category: 'Pencil Art' },
  { name: 'Anand Raj', place: 'Pollachi', bought: recent_arts_4, category: 'Blood Art' },
  { name: 'Rajan', place: 'Chinnasalam', bought: recent_arts_5, category: 'Blood Art' },
  { name: 'Rajkumar', place: 'Salem', bought: recent_arts_6, category: 'Blood Art' },
  { name: 'Dhana selan', place: 'Avadi', bought: recent_arts_1, category: 'Pencil Art' }
];

  componentDidMount() {
    AOS.init({
      duration:500,   
      once: false,     
      easing: "ease-in-out",
    });

    this.interval = setInterval(() => {
      this.updateRecentSold();
    }, 10000);

    this.updateRecentSold();
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  updateRecentSold = () => {
    const { currentIndex } = this.state;
    const item = this.recentSoldList[currentIndex];

    this.setState({
      recentSoldImage: item.bought,
      recentSoldName: item.name,
      recentSoldPlace: item.place,
      recentSoldCategory:item.category,
      currentIndex: (currentIndex + 1) % this.recentSoldList.length, 
    });
  };
  

  render() {
    const worksList = [
      "Blood Art",
      "Pencil Art",
      "Photo Frames",
      "Digital Artworks",
      "Imaginary Artworks",
    ];
    const settings = {
      arrows: true,
      centerMode: true,
      centerPadding: "10px",
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500,
      infinite: true,
      adaptiveHeight: true,
      cssEase: "ease-in-out",
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: true,
            centerMode: true,
            centerPadding: "0px",
            slidesToShow: 1,
          },
        },
      ],
    };
const{recentSoldImage,recentSoldName,recentSoldPlace,recentSoldCategory}=this.state


    return (
      <>
        <div className="home_container">
        <img src={logo_transparent} className="logo_home_page" data-aos='fade' alt='logo'/>
          <div className="home_part1_container">
            <img
              src={home_main_img}
              alt="home main"
              className="home_main_img"
            />
          </div>
          <div className="home_part2_container">
            <img src={bg_dotted} className="bg_dotted_home" alt="bg dotted" />
            <p className="micro_tag_line">"Where art meets heart ❤️"</p>
            <h1 className="home_title">Robby Artistry</h1>
            <p className="location_text_home">
              Based in Kanchipuram, Inspiring globally
            </p>
            <hr className="home_hr" />
            <p className="subtitle_home">Let's Create</p>
            {worksList.map((work) => (
              <h1 className="typewriter_home">
                <TbArrowBadgeRightFilled className="icon_works_home" />
                {work}
              </h1>
            ))}
            <div className="home_quality_containers">
              <div>
                <img
                  src={premium}
                  className="premium_quality_home_image"
                  alt="premium quality"
                />
                <h1 className="premium_text_home">5+ Years of Creativity</h1>
              </div>
              <div>
                <img
                  src={happy_customers}
                  className="premium_quality_home_image"
                  alt="premium quality"
                />
                <h1 className="premium_text_home">1000+ Happy Customers</h1>
              </div>
            </div>
            <div className="home_button_container">
              <Link to='/arts' className="link"><ButtonHomeRed className="button_home" name="View Our Arts" /></Link>
              <Link to='/contact' className="link"><ButtonHome className="button_home" name="Place your order" /></Link>
            </div>
          </div>
        </div>
        <div className="recently_sold_container">
          <img src={recentSoldImage} alt='Recently Sold Image' className="recently_sold_image"/>
          <div className="part_2_recently_sold">
            <h1><span>{recentSoldName}</span> from <span>{recentSoldPlace}</span> has recently bought the <span>{recentSoldCategory}</span> From Robby Artistry.</h1>
            <p>Booked a Slot Now <span><MdVerified className="verified_rece_sold"/></span></p>
              <img src={booked_img} alt='booked' className="booked_img"/>
          </div>
        </div>
        <div className="container_categories">
          <img
            src={categories_image__}
            className="image_categories"
            alt="categories"
            data-aos="fade-right"
          />
          <h1 className="title_categories">Discover Your Vibe</h1>
          <div className="container_cards_category">
          <div className="card_category" data-aos="fade-up">
            <video
              src={blood_art}
              className="video_categorY_card"
              muted
              autoPlay
              loop
              playsInline
            >
              {" "}
            </video>
            <div className="subCategory_card_cont">
              <p className="card_desc">Blood & Pencil Art</p>
              <a href="https://wa.me/917200127265?text=I%20want%20to%20order%20Blood%20Art" target="_blank"><button className="subCategory_card_cont_button">
                Order Now
              </button>
              </a>
            </div>
          </div> 
          <div className="card_category" data-aos="fade-up">
            <video
              src={photo_frames}
              className="video_categorY_card"
              muted
              autoPlay
              loop
              playsInline
            >
              {" "}
            </video>
            <div className="subCategory_card_cont">
              <p className="card_desc">Photo Frames</p>
              <a href="https://wa.me/917200127265?text=I%20want%20to%20order%20Photo%Frames" target="_blank"><button className="subCategory_card_cont_button">
                Order Now
              </button>
              </a>
            </div>
          </div> 
          <div className="card_category" data-aos="fade-up">
            <video
              src={imaginary_arts}
              className="video_categorY_card"
              muted
              autoPlay
              loop
              playsInline
            >
              {" "}
            </video>
            <div className="subCategory_card_cont">
              <p className="card_desc">Imaginary Arts</p>
              <a href="https://wa.me/917200127265?text=I%20want%20to%20order%20Imaginary%20Art" target="_blank"><button className="subCategory_card_cont_button">
                Order Now
              </button></a>
            </div>
          </div> 
          <div className="card_category" data-aos="fade-up">
            <video
              src={Digital_arts}
              className="video_categorY_card"
              muted
              autoPlay
              loop
              playsInline
            >
              {" "}
            </video>
            <div className="subCategory_card_cont">
              <p className="card_desc">Digital Art</p>
              <a href="https://wa.me/917200127265?text=I%20want%20to%20order%20Digital%20Art" target="_blank"><button className="subCategory_card_cont_button">
                Order Now
              </button></a>
            </div>
          </div> 
 
          </div>
        </div>
        <div className="why_choose_us_container">
          <h1 className="why_choose_us_title">
            Why <span>Robby Artistry?</span>
          </h1>
          <img
            src={paintbrush_wcu}
            alt="paintbrush"
            className="wcu_paintBrush"
          />
          <div className="wcu_cards">
            <div className="point" data-aos="fade-right">
              <h3 className="point_heading">Affordable Prices</h3>
              <p className="point_para">
                Get premium designs at the lowest cost without compromising
                quality.
              </p>
              <div className="point_icons">
                <img
                  src={afffordable_icon}
                  alt="icons"
                  className="icon_pointes_image"
                />
              </div>
            </div>
            <div className="point" data-aos="fade-up" >
              <h3 className="point_heading">Perfect Detailing</h3>
              <p className="point_para">
                Every product is crafted with sharp attention to detail for the
                best finish.
              </p>
              <div className="point_icons">
                <img
                  src={detailing_icon}
                  alt="icons"
                  className="icon_pointes_image"
                />
              </div>
            </div>
            <div className="point" data-aos="fade-up">
              <h3 className="point_heading">Easy Customization</h3>
              <p className="point_para">
                Personalize your designs the way you want with a hassle-free
                process.
              </p>
              <div className="point_icons">
                <img
                  src={customization_icon}
                  alt="icons"
                  className="icon_pointes_image"
                />
              </div>
            </div>
            <div className="point" data-aos="fade-left">
              <h3 className="point_heading">Trusted Quality</h3>
              <p className="point_para">
                Our products are made to last, with top-grade materials and
                finish.
              </p>
              <div className="point_icons">
                <img
                  src={trusted_icon}
                  alt="icons"
                  className="icon_pointes_image"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="recent_art_works">
          <h1 className="recent_artworks_title">
            Featured  <span>Art works</span>{" "}
          </h1>
          <div style={{ width: "100vw", height: "80vh", margin: "0 auto" }}>
            <Slider {...settings} className="carousel_slider">
              <div className="carousel_slider_card">
                <img src={recent_arts_1} alt="card carousel images" />
              </div>
              <div className="carousel_slider_card">
                <img src={recent_arts_2} alt="card carousel images" />
              </div>
              <div className="carousel_slider_card">
                <img src={recent_arts_3} alt="card carousel images" />
              </div>
              <div className="carousel_slider_card">
                <img src={recent_arts_4} alt="card carousel images" />
              </div>
              <div className="carousel_slider_card">
                <img src={recent_arts_5} alt="card carousel images" />
              </div>
              <div className="carousel_slider_card">
                <img src={recent_arts_6} alt="card carousel images" />
              </div>
            </Slider>
          </div>
          
            <Link to='/arts' className="link"><ButtonHome name={'View More'} className='button_home'/></Link>
        </div>
        <RecentArtWorks/>
        <div className="get_your_art_container">
        <img src={paint_dot_1} alt="paint dot" className="paint_dot_image" data-aos="fade-right"/>
        <p className="dot_image_text">Matt<br/> Finish</p>
          <h1 className="heading_gya">
            {" "}
            Own <span>Your Art</span>
          </h1>
          <p className="para_gya">
            " Experience the pride of owning art masterpieces. "
          </p>
          <img
            src={get_art_image}
            className="image_gya"
            alt="image get your art"
            data-aos="fade-left"
          />
          
          <div style={{ marginTop: "1rem" }}>
            <Link to='/contact' className="link"><ButtonHomeRed className="" name="Book Now" /></Link>
          </div>
        </div>
        <div className="art_process_container">
        
        <img src={image_art_process} alt='love_png' className="image_love" data-aos="fade-right"/>
          <div className="art_process_card">
          <img src={clock} className="clock_gif" alt="art duration"/>
          <h1 className="art_process_heading">Your Artwork Timeline</h1>
          <ul className="list_art_precess">
          
            <li>Standard completion time: 2–4 weeks</li>
            <li><span>Rush delivery</span> available with extra charge</li>
          </ul>
          <Link to='/contact' className="link"><ButtonHomeRed className="button_home" name={'Book Now'}/></Link>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
