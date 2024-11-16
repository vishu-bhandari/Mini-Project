import React, { useEffect, useState } from "react";
import ProfileCard from "./ProfileCard";
import { useLocation } from "react-router-dom";
import getCourseDetails from "../../functions/getCourseDetails";
import getUserProfile from "../../functions/getUserProfile";

function HireSection() {

  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const courseId = params.get("courseId");

  const [courseDetails, setCourseDetails] = useState({})
  const [creatorName, setCreatorName] = useState('')

  useEffect(()=>{
    const fetchDetails = async() =>{
      // console.log(courseId);
      const detail = await getCourseDetails(courseId);
      console.log(detail);
      setCourseDetails(detail)
      const [name, mail, exists] = await getUserProfile(detail[6])
      setCreatorName(name)
      
    }
    fetchDetails();
  })

  return (
    <div className="flex flex-col lg:flex-row justify-between items-center min-h-screen p-6 bg-gradient-to-r from-[#0A192F] via-[#0A192F] to-teal-800">
      {/* Left Side: Text and Details */}
      <div className="flex-1 max-w-xl text-white md:mb-12 mb-5 lg:mb-0 lg:max-w-2xl">
        
        <h2 className="text-5xl font-bold text-secondary mb-4">{courseDetails[2]}</h2>
        <p className="text-lg text-white mb-6">
          {courseDetails[3]}
        </p>
        
        {/* <button className="px-6 py-3 bg-secondary text-white font-semibold rounded-lg hover:bg-orange-700 transition-colors duration-300">
          Get in Touch
        </button> */}
        <p className="text-sm text-white mt-4">Created by {creatorName}</p>
      </div>

      {/* Right Side: Profile Card */}
      <div className="flex-shrink-0 lg:ml-12">
        <ProfileCard
          courseId={courseId}
          name={courseDetails[2]}
          role={creatorName}
          description={courseDetails[3]}
          skills={["Photoshop", "Illustrator", "UI/UX Design"]}
          imageUrl={`https://gateway.lighthouse.storage/ipfs/${courseDetails[5]}`}
          price={courseDetails[1]}
        />
      </div>
    </div>
  );
}

export default HireSection;
