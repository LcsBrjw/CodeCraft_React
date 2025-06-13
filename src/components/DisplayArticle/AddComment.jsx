import { useState } from "react";
import { addComment } from "../../config/functions.js";

export const AddComment = ({ articleId, onCommentAdded }) => {
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!content.trim()) {
      setError("Veuillez écrire un commentaire.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const data = await addComment({ content }, articleId);
      setContent("");
      if (onCommentAdded) onCommentAdded(data.comment);
    } catch (err) {
      setError(err.message || "Erreur lors de l'envoi");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-8 text-black bg-white rounded-sm p-4 shadow-md lg:max-w-[800px] w-full mx-auto">
      <h3 className="text-xl font-semibold mb-8 uppercase text-center">Ajouter un commentaire</h3>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <textarea
          className="h-30"
          placeholder="Votre commentaire"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          disabled={loading}
          required
        />
        {error && <p className="text-red-500">{error}</p>}
        <button
          type="submit"
          className="cursor-pointer bg-[var(--dark)] text-white w-40 mx-auto py-2 rounded-sm"
          disabled={loading}
        >
          {loading ? "Envoi..." : "Envoyer"}
        </button>
      </form>
    </div>
  );
};
