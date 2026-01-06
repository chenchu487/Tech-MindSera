import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// import ServicesPage from "../src/pages/servicespage/ServicesPage";
import Layout from "./layout/Layout";
import About from "./components/About/About";
import ServicesPage from "./pages/servicesPage/servicesPage";
import Footer from "./components/footer/footer";
import Contact from "./components/Contact/Contact";
import Blog from "./components/blog/Blog";


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