import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="h-full bg-white md:py-20 py-5">
      <div className="max-w-5xl mx-auto px-6 lg:px-8 flex flex-col items-center justify-center text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-6xl text-secondary font-bold md:mb-8 mb-4">
          All skills you need in one place
        </h2>
        <p className="text-gray-400 text-base sm:text-lg lg:text-xl leading-relaxed md:mb-12 mb-6">
          From critical skills to technical topics, Udemy supports your professional development.
        </p>

        <ul className="flex space-x-4 sm:space-x-6 md:mb-8 mb-4 justify-center flex-wrap">
          {['Web Development', 'JavaScript', 'React JS', 'Angular', 'Java'].map((tab, index) => (
            <li key={index} className="flex-shrink-0">
              <button
                onClick={() => setActiveTab(index)}
                aria-selected={activeTab === index}
                className={`${
                  activeTab === index ? 'bg-orange-50 text-orange-600' : 'text-gray-400'
                } flex gap-2 items-center rounded-full px-4 sm:px-6 h-12 py-3 text-sm sm:text-lg font-medium whitespace-nowrap`}
              >
                {tab}
              </button>
            </li>
          ))}
        </ul>

        {activeTab === 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((card, index) => (
              <div
                key={index}
                className="group relative w-full sm:w-[300px] h-[420px] bg-[#FAEDE4] font-['Roboto_Flex'] border-b-4 border-b-[#F04E29] rounded-lg shadow-xl transform transition-all hover:scale-105 hover:shadow-2xl"
              >
                <img
                  className="group-hover:rounded-br-[100px] rounded-br-[0px] transition-all duration-300"
                  src={`https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHdvcmt8ZW58MHx8MHx8fDA%3D`}
                  alt="Card Image"
                  style={{ objectFit: 'cover', height: '250px', borderRadius: '10px' }}
                />
                <div className="p-4">
                  <p className="text-orange-600 text-lg sm:text-xl font-semibold mb-2">
                    The Complete 2024 Web Development Bootcamp
                  </p>
                  <p className="text-black text-sm sm:text-base font-semibold mb-2">Created By: Dr. Angela Yu</p>
                  <div className="flex items-center justify-center mb-2 ">
                    {[...Array(5)].map((_, starIndex) => (
                      <FaStar key={starIndex} className="text-orange-500" />
                    ))}
                  </div>
                </div>
                <svg
                  className="group-hover:opacity-100 opacity-0 transition-opacity absolute right-[10px] bottom-[10px]"
                  xmlns="http://www.w3.org/2000/svg" width="45" height="64" viewBox="0 0 45 64" fill="none"
                >
                  <path d="M5.67927 0.685928C5.66838 0.658706..." fill="#F04E29"/>
                </svg>
              </div>
            ))}
          </div>
        )}
        <button
          type="button"
          className="text-white bg-secondary hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base sm:text-lg px-8 py-4 mt-6 text-center dark:bg-secondary dark:hover:bg-secondary dark:focus:ring-secondary"
        >
          Show More
        </button>
      </div>
    </section>
  );
};

export default AboutSection;
