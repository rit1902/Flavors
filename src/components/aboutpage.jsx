import React from 'react';
import './aboutpage.css';
import teamPhoto from '../assests/team.jpg';
import missionPhoto from '../assests/mission.jpg';
import visionPhoto from '../assests/vision.jpg';

const AboutPage = () => {
  return (
    <div className="about-page">
      <header className="about-header">
        <h1>About Us</h1>
      </header>
      <section className="about-content">
        <article className="mission">
          <img src={missionPhoto} alt="Our Mission" />
          <div className="mission-text">
            <h2>Our Mission</h2>
            <p>Our mission is to bring people together through the love of food, exploring diverse culinary traditions and promoting unity through delightful recipes.</p>
          </div>
        </article>
        <article className="vision">
          <img src={visionPhoto} alt="Our Vision" />
          <div className="vision-text">
            <h2>Our Vision</h2>
            <p>Our vision is to be a global hub for food enthusiasts, celebrating and sharing the rich and diverse flavors of the world.</p>
          </div>
        </article>
        <article className="team">
          <h2>Meet Our Team</h2>
          <img src={teamPhoto} alt="Our Team" />
          <p>We are a dedicated team of culinary experts, food bloggers, and chefs, working tirelessly to bring you the best recipes and food content from around the globe.</p>
        </article>
      </section>
      {/* <footer className="about-footer">
        <p>&copy; {new Date().getFullYear()} FlavÖrs. All rights reserved.</p>
      </footer> */}
    </div>
  );
};

export default AboutPage;
