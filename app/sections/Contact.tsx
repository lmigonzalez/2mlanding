"use client";
import React from "react";
import SimpleMap from "../components/GoogleMap";
import { motion } from "framer-motion";
const Contact = () => {
  return (
    <section className="w-[1380px] max-w-full m-auto py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.8, duration: 0.3 }}
        className="max-w-[700px] m-auto text-center space-y-4"
      >
        <h2 id="contact" className="text-4xl font-bold">
          Get in Touch
        </h2>
        <p>
          We&apos;re here to assist you with all your outdoor power equipment needs.
          Whether you have questions, require support, or want to discuss your
          specific requirements, don&apos;t hesitate to reach out to us. Our friendly
          and knowledgeable team is ready to provide you with the assistance you
          need. Contact us today and let&apos;s start the conversation.
        </p>
      </motion.div>

      <div className="flex items-center gap-10 mt-10 ">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.8, duration: 0.3 }}
          className="w-1/2 h-[500px] bg-slate-200"
        >
          <SimpleMap />
        </motion.div>
        <motion.form 
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.8, duration: 0.3 }}
        className="w-1/2 flex flex-col gap-5">
          <input
            type="text"
            placeholder="Full Name"
            className="pb-8 border-b-[2px] caret-orange-600 focus:border-transparent focus:border-b-orange-600  outline-none appearance-none"
          />
          <input
            type="text"
            placeholder="Email"
            className="pb-8 border-b-[2px] caret-orange-600 focus:border-transparent focus:border-b-orange-600  outline-none appearance-none"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="pb-8 border-b-[2px] caret-orange-600 focus:border-transparent focus:border-b-orange-600  outline-none appearance-none"
          />
          <input
            type="text"
            placeholder="Message"
            className="pb-8 border-b-[2px] caret-orange-600 focus:border-transparent focus:border-b-orange-600  outline-none appearance-none"
          />
          <textarea
            placeholder="Message"
            name="message"
            className="pb-8 border-b-[2px] caret-orange-600 focus:border-transparent focus:border-b-orange-600  outline-none appearance-none"
          ></textarea>

          <div className="flex justify-end">
            {" "}
            <button className="py-3 px-10 rounded-lg bg-orange-600 text-white font-bold">
              Submit
            </button>{" "}
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
