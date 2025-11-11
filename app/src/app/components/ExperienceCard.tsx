export default function ExperienceCard() {
  return (
    <article className="flex justify-between items-center bg-[#0f0f10] border border-[#151515] p-4 rounded-xl">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-md bg-[#38bdf8] flex-shrink-0"></div>
        <div>
          <p className="font-medium text-gray-100">TechySquad</p>
          <p className="text-sm text-gray-400">MERN Stack Developer Intern</p>
        </div>
      </div>
      <div className="text-sm text-gray-400 text-right">
        <div>Ahmedabad, India</div>
        <div className="mt-1">Aug 2025 — Present</div>
      </div>
    </article>
  );
}
