import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext.jsx";
import ProtectedRoute from "./components/ProtectedRoute";

import Layout from "./layout/Layout";
import Home from "./pages/Home";
import About from "./components/About/About";
import ServicesPage from "./pages/Services/ServicesPage";
import Contact from "./components/Contact/Contact";
import Blog from "./components/blog/Blog";
import BlogDetail from "./pages/Blog-Detail/BlogDetail";
import Footer from "./components/Footer/Footer.jsx";


import SignIn from "./components/Sign-In/SignIn";
import SignUp from "./components/Sign-Up/SignUp";
import Dashboard from "./pages/dashboard/Dashboard";

function App() {
  return (
    <AuthProvider>
      <Layout>
        <Routes>
          {/* PUBLIC ROUTES */}
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />

          {/* AUTH ROUTES */}
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />

          {/* PROTECTED DASHBOARD */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />

          {/* FALLBACK */}
          <Route path="*" element={<Home />} />
        </Routes>

        <Footer />
      </Layout>
    </AuthProvider>
  );
}

export default App;
