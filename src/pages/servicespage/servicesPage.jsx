import { servicesData } from "../../data/servicesData";
import "./servicesPage.css";

function ServicesPage() {
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
            className={`service-row ${index % 2 === 0 ? "left" : "right"}`}
          >
            <div className="service-icon">{service.icon}</div>

            <div className="service-content">
              <h2>{service.title}</h2>
              <p className="service-desc">{service.full}</p>

              <ul>
                {service.points.map((point, i) => (
                  <li key={i}>✔ {point}</li>
                ))}
              </ul>

              <button className="service-btn">Contact Us</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ServicesPage;
