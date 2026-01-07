import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../context/useAuth";
import "./Auth.css";

function SignIn() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const savedUser = JSON.parse(
      localStorage.getItem("techmindsera_user")
    );

    if (!savedUser) {
      alert("No account found. Please Sign Up.");
      return;
    }

    login(savedUser);
    navigate("/dashboard");
  };

  return (
    <section className="auth-page">
      <form className="auth-form" onSubmit={handleLogin}>
        <h1>Welcome Back</h1>
        <p className="auth-sub">Sign in to continue</p>

        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />

        {/* EXTRA ROW */}
        <div className="auth-row">
          <span></span>
          <Link to="/forgot-password" className="forgot-link">
            Forgot Password?
          </Link>
        </div>

        <button className="btn-primary">
          Sign In →
        </button>

        <div className="auth-links">
          Don’t have an account?{" "}
          <Link to="/sign-up">Create Account</Link>
        </div>
      </form>
    </section>
  );
}

export default SignIn;
