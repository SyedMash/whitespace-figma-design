import Image from "next/image";
import React from "react";

const Sponser = () => {
  return (
    <div className="h-fit lg:h-[40vh] w-full bg-white overflow-hidden p-5">
      <div className="container mx-auto size-full flex flex-col gap-12 lg:flex-row">
        <div className="mt-24 text-center w-full space-y-48">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl text-black  font-semibold">
            Our Sponsors
          </h1>
          <div className="flex flex-col lg:flex-row items-center justify-center gap-48 lg:gap-96">
            <Image src={"/apple.png"} width={100} height={100} alt={""} />
            <Image src={"/mic.png"} width={200} height={200} alt={""} />
            <Image src={"/slack.png"} width={200} height={200} alt={""} />
            <Image src={"/google.png"} width={200} height={200} alt={""} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponser;
