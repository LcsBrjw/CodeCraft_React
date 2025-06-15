import { LoginModal } from "./LoginModal";
import { UserPanel } from "./UserPanel";
import { useAuth } from "../../context/AuthContext";

export function LateralOverlay({ onClose }) {
  const { isAuthenticated } = useAuth();

  return (
    <div className="fixed top-[70px] right-0 lg:right-[10%] w-full sm:w-[320px] h-auto z-50 md:rounded-bl-lg">
      {isAuthenticated ? (
        <UserPanel onClose={onClose} />
      ) : (
        <LoginModal onClose={onClose} />
      )}
    </div>
  );
}
