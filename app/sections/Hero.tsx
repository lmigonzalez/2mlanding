"use client"
import React from "react";
import Link from "next/link";
import Stats from "../components/Stats";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <section className="relative w-full bg-[url('/bobcat-banner.webp')] bg-center bg-no-repeat h-[600px] flex justify-end">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className=" w-1/2 flex flex-col justify-center gap-8 relative z-10 px-8"
      >
        <h1 className="text-5xl font-bold">2M Mower Tool</h1>
        <h2 className="text-2xl drop-shadow-[0_1.2px_1.2px_rgba(255,255,255,1)] font-bold">
          Discover Premium Outdoor Power Equipment and Lawn Mower Solutions at
          2M Mower Tool
        </h2>
        <div className=" flex gap-10">
          <Link
            className="py-3 px-10 rounded-lg bg-white font-bold hover:shadow-xl transition-all"
            href={""}
          >
            Our Store
          </Link>
          <Link
            className="py-3 px-10 rounded-lg bg-orange-600 text-white font-bold hover:shadow-xl transition-all"
            href={""}
          >
            Contact Us
          </Link>
        </div>
      </motion.div>

    <Stats/>
    </section>
  );
};

export default Hero;
