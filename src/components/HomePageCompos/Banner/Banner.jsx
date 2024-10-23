import React from "react";
import "./banner.css";

function Banner() {
  return (
    <div className="bannerClass w-full h-[86vh]">
      <div className="w-full h-full flex items-center justify-center">
        <div className="px-10 py-10 bg-white rounded-lg text-center">
          <h1 className="text-3xl font-extrabold font-poppins">
            Groceries will be delivered within 90 Minutes
          </h1>
          <p className="text-sm mt-4">
            Get your healthy foods & snacks delivered at your doorsteps all day
            everyday
          </p>
          <form className="mt-10 w-full grid grid-cols-12 items-center">
            <input className="col-span-10 border py-4 rounded-s-lg px-4 focus:outline-none" type="searc" placeholder="Search for Products"/>
            <input className="col-span-2 px-4 py-4 rounded-e-lg bg-orange-600 text-white font-semibold" type="submit" value="Search" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Banner;
