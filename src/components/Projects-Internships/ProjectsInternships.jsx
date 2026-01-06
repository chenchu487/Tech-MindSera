import "./ProjectsInternships.css";

function ProjectsInternships() {
  return (
    <section className="projects">
      <div className="projects-header">
        <h2>Real-Time Projects & Internships</h2>
        <p>
          Work on industry-level live projects guided by experienced mentors,
          designed to make you job-ready from day one.
        </p>
      </div>

      <div className="projects-grid">
        <div className="project-card">
          <span className="badge">Live Projects</span>
          <h3>Industry Client Projects</h3>
          <p>
            Work on real client requirements, production-level code,
            and modern tech stacks used by IT companies.
          </p>
          <ul>
            <li>✔ Real client use-cases</li>
            <li>✔ Git & deployment</li>
            <li>✔ Agile workflow</li>
          </ul>
        </div>

        <div className="project-card highlight">
          <span className="badge">Internships</span>
          <h3>Internship Program</h3>
          <p>
            Structured internships with mentorship, performance tracking,
            and industry-recognized certification.
          </p>
          <ul>
            <li>✔ Internship certificate</li>
            <li>✔ Mentor support</li>
            <li>✔ Resume projects</li>
          </ul>
        </div>

        <div className="project-card">
          <span className="badge">Career Support</span>
          <h3>Placement Guidance</h3>
          <p>
            From project explanation to interview preparation,
            we support you till placement.
          </p>
          <ul>
            <li>✔ Mock interviews</li>
            <li>✔ Resume building</li>
            <li>✔ Career mentoring</li>
          </ul>
        </div>
      </div>

      <div className="projects-cta">
        <a href="/contact" className="cta-primary">
          Start Your Internship →
        </a>
        <a href="/services" className="cta-secondary">
          View All Programs
        </a>
      </div>
    </section>
  );
}

export default ProjectsInternships;
