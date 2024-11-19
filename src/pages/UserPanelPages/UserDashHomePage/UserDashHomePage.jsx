import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../providers/AuthProviders";
import useRequest from "../../../APIServices/useRequest";
import UserPersonalInfo from "../../../components/UserDashCompos/UserDashboardCompos/UserPersonalInfo";
import UserUpdateInformationCompo from "../../../components/UserDashCompos/UserDashboardCompos/UserUpdateInformationCompo";
import Swal from "sweetalert2";

function UserDashHomePage() {
  const { user } = useContext(AuthContext);

  const [postRequest, getRequest] = useRequest();
  const [customerDetails, setCustomerDetails] = useState();
  const [uptUserInfo, setUptUserInfo] = useState(false);

  const updateUserInfo = async (updatedInfo) =>{
    try{
      const updateData = postRequest(`/users/upt/${user?._id}`, {updatedInfo});
      console.log(updateData, "Update Data");
      if(updateData){
        Swal.fire(`Successfully Update`);
        setUptUserInfo(!uptUserInfo);
      }else{
        Swal.fire("Failed to Update");
      }
    }catch(error){
      console.log(error);
    }
  }

  const fetchCustomerDetails = async () => {
    try {
      const fetchedData = await getRequest(
        `/users/customer/src/byId/${user?._id}`
      );
      setCustomerDetails(fetchedData?.data?.data?.customerDetails);
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    fetchCustomerDetails();
  }, [uptUserInfo]);

  return (
    <div className="md:mx-5 md:my-5 border-2 rounded-lg shadow-md px-5 py-5">
      <div>
        <h1 className="text-lg font-semibold underline underline-offset-8">
          User Information
        </h1>
        <UserPersonalInfo customerDetails={customerDetails} user={user} />
      </div>
      <div className="mt-10">
        <UserUpdateInformationCompo customerDetails={customerDetails} user={user} updateUserInfo={updateUserInfo}/>
      </div>
    </div>
  );
}

export default UserDashHomePage;
