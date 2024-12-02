import React from "react";

const Hero = () => {
  return (
    <div className="h-fit lg:min-h-[829px] w-full bg-[#043873] overflow-hidden pb-2 lg:pb-0">
      <div className="container mx-auto size-full flex flex-col gap-12 lg:flex-row lg:mt-48">
        <div className="text-white space-y-[60px] w-full lg:w-2/4 flex flex-col p-5 lg:p-0">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl">
            Get More Done with <br /> whitespace
          </h1>
          <p className="text-sm">
            Project management software that enables your teams to collaborate,
            plan, analyze and manage everyday tasks
          </p>
          <button className="bg-[#4F9CF9] rounded-[8px] p-5 w-fit">
            Try Whitespace free {"->"}
          </button>
        </div>
        <div className="w-full lg:w-2/4 h-[35vh] lg:h-[35vh] bg-[#C4DEFD]"></div>
      </div>
    </div>
  );
};

export default Hero;
