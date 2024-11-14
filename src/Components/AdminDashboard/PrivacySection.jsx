import React from "react";

const PrivacySection = () => {
  // Sample user privacy data
  const usersPrivacyData = [
    {
      name: "John Doe",
      privacyPolicy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel purus vitae nunc sollicitudin iaculis.",
    },
    {
      name: "Jane Smith",
      privacyPolicy: "Mauris in eros vel nisi viverra luctus a non elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;",
    },
    {
      name: "Sam Wilson",
      privacyPolicy: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
    },
    {
      name: "Lisa Ray",
      privacyPolicy: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    },
  ];

  return (
    <div className="p-6 bg-white ">
      <h2 className="text-lg font-medium leading-6 text-secondary">Privacy</h2>
      <p className="mt-1 text-sm text-primary">
        Here are the privacy policies of the users on the platform:
      </p>

      {/* Mapping through user data */}
      <div className="mt-4 space-y-4">
        {usersPrivacyData.map((user, index) => (
          <div key={index} className="p-4 border border-gray-200 rounded-lg shadow-sm">
            <h3 className="text-md font-semibold text-secondary">{user.name}</h3>
            <p className="text-sm text-primary">{user.privacyPolicy}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrivacySection;
