import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "../Utilitaires/Button";
import { loginUser } from "../../config/functions";
import { useAuth } from "../../context/AuthContext";

export function LoginModal({ onClose }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const data = await loginUser({ username, password });

      localStorage.setItem("token", data.token);

      login({ token: data.token, username });

      alert("Connexion réussie !");
      onClose();
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center gap-4 bg-[var(--primary)] px-4 py-6 md:rounded-bl-lg">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 py-6 w-full max-w-sm"
      >
        <input
          className="bg-white px-2 rounded-md"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          className="bg-white px-2 rounded-md"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {error && <p className="text-red-600">{error}</p>}
        <Button label="Se connecter" type="submit" />
      </form>
      <Link
        onClick={onClose}
        to="/register"
        className="text-white hover:text-[var(--cta)]"
      >
        Créer un compte
      </Link>
    </div>
  );
}
