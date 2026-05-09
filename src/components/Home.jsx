import React, { useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./Home.css";
import { Col, Container, Row } from "react-bootstrap";
import Skills from "./Skills";
import Projects from "./Projects";
import About from "./About";
import { useRef } from "react";
import ResumeBtn from "./ResumeBtn";
import {motion,useAnimation} from 'motion/react'
import { SvgGithub, SvgLinkedIn } from "./Svg/Svg";
import ContactMe from "./ContactMe";
const Home = ({onFinish}) => {
  const controls = useAnimation();
  const textControls = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      // Step 1: fade in overlay
      await controls.start({
        opacity: 1,
        transition: { duration: 0.3 }
      });

      // Step 2: text appear
      await textControls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" }
      });

      // Step 3: hold (pause like GSAP delay)
      await new Promise((res) => setTimeout(res, 800));

      // Step 4: text exit upward
      await textControls.start({
        opacity: 0,
        y: -120,
        transition: { duration: 0.6, ease: "easeInOut" }
      });

      // Step 5: fade out overlay
      await controls.start({
        opacity: 0,
        transition: { duration: 0.5 }
      });
      await controls.start({
        animationDelay:1,
        y:1000,
      });

      if(onFinish) onFinish();
    };

    sequence();
  }, []);
  return (
    <>
      <main>
        <div className="max-w-6xl mx-auto" id="about">
          <motion.div
          initial={{ opacity: 0}}
          animate={controls}
          className="fixed inset-0 bg-black flex items-center justify-center z-50"
        >
          <motion.h1
            initial={{ opacity: 0, y: 80 }}
            animate={textControls}
            className="text-white font overlay"
          >
           <svg xmlns="http://www.w3.org/2000/svg" className="hidden xl:block" width="96" height="96" viewBox="0 0 24 24"><path fill="#fff" d="M17.34 5.46a1.2 1.2 0 1 0 1.2 1.2a1.2 1.2 0 0 0-1.2-1.2m4.6 2.42a7.6 7.6 0 0 0-.46-2.43a4.9 4.9 0 0 0-1.16-1.77a4.7 4.7 0 0 0-1.77-1.15a7.3 7.3 0 0 0-2.43-.47C15.06 2 14.72 2 12 2s-3.06 0-4.12.06a7.3 7.3 0 0 0-2.43.47a4.8 4.8 0 0 0-1.77 1.15a4.7 4.7 0 0 0-1.15 1.77a7.3 7.3 0 0 0-.47 2.43C2 8.94 2 9.28 2 12s0 3.06.06 4.12a7.3 7.3 0 0 0 .47 2.43a4.7 4.7 0 0 0 1.15 1.77a4.8 4.8 0 0 0 1.77 1.15a7.3 7.3 0 0 0 2.43.47C8.94 22 9.28 22 12 22s3.06 0 4.12-.06a7.3 7.3 0 0 0 2.43-.47a4.7 4.7 0 0 0 1.77-1.15a4.85 4.85 0 0 0 1.16-1.77a7.6 7.6 0 0 0 .46-2.43c0-1.06.06-1.4.06-4.12s0-3.06-.06-4.12M20.14 16a5.6 5.6 0 0 1-.34 1.86a3.06 3.06 0 0 1-.75 1.15a3.2 3.2 0 0 1-1.15.75a5.6 5.6 0 0 1-1.86.34c-1 .05-1.37.06-4 .06s-3 0-4-.06a5.7 5.7 0 0 1-1.94-.3a3.3 3.3 0 0 1-1.1-.75a3 3 0 0 1-.74-1.15a5.5 5.5 0 0 1-.4-1.9c0-1-.06-1.37-.06-4s0-3 .06-4a5.5 5.5 0 0 1 .35-1.9A3 3 0 0 1 5 5a3.1 3.1 0 0 1 1.1-.8A5.7 5.7 0 0 1 8 3.86c1 0 1.37-.06 4-.06s3 0 4 .06a5.6 5.6 0 0 1 1.86.34a3.06 3.06 0 0 1 1.19.8a3.1 3.1 0 0 1 .75 1.1a5.6 5.6 0 0 1 .34 1.9c.05 1 .06 1.37.06 4s-.01 3-.06 4M12 6.87A5.13 5.13 0 1 0 17.14 12A5.12 5.12 0 0 0 12 6.87m0 8.46A3.33 3.33 0 1 1 15.33 12A3.33 3.33 0 0 1 12 15.33"/></svg> HEMANT.JSX
          </motion.h1>
        </motion.div>
          <div className="grid sm:grid-cols-2" >
            <div className="flex justify-center items-center">
              <div className="pt-4 px-5 z-10 ">
                <img
                  src="../assets/profileImg.webp"
                  className=" imgy max-h-87 rounded-full shadow border-gray border-3"
                  alt="image"
                  data-placeholder="../assets/profileImg.webp"
                />
              </div>
            </div>
            <div className=" p-3 flex justify-center lg:justify-start items-end animate-about" style={{ flex: 1 }}>
              <div className="" >
                <h1 className="font" style={{ fontSize: '5rem',lineHeight:'5rem' }}>I am <br /> Hemant Kumar</h1>
                <h2 className="font" style={{ fontSize: '3rem' }}>Software Engineer</h2>
                <hr />
                <div className="flex justify-center items-center ">
                  <a href="https://github.com/hemant-devlop" aria-label="link for github account" target="_blank" className="btn  rounded-0"><SvgGithub className='fill-[#212529]'/></a>
                  <a href="https://www.linkedin.com/in/hemantdevloper/" aria-label="link for linked in account" target="_blank" className="btn  rounded-0"><SvgLinkedIn className='fill-[#212529]'/></a>
                 <div className="mt-1 "> <ResumeBtn /></div>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <About />
          <hr />
          <Skills />
          <hr />
          <Projects />
          <hr/>
          <ContactMe/>
        </div>
      </main>
    </>
  );
};

export default Home;

