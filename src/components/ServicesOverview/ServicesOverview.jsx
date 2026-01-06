import { servicesData } from "../../data/servicesData.jsx";
import { Link } from "react-router-dom";
import "./ServicesOverview.css";

function ServicesOverview() {
  return (
    <section className="services">
      <h2 className="section-title">Our Services</h2>
      <p className="section-sub">
        We deliver technology-driven solutions that empower businesses and students worldwide.
      </p>

      <div className="service-grid">
        {servicesData.slice(0, 4).map(service => (
          
          <div className="service-card" key={service.id}>
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.short}</p>

            <Link to="/services" className="read-more">
              Read More →
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ServicesOverview;
