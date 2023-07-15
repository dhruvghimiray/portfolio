/** @format */

import "./globals.css"
import { Inter } from "next/font/google"
import Navbar from "@/app/components/Navbar"
import Footer from "@/app/components/Footer"
import { Providers } from "@/lib/provider"
import BackToTopBtn from "@/app/components/BackToTop"
import "react-toastify/dist/ReactToastify.css"
import { ToastContainer } from "react-toastify"
import { Metadata } from "next"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-dhruvghimiray.vercel.app/"),
  themeColor: "black",

  title: "Dhruv Ghimiray - Web Developer",
  description:
    "Web developer proficient in HTML, CSS, and JavaScript, with expertise in Bootstrap 5, React.js, Next.js, and TypeScript. I enjoy transforming designs into engaging user interfaces and strive to create visually appealing and responsive websites and applications.",
  keywords:
    "Web Developer, React, Next.js, Tailwind, Typescript, Node.js, JavaScript, Portfolio",
  authors: [{ name: "Dhruv Ghimiray" }],
  colorScheme: "dark",
  creator: "Dhruv Ghimiray",
  publisher: "Dhruv Ghimiray",

  openGraph: {
    title: "Dhruv Ghimiray - Web Developer",
    description:
      "Professional web developer with expertise in React.js and other modern web technologies. Explore my work, learn about my skills, and get in touch for collaboration.",

    url: "https://portfolio-dhruvghimiray.vercel.app/",
    siteName: "Dhruv Ghimiray - Web Developer",
    images: [
      {
        url: "#",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <Providers>
      <html lang="en" className="dark">
        <head>
          <link rel="icon" href="../public/favicon.ico" />

        </head>
        <body
          className={`${inter.className} mx-auto flex	 min-h-screen  max-w-screen-2xl flex-col bg-slate-200 text-slate-950  dark:bg-gradient-body-dark dark:text-white`}
        >
          <Navbar />

          <BackToTopBtn />
          <ToastContainer position="top-center" theme="dark" newestOnTop />

          <main className=" grow   px-8">{children}</main>
          <Footer />
        </body>
      </html>
    </Providers>
  )
}
