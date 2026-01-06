import "./Blog.css";
import { Link } from "react-router-dom";


const blogData = [
  {
    id: 1,
    title: "Why Real-Time Projects Matter for IT Careers",
    desc: "Learn how real-time industry projects help students gain practical experience and stand out in competitive IT job markets.",
    tag: "IT Careers",
    date: "Jan 10, 2026"
  },
  {
    id: 2,
    title: "MS Abroad: A Complete Roadmap for Students",
    desc: "From choosing the right university to SOP, visa process, and career planning — everything you need to know.",
    tag: "Study Abroad",
    date: "Jan 05, 2026"
  },
  {
    id: 3,
    title: "AI & Automation: The Future of Business Solutions",
    desc: "How AI-driven automation is transforming businesses and creating new opportunities across industries.",
    tag: "AI & Innovation",
    date: "Dec 28, 2025"
  },
  {
    id: 4,
    title: "Top Technologies Every Developer Must Learn in 2026",
    desc: "Explore the most in-demand technologies including AI, Cloud, Salesforce, and Full Stack development.",
    tag: "Technology",
    date: "Dec 20, 2025"
  }
];

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
        {blogData.map(blog => (
          <div className="blog-card glass" key={blog.id}>
            <span className="blog-tag">{blog.tag}</span>

            <h3>{blog.title}</h3>
            <p>{blog.desc}</p>

            <div className="blog-footer">
              <span className="blog-date">{blog.date}</span>
              <a href="#" className="read-more">
                Read More →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Blog;
