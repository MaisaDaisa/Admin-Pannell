import React from "react";
import Image from "next/image";
import StatMoneyTitleText from "./StatMoneyTitleText";

interface StatsDisplayerProps {
  stats: {
    image: string;
    backgroundColor: `#${string}`;
    number: number;
    text: string;
    displayCurrency: boolean;
  }[];
  textNumberPosition: "row" | "column";
}

const StatsDisplayer = ({ stats, textNumberPosition }: StatsDisplayerProps) => {
  return (
    <div className="mb-6 flex h-auto w-full justify-around gap-[22px] px-4">
      {stats.map((stat, idx) => (
        <>
          <div className="flex flex-col items-center gap-3" key={idx}>
            <div
              className={`rounded p-[3px]`}
              style={{ backgroundColor: stat.backgroundColor }}
            >
              <Image src={stat.image} alt={stat.text} />
            </div>
            <StatMoneyTitleText
              number={stat.number}
              text={stat.text}
              displayCurrency={stat.displayCurrency}
              textNumberPosition={textNumberPosition}
            />
          </div>
          {idx < stats.length - 1 && (
            <div className="h-auto w-[1px] bg-[#F0F1F3]"></div>
          )}
        </>
      ))}
    </div>
  );
};

export default StatsDisplayer;
