import { useState ,useEffect} from "react";
import AOS from 'aos' 

import { IoMdClose } from "react-icons/io";
import {
  GiWaterDrop,
  GiPencilBrush,
  GiPaintBucket,
  GiWoodFrame,
  GiTablet,
  GiEyeShield,
  GiEyeball,
  GiSettingsKnobs,
  GiCoffeeCup,
  GiTShirt,
} from "react-icons/gi";
import { FaEye } from "react-icons/fa";
import ButtonHome from "../button_home";
import ButtonHomeRed from "../button_home_2";
import "./index.css";

import blood_art_1 from "../../assets/arts/blood_art_1.jpg";
import blood_art_2 from "../../assets/arts/blood_art_2.jpg";
import blood_art_3 from "../../assets/arts/blood_art_3.jpg";
import blood_art_4 from "../../assets/arts/blood_art_4.jpg";
import blood_art_5 from "../../assets/arts/blood_art_5.jpg";
import blood_art_6 from "../../assets/arts/blood_art_6.jpg";
import blood_art_7 from "../../assets/arts/blood_art_7.jpg";
import blood_art_8 from "../../assets/arts/blood_art_8.jpg";
import blood_art_9 from "../../assets/arts/blood_art_9.jpg";
import blood_art_10 from "../../assets/arts/blood_art_10.jpg";
import blood_art_11 from "../../assets/arts/blood_art_11.jpg";
import blood_art_12 from "../../assets/arts/blood_art_12.jpg";
import blood_art_13 from "../../assets/arts/blood_art_13.jpg";
import blood_art_14 from "../../assets/arts/blood_art_14.jpg";
import blood_art_15 from "../../assets/arts/blood_art_15.jpg";
import blood_art_16 from "../../assets/arts/blood_art_16.jpg";
import blood_art_17 from "../../assets/arts/blood_art_17.jpg";
import blood_art_18 from "../../assets/arts/blood_art_18.jpg";
import blood_art_19 from "../../assets/arts/blood_art_19.jpg";
import blood_art_20 from "../../assets/arts/blood_art_20.jpg";
import blood_art_21 from "../../assets/arts/blood_art_21.jpg";
import blood_art_22 from "../../assets/arts/blood_art_22.jpg";
import blood_art_23 from "../../assets/arts/blood_art_23.jpg";
import blood_art_24 from "../../assets/arts/blood_art_24.jpg";
import blood_art_25 from "../../assets/arts/blood_art_25.jpg";
import blood_art_26 from "../../assets/arts/blood_art_26.jpg";
import blood_art_27 from "../../assets/arts/blood_art_27.jpg";
import blood_art_28 from "../../assets/arts/blood_art_28.jpg";
import blood_art_29 from "../../assets/arts/blood_art_29.jpg";
import blood_art_30 from "../../assets/arts/blood_art_30.jpg";
import blood_art_31 from "../../assets/arts/blood_art_31.jpg";
import blood_art_32 from "../../assets/arts/blood_art_32.jpg";
import blood_art_33 from "../../assets/arts/blood_art_33.jpg";
import blood_art_34 from "../../assets/arts/blood_art_34.jpg";
import blood_art_35 from "../../assets/arts/blood_art_35.jpg";
import blood_art_36 from "../../assets/arts/blood_art_36.jpg";
import blood_art_37 from "../../assets/arts/blood_art_37.jpg";
import blood_art_38 from "../../assets/arts/blood_art_38.jpg";
import blood_art_39 from "../../assets/arts/blood_art_39.jpg";
import blood_art_40 from "../../assets/arts/blood_art_40.jpg";

