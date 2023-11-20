"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
const Store = () => {
  return (
    <section id="store" className="w-full py-20 px-6 bg-[#202020] scroll-mt-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="max-w-[700px] m-auto text-center text-white space-y-4"
      >
        <h2 className="text-4xl font-bold text-white">
          Our store
        </h2>
        <h3 className="text-xl">Explore Our Full Inventory Online</h3>
        <p>
          Visit our dedicated online store to browse and shop our extensive
          range of outdoor power equipment, lawn mower tools, parts, and
          accessories. Discover everything you need for your outdoor projects
          and maintenance conveniently from the comfort of your home. Shop with
          confidence and find the perfect tools to tackle any task.
        </p>
        <div className="pt-10">
          <Link
            className="py-3 px-10 rounded-lg bg-orange-600 text-white font-bold"
            target="_blank"
            href={"https://2mequipment.com/"}
          >
            Start Shopping
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default Store;
