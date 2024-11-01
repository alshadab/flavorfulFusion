import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import NavPagesDropDown from "../NavPagesDropDown/NavPagesDropDown";
import { AuthContext } from "../../../providers/AuthProviders";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Swal from "sweetalert2";

function NavMenus() {
  const { user, setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const handleLogout = () => {
    localStorage.removeItem("userCreds");
    Swal.fire("Logged Out");
    setUser(null);
    navigate("/");
  };

  const userNavigation = [
    {
      navigate: "/userdash",
      text: "Profile",
    },
  ];

  const vendorNavigation = [
    {
      navigate: "/vendordash",
      text: "Profile",
    },
  ];

  const adminNavigation = [
    {
      navigate: "/admindash",
      text: "Profile",
    },
  ];
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
      {user ? (
        <div className="">
          <Menu as="div" className="relative">
            <MenuButton className="-m-1.5 flex items-center p-1.5">
              <span className="sr-only">Open user menu</span>
              <img
                className="h-8 w-8 rounded-full bg-gray-50"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
              <span className="hidden lg:flex lg:items-center">
                <span
                  className="ml-4 text-sm font-semibold leading-6 text-gray-900"
                  aria-hidden="true"
                >
                  Tom Cook
                </span>
                <ChevronDownIcon
                  className="ml-2 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </MenuButton>
            <Transition
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <MenuItems className="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                {user &&
                  (user.userType === 103 ||
                    user.userType === 109 ||
                    user.userType === 101) && (
                    <>
                      {(user.userType === 103
                        ? userNavigation
                        : user.userType === 109
                        ? adminNavigation
                        : vendorNavigation
                      ).map((item) => (
                        <div key={item.name}>
                          <MenuItem>
                            {({ focus }) => (
                              <Link to={item.navigate}>
                                <p
                                  className={classNames(
                                    focus ? "bg-gray-50" : "",
                                    "block px-3 py-1 text-sm leading-6 text-gray-900"
                                  )}
                                >
                                  {item.text}
                                </p>
                              </Link>
                            )}
                          </MenuItem>
                          <MenuItem>
                            <button
                            onClick={handleLogout}
                            className="pl-3 py-1 text-sm leading-6 text-gray-900">
                              Logout
                            </button>
                          </MenuItem>
                        </div>
                      ))}
                    </>
                  )}
              </MenuItems>
            </Transition>
          </Menu>
        </div>
      ) : (
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
      )}
    </div>
  );
}

export default NavMenus;
