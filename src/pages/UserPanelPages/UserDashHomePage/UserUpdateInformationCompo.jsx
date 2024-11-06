import React, { useState, useEffect } from 'react';

function UserUpdateInformationCompo({ customerDetails, user }) {
  const [formData, setFormData] = useState({
    userName: user?.userName || '',
    fullName: user?.fullName || '',
    phoneNumber: user?.phoneNumber || '',
    email: user?.email || '',
    gender: user?.gender || '',
    shippingAddress: customerDetails?.shippingAddress || '',
    shippingState: customerDetails?.shippingState || '',
    shippingPostalCode: customerDetails?.shippingPostalCode || ''
  });

  const [hasChanged, setHasChanged] = useState({});

  useEffect(() => {
    const changes = Object.keys(formData).reduce((acc, key) => {
      acc[key] = false;
      return acc;
    }, {});
    setHasChanged(changes);
  }, [formData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
    setHasChanged((prev) => ({
      ...prev,
      [name]: value !== (user?.[name] || customerDetails?.[name] || '')
    }));
  };

  const handleUpdate = (field) => {
    console.log(`Updating ${field} to ${formData[field]}`);
    // Here, implement the update logic, e.g., API call
  };

  return (
    <div className="grid grid-cols-2 gap-4 p-6 bg-white rounded shadow-md">
      {Object.keys(formData).map((field) => (
        <div key={field} className="relative flex flex-col">
          <label htmlFor={field} className="mb-1 text-gray-600 capitalize">
            {field.replace(/([A-Z])/g, ' $1')}
          </label>
          <input
            type="text"
            id={field}
            name={field}
            value={formData[field]}
            onChange={handleInputChange}
            className="px-3 py-2 border rounded outline-none focus:ring focus:ring-blue-300"
          />
          {hasChanged[field] && (
            <button
              onClick={() => handleUpdate(field)}
              className="mt-2 text-blue-500 underline hover:text-blue-700"
            >
              Update {field}
            </button>
          )}
        </div>
      ))}
    </div>
  );
}

export default UserUpdateInformationCompo;
