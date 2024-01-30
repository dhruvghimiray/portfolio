/** @format */
import { StaticImageData } from "next/image";

import html from "@/app/assets/icons/html.png";
import css from "@/app/assets/icons/css.png";
import tailwind from "@/app/assets/icons/tailwind.png";
import javaScript from "@/app/assets/icons/javaScript.png";
import typeScript from "@/app/assets/icons/typeScript.png";
import react from "@/app/assets/icons/react.png";
import reactRouter from "@/app/assets/icons/reactRouter.png";
import nextJS from "@/app/assets/icons/nextJS.png";
import nodeJS from "@/app/assets/icons/nodeJS.png";
import git from "@/app/assets/icons/git.png";
import bootstrap from "@/app/assets/icons/bootstrap5.webp";
import python from "@/app/assets/icons/python.svg";
import C from "@/app/assets/icons/C.png";
import java from "@/app/assets/icons/java.svg";
import gsap from "@/app/assets/icons/gsap.svg";
import php from "@/app/assets/icons/php.png";
import laravel from "@/app/assets/icons/laravel.png";

export type ColType = { name: string; image: StaticImageData; url: string }[];

export const techObj: ColType = [
  {
    name: "HTML",
    image: html,
    url: "https://www.w3schools.com/html/default.asp",
  },
  { name: "CSS", image: css, url: "https://www.w3schools.com/css/default.asp" },

  {
    name: "JavaScript",
    image: javaScript,
    url: "https://www.w3schools.com/js/default.asp",
  },
  {
    name: "TypeScript",
    image: typeScript,
    url: "https://www.typescriptlang.org/",
  },
  { name: "php", image: php, url: "https://www.w3schools.com/php/" },
  { name: "php Laravel", image: laravel, url: "https://laravel.com/" },
  { name: "Java", image: java, url: "https://www.w3schools.com/java/" },
  { name: "C", image: C, url: "https://www.w3schools.com/c/index.php" },
  { name: "Python", image: python, url: "https://www.w3schools.com/python/" },

  { name: "Bootstrap 5", image: bootstrap, url: "https://getbootstrap.com/" },
  { name: "Tailwind", image: tailwind, url: "https://tailwindcss.com/" },

  { name: "React", image: react, url: "https://react.dev/" },
  { name: "Next.js", image: nextJS, url: "https://nextjs.org/" },
  { name: "Node.js", image: nodeJS, url: "https://www.w3schools.com/nodejs/" },
  {
    name: "React Router",
    image: reactRouter,
    url: "https://reactrouter.com/en/main",
  },

  { name: "GSAP", image: gsap, url: "https://greensock.com/gsap/" },

  { name: "Git", image: git, url: "https://git-scm.com/" },
];
