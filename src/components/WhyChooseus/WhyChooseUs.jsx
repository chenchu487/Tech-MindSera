import "./WhyChooseUs.css";
import React from "react";

function WhyChooseUs() {
  return (
    <section className="why-section">
      <div className="why-container">

        {/* LEFT CONTENT */}
        <div className="why-left">
          <h2>Why Tech MindSera?</h2>
          <p>
            We are not just a service provider. We are a long-term technology
            and education partner helping businesses and students grow together.
          </p>

          <div className="why-highlight">
            <strong>10+ Technologies</strong>
            <span>Industry-ready skill stack</span>
          </div>

          <div className="why-highlight">
            <strong>Real-World Focus</strong>
            <span>Projects, not just theory</span>
          </div>
        </div>

        {/* RIGHT TIMELINE */}
        <div className="why-right">

          <div className="why-item">
            <span className="dot"></span>
            <div>
              <h4>Industry-Driven Solutions</h4>
              <p>
                We build scalable applications using modern frameworks
                and real-world industry standards.
              </p>
            </div>
          </div>

          <div className="why-item">
            <span className="dot"></span>
            <div>
              <h4>Global Education Expertise</h4>
              <p>
                Complete MS abroad guidance including universities,
                SOP, visa, and post-arrival support.
              </p>
            </div>
          </div>

          <div className="why-item">
            <span className="dot"></span>
            <div>
              <h4>Real-Time Project Experience</h4>
              <p>
                Students work on live projects with mentorship,
                gaining practical confidence.
              </p>
            </div>
          </div>

          <div className="why-item">
            <span className="dot"></span>
            <div>
              <h4>Long-Term Partnership</h4>
              <p>
                We grow together with continuous support,
                innovation, and career guidance.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
