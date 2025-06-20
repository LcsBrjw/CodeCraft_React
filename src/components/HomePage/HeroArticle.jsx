
import { useLatestArticle } from "../../config/functions";
import { Link } from "react-router";

export function HeroArticle() {
  const { article, loading } = useLatestArticle();


 if (loading || !article) {
    return <h1>Chargement...</h1>;
  }

  return (
    <div>
      <h1 className="gradient-text text-center text-7xl text-[var(--dark)]">A la une</h1>
      <div className="shadow-md flex flex-col lg:flex-row items-center gap-10 lg:w-[900px] w-full mx-auto bg-[var(--primary)] rounded-sm py-10 px-4 md:px-10">
        <img src={article.banner_url} alt="banner"  className="rounded-sm max-w-[280px] md:max-w-[400px] mx-auto md:max-h-[200px]" />
        <div>
          <h2 className="text-2xl text-white font-medium mb-4">{article.title}</h2>
          <p className="text-white text-sm mb-3">Ecrit par : {article.user.username}</p>
          <p className="text-white font-thin">
            <strong>Aperçu de l'article :</strong>{" "}
            {article.subtitle}
          </p>
          <div className="w-full flex justify-between items-center mt-4">
            <p className="px-2 py-1 bg-[var(--dark)] rounded-full text-white" href="#">{article.tag}</p>
             <Link
              to={`/article/${article.id}`}
              state={{ article }}
              className="px-4 py-2 bg-[var(--light)] text-[var(--dark)] hover:bg-[var(--cta)] hover:text-[var(--light)] rounded-sm"
            >
              Voir plus..
            </Link>
            </div>
        </div>
      </div>
    </div>
  );
}

