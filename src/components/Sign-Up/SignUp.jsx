import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../Sign-In/Auth.css";

function SignUp() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    purpose: ""
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = {
      ...form,
      role: form.purpose === "IT Services" ? "client" : "student",
      status: {
        application: "In Progress",
        sop: "Pending",
        visa: "Not Started"
      }
    };

    localStorage.setItem(
      "techmindsera_user",
      JSON.stringify(userData)
    );

    navigate("/sign-in");
  };

  return (
    <section className="auth-page">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h1>Create Account</h1>
        <p className="auth-sub">Start your journey with Tech MindSera</p>

        <input name="name" placeholder="Full Name" required onChange={handleChange} />
        <input type="email" name="email" placeholder="Email" required onChange={handleChange} />
        <input type="password" name="password" placeholder="Password" required onChange={handleChange} />

        <select name="purpose" required onChange={handleChange}>
          <option value="">Select Purpose</option>
          <option>MS Abroad</option>
          <option>Internship</option>
          <option>Training</option>
          <option>IT Services</option>
        </select>

        <button className="btn-primary">
          Sign Up →
        </button>

        <div className="auth-links">
          Already have an account?{" "}
          <Link to="/sign-in">Sign In</Link>
        </div>
      </form>
    </section>
  );
}

export default SignUp;
