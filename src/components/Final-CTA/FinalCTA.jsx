import { Link } from "react-router-dom";
import "./FinalCTA.css";

function FinalCTA() {
  return (
    <section className="final-cta">
      {/* background glow */}
      <div className="cta-bg"></div>

      <div className="cta-content glass">
        <h2>
          Ready to Build Your <span>Future</span> with Tech MindSera?
        </h2>

        <p>
          Whether you’re looking for cutting-edge IT solutions, real-time
          project experience, or global MS study guidance — our experts are
          ready to help you take the next step.
        </p>

        <div className="cta-actions">
          <Link to="/contact" className="cta-primary">
            Book Free Consultation →
          </Link>

          <Link to="/services" className="cta-secondary">
            Explore Services
          </Link>
        </div>

        {/* trust line */}
        <div className="cta-trust">
          <span>✔ Industry Experts</span>
          <span>✔ Real-Time Projects</span>
          <span>✔ Global Education Support</span>
        </div>
      </div>
    </section>
  );
}

export default FinalCTA;
