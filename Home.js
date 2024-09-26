import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <section className="home">
      <div className="home-content">
        <h1>Hi, I'm Maheer Naqvi</h1>
        <h2>Full-Stack Web Developer</h2>
        <p>I specialize in building responsive web applications using React, JavaScript, and Node.js.</p>
        <button>See My Work</button>
      </div>
      <img src="your-photo.jpg" alt="Your Name" className="home-photo" />
    </section>
  );
};

export default Home;