import pencil_art_1 from "../../assets/arts/pencil_art_1.jpg";
import pencil_art_2 from "../../assets/arts/pencil_art_2.jpg";
import pencil_art_3 from "../../assets/arts/pencil_art_3.jpg";
import pencil_art_4 from "../../assets/arts/pencil_art_4.jpg";
import pencil_art_5 from "../../assets/arts/pencil_art_5.jpg";
import pencil_art_6 from "../../assets/arts/pencil_art_6.jpg";
import pencil_art_7 from "../../assets/arts/pencil_art_7.jpg";
import pencil_art_8 from "../../assets/arts/pencil_art_8.jpg";
import pencil_art_9 from "../../assets/arts/pencil_art_9.jpg";
import pencil_art_10 from "../../assets/arts/pencil_art_10.jpg";
import pencil_art_11 from "../../assets/arts/pencil_art_11.jpg";
import pencil_art_12 from "../../assets/arts/pencil_art_12.jpg";
import pencil_art_13 from "../../assets/arts/pencil_art_13.jpg";
import pencil_art_14 from "../../assets/arts/pencil_art_14.jpg";
import pencil_art_15 from "../../assets/arts/pencil_art_15.jpg";
import pencil_art_16 from "../../assets/arts/pencil_art_16.jpg";
import pencil_art_17 from "../../assets/arts/pencil_art_17.jpg";
import pencil_art_18 from "../../assets/arts/pencil_art_18.jpg";
import pencil_art_19 from "../../assets/arts/pencil_art_19.jpg";
import pencil_art_20 from "../../assets/arts/pencil_art_20.jpg";
import pencil_art_21 from "../../assets/arts/pencil_art_21.jpg";
import pencil_art_22 from "../../assets/arts/pencil_art_22.jpg";
import pencil_art_23 from "../../assets/arts/pencil_art_23.jpg";

import imaginary_art_1 from "../../assets/arts/imaginary_art_1.jpg";
import imaginary_art_2 from "../../assets/arts/imaginary_art_2.jpg";
import imaginary_art_3 from "../../assets/arts/imaginary_art_3.jpg";

import digtal_art_1 from "../../assets/arts/digtal_art_1.jpg";
import digtal_art_2 from "../../assets/arts/digtal_art_2.jpg";
import digtal_art_3 from "../../assets/arts/digtal_art_3.jpg";
import digtal_art_4 from "../../assets/arts/digtal_art_4.jpg";
import digtal_art_5 from "../../assets/arts/digtal_art_5.jpg";
import digtal_art_6 from "../../assets/arts/digtal_art_6.jpg";
import digtal_art_7 from "../../assets/arts/digtal_art_7.jpg";


