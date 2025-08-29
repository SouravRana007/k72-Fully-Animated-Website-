import React from "react";
import { Link } from "react-router-dom";

const HomeBottomText = () => {
  return (
    <div className="font-[font2] flex items-center justify-center gap-2  uppercase ">
      <Link
        className="text-[5vw] leading-[5vw] hover:text-lime-300 border-5  pt-2 border-white  rounded-full  px-10"
        to="/projects"
      >
        Projets
      </Link>
      <Link
        className="text-[5vw] leading-[5vw] hover:text-lime-300 border-5  pt-2 border-white rounded-full px-10"
        to="/agence"
      >
        Agence
      </Link>
    </div>
  );
};

export default HomeBottomText;
