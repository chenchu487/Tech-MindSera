import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";
import Logo from "../../assets/Asset.svg";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        {/* TITLE */}
        <h1 className="hero-title">Build the future with</h1>

        {/* BRAND */}
        <div className="hero-brand">
          <img
            src={Logo}
            alt="Tech MindSera Logo"
            className="hero-logo"
          />
        </div>

        {/* SERVICES */}
        <div className="hero-sub">
          💻 IT Services &nbsp;•&nbsp; 🎓 Global Education &nbsp;•&nbsp; 🚀 Innovation
        </div>

        {/* DESCRIPTION */}
        <p className="hero-desc">
          Tech MindSera is a next-generation IT services and global education
          company helping <strong>businesses build scalable technology</strong>{" "}
          and <strong>students launch global careers</strong> through real-time
          projects, expert mentorship, and industry-ready solutions.
        </p>

        {/* FEATURE PILLS */}
        <div className="hero-features">
          <span>🚀 Real-Time Industry Projects</span>
          <span>🌍 MS & Study Abroad Guidance</span>
          <span>🧠 Expert Mentorship</span>
          <span>⚙️ Modern Tech Stack</span>
        </div>

        {/* CTA BUTTONS */}
        <div className="hero-actions">
          <Link to="/services" className="btn-primary">
            Explore Services →
          </Link>

          <Link to="/contact" className="btn-ghost">
            Contact Us
          </Link>
        </div>

        {/* TRUST STRIP */}
        <div className="hero-trust">
          <span>✔ Industry-Driven Curriculum</span>
          <span>✔ Live Project Experience</span>
          <span>✔ Career-Focused Guidance</span>
        </div>

        {/* STATS */}
        <div className="hero-stats">
          <div>
            <strong>50+</strong>
            <span>Projects</span>
          </div>
          <div>
            <strong>100+</strong>
            <span>Students</span>
          </div>
          <div>
            <strong>10+</strong>
            <span>Technologies</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
