import "./HowWeWork.css";

function HowWeWork() {
  return (
    <section className="how-work">
      <div className="how-header">
        <h2>How We Work</h2>
        <p>
          A proven, transparent, and execution-focused approach that delivers
          real results for businesses and students.
        </p>
      </div>

      <div className="how-timeline">

        <div className="how-step">
          <div className="step-number">01</div>
          <div className="step-content">
            <h3>Discover & Understand</h3>
            <p>
              We start by deeply understanding your goals, challenges,
              technical requirements, or study-abroad aspirations.
            </p>
          </div>
        </div>

        <div className="how-step">
          <div className="step-number">02</div>
          <div className="step-content">
            <h3>Plan & Strategize</h3>
            <p>
              Our experts design a clear roadmap — technology stack, timeline,
              milestones, or academic pathway — tailored to you.
            </p>
          </div>
        </div>

        <div className="how-step">
          <div className="step-number">03</div>
          <div className="step-content">
            <h3>Build / Guide</h3>
            <p>
              We develop scalable solutions or guide students through real-time
              projects, applications, and hands-on execution.
            </p>
          </div>
        </div>

        <div className="how-step">
          <div className="step-number">04</div>
          <div className="step-content">
            <h3>Deliver & Support</h3>
            <p>
              We ensure smooth delivery, continuous support, mentoring, and
              long-term success even after project completion.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default HowWeWork;
