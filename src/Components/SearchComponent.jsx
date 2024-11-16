import React, { useEffect, useState } from 'react';
import PropertyCard from './PropertyCard';
import getAllCourses from '../functions/getAllCourses';

const SearchComponent = () => {
  const [cardsToShow, setCardsToShow] = useState(3); // State to control the number of cards to show
  const [showAllCards, setShowAllCards] = useState(false); // State to toggle showing all cards
  const [data, setData] = useState([]);

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
    },
    {
      imgSrc: 'https://images.unsplash.com/photo-1600891961149-2872d55d49d4?w=800&auto=format&fit=crop&q=60',
      name: 'Sarah Miller',
      isNew: 'Design',
      profession: 'UX/UI Designer',
      price: '80.00',
      reviews: '20'
    },
    {
      imgSrc: 'https://images.unsplash.com/photo-1595460132920-43fd1a2301f9?w=800&auto=format&fit=crop&q=60',
      name: 'John Doe',
      isNew: 'Photographer',
      profession: 'Photographer',
      price: '100.00',
      reviews: '30'
    }
  ];

  useEffect(() =>{
    const fetchData = async() =>{
      const result = await getAllCourses();
      // console.log(result);
      const formattedResult = result.map(course => formatCourse(course));
      console.log(formattedResult);
      

      
      setData(formattedResult)
    }
    fetchData();
  },[])

  // Function to handle the "Show More" button click
  const handleShowMore = () => {
    setShowAllCards(true); // Show all cards
    setCardsToShow(data.length); // Show all available cards
    console.log(data);
    
    // console.log();
    
  };

  // Function to handle the "Hide" button click
  const handleHide = () => {
    setShowAllCards(false); // Hide extra cards
    setCardsToShow(3); // Show only the initial 3 cards
  };

  function formatCourse(courseArray) {
    return {
        courseId: courseArray[0],
        price: courseArray[1],
        title: courseArray[2],
        description: courseArray[3],
        videoCid: courseArray[4],
        thumbnailCid: courseArray[5],
        creator: courseArray[6],
        purchaseCount: courseArray[7],
        revenue: courseArray[8]
    };
}

  return (
    <div className="bg-gradient-to-r from-[#0A192F] via-[#0A192F] to-teal-800">
      <div className="dark:bg-transparent">
        <div className="mx-auto flex flex-col items-center py-12 sm:py-24">
          {/* Heading Section */}
          <div className="w-11/12 sm:w-2/3 lg:w-2/3 xl:w-2/3 flex justify-center items-center flex-col mb-5 sm:mb-10 text-center pt-10 md:pt-2">
            <h1 className="text-3xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-6xl text-secondary dark:text-white font-black leading-10">
              Connect with Content
              <span className="text-secondary dark:text-secondary"> Creators</span>
              in Your Niche
            </h1>
            <p className="mt-5 sm:mt-10 text-gray-600 dark:text-gray-300 font-normal text-center text-xl">
              A Community built For Content Creators.
            </p>
          </div>

          {/* Search Bar Section */}
          <div className="flex w-11/12 sm:w-10/12 md:w-8/12 xl:w-6/12 mt-5">
            <div className="flex rounded-md w-full">
              <input
                type="text"
                name="q"
                className="w-full p-3 rounded-md rounded-r-none border-2 border-gray-300 placeholder-current dark:text-gray-300 dark:border-none"
                placeholder="Search by keyword"
              />
              <button className="inline-flex items-center gap-2 bg-secondary text-white text-lg font-semibold py-3 px-6 rounded-r-md">
                <span>Find</span>
                <svg
                  className="text-white h-5 w-5 p-0 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
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

          {/* Property Cards Section */}
          <div className="flex flex-wrap justify-center mt-10 gap-4">
            {data.slice(0, cardsToShow).map((card, index) => (
              <PropertyCard key={index} {...card} />
            ))}
          </div>

          {/* Show More / Hide Button */}
          <div className="mt-8">
            {!showAllCards ? (
              <button
                onClick={handleShowMore}
                className="bg-secondary text-white font-semibold py-3 px-6 rounded-md hover:bg-secondary-dark transition-all duration-300"
              >
                Show More
              </button>
            ) : (
              <button
                onClick={handleHide}
                className="bg-secondary text-white font-semibold py-3 px-6 rounded-md hover:bg-secondary-dark transition-all duration-300"
              >
                Hide
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchComponent;
