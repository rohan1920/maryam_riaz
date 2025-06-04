import React from "react";
import Link from "next/link"; // Import Link from Next.js

const BlogCard2 = () => {
  return (
    <div className="bg-black p-4">
      <p className="text-center text-white text-[28px] sm:text-[33px] md:text-[45px] font-bold uppercase">
        My <span className="text-rose-900">Projects</span>
      </p>
      {/* Grid container for the cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {/* Card 1 */}
        <div className="group h-full border-gray-500 border-opacity-60 border-2 rounded-lg bg-gray-800 overflow-hidden shadow-lg animate-slide-up">
          <img
            className="lg:h-48 md:h-36 w-full object-cover object-center transition duration-500 ease-in-out transform group-hover:scale-105"
            src="https://fancytailwind.com/static/9e8be5587c42e1f7ebec77c5a333a3a4/17574/city2.webp"
            alt="blog"
          />
          <h2 className="pt-4 pb-1 px-4 inline-block title-font text-xs font-semibold text-red-300 uppercase tracking-widest cursor-pointer hover:font-bold">
            My Category
          </h2>
          <div className="py-1 px-6">
            <Link
              href="/project1"
              className="mb-3 inline-block title-font text-xl font-extrabold text-gray-100 tracking-wide cursor-pointer"
            >
              Fancy Blog Card 2
            </Link>
            <p className="line-clamp-6 mb-3 overflow-hidden leading-relaxed text-gray-300 cursor-pointer">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
              illum cum autem incidunt magni voluptatum alias reiciendis
              possimus doloremque, enim consequuntur quia. Voluptas
              exercitationem soluta debitis labore aliquam molestiae illum?
            </p>
          </div>
          <div className="pt-1 pb-4 px-2 flex justify-between items-center flex-wrap">
            <div className="flex flex-wrap text-sm text-red-200"></div>
            <div className="mt-1 flex space-x-4">
              {/* GitHub Icon */}
              <Link
                href="https://github.com/your-repo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 2C6.48 2 2 6.48 2 12c0 4.41 3.58 8 8 8 1.34 0 2.6-.32 3.74-.87.27-.13.37-.54.19-.81-.16-.27-.5-.37-.77-.19C12.84 19 11.49 19 10 19c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.49 0 2.84.84 3.74 2.13.27.16.64.08.81-.19.13-.27.04-.6-.19-.81C14.6 3.32 13.34 2 12 2z"
                  />
                </svg>
              </Link>

              {/* Vercel Icon */}
              <Link
                href="https://your-vercel-link"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 12l1-3h3l1 3H3zm12 0l1-3h3l1 3h-5zm0 0h-2m0 0H9m4 0h-2m4 0h2m-4 0l-1-3h-2l1 3zm-3-3h4m0 0l1-3m-1 3l1 3h-2l-1-3zm-4 0H9m0 0l-1-3H6l1 3zm4 0H9"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Repeat Card 2 and Card 3 with the same structure, adjusting the content and links accordingly */}
        {/* Card 2 */}
        <div className="group h-full border-gray-500 border-opacity-60 border-2 rounded-lg bg-gray-800 overflow-hidden shadow-lg animate-slide-up">
          <img
            className="lg:h-48 md:h-36 w-full object-cover object-center transition duration-500 ease-in-out transform group-hover:scale-105"
            src="https://fancytailwind.com/static/9e8be5587c42e1f7ebec77c5a333a3a4/17574/city2.webp"
            alt="blog"
          />
          <h2 className="pt-4 pb-1 px-4 inline-block title-font text-xs font-semibold text-red-300 uppercase tracking-widest cursor-pointer hover:font-bold">
            My Category
          </h2>
          <div className="py-1 px-6">
            <Link
              href="/project2"
              className="mb-3 inline-block title-font text-xl font-extrabold text-gray-100 tracking-wide cursor-pointer"
            >
              Fancy Blog Card 2
            </Link>
            <p className="line-clamp-6 mb-3 overflow-hidden leading-relaxed text-gray-300 cursor-pointer">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
              illum cum autem incidunt magni voluptatum alias reiciendis
              possimus doloremque, enim consequuntur quia. Voluptas
              exercitationem soluta debitis labore aliquam molestiae illum?
            </p>
          </div>
          <div className="pt-1 pb-4 px-2 flex justify-between items-center flex-wrap">
            <div className="flex flex-wrap text-sm text-red-200"></div>
            <div className="mt-1 flex space-x-4">
              {/* GitHub Icon */}
              <Link
                href="https://github.com/your-repo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 2C6.48 2 2 6.48 2 12c0 4.41 3.58 8 8 8 1.34 0 2.6-.32 3.74-.87.27-.13.37-.54.19-.81-.16-.27-.5-.37-.77-.19C12.84 19 11.49 19 10 19c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.49 0 2.84.84 3.74 2.13.27.16.64.08.81-.19.13-.27.04-.6-.19-.81C14.6 3.32 13.34 2 12 2z"
                  />
                </svg>
              </Link>

              {/* Vercel Icon */}
              <Link
                href="https://your-vercel-link"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 12l1-3h3l1 3H3zm12 0l1-3h3l1 3h-5zm0 0h-2m0 0H9m4 0h-2m4 0h2m-4 0l-1-3h-2l1 3zm-3-3h4m0 0l1-3m-1 3l1 3h-2l-1-3zm-4 0H9m0 0l-1-3H6l1 3zm4 0H9"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="group h-full border-gray-500 border-opacity-60 border-2 rounded-lg bg-gray-800 overflow-hidden shadow-lg animate-slide-up">
          <img
            className="lg:h-48 md:h-36 w-full object-cover object-center transition duration-500 ease-in-out transform group-hover:scale-105"
            src="https://fancytailwind.com/static/9e8be5587c42e1f7ebec77c5a333a3a4/17574/city2.webp"
            alt="blog"
          />
          <h2 className="pt-4 pb-1 px-4 inline-block title-font text-xs font-semibold text-red-300 uppercase tracking-widest cursor-pointer hover:font-bold">
            My Category
          </h2>
          <div className="py-1 px-6">
            <Link
              href="/project3"
              className="mb-3 inline-block title-font text-xl font-extrabold text-gray-100 tracking-wide cursor-pointer"
            >
              Fancy Blog Card 3
            </Link>
            <p className="line-clamp-6 mb-3 overflow-hidden leading-relaxed text-gray-300 cursor-pointer">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
              illum cum autem incidunt magni voluptatum alias reiciendis
              possimus doloremque, enim consequuntur quia. Voluptas
              exercitationem soluta debitis labore aliquam molestiae illum?
            </p>
          </div>
          <div className="pt-1 pb-4 px-2 flex justify-between items-center flex-wrap">
            <div className="flex flex-wrap text-sm text-red-200"></div>
            <div className="mt-1 flex space-x-4">
              {/* GitHub Icon */}
              <Link
                href="https://github.com/your-repo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 2C6.48 2 2 6.48 2 12c0 4.41 3.58 8 8 8 1.34 0 2.6-.32 3.74-.87.27-.13.37-.54.19-.81-.16-.27-.5-.37-.77-.19C12.84 19 11.49 19 10 19c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.49 0 2.84.84 3.74 2.13.27.16.64.08.81-.19.13-.27.04-.6-.19-.81C14.6 3.32 13.34 2 12 2z"
                  />
                </svg>
              </Link>

              {/* Vercel Icon */}
              <Link
                href="https://your-vercel-link"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 12l1-3h3l1 3H3zm12 0l1-3h3l1 3h-5zm0 0h-2m0 0H9m4 0h-2m4 0h2m-4 0l-1-3h-2l1 3zm-3-3h4m0 0l1-3m-1 3l1 3h-2l-1-3zm-4 0H9m0 0l-1-3H6l1 3zm4 0H9"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard2;
