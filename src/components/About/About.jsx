import "./About.css";
import { Link } from "react-router-dom";

function About() {
  return (
    <section className="about-page">
      {/* Background glow */}
      <div className="about-bg-glow"></div>

      {/* MAIN CONTENT */}
      <div className="about-wrapper">
        {/* LEFT CONTENT */}
        <div className="about-left">
          <span className="about-label">About Tech MindSera</span>

          <h1>
            Building Technology.
            <br />
            Empowering Global Futures.
          </h1>

          <p>
            Tech MindSera is a next-generation IT services and global education
            startup focused on delivering scalable digital solutions, real-time
            industry projects, and overseas education guidance.
          </p>

          <p>
            We bridge the gap between <strong>technology</strong>,{" "}
            <strong>innovation</strong>, and{" "}
            <strong>global opportunities</strong> by helping businesses scale
            digitally and enabling students to build successful international
            careers.
          </p>

          {/* HIGHLIGHTS */}
          <ul className="about-highlights">
            <li>✔ Industry-ready IT Solutions</li>
            <li>✔ Real-time Projects & Internships</li>
            <li>✔ MS & Study Abroad Guidance</li>
            <li>✔ Global Career Mentorship</li>
          </ul>

          {/* ACTIONS */}
          <div className="about-actions">
            <Link to="/services" className="btn-primary">
              Explore Our Services →
            </Link>
            <Link to="/contact" className="btn-outline">
              Contact Us
            </Link>
          </div>
        </div>

        {/* RIGHT FEATURES */}
        <div className="about-right">
          <div className="about-card">
            <h3>Technology Excellence</h3>
            <p>
              We design and deliver scalable, secure, and future-ready
              applications using modern tech stacks.
            </p>
          </div>

          <div className="about-card">
            <h3>Education & Careers</h3>
            <p>
              Hands-on learning with real-time projects, internships, and
              end-to-end study abroad guidance.
            </p>
          </div>

          <div className="about-card">
            <h3>Global Reach</h3>
            <p>
              Supporting students and businesses across multiple countries with
              mentorship and execution.
            </p>
          </div>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="about-divider"></div>

      {/* TRUST STATS */}
      <div className="about-stats">
        <div>
          <strong>50+</strong>
          <span>Projects Delivered</span>
        </div>
        <div>
          <strong>100+</strong>
          <span>Students Guided</span>
        </div>
        <div>
          <strong>10+</strong>
          <span>Technologies</span>
        </div>
        <div>
          <strong>Multiple</strong>
          <span>Countries Served</span>
        </div>
      </div>
    </section>
  );
}

export default About;
