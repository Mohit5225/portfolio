// app/components/ProjectCard.tsx
type Props = {
  name: string;
  description: string;
  language?: string;
  stars?: number;
  url: string;
};

export default function ProjectCard({ name, description, language, stars, url }: Props) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block rounded-xl border border-[#1a1a1a] bg-[#101010] p-4 hover:border-[#2a2a2a] hover:bg-[#111] transition"
    >
      <h3 className="text-gray-100 font-medium text-lg mb-1">{name}</h3>
      <p className="text-sm text-gray-400 mb-3 line-clamp-2">
        {description || "No description provided"}
      </p>
      <div className="flex items-center justify-between text-xs text-gray-500">
        <span>{language || "—"}</span>
        {stars !== undefined && <span>⭐ {stars}</span>}
      </div>
    </a>
  );
}
