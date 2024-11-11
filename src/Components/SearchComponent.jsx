import React from 'react';
import PropertyCard from './PropertyCard';

const SearchComponent = () => {
  const cardData = [
    {
      imgSrc: 'https://images.unsplash.com/photo-1728996777138-66a369255f18?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGluZmx1ZW5jZXJ8ZW58MHx8MHx8fDA%3D',
      name: 'Alex Johnson',
      isNew: 'Graphic',
      profession: 'Graphic Designer',
      price: '50.00',
      reviews: '45'
    },
    {
      imgSrc: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80',
      isNew: 'Social Media',
      name: 'Emma Williams',
      profession: 'Social Media Influencer',
      price: '60.00',
      reviews: '38'
    },
    {
      imgSrc: 'https://plus.unsplash.com/premium_photo-1684433904869-b0f91e0a78c0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fGluZmx1ZW5jZXJ8ZW58MHx8MHx8fDA%3D',
      isNew: 'Art',
      name: 'Michael Brown',
      profession: 'Art Influencer',
      price: '70.00',
      reviews: '52'
    }
  ];

  return (
    <div className="dark:bg-primary">
      <div className="dark:bg-transparent">
        <div className="mx-auto flex flex-col items-center py-12 sm:py-24">
          <div className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col mb-5 sm:mb-10">
            <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-6xl text-center text-secondary dark:text-white font-black leading-10">
              Connect with Content
              <span className="text-secondary dark:text-secondary"> Creators</span>
              in Your Niche
            </h1>
            <p className="mt-5 sm:mt-10 lg:w-10/12 text-gray-600 dark:text-gray-300 font-normal text-center text-xl">
              A Community built For Content Creators.
            </p>
          </div>
          <div className="flex w-11/12 md:w-8/12 xl:w-6/12">
            <div className="flex rounded-md w-full">
              <input
                type="text"
                name="q"
                className="w-full p-3 rounded-md rounded-r-none border-2 border-gray-300 placeholder-current dark:text-gray-300 dark:border-none"
                placeholder="keyword"
              />
              <button className="inline-flex items-center gap-2 bg-secondary text-white text-lg font-semibold py-3 px-6 rounded-r-md">
                <span>Find</span>
                <svg
                  className="text-white h-5 w-5 p-0 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  x="0px"
                  y="0px"
                  viewBox="0 0 56.966 56.966"
                  style={{ enableBackground: 'new 0 0 56.966 56.966' }}
                  xmlSpace="preserve"
                >
                  <path
                    d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23
                  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92
                  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17
                  s-7.626,17-17,17s-17-7.626-17-17S14.61,6,23.984,6z"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="flex flex-wrap justify-center mt-10 gap-4">
            {cardData.map((card, index) => (
              <PropertyCard key={index} {...card} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchComponent;
