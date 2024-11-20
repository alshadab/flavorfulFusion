import React, { useEffect, useState } from 'react';
import useRequest from '../../../APIServices/useRequest';

function AdminPendingOrderTableItems({ person }) {
  const [postRequest, getRequest] = useRequest();
  const [sellers, setSellers] = useState([]);

  const fetchSellerInfo = async () => {
    try {
      const fetchData = await getRequest(`/users/src/byId/${person?.sellerId}`);
      setSellers(fetchData?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchSellerInfo();
  }, []);

  return (
    <tr>
      <td className="whitespace-nowrap py-5 pr-3 text-sm sm:pl-0">
        <div className="flex items-center">
          {/* <div className="h-11 w-11 flex-shrink-0">
                          <img
                            className="h-11 w-11 rounded-full"
                            src={person.image}
                            alt=""
                          />
                        </div> */}
          <div className="ml-4">
            <div className="font-medium text-gray-900">{person.userName}</div>
            <div className="mt-1 text-gray-500">{person.email}</div>
          </div>
        </div>
      </td>
      <td className="whitespace-nowrap py-5 text-sm text-left pl-8 text-gray-500">
        {person?.totalQuantity ? person?.totalQuantity : 0}
      </td>
      {/* <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                      Vegetables
                    </td> */}
      <td className="whitespace-nowrap py-5 pr-3 text-sm sm:pl-0">
        <div className="flex items-center">
          {/* <div className="h-11 w-11 flex-shrink-0">
            <img
              className="h-11 w-11 rounded"
              src={`${process.env.REACT_APP_BackendURL}/images/${person?.image}`}
              alt=""
            />
          </div> */}
          <div className="">
            <div className="font-medium text-gray-900">
              {sellers?.userFullName}
            </div>
          </div>
        </div>
      </td>
      <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
        {person?.deliverFee ? person?.deliveryFee : 0} TK
      </td>
      <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
        {person?.productSellingPrice ? person?.productSellingPrice : 0} TK
      </td>
      <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
        {person?.allTotalPrice ? person?.allTotalPrice : 0} TK
      </td>
      {/* <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                      <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                        Active
                      </span>
                    </td> */}
      {/* <td className="relative whitespace-nowrap py-5 pl-3 text-center text-sm font-medium sm:pr-0">
                      <p className="text-indigo-600 hover:text-indigo-900">
                        Edit<span className="sr-only">, {person.name}</span>
                      </p>
                    </td> */}
    </tr>
  );
}

export default AdminPendingOrderTableItems;
