import React from "react";


export default function Resume() {
  const handleButtonClick = () => {
    window.open(`./Resume.pdf`, "_blank");

    
  };

  return (
    <>
    <button
      aria-label="contact button"
      className={`flickerBox btnSecondary z-50 flex gap-4`}
      onClick={handleButtonClick}
    >
      Get My Resume
    </button>
    </>
  );
}
