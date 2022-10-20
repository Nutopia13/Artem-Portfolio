import React from "react";
import { useEffect } from "react";
import Imagefollow from "react-image-follow";
import { useAnimation, motion } from "framer-motion";
import gsap from "gsap";
import SplitType from "split-type";
import BlackGuy from "../assets/BlackGuy_Hero.jpg";

const Hero = () => {
  useEffect(() => {
    const qoutes = document.querySelector("#quote");
    const text = new SplitType('#quote', { types: 'words' })
    const title = document.querySelector("#mytitle");
    const myTitle = new SplitType(title);
    gsap.to(".char", {
      y: 0,
      opacity: 1,
      duration: 0.7,
      stagger: 0.05,
    });

     gsap.to(".word", {
     y: 0,
     opacity: 1,
    duration: 1,
    stagger: 0.05,
       });
  });

  return (
    <div className="flex justify-center mt-36 lg:mt-64 relative -z-10">
      <div className="max-w-[300px] text-white lg:max-w-[1200px] flex flex-wrap justify-center  w-full ">
        <div className="hero_text--cont text-center">
          <h1
            id="mytitle"
            className="text-3xl  lg:text-[70px] font-bold uppercase relative z-20 font-cizel"
          >
            One Shot. One Memory
          </h1>
          <blockquote  className="italic text-md lg:text-lg relative z-20 pt-7 ">
            <p id = 'quote' >
              "In photography there is a reality so subtle that it becomes more
              real than reality."
            </p>
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default Hero;
