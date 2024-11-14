import React from "react";

const CoursesBoughtSection = () => {
  // Static data for courses bought
  const coursesBought = [
    {
      courseName: "React JS for Beginners",
      user: "John Doe",
      date: "2024-11-10",
      price: "$20.00",
      imageUrl: "https://i.ibb.co/6gzWwSq/Rectangle-20-1.png",
      description: "Introduction to React",
      quantity: 1,
    },
    {
      courseName: "Advanced JavaScript",
      user: "Jane Smith",
      date: "2024-11-09",
      price: "$25.00",
      imageUrl: "https://i.ibb.co/6gzWwSq/Rectangle-20-1.png",
      description: "Mastering JavaScript",
      quantity: 2,
    },
    {
      courseName: "Full Stack Development",
      user: "Alice Johnson",
      date: "2024-11-08",
      price: "$30.00",
      imageUrl: "https://i.ibb.co/6gzWwSq/Rectangle-20-1.png",
      description: "Become a Full Stack Developer",
      quantity: 1,
    },
  ];

  return (
    <div className="container mx-auto mt-10">
      <div className="sm:flex shadow-md my-10">
        <div className="w-full bg-white px-10 py-10">
          <div className="flex justify-between border-b pb-8">
            <h1 className="font-semibold text-2xl text-secondary">Courses Bought</h1>
            <h2 className="font-semibold text-2xl text-teal-500">{coursesBought.length} Items</h2>
          </div>

          {/* Courses List */}
          {coursesBought.map((course, index) => (
            <div key={index} className="md:flex items-stretch py-8 md:py-10 lg:py-8 border-t border-gray-50">
              <div className="md:w-4/12 2xl:w-1/4 w-full">
                <img
                  src={course.imageUrl}
                  alt={course.courseName}
                  className="h-full object-center object-cover md:block hidden"
                />
                <img
                  src={course.imageUrl}
                  alt={course.courseName}
                  className="md:hidden w-full h-full object-center object-cover"
                />
              </div>
              <div className="md:pl-3 md:w-8/12 2xl:w-3/4 flex flex-col justify-center">
                <p className="text-xs leading-3 text-gray-800 md:pt-0 pt-4">{course.courseName}</p>
                <div className="flex items-center justify-between w-full">
                  <p className="text-base font-black leading-none text-secondary">{course.courseName}</p>
                 
                </div>
                <p className="text-xs leading-3 text-gray-600 pt-2">Date: {course.date}</p>
                <p className="text-xs leading-3 text-gray-600 py-4">{course.description}</p>
                <div className="flex items-center justify-between pt-5">
                  <div className="flex items-center">
                    <p className="text-xs leading-3 underline text-orange-500 cursor-pointer">Add to favorites</p>
                    <p className="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer">Remove</p>
                  </div>
                  <p className="text-base font-black leading-none text-teal-500">{course.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoursesBoughtSection;
