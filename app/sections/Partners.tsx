"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
const Partners = () => {
  const brands = [
    {
      id: 1,
      name: "Bobcat",
      url: "/brands/2m-bobcat.png",
      page: "https://2mequipment.com/pages/bobcat",
    },
    {
      id: 2,
      name: "BE",
      url: "/brands/2m-be.png",
      page: "https://2mequipment.com/pages/be-power-equipment",
    },
    {
      id: 3,
      name: "Echo",
      url: "/brands/2m-echo.png",
      page: "https://2mequipment.com/pages/echo-power-equipment",
    },
    {
      id: 4,
      name: "Jason",
      url: "/brands/2m-jason.png",
      page: "https://2mequipment.com/pages/jason-industrial",
    },
    {
      id: 5,
      name: "Kawasaki",
      url: "/brands/2m-kawasaki.png",
      page: "https://2mequipment.com/pages/kawasaki",
    },
    {
      id: 6,
      name: "Kohler",
      url: "/brands/2m-kohler.png",
      page: "https://2mequipment.com/collections/kohler",
    },
    {
      id: 7,
      name: "Scag",
      url: "/brands/2m-scag.png",
      page: "https://2mequipment.com/pages/scag-power-equipment",
    },
    {
      id: 8,
      name: "Shindaiwa",
      url: "/brands/2m-shindaiwa.png",
      page: "https://2mequipment.com/pages/shindaiwa",
    },
    {
      id: 9,
      name: "Shihl",
      url: "/brands/2m-stihl.png",
      page: "https://2mequipment.com/collections/stihl",
    },
    {
      id: 10,
      name: "Toro",
      url: "/brands/2m-toro.png",
      page: "https://2mequipment.com/pages/toro",
    },
    {
      id: 11,
      name: "Wacker",
      url: "/brands/2m-wacker.png",
      page: "https://2mequipment.com/pages/wacker-neuson",
    },
    {
      id: 12,
      name: "Yanmar",
      url: "/brands/2m-yanmar.png",
      page: "https://2mequipment.com/pages/yanmar",
    },
  ];

  return (
    <section
      id="partners"
      className="max-w-full py-20 w-[1380px] m-auto scroll-mt-20 px-6"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.8, duration: 0.3 }}
        className="max-w-[700px] m-auto text-center space-y-4"
      >
        <h2 className="text-4xl font-bold">Trusted Brands We Partner With</h2>
        <h3 className="text-xl">Leading the Industry</h3>
        <p>
          At 2M Equipment, we are proud to collaborate with some of the leading
          brands in the outdoor power equipment industry. Our partnerships with
          trusted names like Bobcat, Echo, Toro, Stihl, and more allow us to
          provide you with a wide range of high-quality equipment and tools. We
          believe in offering our customers the best, and that&apos;s why we
          partner with these renowned brands known for their reliability and
          performance. Explore our selection of products and experience the
          quality that comes with our valued partnerships.
        </p>
      </motion.div>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 justify-items-center gap-4 md:gap-10 px-6 mt-10 m-auto w-full">
        {brands.map((item, index) => {
          return (
            <Link target="_blank" href={item.page} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: (index + 1) / 10, duration: 0.3 }}
                className="bg-white shadow-inner hover:shadow-xl  rounded-full hover:border-orange-600 border cursor-pointer flex justify-center items-center w-full aspect-square transition-all p-3 md:p-10"
                
              >
                <Image
                  className="rounded-full"
                  src={item.url}
                  alt={item.name}
                  width={150}
                  height={150}
                />
              </motion.div>
            </Link>
          );
        })}
      </div>

      <div className="w-full flex justify-center mt-14">
        <Link
          className="py-3 px-10 rounded-lg bg-orange-600 text-white font-bold"
          target="_blank"
          href={"https://2mequipment.com/pages/brands"}
        >
          All Brands
        </Link>
      </div>
    </section>
  );
};

export default Partners;
