import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
// import ServicesPage from "../src/pages/servicespage/ServicesPage";
import Layout from "./layout/Layout.jsx";
import About from "./components/About/About.jsx";
import ServicesPage from "./pages/Services/ServicesPage.jsx";
import Footer from "./components/footer/Footer.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Blog from "./components/blog/Blog.jsx";


function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </Layout>
  );
}

export default App;