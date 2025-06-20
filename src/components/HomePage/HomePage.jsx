import { useState, useEffect } from "react";
import { HeroArticle } from "./HeroArticle";
import { Banner } from "./Banner";
import { ArticlesList } from "./ArticlesList";
import { fetchArticles } from "../../config/functions";
import { Footer } from "./Footer";
import { Best } from "./Best";

export const HomePage = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function loadArticles() {
      const data = await fetchArticles(8);
      setArticles(data);
    }
    loadArticles();
  }, []);

  return (
    <div className="bg-[var(--light)] min-h-screen flex flex-col">
      <HeroArticle />
      <Banner />
      <div className="flex flex-col gap-8 lg:flex-row w-full mx-auto">
        <div className="w-full lg:w-[66%] xl:w-[83%] lg:pb-4">  
          <ArticlesList articles={articles} />
        </div>
        <div className="w-full lg:w-[34%] xl:w-[17%] lg:border-l-2 border-double bg-white">
          <Best />
          <Footer />
        </div>
      </div>
    </div>
  );
};
