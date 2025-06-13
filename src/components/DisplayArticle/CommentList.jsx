import { useEffect, useState } from "react";
import { fetchComments } from "../../config/functions"; // adapte le chemin si besoin
import { CommentSingle } from "./CommentSingle"; // suppose qu'il est dans le même dossier

export const CommentList = ({ articleId }) => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadComments = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchComments(articleId);
        setComments(data.comments); // data = { comments: [...] }
      } catch (err) {
        setError("Erreur lors du chargement des commentaires");
      } finally {
        setLoading(false);
      }
    };

    loadComments();
  }, [articleId]);

  return (
    <div className="mt-8 text-black bg-white rounded-sm p-4 shadow-md lg:max-w-[800px] w-full mx-auto">
      <h3 className="text-xl font-semibold mb-8 uppercase text-center">Commentaires</h3>

      {loading && <p>Chargement des commentaires...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {!loading && !error && comments.length === 0 && <p>Aucun commentaire pour l'instant.</p>}

      {!loading && !error && comments.map((comment) => (
        <CommentSingle key={comment.id} comment={comment} />
      ))}
    </div>
  );
};
