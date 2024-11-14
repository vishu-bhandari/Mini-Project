import React from "react";

const CoursesUploadedSection = () => {
  // Static data for courses uploaded
  const coursesUploaded = [
    {
      courseName: "React JS for Beginners",
      user: "John Doe",
      date: "2024-11-10",
      price: "$20.00",
      imageUrl: "https://i.ibb.co/6gzWwSq/Rectangle-20-1.png",
      description: "Introduction to React",
      status: "Published",
    },
    {
      courseName: "Advanced JavaScript",
      user: "Jane Smith",
      date: "2024-11-09",
      price: "$25.00",
      imageUrl: "https://i.ibb.co/6gzWwSq/Rectangle-20-1.png",
      description: "Mastering JavaScript",
      status: "Pending",
    },
    {
      courseName: "Full Stack Development",
      user: "Alice Johnson",
      date: "2024-11-08",
      price: "$30.00",
      imageUrl: "https://i.ibb.co/6gzWwSq/Rectangle-20-1.png",
      description: "Become a Full Stack Developer",
      status: "Published",
    },
  ];

  return (
    <div className="container mx-auto mt-10">
      <div className="sm:flex shadow-md my-10">
        <div className="w-full bg-white px-10 py-10">
          <div className="flex justify-between border-b pb-8">
            <h1 className="font-semibold text-2xl text-secondary">Courses Uploaded</h1>
            <h2 className="font-semibold text-2xl text-teal-500">{coursesUploaded.length} Items</h2>
          </div>

          {/* Table for Courses Uploaded */}
          <table className="min-w-full table-auto mt-6">
            <thead>
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-primary">Course</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-primary">User</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-primary">Date</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-primary">Price</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-primary">Status</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-primary">Image</th>
              </tr>
            </thead>
            <tbody>
              {coursesUploaded.map((course, index) => (
                <tr key={index} className="border-t border-gray-100">
                  <td className="px-6 py-4 text-sm text-gray-800">{course.courseName}</td>
                  <td className="px-6 py-4 text-sm text-gray-800">{course.user}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{course.date}</td>
                  <td className="px-6 py-4 text-sm text-teal-500">{course.price}</td>
                  <td className="px-6 py-4 text-sm">
                    <span
                      className={`px-3 py-1 text-xs font-bold rounded-full ${
                        course.status === "Published"
                          ? "bg-teal-500 text-white"
                          : "bg-orange-500 text-white"
                      }`}
                    >
                      {course.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <img
                      src={course.imageUrl}
                      alt={course.courseName}
                      className="w-12 h-12 object-cover rounded-full"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CoursesUploadedSection;
