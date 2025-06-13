import { HeroArticle } from "./HeroArticle";
import { Banner } from "./Banner";



export const HomePage = () => {
  return (
    <div className="bg-[var(--light)] min-h-screen flex flex-col">
      <HeroArticle />
      <Banner />
    </div>
  );
};