import { useState } from "react";

export function Register({ onClose }) {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  if (formData.password !== formData.password2) {
    setError("Les mots de passe ne correspondent pas !");
    return;
  }

  try {
    const response = await fetch("http://localhost:3000/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
        body: JSON.stringify({
        pseudo: formData.pseudo,
        email: formData.email,
        password: formData.password,
        password_confirmation: formData.password2
        }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Erreur lors de l'inscription.");
    }

    console.log("Inscription réussie :", data);
    // Tu peux rediriger, afficher un message de succès ou fermer le formulaire
    if (onClose) onClose();
  } catch (err) {
    setError(err.message);
  }
};


  return (
    <section style={{background:"linear-gradient(to bottom, var(--dark) 0%, var(--primary) 35%, var(--primary) 70%, var(--dark) 100%)", minHeight:"100vh"}} className="w-full">
        <div  className="p-6  rounded-md max-w-md mx-auto">
            <div className="mb-4">
                <img
                className="mx-auto my-8 border-2 border-white rounded-xl"
                src="./src/assets/img/logo-dark.png"
                alt="Logo"
                width={120}
                />
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                <label htmlFor="username" className="block font-semibold mb-1 text-white">
                    Nom d'utilisateur :
                </label>
                <input
                    id="username"
                    type="text"
                    placeholder="Choisissez un nom d'utilisateur"
                    value={formData.username}
                    onChange={handleChange}
                    required
                    className="bg-[var(--primary)] text-white w-full border rounded px-3 py-2"
                />
                </div>

                <div>
                <label htmlFor="email" className="block font-semibold mb-1 text-white">
                    Adresse e-mail :
                </label>
                <input
                    id="email"
                    type="email"
                    placeholder="ex : xyz@xyz.fr"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-[var(--primary)] text-white w-full border rounded px-3 py-2"
                />
                </div>

                <div>
                <label htmlFor="password" className="block font-semibold mb-1 text-white">
                    Mot de passe :
                </label>
                <input
                    id="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="bg-[var(--primary)] text-white w-full border rounded px-3 py-2"
                />
                </div>

                <div>
                <label htmlFor="password2" className="block font-semibold mb-1 text-white">
                    Vérifier mot de passe :
                </label>
                <input
                    id="password2"
                    type="password"
                    value={formData.password2}
                    onChange={handleChange}
                    required
                    className="bg-[var(--primary)] text-white w-full border rounded px-3 py-2"
                />
                </div>

                {error && <p className="text-red-600">{error}</p>}

                <div className="flex justify-between items-center">
                <button
                    type="submit"
                    className=" cursor-pointer bg-[var(--cta)] hover:bg-[var(--primary)] border-2 border-[var(--cta)] hover:border-[var(--cta)] text-white px-3 py-1 rounded-md"
                >
                    C'est parti !!
                </button>
                <a
                    href="/"
                    type="button"
                    onClick={onClose}
                    className="text-white cursor-pointer  hover:text-[var(--cta)] underline"
                >
                    Retour à l'accueil
                </a>
                </div>
            </form>
        </div>
    </section>
  );
}
