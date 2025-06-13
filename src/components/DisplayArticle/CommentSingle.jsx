export const CommentSingle = ({ comment }) => {
  return (
    <div className="flex flex-col gap-4 border-b border-gray-200 pb-4 mb-4 px-6">
      <div className="flex flex-col justify-between items-start">
        <p className="font-bold">
          {comment.user?.username || "Utilisateur inconnu"}
        </p>
        <p>{comment.content}</p>
        <p className="text-[var(--primary)] italic text-sm">
          {new Date(comment.created_at).toLocaleDateString("fr-FR")}
        </p>
      </div>
    </div>
  );
};
