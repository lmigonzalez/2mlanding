import React from "react";
import Image from "next/image";
import Link from "next/link";
import MobileMenu from "../components/MobileMenu";
const Navbar = () => {
  return (
    <nav className="bg-black flex justify-between text-white items-center px-6 fixed top-0 left-0 w-full z-50">
      <Link href={"/"}>
        {" "}
        <Image
          src={"/2M.png"}
          alt="logo"
          width={100}
          height={100}
        />{" "}
      </Link>

      <ul className="hidden md:flex items-center gap-5 text-xl ">
        <li>
          <Link href={"#about"}>About</Link>
        </li>
        <li>
          <Link href={"#services"}>Services</Link>
        </li>
        <li>
          <Link href={"#store"}>Store</Link>
        </li>
        <li>
          <Link href={"#partners"}>Partners</Link>
        </li>
        <li>
          <Link href={"#contact"}>Contact</Link>
        </li>
      </ul>

      <MobileMenu />
    </nav>
  );
};

export default Navbar;
