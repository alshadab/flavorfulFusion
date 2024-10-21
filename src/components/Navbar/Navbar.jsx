import React from "react";
import NavDropDown from "./NavDropDown/NavDropDown";
import logo from "../../assets/logo.png";

function Navbar() {
  return (
    <div className="w-full h-[10vh] px-[2vw] border-b-2">
      <div className="w-full h-full border-white flex items-center">
        <div className="text-lg flex items-center">
          <img
            src={logo}
            className="w-20 h-20"
            alt="Flavour Full Fushion Logo"
          />
          <h1>
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
