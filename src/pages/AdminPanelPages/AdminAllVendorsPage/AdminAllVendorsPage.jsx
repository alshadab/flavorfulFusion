import React, { useEffect, useState } from "react";
import GlobalHeaders from "../../../components/GlobalComponents/GlobalHeaders/GlobalHeaders";
import AdminAllVendorsTable from "../../../components/AdminDashCompos/AdminAllVendorsTable/AdminAllVendorsTable";
import useRequest from "../../../APIServices/useRequest";

function AdminAllVendorsPage() {
  const [postRequest, getRequest] = useRequest();
  const [allVendors, setAllVendors] = useState([]);

  const fetchAllVendors = async () => {
    try {
      const vendorDetails = await getRequest("/users/src/all/vendors");
      setAllVendors(vendorDetails?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAllVendors();
  }, []);

  console.log(allVendors, "All Vendors");
  return (
    <div className="w-full h-full rounded-lg shadow-md px-10 bg-white">
      <div className="w-full bg-white rounded px-10 pt-10">
        <GlobalHeaders
          title={"All Users/Customers"}
          searchFilter={"User Full Name"}
        />
      </div>

      <div className="bg-white w-full pb-10 rounded">
        <AdminAllVendorsTable allVendors={allVendors} />
      </div>
    </div>
  );
}

export default AdminAllVendorsPage;
