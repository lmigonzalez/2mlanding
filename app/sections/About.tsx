"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
const About = () => {
  return (
    <section className="w-full py-40">
      <div className="w-[1380px] max-w-full m-auto flex justify-between items-center">
        <div className="w-1/2 h-full flex flex-col gap-20 px-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="relative  flex justify-end items-start "
          >
            <div className="absolute w-[500px] h-[375px] bg-orange-800 -top-5 left-16 rounded"></div>
            <Image
              src={"/counter.webp"}
              alt="counter"
              width={500}
              height={500}
              className="z-10 shadow-xl rounded"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="relative  flex justify-end "
          >
            <div className="absolute w-[500px] h-[222px] bg-orange-800 -top-5 left-20 rounded"></div>
            <Image
              src={"/equipments and tools.webp"}
              alt="counter"
              width={500}
              height={500}
              className="z-10 shadow-xl rounded"
            />
          </motion.div>
        </div>

        <div className="w-1/2 space-y-5">
          <h2 id="about" className="text-4xl font-bold">
            About 2M
          </h2>
          <h3 className="text-2xl">
            2M Equipment: Serving South Florida Since 2007
          </h3>
          <p>
            Founded in 2007, 2M Equipment is a fully operational, family-owned
            equipment dealership with a notable South Florida presence. Our
            diverse clientele encompasses some of the region&apos;s largest nursery
            agricultural producers, commercial landscape management firms,
            construction companies, and municipal and state governments.
          </p>
          <p>
            In the vibrant business landscape of Miami, Florida, the story of 2M
            unfolds as a tale of success and perseverance crafted by our
            founders, Dilbe Medina and Reinier Medina. What initially began as a
            dream fueled by Mr. Medina&apos;s vision as a Cuban immigrant has evolved
            into a thriving business legacy driven by a family dedicated to
            excellence.
          </p>
          <p>
            The name &quot;2M&quot; is not just a combination of letters; it&apos;s a tribute
            to our founders&apos; last names, the Medinas. This name embodies our
            deep-rooted family values and commitment to the heritage we&apos;ve built
            over the years.
          </p>
          <p>
            Dilbe Medina, a Cuban immigrant, arrived in Miami with a clear
            vision: to become a successful entrepreneur and contribute to the
            community&apos;s growth. He founded 2M in Miami in 2007, laying the
            foundation for a benchmark in the agriculture, construction, and
            industrial equipment industry.
          </p>
          <p>
            What sets 2M in Miami apart is the unique blend of family values,
            unwavering commitment to quality, and exceptional customer care.
            Operated by the Medina family, we&apos;ve retained our original essence
            while adapting and expanding our services.
          </p>
          <p>
            A key to our success has been our strategic vision. Dilbe Medina
            didn&apos;t just establish a business; he forged a legacy that his son,
            Reinier Medina, continues with dedication and passion. Reinier has
            elevated the company to heights, expanding our presence and securing
            representation for renowned industry brands.
          </p>
          <p>
            We&apos;re more than just an equipment provider; we&apos;ve become a trusted
            partner for those in agriculture, construction, and related sectors.
            Our comprehensive range of services, from sales to equipment repairs
            and rentals, ensures our customers can access solutions that meet
            their business needs.
          </p>
          <p>
            Our commitment to excellence is evident in the quality of our
            products and services. Our unwavering focus on customer satisfaction
            and cultivating long-term relationships have fueled our sustained
            growth and garnered customer loyalty.
          </p>
          <p>
            Essentially, 2M in Miami isn&apos;t just a company; it&apos;s a testament to
            how an immigrant&apos;s dream has blossomed into a thriving business
            legacy. Dilbe Medina&apos;s vision has stood the test of time, and under
            the stewardship of Reinier, 2M in Miami continues to set industry
            standards, delivering quality, service, and commitment at every
            turn.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
