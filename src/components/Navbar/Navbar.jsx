import React from "react";
import NavDropDown from "./NavDropDown/NavDropDown";
import logo from "../../assets/logo.png";

function Navbar() {
  return (
    <div className="w-full h-[14vh] px-[2vw] border-b-2 bg-slate-100">
      <div className="w-full h-full border-white flex items-center">
        <div className="flex items-center">
          <img
            src={logo}
            className="w-20 h-20"
            alt="Flavour Full Fushion Logo"
          />
          <h1 className="text-xl ">
            <span className="font-extrabold">Flavourfull </span> Fushion
          </h1>
        </div>
        <div className="ml-10">
          <NavDropDown />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
