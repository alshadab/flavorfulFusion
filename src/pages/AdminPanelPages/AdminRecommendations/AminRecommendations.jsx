import React, { useEffect, useState } from "react";
import useRequest from "../../../APIServices/useRequest";

function AminRecommendations() {
  const [postRequest, getRequest] = useRequest();
  const [allComplains, setAllComplains] = useState([]);

  const fetchAllComplains = async () => {
    try {
      const fetchData = await getRequest("/contact/src/all");
      setAllComplains(fetchData?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAllComplains();
  }, []);

  return (
    <div className="flex flex-col items-center p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-semibold mb-8">User Recommendations</h1>
      {allComplains && allComplains.length > 0 ? (
        <div className="w-full grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {allComplains.map((rec) => (
            <div
              key={rec.id}
              className="bg-white shadow-lg rounded-lg p-4 border border-gray-200 hover:shadow-xl transition-shadow duration-200"
              title={rec.description} // Tooltip with full description
            >
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                {rec.userFullName}
              </h2>
              <p className="text-sm text-gray-500 mb-4">{rec.email}</p>
              <h3 className="text-lg font-medium text-blue-600 mb-2">
                {rec.subject}
              </h3>
              <p className="text-gray-700 mb-4">
                {rec.description.length > 50
                  ? `${rec.description.substring(0, 50)}...`
                  : rec.description}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-3xl font-bold text-center text-gray-400 mt-10 w-full">
          <h1>No Complains Passed Yet !!</h1>
        </div>
      )}
    </div>
  );
}

export default AminRecommendations;
