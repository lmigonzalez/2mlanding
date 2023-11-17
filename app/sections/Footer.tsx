import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="pt-10 bg-[#202020] text-white w-full ">
      <div className="flex justify-between w-[1380px] max-w-full m-auto p-6 ">
        <div className="flex flex-col gap-2">
          <Image
            src={"/2M Equipment white logo.png"}
            alt="logo"
            width={100}
            height={100}
          />
          <strong>1-888-993-9326</strong>
          <strong>Store Hours:</strong>
          <p>
            {" "}
            <span>MON-FRI: </span> 7:30 AM - 4:30 PM
          </p>
          <p>
            {" "}
            <span>SAT: </span>8:00 AM - 12:00 PM
          </p>
          <p>
            {" "}
            <span>SUN: </span> Closed
          </p>
        </div>

        <div className="">
          <strong>Support</strong>
          <ul className="flex flex-col gap-1 text-start mt-2">
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
        </div>

        <div className="">
          <strong>Follow Us:</strong>
          <ul className="flex gap-3 my-2">
            <li>
              {" "}
              <Link href={""}>
                {" "}
                <Image
                  src={"/mail.png"}
                  alt="mail icon"
                  width={25}
                  height={25}
                />{" "}
              </Link>{" "}
            </li>
            <li>
              {" "}
              <Link href={""}>
                {" "}
                <Image
                  src={"/facebook.png"}
                  alt="facebook icon"
                  width={25}
                  height={25}
                />{" "}
              </Link>{" "}
            </li>
            <li>
              {" "}
              <Link href={""}>
                {" "}
                <Image
                  src={"/instagram.png"}
                  alt="instagram icon"
                  width={25}
                  height={25}
                />{" "}
              </Link>{" "}
            </li>
            <li>
              {" "}
              <Link href={""}>
                {" "}
                <Image
                  src={"/linkedin.png"}
                  alt="linkedin icon"
                  width={25}
                  height={25}
                />{" "}
              </Link>{" "}
            </li>
          </ul>
          <Link href={""}>hello@2mmowertools.com</Link>
        </div>
      </div>
      <div className="bg-black py-5">
        <p className="text-center text-sm">
          Copyright © 2023 2M Mower Tool - 2M Equipment.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
