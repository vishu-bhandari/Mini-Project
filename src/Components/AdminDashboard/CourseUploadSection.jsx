import React, { useState } from "react";

const CourseUploadSection = () => {
  const [courseName, setCourseName] = useState("");
  const [courseDescription, setCourseDescription] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);
  const [notifications, setNotifications] = useState({
    newCourseRelease: false,
    courseUpdate: false,
  });

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setNotifications((prevNotifications) => ({
      ...prevNotifications,
      [name]: checked,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission
    console.log("Course uploaded:", {
      courseName,
      courseDescription,
      category,
      price,
      image,
      notifications,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-8">
        {/* Main Heading */}
        <h2 className="text-3xl font-semibold text-secondary text-center">
          Upload a New Course
        </h2>

        {/* Subheading */}
        <p className="text-center text-lg text-primary">
          Fill out the form below to upload a new course to your platform. Make
          sure to include all necessary details.
        </p>

        <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-6">
          {/* Course Name */}
          <div className="sm:col-span-2">
            <label
              htmlFor="course-name"
              className="block text-sm font-medium text-primary"
            >
              Course Name
            </label>
            <input
              type="text"
              id="course-name"
              value={courseName}
              onChange={(e) => setCourseName(e.target.value)}
              className="shadow-sm focus:ring-primary focus:border-primary block w-full sm:text-sm border-gray-300 rounded-md"
              required
            />
          </div>

          {/* Course Description */}
          <div className="sm:col-span-2">
            <label
              htmlFor="course-description"
              className="block text-sm font-medium text-primary"
            >
              Course Description
            </label>
            <textarea
              id="course-description"
              value={courseDescription}
              onChange={(e) => setCourseDescription(e.target.value)}
              className="shadow-sm focus:ring-primary focus:border-primary block w-full sm:text-sm border-gray-300 rounded-md"
              rows="4"
              required
            />
          </div>

          {/* Category */}
          <div className="sm:col-span-1">
            <label
              htmlFor="category"
              className="block text-sm font-medium text-primary"
            >
              Category
            </label>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="focus:ring-primary focus:border-primary block w-full sm:text-sm border-gray-300 rounded-md"
              required
            >
              <option value="">Select a category</option>
              <option value="Web Development">Web Development</option>
              <option value="Design">Design</option>
              <option value="Marketing">Marketing</option>
              <option value="Business">Business</option>
            </select>
          </div>

          {/* Price */}
          <div className="sm:col-span-1">
            <label
              htmlFor="price"
              className="block text-sm font-medium text-primary"
            >
              Price
            </label>
            <input
              type="number"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="shadow-sm focus:ring-primary focus:border-primary block w-full sm:text-sm border-gray-300 rounded-md"
              required
            />
          </div>

          {/* Course Image Upload */}
          <div className="sm:col-span-2">
            <label
              htmlFor="image"
              className="block text-sm font-medium text-primary"
            >
              Course Image
            </label>
            <input
              type="file"
              id="image"
              onChange={(e) => setImage(e.target.files[0])}
              className="block w-full text-sm text-gray-500 border-gray-300 rounded-md"
            />
          </div>
        </div>

        {/* Notifications Section */}
        <div className="pt-8">
          <h3 className="text-lg font-medium text-primary">Notifications</h3>
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="newCourseRelease"
                name="newCourseRelease"
                type="checkbox"
                checked={notifications.newCourseRelease}
                onChange={handleCheckboxChange}
                className="focus:ring-primary h-4 w-4 text-primary border-gray-300 rounded"
              />
            </div>
            <div className="ml-3 text-sm">
              <label
                htmlFor="newCourseRelease"
                className="font-medium text-gray-700"
              >
                Notify when a new course is released
              </label>
            </div>
          </div>

          <div className="flex items-start mt-4">
            <div className="flex items-center h-5">
              <input
                id="courseUpdate"
                name="courseUpdate"
                type="checkbox"
                checked={notifications.courseUpdate}
                onChange={handleCheckboxChange}
                className="focus:ring-primary h-4 w-4 text-primary border-gray-300 rounded"
              />
            </div>
            <div className="ml-3 text-sm">
              <label
                htmlFor="courseUpdate"
                className="font-medium text-gray-700"
              >
                Notify when course content is updated
              </label>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-5">
          <div className="flex justify-end">
            <button
              type="submit"
              className="inline-flex justify-center py-2 px-4 text-sm font-medium text-white bg-teal-600 border border-transparent rounded-md shadow-sm hover:bg-primary-focus focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              Upload Course
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default CourseUploadSection;
