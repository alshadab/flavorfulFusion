import React from "react";
import { Link, NavLink } from "react-router-dom";
import NavPagesDropDown from "../NavPagesDropDown/NavPagesDropDown";

function NavMenus() {
  const links = (
    <>
      <NavLink
        to="/shops"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "active"
            : "duration-200 hover:duration-200 hover:scale-110"
        }
      >
        Shops
      </NavLink>
      <NavLink
        to="/offers"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "active"
            : "duration-200 hover:duration-200 hover:scale-110"
        }
      >
        Offers
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "active"
            : "duration-200 hover:duration-200 hover:scale-110"
        }
      >
        Contact
      </NavLink>
      <NavPagesDropDown />
    </>
  );

  return (
    <div className="w-full h-full flex items-center justify-end gap-x-6">
      <div className="flex items-center gap-x-6 font-semibold">{links}</div>
      <div className="flex items-center gap-x-6">
        <Link to="/login">
          <button className="px-4 py-1 font-semibold rounded bg-orange-600 text-white duraiton-200 hover:duration-200 hover:bg-orange-700 hover:scale-110">
            Join
          </button>
        </Link>
        <Link to="/signup">
          <button className="px-4 py-1 font-semibold rounded bg-orange-600 text-white duraiton-200 hover:duration-200 hover:bg-orange-700 hover:scale-110">
            Become a Seller
          </button>
        </Link>
      </div>
    </div>
  );
}

export default NavMenus;
