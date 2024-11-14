import React, { useState } from "react";
import Sidebar from "./Sidebar";
import ProfileSection from "./ProfileSection";
import PrivacySection from "./PrivacySection";
import Navbar from "../Navbar";
import Footer from "../Footer";

// Import your new sections here
import CoursesBoughtSection from "./CoursesBoughtSection";
import CoursesUploadedSection from "./CoursesUploadedSection";
import CourseUploadSection from "./CourseUploadSection";

const Admin = () => {
  const [selectedSection, setSelectedSection] = useState("Profile");

  const renderSection = () => {
    switch (selectedSection) {
      case "Profile":
        return <ProfileSection />;
      case "Courses Bought":
        return <CoursesBoughtSection />;
      case "Courses Uploaded":
        return <CoursesUploadedSection />;
      case "Course Upload":
        return <CourseUploadSection />;
      case "Privacy":
        return <PrivacySection />;
      default:
        return <ProfileSection />;
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex mt-16 ">
        <Sidebar setSelectedSection={setSelectedSection} />
        <div className="flex-grow p-6 bg-gray-100">{renderSection()}</div>
      </div>
      <Footer />
    </>
  );
};

export default Admin;
