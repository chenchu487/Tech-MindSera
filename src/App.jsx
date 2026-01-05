import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ServicesPage from "./pages/servicespage/ServicesPage";
import Layout from "./layout/Layout";
import About from "./components/About/About";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Layout>
  );
}

export default App;