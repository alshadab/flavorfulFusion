import React from "react";
import HomePageIndividualProduct from "../HomePageIndividualProduct/HomePageIndividualProduct";
import HomePageSidebarFilters from "../HomePageSidebarFilters/HomePageSidebarFilters";

function HomePageAllProducts() {
  return (
    <div className="px-10 pt-5 pb-10">
      <div className="grid grid-cols-12">
        <div className="col-span-3 pr-10">
          <HomePageSidebarFilters/>
        </div>
        {/* Scrollable Content */}
        <div className="col-span-9 overflow-y-auto max-h-screen">
          <div className="grid grid-cols-3 gap-x-10 gap-y-10">
            <HomePageIndividualProduct />
            <HomePageIndividualProduct />
            <HomePageIndividualProduct />
            <HomePageIndividualProduct />
            <HomePageIndividualProduct />
            <HomePageIndividualProduct />
            <HomePageIndividualProduct />
            <HomePageIndividualProduct />
            <HomePageIndividualProduct />
            <HomePageIndividualProduct />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePageAllProducts;
