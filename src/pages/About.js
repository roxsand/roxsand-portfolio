import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/About.css";

const hobbies = [
  {
    title: "Reading",
    description: "Exploring fictional worlds and learning through books.",
    emoji: "📚",
  },
  {
    title: "Gaming",
    description: "Playing video games and connecting with friends online is one of my favorite pastimes.",
    emoji: "🎮",
  },
  {
    title: "Badminton", 
    description: "Playing badminton is a great way to stay active and have fun.",
    emoji: "🏸",
  },
  {
    title: "Watching Movies & series",
    description: "I love watching movies and analyzing them when I'm immersed in the story. I also enjoy anime, especially slice of life and comedy.",
    emoji: "🎥",
  },
  {
    title: "Enjoying music",
    description: "I love listening to songs from any genre, especially those that resonate with me, and I often sing along.",
    emoji: "🎵",
  },
  {
    title: "I love Wildlife",
    description: "I have a deep love for animals and enjoy learning about different species and their natural habitats.",
    emoji: "🐾",
  },
  {
    title: "Photography",
    description: "I love capturing moments and memories through the art of photography.",
    emoji: "📸",
  },
];

const About = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="about-container">
      <h1>About Me</h1>
      <p>Discover the hobbies that shape who I am and bring joy to my life.</p>

      <div className="carousel-container">
        <Slider {...settings}>
          {hobbies.map((hobby, index) => (
            <div key={index}>
              
              <div className="hobby-card">
                <div className="hobby-emoji">{hobby.emoji}</div>
                <div className="hobby-details">
                  <h3>{hobby.title}</h3>
                  <p>{hobby.description}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default About;