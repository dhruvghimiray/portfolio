/** @format */

"use client"

import { Analytics } from '@vercel/analytics/react';

import React, { useEffect } from "react";
import About from "./about/About";
import Projects from "./projects/Projects";
import Technologies from "./technologies/Technologies";
import Experience from "./experience/Experience"
import SiderNavbar from "@/app/components/SiderNavbar";
import "./style.css";

import CanvasAnimation from './mouseEffect';


export default function Home() {
  

  return (
    <div className="test">
        <SiderNavbar />
      <div className="test2" id="canvas">
        <CanvasAnimation /> 
      </div>
      <div className="about">
        <About />
      </div>
      <Projects />
      <Technologies />
      <Experience />

      <Analytics />


    </div>
  );
}
