"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
const Partners = () => {
  const brands = [
    {
      id: 1,
      name: "Bobcat",
      url: "/brands/2m-bobcat.png",
    },
    {
      id: 2,
      name: "BE",
      url: "/brands/2m-be.png",
    },
    {
      id: 3,
      name: "Echo",
      url: "/brands/2m-echo.png",
    },
    {
      id: 4,
      name: "Jason",
      url: "/brands/2m-jason.png",
    },
    {
      id: 5,
      name: "Kawasaki",
      url: "/brands/2m-kawasaki.png",
    },
    {
      id: 6,
      name: "Kohler",
      url: "/brands/2m-kohler.png",
    },
    {
      id: 7,
      name: "Scag",
      url: "/brands/2m-scag.png",
    },
    {
      id: 8,
      name: "Shindaiwa",
      url: "/brands/2m-shindaiwa.png",
    },
    {
      id: 9,
      name: "Shihl",
      url: "/brands/2m-stihl.png",
    },
    {
      id: 10,
      name: "Toro",
      url: "/brands/2m-toro.png",
    },
    {
      id: 11,
      name: "Wacker",
      url: "/brands/2m-wacker.png",
    },
    {
      id: 12,
      name: "Yanmar",
      url: "/brands/2m-yanmar.png",
    },
  ];

  return (
    <section className="max-w-full py-20 w-[1380px] m-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.8, duration: 0.3 }}
        className="max-w-[700px] m-auto text-center space-y-4"
      >
        <h2 id="partners" className="text-4xl font-bold">
          Trusted Brands We Partner With
        </h2>
        <h3 className="text-xl">Leading the Industry</h3>
        <p>
          At 2M Equipment, we are proud to collaborate with some of the leading
          brands in the outdoor power equipment industry. Our partnerships with
          trusted names like Bobcat, Echo, Toro, Stihl, and more allow us to
          provide you with a wide range of high-quality equipment and tools. We
          believe in offering our customers the best, and that's why we partner
          with these renowned brands known for their reliability and
          performance. Explore our selection of products and experience the
          quality that comes with our valued partnerships.
        </p>
      </motion.div>

      <div className="grid grid-cols-6 justify-items-center gap-10 px-6 mt-10 m-auto w-full">
        {brands.map((item, index) => {
          return (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: (index + 1) / 10, duration: 0.3 }}
              className="bg-white shadow-2xl  rounded-full hover:border-orange-600 border cursor-pointer flex justify-center items-center w-full aspect-square transition-all p-10"
              key={index}
            >
              <Image src={item.url} alt={item.name} width={150} height={150} />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Partners;
