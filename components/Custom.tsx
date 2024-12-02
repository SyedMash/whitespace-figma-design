import React from "react";

const Custom = () => {
  return (
    <div className="h-[50vh] w-full overflow-hidden pb-2 lg:pb-0">
      <div className="container mx-auto size-full flex flex-col gap-12 lg:flex-row lg:items-center">
        <div className="w-full flex flex-col h-[60vh] lg:flex-row-reverse lg:items-center gap-5">
          <div className="text-black space-y-[60px] w-full lg:w-2/4 flex flex-col p-5 lg:p-0">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl">
              Customize it to your needs
            </h1>
            <p className="text-sm">
              Use the web clipper extension, available on Chrome and Firefox, to
              save web pages or take screenshots as notes.
            </p>
            <button className="bg-[#4F9CF9] rounded-[8px] p-5 w-fit">
              {"Let's Go"} {"->"}
            </button>
          </div>
          <div className="w-full lg:w-2/4 h-[35vh] lg:h-[35vh] bg-[#C4DEFD]"></div>
        </div>
      </div>
    </div>
  );
};

export default Custom;
