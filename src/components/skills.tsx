// src/app/skills/page.tsx
"use client";

import Image from "next/image";

const skills = [
  { name: "HTML", imgSrc: "/images/html.png" },
  { name: "CSS", imgSrc: "/images/css.png" },
  { name: "JavaScript", imgSrc: "/images/javascript.png" },
  { name: "Next.js", imgSrc: "/images/nextjs.png" },
  { name: "TypeScript", imgSrc: "/images/typescript.png" },
  { name: "Tailwind CSS", imgSrc: "/images/tailwindcss.png" },
  { name: "Python", imgSrc: "/images/python.png" },
  { name: "FastAPI", imgSrc: "/images/fastapi.png" },
  { name: "React", imgSrc: "/images/react.png" },
];

export default function SkillsPage() {
  return (
    <div className="min-h-screen bg-black py-10">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
        My Skills
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center">
            <Image
              src={skill.imgSrc}
              alt={skill.name}
              width={80}
              height={80}
              className=" bg-black" // Added bg-transparent
            />
            <p className="mt-4 text-lg font-semibold text-gray-700">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
