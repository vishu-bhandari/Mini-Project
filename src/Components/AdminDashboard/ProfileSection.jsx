import React from "react";

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

  return (
    <div className="divide-y divide-teal-500  lg:col-span-9 p-6 bg-slate-100   h-full">
      {/* Summary section */}
      <div className="pb-6">
        <h2 className="text-lg font-medium leading-6 text-secondary ">User Statistics</h2>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-secondary  rounded-lg p-4 shadow-md">
            <p className="text-sm font-bold text-white">Total Users</p>
            <p className="mt-1 text-2xl font-semibold text-white">{users.length}</p>
          </div>
        </div>
      </div>

      {/* Users table */}
      <div className="mt-6">
        <h2 className="text-lg font-medium leading-6 text-secondary">Users</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="min-w-full divide-y divide-teal-500">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-slate-700 uppercase tracking-wider"
                >
                  Username
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-slate-700 uppercase tracking-wider"
                >
                  First Name
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-slate-700 uppercase tracking-wider"
                >
                  Last Name
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-slate-700 uppercase tracking-wider"
                >
                  Email
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-slate-700 uppercase tracking-wider"
                >
                  Company
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {users.map((user) => (
                <tr key={user.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{user.username}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{user.firstName}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{user.lastName}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{user.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{user.company}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
