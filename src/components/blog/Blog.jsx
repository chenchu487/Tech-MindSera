import "./Blog.css";
import { Link } from "react-router-dom";
import blogData from "../../data/blogData";

function Blog() {
  return (
    <section className="blog-page">
      {/* BACKGROUND GLOW */}
      <div className="blog-bg-glow"></div>

      {/* HERO */}
      <div className="blog-hero">
        <span className="blog-badge">Tech MindSera Blog</span>
        <h1>Insights, Knowledge & Industry Trends</h1>
        <p>
          Stay updated with the latest insights on technology, global education,
          real-time projects, and career growth.
        </p>
      </div>

      {/* BLOG GRID */}
      <div className="blog-container">
        {blogData.map((blog) => (
          <div className="blog-card glass" key={blog.id}>
            <span className="blog-tag">{blog.tag}</span>

            <h3>{blog.title}</h3>
            <p>{blog.desc}</p>

            <div className="blog-footer">
              <span className="blog-date">{blog.date}</span>

              {/* IMPORTANT: Dynamic blog link */}
              <Link
                to={`/blog/${blog.slug}`}
                className="read-more"
              >
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Blog;
