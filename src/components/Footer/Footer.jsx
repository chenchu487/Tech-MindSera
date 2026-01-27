import "./Footer.css";
import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Asset.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-glow"></div>

      <div className="footer-container">
        {/* BRAND */}
        <div className="footer-brand">
          <div className="footer-logo">
  <img
    src={Logo}
    alt="Tech MindSera Logo"
    className="footer-logo-img"
  />
</div>


          <p className="footer-desc">
            Tech MindSera is an IT services & global education startup delivering
            scalable digital solutions, real-time projects, and study abroad
            guidance for students and businesses worldwide.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/careers">Careers</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contact</Link>
        </div>

        {/* SERVICES */}
        <div className="footer-col">
          <h4>Services</h4>
          <Link to="/services#it-services">IT Services</Link>
          <Link to="/services#ai">AI & Innovation</Link>
          <Link to="/services#internships">Internships</Link>
          <Link to="/services#training">Corporate Training</Link>
        </div>

        {/* STUDY ABROAD */}
        <div className="footer-col">
          <h4>Study Abroad</h4>
          <p>MS in USA, Canada & Europe</p>
          <p>SOP & Visa Guidance</p>
          <p>University Shortlisting</p>
        </div>

        {/* CONTACT */}
        <div className="footer-col">
          <h4>Contact</h4>
          <p>📍 India</p>
          <p>📧 info@techmindsera.com</p>
          <p>📞 +91 98855 46060</p>

          <div className="socials">
            <a href="#">🌐</a>
            <a href="#">💼</a>
            <a href="#">📸</a>
            <a href="#">🐦</a>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} Tech MindSera. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
