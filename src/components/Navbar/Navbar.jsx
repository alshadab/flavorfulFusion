import React from "react";
import NavDropDown from "./NavDropDown/NavDropDown";
import logo from "../../assets/logo.png";
import NavMenus from "./NavMenus/NavMenus";

function Navbar() {
  return (
    <div className="w-full h-[14vh] px-[2vw] bg-[#FFFFFF] grid grid-cols-12">
      <div className="col-span-4 w-full h-full border-white flex items-center gap-x-10">
        <div className="flex items-center">
          <img
            src={logo}
            className="w-20 h-20"
            alt="Flavour Full Fushion Logo"
          />
          <h1 className="text-xl">
            <span className="font-extrabold text-orange-600">Flavourfull </span> Fushion
          </h1>
        </div>
        <div>
          <NavDropDown />
        </div>
      </div>
      <div className="col-span-8">
          <NavMenus/>
      </div>
    </div>
  );
}

export default Navbar;
