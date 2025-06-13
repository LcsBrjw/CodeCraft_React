import { Link } from "react-router-dom"
import { Button } from "../Utilitaires/Button"

export function LoginModal({onClose}) {
  return (
    <div className="flex flex-col justify-center items-center gap-4 bg-[var(--primary)] px-4 py-6 md:rounded-bl-lg">
        <form className="flex flex-col gap-4 py-6">
            <input className="bg-white px-2 rounded-md" type="text" placeholder="Username" />
            <input className="bg-white px-2 rounded-md" type="password" placeholder="Password" />
        </form>
        <Button label="Se connecter" />
        <Link onClick={onClose} to="/register" className="text-white hover:text-[var(--cta)]">Créer un compte</Link>
    </div>
    )
}

