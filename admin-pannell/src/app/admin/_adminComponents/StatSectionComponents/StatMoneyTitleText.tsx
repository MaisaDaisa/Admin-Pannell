import React from "react";

type StatMoneyTitleTextProps = {
  number: number;
  text: string;
  displayCurrency: boolean;
  textNumberPosition: "row" | "column";
};

const StatMoneyTitleText = ({
  number,
  text,
  displayCurrency,
  textNumberPosition,
}: StatMoneyTitleTextProps) => {
  const Currency = process.env.NEXT_PUBLIC_USED_CURRENCY || "";
  return (
    <div
      className={`flex items-center ${textNumberPosition === "row" ? "flex-row justify-between gap-8" : "flex-col items-center"}`}
    >
      <p className="font-inter text-base font-semibold leading-6 text-[#5D6679]">
        {(displayCurrency ? Currency : "") + number.toLocaleString("en-US")}
      </p>
      <p className="text-nowrap font-inter text-sm font-medium leading-5 text-[#667085]">
        {text}
      </p>
    </div>
  );
};

export default StatMoneyTitleText;
