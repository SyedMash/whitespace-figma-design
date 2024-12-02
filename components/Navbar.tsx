import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full bg-[#043873]">
      <nav className="h-[92px] w-full container mx-auto bg-[#043873] px-3 lg:py-[16px]  flex items-center justify-between">
        <div className="">
          <Image src={"/Logo.png"} width={191} height={34} alt="logo" />
        </div>
        <div className="flex items-center gap-[60px]">
          <ul className="items-center gap-[32px]  text-white hidden lg:flex">
            {["Products", "Solution", "Resources", "Pricing"].map(
              (item, index) => (
                <li key={index}>{item}</li>
              )
            )}
          </ul>
          <button className="w-[126px] h-[60px] rounded-[8px] py-[16px] px-[40px] bg-[#FFE492]">
            Login
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
