export function Button({ label, onClick, type = "button", className = "" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-[var(--cta)] cursor-pointer hover:bg-[var(--primary)] border-2 border-[var(--cta)] hover:border-[var(--cta)] text-white font-medium px-3 py-1 rounded-md ${className}`}
    >
      {label}
    </button>
  );
}
