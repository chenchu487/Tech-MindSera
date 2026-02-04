import "./Contact.css";
import { Link } from "react-router-dom";


function Contact() {
  return (
    <section className="contact-page">
      {/* Background Glow */}
      <div className="contact-bg-glow"></div>

      <div className="contact-container">
        {/* LEFT INFO */}
        <div className="contact-info">
          <span className="contact-badge">Get In Touch</span>

          <h1>
            Let’s Build Something
            <br /> Great Together
          </h1>

          <p>
            Whether you are a business looking for digital solutions or a student
            planning your global education journey — Tech MindSera is here to help.
          </p>

          <div className="contact-details">
            <div>
              <strong>📍 Location</strong>
              <span>503, Capital Park, Cyber Hills Colony, VIP Hills, Silicon Valley, Madhapur, Hyderabad, Telangana 500081</span>
            </div>
            <div>
              <strong>📧 Email</strong>
              <span>info@techmindsera.com</span>
            </div>
            <div>
              <strong>📞 Phone</strong>
              <span>+91 98855 46060</span>
            </div>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="contact-form glass">
          <h3>Send us a message</h3>

          <form>
            <div className="form-group">
              <input type="text" placeholder="Your Name" required />
            </div>

            <div className="form-group">
              <input type="email" placeholder="Your Email" required />
            </div>

            <div className="form-group">
              <input type="text" placeholder="Subject" />
            </div>

            <div className="form-group">
              <textarea placeholder="Your Message" rows="5"></textarea>
            </div>

            <button type="submit" className="btn-primary full">
              Send Message →
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
