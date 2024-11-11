import React from 'react';

const PropertyCard = ({ imgSrc, isNew, name, profession, price, reviews }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-2xl w-80 m-4">
      <img
        className="h-60 w-full object-cover object-center"
        src={imgSrc}
        alt={name}
      />
      <div className="p-6">
        <div className="flex items-baseline">
          <span className="inline-block bg-teal-200 text-teal-800 py-1 px-4 text-xs rounded-full uppercase font-semibold tracking-wide">
            {isNew}
          </span>
        </div>
        <h4 className="mt-2 font-semibold text-xl leading-tight truncate">
          {name}
        </h4>
        <div className="text-gray-600 text-sm uppercase font-semibold tracking-wide">
          {profession}
        </div>
        <div className="mt-1">
          <span className="text-lg font-bold">${price}</span>
          <span className="text-gray-600 text-sm">/ hr</span>
        </div>
        <div className="mt-2 flex items-center">
          <span className="text-teal-600 font-semibold">
            {[...Array(4)].map((_, i) => (
              <i key={i} className="fas fa-star"></i>
            ))}
            <i className="far fa-star"></i>
          </span>
          <span className="ml-2 text-gray-600 text-sm">{reviews} reviews</span>
        </div>
        <button className="mt-4 bg-secondary text-white text-sm font-semibold py-2 px-4 rounded-md">
          Hire Now
        </button>
      </div>
    </div>
  );
};

export default PropertyCard;
