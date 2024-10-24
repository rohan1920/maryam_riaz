"use client";
import React from "react";
import Particle from "./Particle";
import TextEffect from "./textEffects";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="h-[88vh] bg-[url('/images/banner.jpg')] bg-center bg-cover relative">
      <Particle />

      <div className="w-[90%] lg:w-[80%] mx-auto h-full flex flex-col lg:flex-row items-center justify-center gap-6 md:gap-8 lg:gap-[3rem]">
        {/* Text Section */}
        <div className="text-center lg:text-left lg:max-w-[50%]">
          <h1 className="text-[30px] sm:text-[35px] md:text-[45px] lg:text-[50px] text-white font-bold">
            HI, I am <span className="text-pink-900">Maryam Riaz</span>
          </h1>

          <TextEffect />
          <p className="mt-4 text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] text-teal-100 max-w-[600px] mx-auto lg:mx-0">
            Welcome to the digital world of Maryam Riaz – where a passion for
            web development meets a journey of continuous learning. As an
            aspiring developer honing my skills in Next.js, TypeScript, and
            Tailwind CSS, I am dedicated to building creative and modern web
            solutions while exploring the exciting potential of AI. Join me on
            this journey as I grow and create something extraordinary!
          </p>

          <div className="mt-6">
            <Link href="/path/to/your-cv.pdf" download>
              <button className="flex items-center bg-gradient-to-r from-rose-900 to-teal-500 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
                Download CV
              </button>
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-[250px] sm:w-[300px] md:w-[350px] lg:w-[400px] relative flex justify-center items-center">
          <div className="w-full h-full rounded-full overflow-hidden">
            <Image
              src="/images/immm.jpg"
              alt="user"
              layout="responsive"
              width={400}
              height={400}
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
