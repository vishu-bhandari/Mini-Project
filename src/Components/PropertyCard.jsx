// PropertyCard.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import getUserProfile from '../functions/getUserProfile';

const PropertyCard = ({ courseId, creator, description, price, purchaseCount, revenue, thumbnailCid, title, videoCid }) => {
  const navigate = useNavigate(); // useNavigate hook to navigate programmatically

  const handleHireNow = () => {
    console.log("Navigating to /hire"); // Check if this log appears when button is clicked
    navigate(`/hire?courseId=${courseId}`); // Navigate to the /hire page
  };


  const [creatorName, setCreatorName] = useState('')

  useEffect(()=>{
    const fetchCreatorName = async() =>{
      const [user,email, exists] = await getUserProfile(creator)
      setCreatorName(user)

    }
    fetchCreatorName();
  })

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-2xl w-full sm:w-80 md:w-72 lg:w-80 m-4">
      <img
        className="h-60 w-full object-cover object-center"
        // src={imgSrc}
        src={`https://gateway.lighthouse.storage/ipfs/${thumbnailCid}`}
        alt={title}
      />
      <div className="p-6">
        {/* <div className="flex items-baseline">
          <span className="inline-block bg-teal-200 text-teal-800 py-1 px-4 text-xs rounded-full uppercase font-semibold tracking-wide">
            {isNew}
          </span>
        </div> */}
        <h4 className="mt-2 font-semibold text-xl leading-tight truncate">
          {title}
        </h4>
        <div className="text-gray-600 text-sm uppercase font-semibold tracking-wide">
          by {creatorName}
        </div>
        <div className="mt-1">
          <span className="text-lg font-bold">{price.toString()} wei</span>
          <span className="text-gray-600 text-sm"></span>
        </div>
        <div className="mt-2 flex items-center">
          <span className="text-teal-600 font-semibold">
            {[...Array(4)].map((_, i) => (
              <i key={i} className="fas fa-star"></i>
            ))}
            <i className="far fa-star"></i>
          </span>
          {/* <span className="ml-2 text-gray-600 text-sm">{reviews} reviews</span> */}
        </div>
        <button
          onClick={handleHireNow} // Trigger navigation on button click
          className="mt-4 bg-secondary text-white text-sm font-semibold py-2 px-4 rounded-md"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default PropertyCard;
