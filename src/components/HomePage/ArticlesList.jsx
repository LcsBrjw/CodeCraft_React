import { ArticlesListItem } from './ArticlesListItem';

export const ArticlesList = ({ articles }) => {
  return (
    <div className="article-list grid grid-cols-1 xl:grid-cols-2 gap-8">
      {articles.map(article => (
        <ArticlesListItem key={article.id} article={article} />
      ))}
    </div>
  );
};

