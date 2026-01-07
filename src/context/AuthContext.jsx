import { useState, useEffect } from "react";
import { AuthContext } from "./AuthContext";

/* ✅ PROVIDER */
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // Load user from localStorage after mount
  useEffect(() => {
    const savedUser = localStorage.getItem("techmindsera_user");
    if (savedUser) {
      setTimeout(() => {
        setUser(JSON.parse(savedUser));
      }, 0);
    }
  }, []);

  const login = (userData) => {
    localStorage.setItem(
      "techmindsera_user",
      JSON.stringify(userData)
    );
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem("techmindsera_user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
