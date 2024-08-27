import React, { Children } from "react";

const StatSectionBox = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="bg-background-white flex flex-col justify-between rounded-lg">
      {children}
    </div>
  );
};

export default StatSectionBox;
