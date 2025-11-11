"use client";

import { useEffect, useState } from "react";
import Header from "./components/header";
import ProjectCard from "./components/projectCard";
import Footer from "./components/footer";
type Repo = {
  id: number;
  name: string;
  description: string;
  html_url: string;
  language: string;
  stargazers_count: number;
};

export default function Page() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchRepos() {
      try {
        const res = await fetch("https://api.github.com/users/Mohit5225/repos");
        const data = await res.json();
        const allowedRepos = ['talk-to-your-money', 'Find_photos_with_Selfiee', 'deployment-feel', 'StockPredictor', 'rag-med-chatbot', 'NLP_with_small_proj', 'Python', 'face_recognitonCV', 'Mockinterview', 'fineTuningbyQWEN3b'];
        const filtered = data.filter((repo: Repo) => allowedRepos.includes(repo.name));
        setRepos(filtered);
      } catch (err) {
        console.error("Failed to fetch repos", err);
      } finally {
        setLoading(false);
      }
    }
    fetchRepos();
  }, []);

  return (
    <>
      <Header />

      <section className="mb-[3.6rem] space-y-3">
        <h1 className="text-4xl font-semibold text-[#e66f4d]">Mohit Murjani</h1>
        <p className="text-sm text-gray-400">engineer • developer • builder</p>
        <p className="text-gray-400 leading-relaxed">
         Hey, it's Mohit!

I love to get my hands dirty with systems that scale and make sense in the real world. My work spans full-stack development, agentic workflows, fine-tuning models, and personalized retrieval systems. Right now, I'm hooked on understanding LLMs at a deeper level while building AGENTIC workflows.
        </p>
      </section>


      <section className="space-y-4">
        <h2 className="text-lg font-semibold text-gray-100">Projects</h2>

        {loading ? (
          <p className="text-gray-500">Loading projects...</p>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {repos.map((repo) => (
              <ProjectCard
                key={repo.id}
                name={repo.name}
                description={repo.description}
                language={repo.language}
                stars={repo.stargazers_count}
                url={repo.html_url}
              />
            ))}
          </div>
        )}
      </section>

      <Footer />
    </>
  );
}