import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { CgMenuRight } from "react-icons/cg";
import Registration from "./Registration";
const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [open, setOpen] = useState(false);

  const menuLinks = [
    { name: "Home", link: "/" },
    { name: "About Us", link: "/about" },
    { name: "Contact Us", link: "/contact" },
  ];

  const [showPopUp, setShowPopUp] = useState(false)
  const handleOnClose = () => setShowPopUp(false)

  return (
    <nav
      className={`fixed w-full left-0 top-0 z-[999] ${
        sticky ? "bg-white text-gray-900" : "text-white"
      }`}
    >
      <div className="flex item-center justify-between">
        <div className="mx-7 mt-3">
          <Link to="/">
            <img src={logo} width="100px" />
          </Link>
        </div>
        <div
          className={` ${
            sticky ? "md:bg-white/0 bg-white" : "bg-white"
          } text-gray-900 md:block hidden px-7 py-2 font-medium rounded-bl-full`}
        >
          <ul className="flex items-center gap-1 py-2 text-lg mt-3">
            {menuLinks?.map((menu, i) => (
              <li key={i} className="px-6 hover:text-cyan-600">
                <Link to={menu?.link}>{menu?.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex item-center justify-between">
          <div className="mx-7 mt-3">
            <button onClick={() => setShowPopUp(true)} className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 md:flex hidden">
                Register/Login
              </span>
            </button>
          </div>
          <Registration onClose={handleOnClose} visible={showPopUp}/>
        </div>

              {/* Responsive View */}

        <div
          onClick={() => setOpen(!open)}
          className={`z-[999] ${
            open ? "text-gray-900" : "text-gray-800"
          } text-3xl md:hidden m-5`}
        >
          <CgMenuRight />
        </div>
        <div
          className={`md:hidden text-gray-900 absolute w-2/2 h-screen px-3 py-2 font-medium bg-white top-0  duration-1000 ${
            open ? "right-0" : "right-[-100%]"
          }`}
        >
          <ul className="flex flex-col justify-center h-full gap-10 py-2 text-lg">
            {menuLinks?.map((menu, i) => (
              <li key={i} className="px-6 hover:text-cyan-600">
                <a href={menu?.link}>{menu?.name}</a>
              </li>
            ))}
            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 md:flex hidden">
                Register/Login
              </span>
            </button>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
