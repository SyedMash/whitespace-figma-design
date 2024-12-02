import Image from "next/image";
import React from "react";
import Circle from "./Circle";

const SectionTwo = () => {
  return (
    <div className="min-h-screen w-screen bg-white overflow-hidden pb-2">
      <div className="container mx-auto size-full flex flex-col gap-12  lg:mt-48">
        <div className="flex w-full h-2/4 flex-col lg:flex-row">
          <div className="text-black space-y-[60px] w-full lg:w-2/4 flex flex-col justify-center p-5 ">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold">
              Project <br /> Management
            </h1>
            <p className="text-sm">
              Images, videos, PDFs and audio files are supported. Create math
              expressions and diagrams directly from the app. Take photos with
              the mobile app and save them to a note.
            </p>
            <button className="bg-[#4F9CF9] w-fit rounded-[8px] p-5">
              Try Whitespace free {"->"}
            </button>
          </div>
          <div className="w-full lg:w-2/4 h-[35vh] lg:h-[35vh] bg-[#C4DEFD]"></div>
        </div>

        <div className="flex flex-col lg:flex-row-reverse w-full h-2/4">
          <div className="text-black space-y-[60px] w-full lg:w-2/4 flex flex-col justify-center p-5">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold">
              Work together
            </h1>
            <p className="text-sm">
              With whitepace, share your notes with your colleagues and
              collaborate on them. You can also publish a note to the internet
              and share the URL with others.
            </p>
            <button className="bg-[#4F9CF9] w-fit rounded-[8px] p-5">
              Try Now {"->"}
            </button>
          </div>
          <div className="w-full lg:w-2/4 h-full relative flex items-center justify-center">
            <Image
              src={"/el.png"}
              alt=""
              width={500}
              height={500}
              className=""
            />

            <Image
              src={"/el.png"}
              alt=""
              width={300}
              height={300}
              className="absolute "
            />
            <Image
              src={"/icon.png"}
              alt=""
              width={30}
              height={30}
              className="absolute "
            />

            <Circle customClass="absolute bg-red-500 left-[100px] " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
