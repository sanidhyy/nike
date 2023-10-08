import { useState } from "react";

import { headerLogo } from "../assets/images";
import { github, hamburger } from "../assets/icons";
import { navLinks } from "../constants";
import Button from "./Button";

// Nav
const Nav = () => {
  // is nav menu (mobile) open
  const [isMenu, setIsMenu] = useState(false);

  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        {/* header brand logo */}
        <a href="/">
          <img src={headerLogo} alt="logo" width={130} height={29} />
        </a>

        {/* nav links */}
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* source code */}
        <div className="flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24">
          <a
            href="https://github.com/sanidhyy/nike"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Button label="Source Code" iconURL={github} />
          </a>
        </div>

        {/* mobile menu */}
        <button
          type="button"
          className="hidden max-lg:block cursor-pointer"
          onClick={({ prevIsMenu }) => setIsMenu(!prevIsMenu)}
        >
          <img src={hamburger} alt="hamburger" width={25} height={25} />
        </button>

        {/* START: NAVBAR (SMALL DEVICES) */}
        <div className={`navbar-menu relative z-50 ${!isMenu && "hidden"}`}>
          <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
          <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
            <div className="flex items-center mb-8">
              {/* header brand logo (mobile) */}
              <a className="mr-auto text-3xl font-bold leading-none" href="/">
                <img src={headerLogo} alt="logo" width={90} height={20} />
              </a>
              {/* close navbar btn */}
              <button className="navbar-close" onClick={() => setIsMenu(false)}>
                <svg
                  className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
            {/* navbar links (mobile) */}
            <ul>
              {navLinks.map((item) => (
                <li key={`sm-${item.label}`} className="mb-1">
                  <a
                    href={item.href}
                    className="block p-4 hover:bg-slate-50 hover:text-coral-red font-montserrat leading-normal text-md text-slate-gray rounded"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            {/* source code */}
            <div className="mt-auto pt-6">
              <a
                href="https://github.com/sanidhyy/nike"
                target="_blank"
                rel="noreferrer noopener"
              >
                <Button label="Source Code" iconURL={github} fullWidth />
              </a>
            </div>
          </nav>
        </div>
        {/* END: NAVBAR (SMALL DEVICES) */}
      </nav>
    </header>
  );
};

export default Nav;
