"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

const MobileMenu = () => {
  const [showMenu, setShowMenu] = useState(false);

  function handleMenu() {
    setShowMenu(!showMenu);
  }

  return (
    <div className="relative md:hidden">
      <button role="button" type="button" onClick={handleMenu} className="relative z-40">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-10 h-10"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>

      {showMenu && (
        <div className="fixed top-0 left-0 z-30 w-full h-screen bg-black bg-opacity-50 backdrop-blur-sm flex justify-end">
          <ul className="bg-black w-8/12 flex flex-col items-center gap-10 text-xl pt-28">
            <li onClick={() => setShowMenu(false)}>
              <Link href={"#about"}>About</Link>
            </li>
            <li onClick={() => setShowMenu(false)}>
              <Link href={"#services"}>Services</Link>
            </li>
            <li onClick={() => setShowMenu(false)}>
              <Link href={"#store"}>Store</Link>
            </li>
            <li onClick={() => setShowMenu(false)}>
              <Link href={"#partners"}>Partners</Link>
            </li>
            <li onClick={() => setShowMenu(false)}>
              <Link href={"#contact"}>Contact</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
