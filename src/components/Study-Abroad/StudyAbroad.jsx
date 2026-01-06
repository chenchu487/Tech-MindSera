import { Link } from "react-router-dom";
import "./StudyAbroad.css";

function StudyAbroad() {
  return (
    <section className="study-abroad">
      <div className="study-bg"></div>

      <div className="study-container">
        {/* LEFT CONTENT */}
        <div className="study-content">
          <span className="study-badge">Global Education</span>

          <h2>
            Study Abroad with <br />
            <span>Tech MindSera</span>
          </h2>

          <p className="study-desc">
            We provide complete MS abroad guidance combined with real-time IT
            project experience, ensuring students build both global education
            and industry-ready careers.
          </p>

          <ul className="study-points">
            <li>🎓 MS in USA, Canada & Europe</li>
            <li>📝 SOP, LOR & University Shortlisting</li>
            <li>✈️ Visa Guidance & Post-Arrival Support</li>
            <li>💼 Real-Time IT Projects & Mentorship</li>
          </ul>

          <div className="study-actions">
            <Link to="/services#study-abroad" className="btn-primary">
              Start Your Global Journey
            </Link>

            <Link to="/contact" className="btn-ghost">
              Talk to an Expert
            </Link>
          </div>
        </div>

        {/* RIGHT VISUAL */}
        <div className="study-visual">
          <div className="visual-card">
            <h4>Popular Destinations</h4>
            <div className="flags">
              <span>🇺🇸 USA</span>
              <span>🇨🇦 Canada</span>
              <span>🇩🇪 Europe</span>
              <span>🇦🇺 Australia</span>
            </div>
          </div>

          <div className="visual-card glass">
            <h4>Success Highlights</h4>
            <p>✔ 100+ Students Guided</p>
            <p>✔ Top Universities</p>
            <p>✔ Visa Success Support</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StudyAbroad;
