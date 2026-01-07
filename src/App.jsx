import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext.jsx";
import ProtectedRoute from "./components/ProtectedRoute";

import Layout from "./layout/Layout.jsx";
import Home from "./pages/Home.jsx";
import About from "./components/About/About.jsx";
import ServicesPage from "./pages/Services/ServicesPage.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Blog from "./components/blog/Blog.jsx";
import BlogDetail from "./pages/Blog-Detail/BlogDetail.jsx";
import Footer from "./components/footer/Footer.jsx";

import SignIn from "./components/Sign-In/SignIn.jsx";
import SignUp from "./components/Sign-Up/SignUp.jsx";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";

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
