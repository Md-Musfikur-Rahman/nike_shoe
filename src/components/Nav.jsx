import React, { useState } from "react";
import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };

  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="Header Logo" width={130} height={29} />
        </a>

        <ul className="flex flex-1 justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="fonts-montserrat leading-normal text-lg text-slate-gray"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden max-lg:block absolute right-24 p-6 ">
          <img
            src={hamburger}
            alt="hamburger"
            height={25}
            width={25}
            onClick={handleClick}
          />
          <ul
            className={`${
              isOpen ? "block" : "hidden"
            } absolute flex flex-col gap-3 w-max top-20 left-0`}
          >
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="fonts-montserrat leading-normal text-lg text-slate-gray"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
