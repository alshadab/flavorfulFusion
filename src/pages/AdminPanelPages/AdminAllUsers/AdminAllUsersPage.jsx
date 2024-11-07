import React, { useEffect, useState } from "react";
import GlobalHeaders from "../../../components/GlobalComponents/GlobalHeaders/GlobalHeaders";
import AdminAllUsersTable from "../../../components/AdminDashCompos/AdminAllUsersTable/AdminAllUsersTable";
import useRequest from "../../../APIServices/useRequest";
import FilterByUserType from "../../../components/GlobalComponents/FilterByUserType/FilterByUserType";
import { FaUserPlus } from "react-icons/fa";

function AdminAllUsersPage() {
  const [postRequest, getRequest] = useRequest();
  const [allUsers, setAllUsers] = useState([]);
  const [deleteState, setDeleteState] = useState([]);
  const [activateState, setActivateState] = useState([]);

  const fetchAllUsers = async () => {
    try {
      const userData = await getRequest("/users/src/all");
      setAllUsers(userData?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAllUsers();
  }, [deleteState, activateState]);

  const deleteUser = async (id) => {
    try {
      const dltProd = await getRequest(`/users/del/${id}`);
      setDeleteState(dltProd?.data);
    } catch (error) {
      console.log(error);
    }
  };

  const activateUser = async (id) => {
    try {
      const activateProd = await getRequest(`/users/actv/${id}`);
      setActivateState(activateProd?.data);
    } catch (error) {
      console.log(error);
    }
  };

  const userTypes = [
    {
      typeName: "Admin",
      userType: 109,
    },
    {
      typeName: "Customers",
      userType: 103,
    },
    {
      typeName: "Vendors",
      userType: 101,
    },
  ];

  const handleSelectUsers = async (userTypeCode) => {
    // const fetchAllUsersAgain = await getRequest(
    //   `/products/src/category/${userTypeCode.target.value}`
    // );
    // setAllUsers(fetchAllUsersAgain?.data?.data);
  };

  return (
    <div className="w-full h-full rounded-lg shadow-md px-10 bg-white">
      <div className="w-full bg-white rounded px-10 pt-10">
        <GlobalHeaders title={"All Users/Customers/Buyers"} searchFilter={"UserName"} />
      </div>
      <div className="mt-10 px-10 grid grid-cols-2 items-end">
        <FilterByUserType
          userTypes={userTypes}
          handleSelectUsers={handleSelectUsers}
        />
        <div className="w-full flex items-center justify-end">
          <button className="flex items-center gap-x-2 px-6 py-2 rounded-lg text-white font-semibold leading-2 bg-orange-600 duration-200 hover:duration-200 hover:bg-orange-700"><FaUserPlus/><span>Add Admin</span></button>
        </div>
      </div>

      <div className="bg-white w-full pb-10 rounded">
        <AdminAllUsersTable
          activateState={activateState}
          deleteState={deleteState}
          activateUser={activateUser}
          deleteUser={deleteUser}
          allUsers={allUsers}
        />
      </div>
    </div>
  );
}

export default AdminAllUsersPage;
