import React from "react";
import { themes } from "../../config/const";

export function Carrousel() {


  const tags = [...themes, ...themes].map((theme, index) => (
    <a
      key={index}
      className="mt-2 flex-shrink-0 flex items-center gap-2 py-2 px-4 bg-[var(--primary)] rounded-full text-white font-medium hover:text-[var(--cta)] cursor-pointer transition-colors whitespace-nowrap"
    >
      {theme}
    </a>
  ));

  return (
    <div className="bg-[var(--light)] fixed top-[70px] h-[60px] w-full overflow-hidden z-49 group shadow-md">
      <div className="flex animate-marquee gap-4 w-max ">
        {tags}
      </div>
    </div>
  );
}
