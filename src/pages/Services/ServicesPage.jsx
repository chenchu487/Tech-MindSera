import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import servicesData  from "../../../src/data/ServicesData.jsx";
import "../Services/ServicesPage.css";
import { Link } from "react-router-dom";

function ServicesPage() {
    const location = useLocation();
    useEffect(() => {
        if (location.hash) {
            const element = document.getElementById(location.hash.slice(1));
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, [location]);

  return (
    <section className="services-page">
      <div className="services-hero">
        <h1>Our Services</h1>
        <p>
          Explore our complete range of technology and education services designed
          to empower businesses and students globally.
        </p>
      </div>

      <div className="services-list">
        {servicesData.map((service, index) => (
         <div
  key={service.id}
  id={service.id}
  className={`service-block ${index % 2 === 0 ? "left" : "right"}`}
>
  <div className="service-badge">
    
    <div className="badge-icon">{service.icon}</div>
  </div>

  <div className="service-card">
    <h2>{service.title}</h2>
    <p className="service-desc">{service.full}</p>

    <ul>
      {service.points.map((point, i) => (
        <li key={i}>✔ {point}</li>
      ))}
    </ul>

    <Link to="/Contact" className="service-btn">Contact Us</Link>
  </div>
</div>

        ))}
      </div>
    </section>
  );
}

export default ServicesPage;
