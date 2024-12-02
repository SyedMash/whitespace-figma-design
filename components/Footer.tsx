import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#043873] h-fit lg:h-[50vh] w-full">
      <div className="container mx-auto size-full relative p-5">
        <div className="size-full flex flex-col lg:flex-row  lg:items-center text-white  lg:justify-center gap-20 lg:gap-40">
          <div className="space-y-2">
            <Image src={"/Logo.png"} width={191} height={34} alt="logo" />
            <p className="text-whit text-sm  w-fit">
              whitepace was created for <br /> the new ways we live and <br />{" "}
              work. We make a better <br /> workspace around the world
            </p>
          </div>
          <div className="space-y-5">
            <h1 className="font-semibold">Product</h1>
            <h1>Pricing</h1>
            <h1>Customer Stories</h1>
          </div>
          <div className="space-y-2">
            <h1 className="font-semibold">Resources</h1>
            <h1>Blog</h1>
            <h1>Guide & Tutorials</h1>
            <h1>Help Center</h1>
          </div>
          <div className="space-y-2 mb-12">
            <h1 className="font-semibold">Company</h1>
            <h1>About us</h1>
            <h1>Career</h1>
            <h1>Media Kit</h1>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 border-t border-white w-full p-3 text-white">
        <h1 className="text-center">©2021 Whitepace LLC.</h1>
      </div>
    </div>
  );
};

export default Footer;
