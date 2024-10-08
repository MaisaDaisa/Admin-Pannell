import React from "react";
import IconType from "./IconType";

const ArrowUpIcon = ({ color = "12B76A" }: IconType) => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="arrow-up">
      <path
        id="Icon"
        d="M6 9.5V2.5M6 2.5L2.5 6M6 2.5L9.5 6"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
  </svg>
);

export default ArrowUpIcon;
