import React, {useEffect, useState} from "react";
import getProfile from "../../functions/getprofile";
import registerUser from "../../functions/registerUser";

const ProfileSection = () => {
  // Static data for users
  const users = [
    {
      id: 1,
      username: "john_doe",
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      company: "Example Corp",
    },
    {
      id: 2,
      username: "jane_smith",
      firstName: "Jane",
      lastName: "Smith",
      email: "jane.smith@example.com",
      company: "Tech Solutions",
    },
    {
      id: 3,
      username: "sam_brown",
      firstName: "Sam",
      lastName: "Brown",
      email: "sam.brown@example.com",
      company: "Innovatech",
    },
    {
      id: 4,
      username: "lisa_white",
      firstName: "Lisa",
      lastName: "White",
      email: "lisa.white@example.com",
      company: "Creative Inc.",
    },
    {
      id: 5,
      username: "mark_jones",
      firstName: "Mark",
      lastName: "Jones",
      email: "mark.jones@example.com",
      company: "Web Solutions",
    },
  ];

  const [exists, setExists] = useState(false)
  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmit = async(e) =>{
    e.preventDefault();
  const res = registerUser(userName, email)

  }

  useEffect(() =>{
    const getUserProfile = async() =>{

      try {
        const [username, email, exists] = await getProfile();
        if (!exists) {
            console.log("Profile not registered for this address.");
            // Prompt user to register a profile
        } else {
          setExists(true);
          setUserName(username);
          setEmail(email);
            console.log("Profile exists:", { username, email });
            // Display profile data in the UI
        }
    } catch (error) {
        console.error("Error fetching profile:", error);
    }    

    }
    getUserProfile()
  }, [exists])

  return (
    <div className="divide-y divide-teal-500  lg:col-span-9 p-6 bg-slate-100   h-full">


      {/* Users table */}
      <div className="mt-6">
        <h2 className="text-lg font-medium leading-6 text-secondary">Profile</h2>

        {
          exists?
          (
            <div className="mt-4 overflow-x-auto">
            <div className="sm:col-span-2">
            <label
              htmlFor="course-name"
              className="block text-sm font-medium text-primary"
            >
              User Name
            </label>
            <input
              type="text"
              id="course-name"
              value={userName}
              // onChange={(e) => setCourseName(e.target.value)}
              className="shadow-sm focus:ring-primary focus:border-primary block w-full sm:text-sm border-gray-300 rounded-md"
              disabled
            />
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="course-name"
              className="block text-sm font-medium text-primary"
            >
              E-mail
            </label>
            <input
              type="text"
              id="course-name"
              value={email}
              // onChange={(e) => setCourseName(e.target.value)}
              className="shadow-sm focus:ring-primary focus:border-primary block w-full sm:text-sm border-gray-300 rounded-md"
              disabled
            />
          </div>
            </div>
          ):

          (
            <form onSubmit={handleSubmit}>
        <div className="mt-4 overflow-x-auto">


          <div className="sm:col-span-2">
            <label
              htmlFor="course-name"
              className="block text-sm font-medium text-primary"
            >
              User Name
            </label>
            <input
              type="text"
              id="course-name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="shadow-sm focus:ring-primary focus:border-primary block w-full sm:text-sm border-gray-300 rounded-md"
              required
            />
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="course-name"
              className="block text-sm font-medium text-primary"
            >
              E-mail
            </label>
            <input
              type="text"
              id="course-name"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="shadow-sm focus:ring-primary focus:border-primary block w-full sm:text-sm border-gray-300 rounded-md"
              required
            />
          </div>

          <button
              type="submit"
              className="inline-flex justify-center py-2 px-4 text-sm font-medium text-white bg-teal-600 border border-transparent rounded-md shadow-sm hover:bg-primary-focus focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary mt-5"
            >
              Submit Profile
            </button>


        </div>
        </form>
          )
        }

        
      </div>
    </div>
  );
};

export default ProfileSection;
