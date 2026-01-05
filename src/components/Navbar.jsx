// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { styles } from "../style";
import { navLinks } from "../constants/constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  // for downloading the CV
  const handleDownloadCV = () => {
    const url = "/Nischal_K_Shaj_Software_Developer.pdf";
    // Create a temporary anchor element
    const link = document.createElement("a");
    link.href = url;
    link.download = "Nischal_K_Shaj_Software_Developer.pdf"; // Name of the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Close mobile menu if open
    if (toggle) setToggle(false);
  };

  return (
    <nav
      className={`
      ${styles.paddingX} w-full flex items-center p-5 fixed top-0 z-20 bg-primary
    `}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Nischal K Shaj &nbsp;
            <span className="sm:block hidden">| MERN Stack Developer</span>
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] cursor-pointer font-medium`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
          <li
            className="text-secondary hover:text-white text-[18px] cursor-pointer font-medium"
            onClick={handleDownloadCV}
          >
            <button className="bg-transparent border-2 border-secondary hover:border-white px-4 py-2 rounded-lg transition-all duration-300">
              Download CV
            </button>
          </li>
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="h-[28px] w-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white" : "text-secondary"
                  } font-poppins font-medium text-[16px] cursor-pointer`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
              <li
                className={`${
                  active === "Download CV" ? "text-white" : "text-secondary"
                } font-poppins font-medium text-[16px] cursor-pointer`}
                onClick={() => {
                  setToggle(!toggle);
                  handleDownloadCV();
                }}
              >
                <button>Download CV</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
