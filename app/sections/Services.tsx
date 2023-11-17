"use client";
import React from "react";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <section className="relative w-full bg-[url('/lawn-bg.webp')] bg-center bg-no-repeat bg-cover  text-center py-20 flex flex-col justify-center items-center">
      <div className="absolute w-full h-full top-0 left-0 bg-black bg-opacity-50 z-0"></div>

      <div className="relative z-10 mb-10">
        <h2 id="services" className="text-4xl font-bold text-white">
          Our Services
        </h2>
      </div>

      <div className="w-[1380px] max-w-full grid grid-cols-2 justify-items-center gap-10 relative z-10 m-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="bg-white rounded p-8 text-start space-y-1"
        >
          <h3 className="font-bold text-2xl">Repairs</h3>
          <strong>Fast and Reliable Equipment Repairs</strong>
          <p>
            Our experienced technicians are here to get your outdoor power
            equipment back in top shape. Count on us for fast, reliable repairs
            to keep your machinery running smoothly.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.6 }}
          className="bg-white rounded p-8 text-start space-y-1"
        >
          <h3 className="font-bold text-2xl">Rent</h3>
          <strong>Affordable Equipment Rentals</strong>
          <p>
            Need equipment for a short-term project? Our rental services offer a
            cost-effective solution. Choose from our wide range of
            well-maintained equipment for your temporary needs.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="bg-white rounded p-8 text-start space-y-1"
        >
          <h3 className="font-bold text-2xl">Part Sales</h3>
          <strong>Genuine Parts for Peak Performance</strong>
          <p>
            We stock a comprehensive selection of genuine parts to ensure your
            equipment operates at its best. Find the right parts here to
            maintain and optimize your machinery.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 1 }}
          className="bg-white rounded p-8 text-start space-y-1"
        >
          <h3 className="font-bold text-2xl">Equipment Sales</h3>
          <strong>Quality Equipment for Every Need</strong>
          <p>
            Explore our extensive inventory of high-quality equipment for sale.
            Whether you&apos;re upgrading or starting a new project, we have the
            right outdoor power equipment to meet your requirements.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
