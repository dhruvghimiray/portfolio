/** @format */
import type { StaticImageData } from "next/image"
import portfolioCoverMain from "@/app/assets/projects/portfolioCoveMain.png"
import portfolioMainM from "@/app/assets/projects/PortfolioMainM.png"
import portfolioLeft from "@/app/assets/projects/portfolioLeft.png"
import portfolioRight from "@/app/assets/projects/poftfolioRight.png"

import mergeSort from "@/app/assets/projects/mergeSort.png"
import sortMain from "@/app/assets/projects/sortMain.jpg"
import SortLeft from "@/app/assets/projects/sortLeft.jpg"
import sortRight from "@/app/assets/projects/sortRight.jpg"

import pathfindingVisualizer from "@/app/assets/projects/pathfindingVisualizer.png"
import pathfinderMain from "@/app/assets/projects/pathfinderMain.jpg"
import pathfinderLeft from "@/app/assets/projects/pathfinderleft.jpg"
import pathfinderRight from "@/app/assets/projects/pathfinderRight.jpg"



export type ProjectsDataType = {
  id: string
  height: string
  stagger: string
  visibility: string
  mobile: boolean
  title: string
  pitch: string
  desc: string
  tech: string[]
  images: {
    coverWeb: StaticImageData
    coverMobile?: StaticImageData
    leftMobile?: StaticImageData
    rightMobile?: StaticImageData
    icon?: StaticImageData
  }
  links: {
    github: string
    website?: string
  }
}

export const projectData: ProjectsDataType[] = [
  {
    id: "7a8a95e1-0a2f-4947-8de7-f93e004616f5",
    height: "row-span-3 lg:row-span-5 xl:row-span-6  ",
    stagger: "   lg:translate-y-20 xl:-translate-y-26",
    visibility: "visible",
    mobile: true,
    title: "Portfolio",
    pitch:
      "Explore my portfolio website, a testament to my expertise in making things work seamlessly, where simplicity meets efficiency in every project I undertake ",
    desc: " Discover my portfolio website, meticulously crafted using the powerful combination of Next.js, TypeScript, and Tailwind CSS. Experience a smooth and responsive interface that beautifully showcases my projects and highlights my ability to create compelling web experiences.",
    tech: [""],
    images: {
      coverWeb: portfolioCoverMain,
      coverMobile: portfolioMainM,
      leftMobile: portfolioLeft,
      rightMobile: portfolioRight,
    },
    links: {
      github: "aaa",
      website: "ssss",
    },
  },

  {
    id: "9cd7f7f8-7577-451c-9d24-c6e1c4d1a96e",
    height: "row-span-3 lg:row-span-4 xl:row-span-6 ",
    stagger: " lg:translate-y-20 xl:translate-y-26",
    visibility: "visible",
    mobile: true,
    title: "Pathfinder Visualizer",
    pitch:
      "Discover the capabilities of Dijkstra's algorithm with this advanced visualizer. Unravel complex mazes, analyze optimal routes, and observe real-time shortest path generation.",
    desc: "Immerse yourself in the realm of pathfinding algorithms with my captivating visualization tool. Witness the power of Dijkstra's Algorithm as it uncovers the shortest path amidst complex mazes and obstacles. Explore the dynamic process of finding optimal routes, showcasing my proficiency in algorithm implementation and problem-solving. ",
    tech: [""],
    images: {
      coverWeb: pathfindingVisualizer,
      coverMobile: pathfinderMain,
      leftMobile: pathfinderLeft,
      rightMobile: pathfinderRight,
    },
    links: {
      github: "https://github.com/dhruvghimiray/Pathfinder-Visualizer",
      website: "https://dhruvghimiray.github.io/Pathfinder-Visualizer/",
    },
  },
  
  {
    id: "ef2f82cf-a5ef-4247-ba38-8cc23cbb46c2",
    height: "row-span-3 lg:row-span-5 xl:row-span-6 ",
    stagger: "   lg:translate-y-20 xl:-translate-y-26",
    visibility: "visible",
    mobile: true,
    title: "Sorting Visualizer",
    pitch:
      " Sort Visualizer is practical tool showcasing sorting algorithms .",
    desc: "Sorting Algorithm Visualizer: a dynamic showcase of sorting algorithms in action. Experience the captivating transformation of unordered data into perfectly ordered sequences through Bubble, Insertion, Merge, and Quick Sort. This project highlights my proficiency in algorithm implementation and visualization, demonstrating my ability to tackle complex data organization challenges. Explore the elegance and efficiency of sorting algorithms in this portfolio-worthy project.",
    tech: ["React", "Bootstarp 5", "Javascript"],
    images: {
      coverWeb: mergeSort,
      coverMobile: sortMain,
      leftMobile: SortLeft,
      rightMobile: sortRight,
    },
    links: {
      github: "https://github.com/dhruvghimiray/sort-visualizer",
      website: "https://dhruvghimiray.github.io/sort-visualizer/",
    },
  },

]