const Arts = () => {
  useEffect(() => {
    AOS.init({ 
      duration:800,   
      once: false,     
      easing: "ease-in-out"
    }); 
  }, []);
  const [selectedImage, setSelectedImage] = useState(null);
  const bloodArts = [
    blood_art_1,
    blood_art_2,
    blood_art_3,
    blood_art_4,
    blood_art_5,
    blood_art_6,
    blood_art_7,
    blood_art_8,
    blood_art_9,
    blood_art_10,
    blood_art_11,
    blood_art_12,
    blood_art_13,
    blood_art_14,
    blood_art_15,
    blood_art_16,
    blood_art_17,
    blood_art_18,
    blood_art_19,
    blood_art_20,
    blood_art_21,
    blood_art_22,
    blood_art_23,
    blood_art_24,
    blood_art_25,
    blood_art_26,
    blood_art_27,
    blood_art_28,
    blood_art_29,
    blood_art_30,
    blood_art_31,
    blood_art_32,
    blood_art_33,
    blood_art_34,
    blood_art_35,
    blood_art_36,
    blood_art_37,
    blood_art_38,
    blood_art_39,
    blood_art_40,
  ];
  const pencilArts = [
    pencil_art_1,
    pencil_art_2,
    pencil_art_3,
    pencil_art_4,
    pencil_art_5,
    pencil_art_6,
    pencil_art_7,
    pencil_art_8,
    pencil_art_9,
    pencil_art_10,
    pencil_art_11,
    pencil_art_12,
    pencil_art_13,
    pencil_art_14,
    pencil_art_15,
    pencil_art_16,
    pencil_art_17,
    pencil_art_18,
    pencil_art_19,
    pencil_art_20,
    pencil_art_21,
    pencil_art_22,
    pencil_art_23,
  ];
  const digitalArts = [
    digtal_art_1,
    digtal_art_2,
    digtal_art_3,
    digtal_art_4,
    digtal_art_5,
    digtal_art_6,
    digtal_art_7,
  ];
  const imaginaryArts = [imaginary_art_1, imaginary_art_2, imaginary_art_3];

  const openImage = (img) => {
    setSelectedImage(img);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  const goToWhatsApp = (name_art) => {
    window.open(
      `https://wa.me/917200127265?text=I am Intrested to know more about ${name_art}, Can you share the details?`,
      "_blank"
    );
  };
  return (
    <div className="arts_gallery_container">
      <div className="section_1_arts">
        <div className="innerContainer_sec1_arts">
          <h1 className="heading_art_gallery">Art Gallery</h1>
          <p className="para_art_gallery">
            Explore my diverse collection of artwork spanning different mediums
            and styles. Each piece tells a unique story through color, texture,
            and emotion.
          </p>
        </div>
      </div>
      <div className="section_2_arts">
        <div className="arts_gall_icon_container pencil_art_icon_arts">
          <span>
            <GiPaintBucket />
          </span>
        </div>
        <h1 className="heading_main_arts_container">
          Photo Frame & Own Idea Art
        </h1>
      </div>
      <div className="container_phframe">
        <div className="customize_card_arts phframe_art_cont" data-aos="fade-up">
          <div className="container_hot_custome_card">
            <p>Hot sale🔥</p>
          </div>
          <div className="arts_gall_icon_container customize_arts_icon">
            <span>
              <GiWoodFrame />
            </span>
          </div>
          <h1 className="heading_customize_arts phframe_card_heading">
            Customize Your Photo Frame
          </h1>
          <p className="price_custom_design phframe_card_price">
            <span>Start's From just</span> ₹149
          </p>
          <a href="https://wa.me/917200127265?text=I%20want%20to%20Customize%20Photo%20Frame,Can you please, Give me the more details about it?" target="_blank"><ButtonHome
            name={"customize"}
            className="button_home button_customize_card"
          /></a>
        </div>
        <div className="customize_card_arts phframe_art_cont" data-aos="fade-up">
          <div className="arts_gall_icon_container customize_arts_icon">
            <span>
              <GiSettingsKnobs />
            </span>
          </div>
          <h1 className="heading_customize_arts phframe_card_heading">
            Customize Your Art Idea
          </h1>
          <p className="price_custom_design phframe_card_price yourIdea_art_para">
            <span>Made the way you want</span> 
          </p>
          <a href="https://wa.me/917200127265?text=I%20Have%20an%20Idea%20to%20implement%20my%20art,%20Can%20you%20work%20for%20It?" target="_blank"><ButtonHome
            name={"Make Yours"}
            className="button_home button_customize_card"
          /></a>
        </div>
        <br/>
        <div className="customize_card_arts phframe_art_cont" data-aos="fade-up">
          <div className="arts_gall_icon_container customize_arts_icon">
            <span>
              <GiTShirt />
            </span>
          </div>
          <h1 className="heading_customize_arts phframe_card_heading">
            Customize Your Tshirt
          </h1>
          <p className="price_custom_design phframe_card_price">
            <span>Start's From just</span> ₹450
          </p>
          <a href="https://wa.me/917200127265?text=I%20want%20to%20Customize%20Tshirts,Can you please, Give me the more details about it?" target="_blank"><ButtonHome
            name={"Customize"}
            className="button_home button_customize_card"
          /></a>
        </div>
        <div className="customize_card_arts phframe_art_cont" data-aos="fade-up">
        <div className="new_tag">
            <p>New</p>
          </div>
          <div className="arts_gall_icon_container customize_arts_icon">
            <span>
              <GiCoffeeCup />
            </span>
          </div>
          <h1 className="heading_customize_arts phframe_card_heading">
            Customize Your Coffee Cups
          </h1>
          <p className="price_custom_design phframe_card_price">
            <span>Start's From just</span> ₹250
          </p>
          <a href="https://wa.me/917200127265?text=I%20want%20to%20Customized%20Coffee%20Cups,Can you please, Give me the more details about it?" target="_blank"><ButtonHome
            name={"Customize"}
            className="button_home button_customize_card"
          /></a>
        </div>
      </div>
      <div className="section_2_arts">
        <div className="arts_gall_icon_container">
          <span>
            <GiWaterDrop />
          </span>
        </div>
        <h1 className="heading_main_arts_container">Blood Art</h1>
      </div>
      <div className="section_3_arts">
        {selectedImage && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              background: "rgba(0,0,0,0.8)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 1000,
            }}
          >
            <div style={{ position: "relative" }}>
              <img
                src={selectedImage}
                alt="Large view"
                style={{
                  maxHeight: "85vh",
                  maxWidth: "90vw",
                  borderRadius: "10px",
                }}
              />
              <button
                onClick={closeImage}
                className="close_button_image_view"
              >
                <IoMdClose />
              </button>
            </div>
          </div>
        )}
        <div className="customize_card_arts" data-aos="fade-right">
          <div className="container_hot_custome_card">
            <p>Hot sale🔥</p>
          </div>
          <div className="arts_gall_icon_container customize_arts_icon">
            <span>
              <GiWaterDrop />
            </span>
          </div>
          <h1 className="heading_customize_arts">Customize Your Blood Art</h1>
          <p className="price_custom_design">
            <span>Start's From </span> ₹1199
          </p>
          <ButtonHome
            onClick={() => goToWhatsApp("Blood Art")}
            name={"customize"}
            className="button_home button_customize_card"
          />
        </div>
        {bloodArts.map((eachImage) => (
          <div className="card_art_item" data-aos="fade-left">
            <img loading='lazy' src={eachImage} className="card_arts_image" alt="art" />
            <div
              className="sub_card_card_art"
              onClick={() => openImage(eachImage)}
            >
              View
              <span>
                <FaEye />
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="section_2_arts">
        <div className="arts_gall_icon_container pencil_art_icon_arts">
          <span>
            <GiPencilBrush />
          </span>
        </div>
        <h1 className="heading_main_arts_container">Pencil Art</h1>
      </div>
      <div className="section_3_arts">
        <div className="customize_card_arts" data-aos="fade-right">
          <div className="arts_gall_icon_container customize_arts_icon">
            <span>
              <GiPencilBrush />
            </span>
          </div>
          <h1 className="heading_customize_arts">Customize Your Pencil Art</h1>
          <p className="price_custom_design">
            <span>Start's From</span> ₹999
          </p>
          <ButtonHome
            name={"customize"}
            className="button_home button_customize_card"onClick={() => goToWhatsApp("Pencil Art")}
          />
        </div>
        {pencilArts.map((eachImage) => (
          <div className="card_art_item" data-aos="fade-left">
            <img loading='lazy' src={eachImage} className="card_arts_image" alt="art" />
            <div
              className="sub_card_card_art"
              onClick={() => openImage(eachImage)}
            >
              View
              <span>
                <FaEye />
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="section_2_arts">
        <div className="arts_gall_icon_container pencil_art_icon_arts">
          <span>
            <GiTablet />
          </span>
        </div>
        <h1 className="heading_main_arts_container">Digital Art</h1>
      </div>
      <div className="section_3_arts">
        <div className="customize_card_arts" data-aos="fade-right">
          <div className="arts_gall_icon_container customize_arts_icon">
            <span>
              <GiTablet />
            </span>
          </div>
          <h1 className="heading_customize_arts">Customize Your Digital Art</h1>
          <p className="price_custom_design">
            <span>Start's From </span> ₹499
          </p>
          <ButtonHome
          onClick={() => goToWhatsApp("Digital Art")}
            name={"customize"}
            className="button_home button_customize_card"
          />
        </div>
        {digitalArts.map((eachImage) => (
          <div className="card_art_item" data-aos="fade-left">
            <img loading='lazy' src={eachImage} className="card_arts_image" alt="art" />
            <div
              className="sub_card_card_art"
              onClick={() => openImage(eachImage)}
            >
              View
              <span>
                <FaEye />
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="section_2_arts">
        <div className="arts_gall_icon_container pencil_art_icon_arts">
          <span>
            <GiEyeball />
          </span>
        </div>
        <h1 className="heading_main_arts_container">Imaginary Art</h1>
      </div>
      <div className="section_3_arts">
        <div className="customize_card_arts" data-aos="fade-right">
          <div className="arts_gall_icon_container customize_arts_icon">
            <span>
              <GiEyeball />
            </span>
          </div>
          <h1 className="heading_customize_arts">Customize Your Imaginary Art</h1>
          <p className="price_custom_design">
            <span>Start's From </span> ₹899
          </p>
          <ButtonHome
            onClick={() => goToWhatsApp("Imaginary Art")}
            name={"customize"}
            className="button_home button_customize_card"
          />
        </div>
        {imaginaryArts.map((eachImage) => (
          <div className="card_art_item" data-aos="fade-left">
            <img loading='lazy' src={eachImage} className="card_arts_image" alt="art" />
            <div
              className="sub_card_card_art"
              onClick={() => openImage(eachImage)}
            >
              View
              <span>
                <FaEye />
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Arts;
