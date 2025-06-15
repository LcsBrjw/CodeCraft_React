import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Au montage, vérifier si token existe dans localStorage
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
      // Optionnel : tu peux décoder le token et récupérer les infos user
      // ou faire une requête API pour valider et récupérer user
    }
  }, []);

  const login = ({ token, username }) => {
    setIsAuthenticated(true);
    setUser({ username }); // ou user complet si tu l’as
    localStorage.setItem("token", token);
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, user, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
