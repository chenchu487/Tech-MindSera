import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";
import Logo from "../../assets/Asset.svg";


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

        <div className="hero-brand">
          <img
            src={Logo}
            alt="Tech MindSera Logo"
            className="hero-logo"
          />

          {/* <h2 className="hero-gradient">
            TECH <br />
            MINDSERA <br />

          </h2> */}
        </div>


        <div className="hero-sub">
          <span className="service-pill"> 💻 IT Services</span>
          <span className="service-pill"> 🎓 Global Education</span>
          <span className="service-pill"> 🚀 Innovation</span>
        </div>


        <p className="hero-desc">
          We design scalable digital solutions, real-time industry projects,
          and global education pathways that empower businesses and students.
        </p>

        {/* Buttons */}
        <div className="hero-actions">
          <Link to="/services" className="btn-primary">
            Explore Services
          </Link>

          <Link to="/services#study-abroad" className="btn-ghost">
            Study Abroad
          </Link>
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
