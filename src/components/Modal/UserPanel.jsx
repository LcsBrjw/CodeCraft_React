import { ROUTES } from "../../config/routes";
import { Link } from "react-router";
import { Button } from "../Utilitaires/Button";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router";

export function UserPanel({ onClose }) {
  const { logout } = useAuth();
  const navigate = useNavigate();


  const actions = [
    { label: "🔔 Notifications", to: "/notifications" },
    { label: "✍️ Nouvel article", to: ROUTES.NEW_ARTICLE },
    { label: "⭐ Favoris", to: "/favorites" },
  ];

  const liens = actions.map((action, index) => (
    <Link
      key={index}
      to={action.to}
      className="flex flex-row items-center gap-2 py-2 text-white font-medium hover:text-[var(--cta)] cursor-pointer"
      onClick={onClose}  // fermer la modale quand on clique sur un lien
    >
      {action.label}
    </Link>
  ));

  const handleLogout = () => {
    logout();
    onClose();
    navigate("/");
  };

  return (
    <div className="flex flex-col justify-center items-center gap-4 bg-[var(--primary)] px-4 py-8 md:rounded-bl-lg">
      <div className="flex flex-col gap-4">{liens}</div>
      <Button label="Déconnexion" onClick={handleLogout} />
    </div>
  );
}
