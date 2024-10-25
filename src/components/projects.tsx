import React from "react";

const BlogCard2 = () => {
  return (
    <div className="bg-black p-4">
      <p className="text-center text-white text-[28px] sm:text-[33px] md:text-[45px] font-bold uppercase">
        My <span className="text-rose-900">Projects</span>
      </p>
      {/* Grid container for the cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {/* Card 1 */}
        <div className="mb-4">
          <div className="group h-full border-gray-500 border-opacity-60 border-2 rounded-lg bg-gray-800 overflow-hidden shadow-lg">
            <img
              className="lg:h-48 md:h-36 w-full object-cover object-center transition duration-500 ease-in-out transform group-hover:scale-105"
              src="https://fancytailwind.com/static/9e8be5587c42e1f7ebec77c5a333a3a4/17574/city2.webp"
              alt="blog"
            />
            <h2 className="pt-4 pb-1 px-4 inline-block title-font text-xs font-semibold text-red-300 uppercase tracking-widest cursor-pointer hover:font-bold">
              My Category
            </h2>
            <div className="py-1 px-6">
              <h1 className="mb-3 inline-block title-font text-xl font-extrabold text-gray-100 tracking-wide cursor-pointer">
                Fancy Blog Card 2
              </h1>
              <p className="line-clamp-6 mb-3 overflow-hidden leading-relaxed text-gray-300 cursor-pointer">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
                illum cum autem incidunt magni voluptatum alias reiciendis
                possimus doloremque, enim consequuntur quia. Voluptas
                exercitationem soluta debitis labore aliquam molestiae illum?
              </p>
            </div>
            <div className="pt-1 pb-4 px-2 flex justify-between items-center flex-wrap">
              <div className="flex flex-wrap text-sm text-red-200"></div>
              <div className="mt-1">
                <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
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
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="mb-4">
          <div className="group h-full border-gray-500 border-opacity-60 border-2 rounded-lg bg-gray-800 overflow-hidden shadow-lg">
            <img
              className="lg:h-48 md:h-36 w-full object-cover object-center transition duration-500 ease-in-out transform group-hover:scale-105"
              src="https://fancytailwind.com/static/9e8be5587c42e1f7ebec77c5a333a3a4/17574/city2.webp"
              alt="blog"
            />
            <h2 className="pt-4 pb-1 px-4 inline-block title-font text-xs font-semibold text-red-300 uppercase tracking-widest cursor-pointer hover:font-bold">
              My Category
            </h2>
            <div className="py-1 px-6">
              <h1 className="mb-3 inline-block title-font text-xl font-extrabold text-gray-100 tracking-wide cursor-pointer">
                Fancy Blog Card 2
              </h1>
              <p className="line-clamp-6 mb-3 overflow-hidden leading-relaxed text-gray-300 cursor-pointer">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
                illum cum autem incidunt magni voluptatum alias reiciendis
                possimus doloremque, enim consequuntur quia. Voluptas
                exercitationem soluta debitis labore aliquam molestiae illum?
              </p>
            </div>
            <div className="pt-1 pb-4 px-2 flex justify-between items-center flex-wrap">
              <div className="flex flex-wrap text-sm text-red-200"></div>
              <div className="mt-1">
                <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
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
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="mb-4">
          <div className="group h-full border-gray-500 border-opacity-60 border-2 rounded-lg bg-gray-800 overflow-hidden shadow-lg">
            <img
              className="lg:h-48 md:h-36 w-full object-cover object-center transition duration-500 ease-in-out transform group-hover:scale-105"
              src="https://fancytailwind.com/static/9e8be5587c42e1f7ebec77c5a333a3a4/17574/city2.webp"
              alt="blog"
            />
            <h2 className="pt-4 pb-1 px-4 inline-block title-font text-xs font-semibold text-red-300 uppercase tracking-widest cursor-pointer hover:font-bold">
              My Category
            </h2>
            <div className="py-1 px-6">
              <h1 className="mb-3 inline-block title-font text-xl font-extrabold text-gray-100 tracking-wide cursor-pointer">
                Fancy Blog Card 2
              </h1>
              <p className="line-clamp-6 mb-3 overflow-hidden leading-relaxed text-gray-300 cursor-pointer">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
                illum cum autem incidunt magni voluptatum alias reiciendis
                possimus doloremque, enim consequuntur quia. Voluptas
                exercitationem soluta debitis labore aliquam molestiae illum?
              </p>
            </div>
            <div className="pt-1 pb-4 px-2 flex justify-between items-center flex-wrap">
              <div className="flex flex-wrap text-sm text-red-200"></div>
              <div className="mt-1">
                <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
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
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Additional cards can be added similarly */}
      </div>
    </div>
  );
};

export default BlogCard2;
