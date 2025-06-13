import { useState } from "react";
import { Button } from "../Utilitaires/Button";
import { handleSubmit } from "../../config/functions";
import { SelectTag } from "./SelectTag";
import { themes } from "../../config/const";

export const NewArticle = () => {
  const [formData, setFormData] = useState({
    title: "",
    subtitle: "",
    content: "",
    image: "",
    tags: "",
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleTagChange = (tag) => {
    setFormData(prev => ({
      ...prev,
      tags: tag,
    }));
  };

  const onSubmit = async (e) => {
    const success = await handleSubmit(e, formData);
    if (success) {
      setFormData({
        title: "",
        subtitle: "",
        content: "",
        image: "",
        tags: "",
      });
    }
  };

  return (
    <div className="p-4 max-w-[1200px] mx-auto bg-[var(--primary)] rounded-sm my-10 px-20%">

      <h1 className="text-2xl font-medium mb-4 text-center my-5 text-white">Créer un nouvel article</h1>

      <form onSubmit={onSubmit} className="flex flex-col gap-6 mt-10 md:px-10% text-white">

        <label htmlFor="title" className="">Titre de l'article</label>
        <input
          className="bg-white rounded-sm text-[var(--dark)] px-3"
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Titre"
        />

        <label htmlFor="subtitle" className="">Sous-titre de l'article</label>
        <input
          className="bg-white rounded-sm text-[var(--dark)] px-3"
          type="text"
          name="subtitle"
          value={formData.subtitle}
          onChange={handleChange}
          placeholder="Sous-titre"
        />

        <label htmlFor="tags" className="">Tags de l'article</label>
        <SelectTag
          themes={themes}
          selectedTag={formData.tags}
          onChange={handleTagChange}
        />

        <label htmlFor="content" className="">Contenu de l'article</label>
        <textarea
          className="bg-white rounded-sm text-[var(--dark)] px-3 h-100"
          name="content"
          value={formData.content}
          onChange={handleChange}
          placeholder="Contenu"
        />

        <label htmlFor="image" className="">URL de l'image</label>
        <input
          className="bg-white rounded-sm text-[var(--dark)] px-3"
          type="text"
          name="image"
          value={formData.image}
          onChange={handleChange}
          placeholder="URL de l'image"
        />

        <Button type="submit" label="Valider et soumettre l'article" />
      </form>
    </div>
  );
};
