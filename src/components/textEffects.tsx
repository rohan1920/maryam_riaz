import { TypeAnimation } from "react-type-animation";

const TextEffect = () => {
  return (
    <TypeAnimation
      sequence={[
        "Software Engineer",
        1500,
        "Coder",
        1500,
        "Web Developer",
        1500,
        "Programmer",
        1500,
        "Designer",
        1500,
      ]}
      speed={50}
      className="text-[1.5rem] sm:text-[2rem] md:text-[3rem] lg:text-[4rem] xl:text-[5rem] text-[#6e2e6a] font-bold"
      repeat={Infinity}
    />
  );
};

export default TextEffect;
