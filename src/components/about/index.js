import { useEffect } from "react";
import AOS from 'aos';
import "./index.css";
import aboutBanner  from '../../assets/aboutBanner.jpg'
import artist from "../../assets/artist.jpg";
import googleStarImg from '../../assets/Google/googleStarImg.png'
import googleImg from '../../assets/Google/googleImg.png'
import reviewerGoogle from '../../assets/Google/reviewerGoogle.jpg'
const About = () => {
  useEffect(() => {
    AOS.init({ 
      duration:800,   
      once: false,     
      easing: "ease-in-out",}); 
  }, []);
  const reviews = [
  {
    id: 1,
    name: "Sherine Alice",
    avatar: reviewerGoogle,
    rating: 5,
    text:
      "Very talented artist. Beautiful art works are done here. Please do contact him if you need good art works.",
  },
  {
    id: 2,
    name: "Bharath Vishwa",
    avatar: reviewerGoogle,
    rating: 5,
    text:
      "Affordable Price compared to other's.... Art Quality is realistic ❤️",
  },
  {
    id: 3,
    name: "Kishor Kumar",
    avatar:reviewerGoogle,
    rating: 5,
    text:
      "Very talanted person when I see the blood art I melted by his drawing romba thanks bro❤️‍🔥💥🥳 …",
  },
    {
    id: 4,
    name: "Mr Ranjith Smart",
    avatar:reviewerGoogle,
    rating: 5,
    text:
      "Super quality work very genuine person 100% trusted.. level quality.. oh thank you so much for your work my girlfriend very very happy",
  },
  {
    id: 5,
    name: "Merlin Mudiappan",
    avatar:reviewerGoogle,
    rating: 5,
    text:
      "The blood art frame holds the heart’s deepest emotions.Every shade of red speaks of love, loss, and longing.It is not just art, but ...",
  },
];

const Star = () => (
  <img
    src={googleStarImg}
    className="image_star_ratings"
    alt="star"
  />
);

  return(
  <>
    <div className="section_1_arts">
      <div className="innerContainer_sec1_arts">
        <h1 className="heading_art_gallery">About'</h1>
        <p className="para_art_gallery">
          My art is a reflection of moments, emotions, and perspectives, brought
          to life through colors and creativity.
        </p>
      </div>
    </div>

    <div className="container_about">
      <h1 className="heading_about">About The Artist</h1>
      <div className="container_items_about">
        <div className="container_1_about" data-aos="fade-up">
          <div className="card_artist">
            <img loading='lazy' src={artist} className="artist_image" alt="artist" />
          </div>
        </div>
        <div className="container_2_about" data-aos="fade-up">
          <p className="para_1_about">
            I’m <span>Robby</span>, the heart behind{" "}
            <span>Robby Artistry 🎨</span>. With over 5 years of experience in
            portrait art and custom frames, I specialize in creating artworks
            that capture emotions and turn memories into something timeless.
            <br />
            <br />
            From realistic pencil portraits to unique blood art and affordable
            photo frames, every piece I create is filled with detail, passion,
            and love.
            <br />
            <br />
            <br />
            Explore my diverse collection of artwork spanning different mediums
            and styles. Each piece tells a unique story through color, texture,
            and emotion.
            <br />
            <br />
            <br />
            My art is a reflection of moments, emotions, and perspectives,
            brought to life through colors and creativity. I explore various
            styles and techniques to craft timeless expressions that connect
            deeply with the viewer.
            <br />
            <br />✨ Art isn’t just a drawing — it’s a story that lives forever.
          </p>
        </div>
      </div>
    </div>

    <div className="google-reviews-container">
      <h1 className="heading-canal-teratements heading-google-reviews">
        Google Reviews
      </h1>

      <div className="container-cards-google">
        {/* Intro block */}
        <div className="google-intro-container">
          <img
            src={googleImg}            
            className="google-intro-img"
            alt="google"
          />

          <div className="intro-part1-containter">
            <div className="container-ratings">
              <img
                src={googleStarImg}
                className="rating-star-intro"
                alt="star"
              />
              <hr className="horizontal-line-google-intro" />
              <h1 className="rating-txt-google-intro">5.0</h1>
            </div>

            <h1 className="counts-google-intro">(20+)</h1>
            <p className="para-google-intro">Verified Google Ratings</p>
          </div>
        </div>

        <hr className="horizontal-line-google-review" />

        {/* Cards */}
        <div className="cards-google-review-container">
          {reviews.map((r) => (
            <div className="card-google-review" key={r.id}>
              <div className="google-logo-corner">
                <img
                  src={googleImg}
                  className="image-corner-google-logo"
                  alt="google logo"
                />
              </div>

              <img loading='lazy' src={r.avatar} className="reviewer_logo" alt="reviewer" />
              <h1 className="reviewer-name-google">{r.name}</h1>

              <div className="ratings_reviewer-google">
                {Array.from({ length: r.rating }).map((_, i) => (
                  <Star key={i} />
                ))}
              </div>

              <p className="para-reviewer-google">{r.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>

    <div className="explore_social_videos">
      <h1 className="heading_about">Explore Our Feautured Videos</h1>
      <div className="container_cards_social_videos">
      <div className="card_youtube_video" data-aos="flip-up">
        <div class="video-container">
          <iframe
            width="350"
            height="415"
            src="https://www.youtube.com/embed?list=UUmfr6-6THflc1KBx6pFG7qg&autoplay=0&mute=1&loop=1&playlist=UUmfr6-6THflc1KBx6pFG7qg"
            title="YouTube Latest Videos"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <div className="card_instagram" data-aos="flip-up">
        <div class="video-container">
          <blockquote
            class="instagram-media"
            data-instgrm-permalink="https://www.instagram.com/p/DESZ_6HzHlP/"
            data-instgrm-version="14"
          ></blockquote>
          <script async src="//www.instagram.com/embed.js"></script>
        </div>
      </div>
      </div>
    </div>
  </>
)
}
export default About;
