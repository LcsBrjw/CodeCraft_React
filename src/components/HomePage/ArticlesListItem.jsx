import  { Link } from "react-router";

export function ArticlesListItem({ article }) {
  return (
    <article className="shadow-md flex flex-col sm:flex-row w-full sm:max-w-[600px] article-list-item max-w-[350px] mx-auto mt-8 py-8 px-4 bg-[var(--dark)] rounded-sm">
        <img
            src={article.banner_url}
            alt={article.title}
            className="sm:max-w-[300px] w-full h-auto px-4 md:px-10 mb-4"
        />
        <div className="sm:max-w-[300px] h-auto">
            <h3 className="text-white font-bold text-xl">{article.title}</h3>
            <p className="text-white text-sm mb-3">Ecrit par : {article.user.username}</p>
            <p className="text-white">{article.subtitle}</p>
            <div className="w-full flex justify-between items-center mt-4">
                    <p className="px-2 py-1 border border-white rounded-full text-white" href="#">{article.tag}</p>
                    <Link
                    to={`/article/${article.id}`}
                    state={{ article }}
                    className="px-4 py-2 bg-[var(--light)] text-[var(--dark)] hover:bg-[var(--cta)] hover:text-[var(--light)] rounded-sm"
                    >
                    Voir plus..
                    </Link>
            </div>    
        </div>
    </article>
  );
}  