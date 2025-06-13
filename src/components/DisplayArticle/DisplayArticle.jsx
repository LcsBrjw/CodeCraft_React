import { useLocation, useNavigate } from "react-router";
import { Button } from "../Utilitaires/Button";

export const DisplayArticle = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const article = location.state?.article;

  if (!article) {
    return <p>Chargement de l'article...</p>;
  }

  return (
    <div className="flex flex-col gap-8 lg:max-w-[900px] w-full mx-auto bg-[var(--primary)] rounded-sm py-10 px-4 md:px-10">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 px-4 py-2 bg-[var(--primary)] border-2 text-white w-40 rounded-sm cursor-pointer hover:border-[var(--cta)]"
      >
        ← Retour
      </button>
      <img src={article.banner_url} alt="banner" className="rounded-sm max-w-[280px] md:max-w-[400px] lg:max-w-[900px] mx-auto" />
      <h2 className="text-center text-2xl text-white font-medium mb-4">{article.title}</h2>
      <p className="text-white font-medium text-center">{article.subtitle}</p>
      <p className="text-white font-thin text-justify">{article.content}</p>
      <div className="w-full flex justify-between items-center mt-4">
        <a className="px-2 py-1 bg-[var(--dark)] rounded-full text-white" href="#">{article.tag}</a>
        <p className="text-right text-white"><strong>Ecrit par :</strong> {article.user.username}</p>
      </div>
    </div>
  );
};
