import React from "react";
import "../styles/_secondaryHero.scss";
import bgImg from "../assets/hero/secondary_hero_bg.jpg";

function SecondaryHero({ page }) {
  const bgStyle = {
    backgroundImage: `url(${bgImg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };
  return (
    <div
      id="secondary-hero-div"
      className="flex items-center justify-center relative h-[300px]"
      style={bgStyle}
    >
      <h2
        id="secondary-hero-header"
        className="text-white z-10 h-[50%] flex items-center justify-center text-[2.5rem] font-[500]"
      >
        {page}
      </h2>
    </div>
  );
}

export default SecondaryHero;
