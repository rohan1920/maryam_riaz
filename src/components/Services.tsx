import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Define the Skill interface
interface Skill {
  name: string;
  imgSrc: string;
}

// Skill data
const skills: Skill[] = [
  { name: "HTML", imgSrc: "/images/html.png" },
  { name: "CSS", imgSrc: "/images/css.png" },
  { name: "JavaScript", imgSrc: "/images/ts.png" },
  { name: "Next.js", imgSrc: "/images/nextjs-icon.svg" },
  { name: "Redux", imgSrc: "/images/redux.png" },
  { name: "Tailwind CSS", imgSrc: "/images/tailwind.png" },
  { name: "Docker", imgSrc: "/images/docker.webp" },
  { name: "FastAPI", imgSrc: "/images/i.png" },
  { name: "Figma", imgSrc: "/images/figma.png" },
  { name: "Git", imgSrc: "/images/git.png" },
  { name: "Bootstrap", imgSrc: "/images/bootstrap.png" },
  { name: "MySQL", imgSrc: "/images/mysql.png" },
];

export default function Services() {
  const [visibleSkills, setVisibleSkills] = useState<number[]>([]); // Type for visibleSkills

  useEffect(() => {
    const handleScroll = () => {
      const skillsElements = document.querySelectorAll<HTMLElement>(".skill");
      skillsElements.forEach((element, index) => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          setVisibleSkills((prev) => [...prev, index]);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check on mount

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="bg-[#121212] pt-[4rem] md:pb-[5rem]">
      <p className="text-center text-white text-[28px] sm:text-[33px] md:text-[45px] font-bold uppercase">
        My <span className="text-rose-900">Skills</span>
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center skill"
            initial={{ opacity: 0, scale: 0.8 }} // Initial state
            animate={
              visibleSkills.includes(index) ? { opacity: 1, scale: 1 } : {}
            } // Animation when visible
            transition={{ duration: 0.5 }} // Transition properties
            onClick={() => console.log(`Clicked on ${skill.name}`)} // Handle click event
            whileTap={{ scale: 0.9 }} // Scale down on click
            whileHover={{ scale: 1.1 }} // Scale up on hover
          >
            <Image src={skill.imgSrc} alt={skill.name} width={80} height={80} />
            <p className="mt-4 text-lg font-semibold text-gray-700">
              {skill.name}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
