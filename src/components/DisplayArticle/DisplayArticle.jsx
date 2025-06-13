import { useLocation, useNavigate } from "react-router";
import { ArticleSection } from "../DisplayArticle/ArticleSection";
import { CommentSection } from "../DisplayArticle/CommentSection";

export const DisplayArticle = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const article = location.state?.article;

  if (!article) {
    return <p>Chargement de l'article...</p>;
  }

  return (
    <div>
      <div className="flex flex-col gap-8 lg:max-w-[900px] w-full mx-auto bg-[var(--primary)] rounded-sm py-10 px-4 md:px-10">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 px-4 py-2 bg-[var(--primary)] border-2 text-white w-40 rounded-sm cursor-pointer hover:border-[var(--cta)]"
      >
        ← Retour
      </button>

      <ArticleSection article={article} />
    </div>
      <CommentSection article={article} />
    </div>
  );
};

