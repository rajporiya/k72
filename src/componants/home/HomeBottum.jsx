import React from "react";
import { Link } from "react-router-dom";

const HomeBottum = () => {
  return (
<div className="h-screen w-screen flex items-center justify-center">
  <div className=" text-[4vw] font-[font2] flex items-center justify-center gap-5">

    <div>
      <Link className="inline-block border-2 border-white rounded-full px-[4vw] py-[1.5vw] uppercase transition-all duration-300 hover:border-[#D3FD50] hover:text-[#D3FD50]">
        Project
      </Link>
    </div>

    <div>
      <Link className="inline-block border-2 border-white rounded-full px-[4vw] py-[1.5vw] uppercase transition-all duration-300 hover:border-[#D3FD50] hover:text-[#D3FD50]">
        Agency
      </Link>
    </div>

  </div>
</div>
  );
};

export default HomeBottum;
