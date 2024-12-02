import React from "react";

const Work = () => {
  return (
    <div className="h-[30vh] w-full bg-[#043873] overflow-hidden p-5">
      <div className="container mx-auto size-full flex flex-col gap-12 lg:flex-row">
        <div className="mt-24 text-center w-full space-y-4">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl text-white font-semibold">
            Work together
          </h1>
          <p className="text-sm text-white">
            Access your notes from your computer, phone or tablet by
            synchronising with various services, including whitepace, Dropbox
            and <br /> OneDrive. The app is available on Windows, macOS, Linux,
            Android and iOS. A terminal app is also available!
          </p>
          <button className="bg-[#4F9CF9] rounded-[8px] p-5 w-fit">
            {"Try Taskey"} {"->"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Work;
