import React, { useState } from 'react';

const AboutSection = () => {
  // State to manage active tab
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="h-full bg-white py-20">
      <div className="max-w-5xl mx-auto px-6 lg:px-8 flex flex-col items-center justify-center text-center">
        <h2 className="text-4xl lg:text-6xl text-secondary font-bold mb-8">
          All skills you need in one place
        </h2>
        <p className="text-gray-400 text-lg lg:text-xl leading-relaxed mb-12">
          From critical skills to technical topics, Udemy supports your professional development.
        </p>

        {/* Tabs Section */}
        <ul className="flex space-x-6 mb-8">
          <li>
            <button
              onClick={() => setActiveTab(0)}
              aria-selected={activeTab === 0}
              className={`${
                activeTab === 0
                  ? 'bg-orange-50 text-orange-600'
                  : 'text-gray-400'
              } flex gap-2 items-center rounded-full px-6 h-12 py-3 text-lg font-medium`}
            >
              Web Development
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveTab(1)}
              aria-selected={activeTab === 1}
              className={`${
                activeTab === 1
                  ? 'bg-orange-50 text-orange-600'
                  : 'text-gray-400'
              } flex gap-2 items-center rounded-full px-6 h-12 py-3 text-lg font-medium`}
            >
              JavaScript
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveTab(2)}
              aria-selected={activeTab === 2}
              className={`${
                activeTab === 2
                  ? 'bg-orange-50 text-orange-600'
                  : 'text-gray-400'
              } flex gap-2 items-center rounded-full px-6 h-12 py-3 text-lg font-medium`}
            >
              React JS
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveTab(3)}
              aria-selected={activeTab === 3}
              className={`${
                activeTab === 3
                  ? 'bg-orange-50 text-orange-600'
                  : 'text-gray-400'
              } flex gap-2 items-center rounded-full px-6 h-12 py-3 text-lg font-medium`}
            >
              Angular
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveTab(4)}
              aria-selected={activeTab === 4}
              className={`${
                activeTab === 4
                  ? 'bg-orange-50 text-orange-600'
                  : 'text-gray-400'
              } flex gap-2 items-center rounded-full px-6 h-12 py-3 text-lg font-medium`}
            >
              Java
            </button>
          </li>
        </ul>

        {/* Content for Web Development Tab with Cards */}
        <div>
          {activeTab === 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="group relative w-[300px] h-[420px] bg-[#FAEDE4] font-['Roboto_Flex'] border-b-4 border-b-[#F04E29] rounded-lg shadow-xl transform transition-all hover:scale-110 hover:shadow-2xl">
                <img
                  className="group-hover:rounded-br-[100px] rounded-br-[0px] transition-all duration-300"
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHdvcmt8ZW58MHx8MHx8fDA%3D"
                  alt="Card Image"
                  style={{ objectFit: 'cover', height: '250px', borderRadius: '10px' }}
                />
                <div className="p-4">
                  <p className="text-orange-600 text-xl font-semibold mb-2">The Complete 2024 Web Development Bootcamp</p>
                  <p className="text-black text-sm font-semibold mb-2">Created By: Dr. Angela Yu</p>
                </div>
                {/* SVG of Arrow */}
                <svg
                  className="group-hover:opacity-100 opacity-0 transition-opacity absolute right-[10px] bottom-[10px]"
                  xmlns="http://www.w3.org/2000/svg" width="45" height="64" viewBox="0 0 45 64" fill="none"
                >
                  <path d="M5.67927 0.685928C5.66838 0.658706..." fill="#F04E29"/>
                </svg>
              </div>

              {/* Card 2 */}
              <div className="group relative w-[300px] h-[420px] bg-[#FAEDE4] font-['Roboto_Flex'] border-b-4 border-b-[#F04E29] rounded-lg shadow-xl transform transition-all hover:scale-110 hover:shadow-2xl">
                <img
                  className="group-hover:rounded-br-[100px] rounded-br-[0px] transition-all duration-300"
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvdXJzZSUyMHdlYiUyMGRldmVsb3BtZW50fGVufDB8fDB8fHww"
                  alt="Card Image"
                  style={{ objectFit: 'cover', height: '250px', borderRadius: '10px' }}
                />
                <div className="p-4">
                  <p className="text-orange-600 text-xl font-semibold mb-2">The Complete 2024 Web Development Bootcamp</p>
                  <p className="text-black text-sm font-semibold mb-2">Created By: Dr. Angela Yu</p>
                </div>
                {/* SVG of Arrow */}
                <svg
                  className="group-hover:opacity-100 opacity-0 transition-opacity absolute right-[10px] bottom-[10px]"
                  xmlns="http://www.w3.org/2000/svg" width="45" height="64" viewBox="0 0 45 64" fill="none"
                >
                  <path d="M5.67927 0.685928C5.66838 0.658706..." fill="#F04E29"/>
                </svg>
              </div>

              {/* Card 3 */}
              <div className="group relative w-[300px] h-[420px] bg-[#FAEDE4] font-['Roboto_Flex'] border-b-4 border-b-[#F04E29] rounded-lg shadow-xl transform transition-all hover:scale-110 hover:shadow-2xl">
                <img
                  className="group-hover:rounded-br-[100px] rounded-br-[0px] transition-all duration-300"
                  src="https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHdvcmt8ZW58MHx8MHx8fDA%3D"
                  alt="Card Image"
                  style={{ objectFit: 'cover', height: '250px', borderRadius: '10px' }}
                />
                <div className="p-4">
                  <p className="text-orange-600 text-xl font-semibold mb-2">The Complete 2024 Web Development Bootcamp</p>
                  <p className="text-black text-sm font-semibold mb-2">Created By: Dr. Angela Yu</p>
                </div>
                {/* SVG of Arrow */}
                <svg
                  className="group-hover:opacity-100 opacity-0 transition-opacity absolute right-[10px] bottom-[10px]"
                  xmlns="http://www.w3.org/2000/svg" width="45" height="64" viewBox="0 0 45 64" fill="none"
                >
                  <path d="M5.67927 0.685928C5.66838 0.658706..." fill="#F04E29"/>
                </svg>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
