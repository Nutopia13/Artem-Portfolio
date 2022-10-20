import React from "react";
import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import gsap from "gsap";
import SplitType from "split-type";

const Hero = () => {

  useEffect(() => {
    const title = document.querySelector("#mytitle");
    const myTitle = new SplitType(title);
    gsap.to(".char", {
      y: 0,
      opacity: 1,
      duration: 0.7,
      stagger: 0.05,
  
    })
  //   gsap.to(".word", {
  //     x: 0,
  //     opacity: 1,
  //     duration: 1,
  //     stagger: 0.002,
  //     delay: 0.2,
  //   });
  });

  return (
    <div className="flex justify-center mt-36 lg:mt-64 relative -z-10">
      <div className="max-w-[300px] text-white lg:max-w-[1200px] flex flex-wrap justify-center  w-full ">
        <div className="hero_text--cont text-center">
          <h1
            id="mytitle"
            className="text-3xl  lg:text-[70px] font-bold uppercase font-cizel"
          >
           One Shot.
           One Memory
          </h1>
          <blockquote className="italic text-md lg:text-lg pt-7 "><q>In photography there is a reality so subtle that it becomes more real than reality.</q></blockquote>
        </div>
      </div>
    </div>
  );
};

export default Hero;
