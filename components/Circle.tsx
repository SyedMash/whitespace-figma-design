import React from "react";

const Circle = ({ customClass }: { customClass?: string }) => {
  return (
    <div className={`rounded-full h-[50px] w-[50px] ${customClass}`}></div>
  );
};

export default Circle;
