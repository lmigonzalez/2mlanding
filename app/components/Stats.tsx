"use client";

import React, { useState, useEffect } from "react";

const Stats = () => {
  const [years, setYears] = useState(0);
  const [stars, setStars] = useState(0);
  const [clients, setClients] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (years < 27) {
        setYears(years + 1);
      } else {
        clearInterval(interval);
      }
    }, 80);

    return () => {
      clearInterval(interval);
    };
  }, [years]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (stars < 4.2) {
        setStars(stars + 0.2);
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, [stars]);


  useEffect(() => {
    const interval = setInterval(() => {
      if (clients < 1000) {
        setClients(clients + 50);
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, [clients]);


  return (
    <div
      className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 
                    flex gap-5 text-white"
    >
      <div className="w-40 h-40 bg-orange-600 shadow-xl rounded-xl flex justify-center items-center flex-col p-1 ">
        <p className="text-4xl font-extrabold">{years}+</p>
        <p>Years of Excellence</p>
      </div>
      <div className="w-40 h-40 bg-orange-600 shadow-xl rounded-xl flex justify-center items-center flex-col p-1">
        <p className="text-4xl font-extrabold">{(stars).toFixed(1)}</p>
        <p> Star Reviews</p>
      </div>
      <div className="w-40 h-40 bg-orange-600 shadow-xl rounded-xl flex justify-center items-center flex-col p-1">
        <p className="text-4xl font-extrabold">{clients}+</p>
        <p>Happy Clients</p>
      </div>
    </div>
  );
};

export default Stats;
