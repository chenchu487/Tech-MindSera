import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      {/* Background effects */}
      <div className="hero-bg">
        <span className="float-tag">IT Services</span>
        <span className="float-tag">AI & Innovation</span>
        <span className="float-tag">Study Abroad</span>
        <span className="float-tag">Cloud & DevOps</span>
      </div>

      {/* Content */}
      <div className="hero-content">
        <h1 className="hero-title">Build the future with</h1>

        <h2 className="hero-gradient">
          TECH MINDSERA <br /> PRIVATE LIMITED
        </h2>

        <p className="hero-sub">
          IT Services • Global Education • Innovation
        </p>

        <p className="hero-desc">
          We design scalable digital solutions, real-time industry projects,
          and global education pathways that empower businesses and students.
        </p>

        {/* Buttons */}
        <div className="hero-actions">
          <button className="btn-primary">Explore Services</button>
          <button className="btn-ghost">Study Abroad</button>
        </div>

        {/* Trust row */}
        <div className="hero-stats">
          <div><strong>50+</strong><span>Projects</span></div>
          <div><strong>100+</strong><span>Students</span></div>
          <div><strong>10+</strong><span>Technologies</span></div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
