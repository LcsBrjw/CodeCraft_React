export const ArticleSection = ({ article }) => {
  return (
    <div className="flex flex-col gap-4">
      <img
        src={article.banner_url}
        alt="banner"
        className="rounded-sm max-w-[280px] md:max-w-[400px] lg:max-w-[900px] mx-auto"
      />
      <h2 className="text-center text-2xl text-white font-medium mb-4">
        {article.title}
      </h2>
      <p className="text-white font-medium text-center">{article.subtitle}</p>
      <p className="text-white font-thin text-justify">{article.content}</p>
      <div className="w-full flex justify-between items-center mt-4">
        <a
          className="px-2 py-1 bg-[var(--dark)] rounded-full text-white"
          href="#"
        >
          {article.tag}
        </a>
        <p className="text-right text-white">
          <strong>Écrit par :</strong> {article.user.username}
        </p>
      </div>
    </div>
  );
};
