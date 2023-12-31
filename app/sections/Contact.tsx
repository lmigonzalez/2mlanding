"use client";
import React, { useState } from "react";
import SimpleMap from "../components/GoogleMap";
import { motion } from "framer-motion";
import { useFormik } from "formik";
import axios from "axios";

interface Props {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const Contact = () => {
  const [showMessage, setShowMessage] = useState(false);

  function hideMessage() {
    setTimeout(() => {
      setShowMessage(false);
    }, 3000);
  }

  const {
    values,
    errors,
    touched,

    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
    validationSchema: "",
    onSubmit,
  });

  async function onSubmit(value: Props, action: any) {
    axios
      .post("/api/contact", values)
      .then((res) => {
        setShowMessage(true);
      })
      .catch((err) => {
        console.log(err);
      });

    hideMessage();
    action.resetForm();
  }

  return (
    <section
      id="contact"
      className="w-[1380px] max-w-full m-auto py-20 scroll-mt-20 px-6"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.8, duration: 0.3 }}
        className="max-w-[700px] m-auto text-center space-y-4"
      >
        <h2 className="text-4xl font-bold">Get in Touch</h2>
        <p>
          We&apos;re here to assist you with all your outdoor power equipment
          needs. Whether you have questions, require support, or want to discuss
          your specific requirements, don&apos;t hesitate to reach out to us.
          Our friendly and knowledgeable team is ready to provide you with the
          assistance you need. Contact us today and let&apos;s start the
          conversation.
        </p>
      </motion.div>

      <div className="flex flex-col md:flex-row items-center gap-10 mt-10 ">
        <div className="md:w-1/2 h-[500px] bg-slate-200 hidden md:block">
          {/* <SimpleMap /> */}
          <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3596.982991277292!2d-80.42590712390785!3d25.638690013675895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9c18f14b0b47b%3A0x3e8dd3a6ba40e1cd!2s2M%20Mower%20Tool%20%2F%20Bobcat%20Miami!5e0!3m2!1sen!2sus!4v1700672959726!5m2!1sen!2sus"
      width="600"
      height="450"
      style={{ border: 0, width: "100%", height: "100%" }}
      // allowFullScreen=false
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
        </div>
        <motion.form
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.8, duration: 0.3 }}
          className="md:w-1/2 flex flex-col gap-5 w-full mt-10 md:mt-0"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
            placeholder="Full Name"
            className="pb-8 border-b-[2px] caret-orange-700 focus:border-transparent focus:border-b-orange-700  outline-none appearance-none"
          />
          <input
            type="text"
            name="email"
            value={values.email}
            onChange={handleChange}
            placeholder="Email"
            className="pb-8 border-b-[2px] caret-orange-700 focus:border-transparent focus:border-b-orange-700  outline-none appearance-none"
          />
          <input
            type="tel"
            name="phone"
            value={values.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="pb-8 border-b-[2px] caret-orange-700 focus:border-transparent focus:border-b-orange-700  outline-none appearance-none"
          />
          <textarea
            placeholder="Message"
            value={values.message}
            onChange={handleChange}
            name="message"
            className="pb-8 border-b-[2px] caret-orange-700 focus:border-transparent focus:border-b-orange-700  outline-none appearance-none"
          ></textarea>

          <div className="flex justify-end">
            {" "}
            <button
              type="submit"
              className="py-3 px-10 rounded-lg bg-orange-700 text-white font-bold"
            >
              Submit
            </button>{" "}
          </div>

          {showMessage && (
            <div className="text-center mt-2 text-green-900 flex justify-center items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Message sent successfully.
            </div>
          )}
        </motion.form>
      </div>
    </section>
  )
};

export default Contact;
