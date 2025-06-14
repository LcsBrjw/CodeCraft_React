import { useState, useEffect } from "react";
import { API_URL } from "./const";



//  ENVOI D'UN NOUVEL ARTICLE :
 
 export const handleSubmit = async (e, formData) => {
    e.preventDefault();

    try {
      const response = await fetch(`${API_URL}/new-article`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Erreur lors de la création de l'article");

      const data = await response.json();
      console.log("Article créé :", data);
      return true;
      // reset form or navigate
    } catch (err) {
      console.error("Erreur : ", err.message);
      return false;
    }
  };


  // RECUPERATION DE L'ARTICLE LE PLUS RECENT :
export const useLatestArticle = () => {
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLatestArticle = async () => {
      try {
        const response = await fetch(`${API_URL}/articles/latest`);
        const data = await response.json();
        setArticle(data);
      } catch (error) {
        console.error("Erreur lors du fetch de l'article :", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLatestArticle();
  }, []);

  return { article, loading };
};

// RECUPERATION DE TOUS LES COMMENTAIRES
export async function fetchComments(articleId) {
  const response = await fetch(`${API_URL}/article/${articleId}/comments`);

  if (!response.ok) {
    throw new Error("Erreur lors de la récupération des commentaires.");
  }
  return response.json();
}


// ENVOI D'UN NOUVEAU COMMENTAIRE
export async function addComment(commentData, articleId) {
  const response = await fetch(`${API_URL}/article/${articleId}/comment`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(commentData),
  });
  if (!response.ok) {
    throw new Error("Erreur lors de l'envoi du commentaire");
  }
  return response.json();
}




// CREATION D'UN NOUVEL UTILISATEUR

export async function registerUser({ username, email, password, password_confirmation }) {
  const response = await fetch(`${API_URL}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      email,
      password,
      password_confirmation,
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Erreur lors de l'inscription.");
  }

  return data;
}


// GESTION DE LA CONNEXION

// functions.js

export async function loginUser({ username, password }) {
  const response = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  });

  const data = await response.json();
  console.log("Réponse login:", data);
  localStorage.setItem("token", data.token);



  if (!response.ok) {
    throw new Error(data.message || "Erreur lors de la connexion.");
  }

  return data; // data.token attendu ici
}
