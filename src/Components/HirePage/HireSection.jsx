import React from "react";
import ProfileCard from "./ProfileCard";

function HireSection() {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center min-h-screen p-6 bg-gradient-to-r from-[#0A192F] via-[#0A192F] to-teal-800">
      {/* Left Side: Text and Details */}
      <div className="flex-1 max-w-xl text-white md:mb-12 mb-5 lg:mb-0 lg:max-w-2xl">
        
        <h2 className="text-5xl font-bold text-secondary mb-4">Alex Johnson</h2>
        <p className="text-lg text-white mb-6">
          Alex Johnson is a creative director, brand strategist, and visual designer with a passion for crafting compelling brand identities and digital experiences. With years of experience working with top-tier clients, Alex has built a reputation for delivering impactful design solutions that resonate with audiences and drive business success.
        </p>
        <p className="text-lg text-white mb-6">
          Whether you need a complete rebrand, digital assets, or a custom design solution, Alex’s expertise in visual storytelling and design strategy makes them the ideal partner to bring your vision to life.
        </p>
        <button className="px-6 py-3 bg-secondary text-white font-semibold rounded-lg hover:bg-orange-700 transition-colors duration-300">
          Get in Touch
        </button>
        <p className="text-sm text-white mt-4">Created by Alex</p>
      </div>

      {/* Right Side: Profile Card */}
      <div className="flex-shrink-0 lg:ml-12">
        <ProfileCard
          name="Alex Johnson"
          role="Graphic Designer"
          description="Alex Johnson is a creative director, brand strategist, and visual designer with a passion for crafting compelling brand identities and digital experiences. With years of experience working with top-tier clients, Alex has built a reputation for delivering impactful design solutions that resonate with audiences and drive business success."
          skills={["Photoshop", "Illustrator", "UI/UX Design"]}
          imageUrl="https://example.com/profile.jpg"
        />
      </div>
    </div>
  );
}

export default HireSection;
