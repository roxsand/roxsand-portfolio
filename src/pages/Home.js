import React from "react";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="content-grid">
       
        <div className="image-section">
          <div className="image-container">
            <img
              src="Sample_Alcordo.png"
              alt="Roxanne Alcordo"
              className="profile-pic"
            />
          </div>
        </div>

        <div className="text-section">
          <h1 className="name">Hi, I am <span>Roxanne</span> <br /> Zaine L. Alcordo</h1>
          <p className="greeting">
          Thanks for stopping by! Learn about me, explore my collaborative projects, and let’s connect!
          </p>
          <button
            className="download-button"
            onClick={() => {
              window.open('/Alcordo_resume.pdf', '_blank');
            }}
          >
            Download Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
