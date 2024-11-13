import React from 'react';

const Banner = () => {
  return (
    <div className="relative mx-auto max-w-5xl mt-20 mb-20 px-4 sm:px-6 lg:px-8">
      <div
        className="rounded-xl p-1"
        style={{
          backgroundImage:
            'linear-gradient(to right bottom, var(--color-primary) 0%, var(--color-secondary) 50%, var(--color-tertiary) 100%)',
        }}
      >
        <div className="rounded-lg bg-gradient-to-r from-[#0A192F] via-[#0A192F] to-teal-800">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-8 px-4 py-8 sm:px-16 lg:flex-nowrap">
            {/* Text Section */}
            <div className="lg:max-w-xl text-center sm:text-left">
              <h2 className="block w-full pb-2 bg-gradient-to-b from-white to-gray-400 bg-clip-text font-bold text-transparent text-3xl sm:text-4xl">
                Learning focused on your goals with EduBlocks
              </h2>
              <p className="my-4 bg-transparent font-medium leading-relaxed tracking-wide text-gray-400">
                Start Your Development Journey Now
              </p>
            </div>
            {/* Button Section */}
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
              <button className="bg-secondary text-white button-text flex items-center justify-center whitespace-nowrap rounded-md transition-all duration-300 px-8 py-3 text-xs sm:text-sm">
                Get Started
              </button>
              <button className="flex items-center justify-center whitespace-nowrap rounded-md border border-zinc-700 bg-zinc-900 text-center text-white backdrop-blur transition-all hover:bg-zinc-800 px-8 py-3 text-xs sm:text-sm">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
