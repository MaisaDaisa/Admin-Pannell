import React from "react";

const StatSectionTitle = ({
  title,
  className,
}: {
  title: string;
  className?: string;
}) => {
  return (
    <h3
      className={`my-5 ml-4 font-inter text-xl font-medium leading-[30px] text-[#383E49] ${className}`}
    >
      {title}
    </h3>
  );
};

export default StatSectionTitle;
