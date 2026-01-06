import "./Testimonials.css";

const testimonials = [
  {
    name: "Rohit Kumar",
    role: "MS Student, USA",
    feedback:
      "Tech MindSera guided me from university selection to visa approval. Their support made my MS dream a reality.",
    avatar: "👨‍🎓",
  },
  {
    name: "Anusha Reddy",
    role: "Frontend Developer",
    feedback:
      "The real-time projects and mentorship helped me gain industry confidence and land my first IT role.",
    avatar: "👩‍💻",
  },
  {
    name: "Suresh Naik",
    role: "Startup Founder",
    feedback:
      "Tech MindSera delivered a scalable web solution on time. Very professional and technically strong team.",
    avatar: "🚀",
  },
];

function Testimonials() {
  return (
    <section className="testimonials">
      <h2 className="test-title">Trusted by Students & Businesses</h2>
      <p className="test-sub">
        Real stories from people who transformed their careers with Tech MindSera.
      </p>

      <div className="test-grid">
        {testimonials.map((item, index) => (
          <div className="test-card" key={index}>
            <div className="test-glow"></div>

            <div className="test-avatar">{item.avatar}</div>

            <p className="test-feedback">“{item.feedback}”</p>

            <div className="test-user">
              <strong>{item.name}</strong>
              <span>{item.role}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
