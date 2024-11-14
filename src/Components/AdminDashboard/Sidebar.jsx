import React from "react";

const Sidebar = ({ setSelectedSection }) => {
  return (
    <div className="w-64 bg-primary text-white border-r">
      <div className="p-6">
        <h2 className="text-2xl font-bold text-orange-500">Admin Dashboard</h2>
      </div>
      <nav className="mt-6">
        <ul>
          <li>
            <button
              className="w-full text-left p-4 hover:bg-teal-500 hover:text-white"
              onClick={() => setSelectedSection("Profile")}
            >
              Profile
            </button>
          </li>
          <li>
            <button
              className="w-full text-left p-4 hover:bg-teal-500 hover:text-white"
              onClick={() => setSelectedSection("Courses Bought")}
            >
              Courses Bought
            </button>
          </li>
          <li>
            <button
              className="w-full text-left p-4 hover:bg-teal-500 hover:text-white"
              onClick={() => setSelectedSection("Courses Uploaded")}
            >
              Courses Uploaded
            </button>
          </li>
          <li>
            <button
              className="w-full text-left p-4 hover:bg-teal-500 hover:text-white"
              onClick={() => setSelectedSection("Course Upload")}
            >
              Course Upload
            </button>
          </li>
          <li>
            <button
              className="w-full text-left p-4 hover:bg-teal-500 hover:text-white"
              onClick={() => setSelectedSection("Privacy")}
            >
              Privacy
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
