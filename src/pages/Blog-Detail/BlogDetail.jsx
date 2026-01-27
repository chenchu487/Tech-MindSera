import { useParams, Link } from "react-router-dom";
import blogData from "../../data/blogData.mjs";  
import "./BlogDetail.css";

function BlogDetail() {
  const { slug } = useParams();
  const blog = blogData.find(b => b.slug === slug);

  if (!blog) {
    return (
      <h2 style={{ padding: "120px", textAlign: "center" }}>
        Blog not found
      </h2>
    );
  }

  return (
    <section className="blog-detail">
      <span className="blog-tag">{blog.tag}</span>
      <h1>{blog.title}</h1>
      <span className="blog-date">{blog.date}</span>

      <p className="blog-intro">{blog.content.intro}</p>

      {blog.content.sections.map((sec, i) => (
        <div key={i} className="blog-section">
          <h3>{sec.heading}</h3>
          <p>{sec.text}</p>
        </div>
      ))}

      {/* CTA BUTTONS */}
      <div className="blog-cta">
        <Link to="/contact" className="btn-primary">
          Contact Us
        </Link>

        <Link to="/services" className="btn-outline">
          Go to Services
        </Link>
      </div>
    </section>
  );
}

export default BlogDetail;
