import React from "react";
import IconType from "./IconType";

const LogOutIcon = ({ color = "#5D6679" }: IconType) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Log Out">
        <path
          id="Vector"
          d="M12.5651 21.6454H5.09465C4.8466 21.6454 4.64516 21.4398 4.64516 21.187V3.11327C4.64516 2.86058 4.84677 2.65484 5.09465 2.65484H12.5651C12.7432 2.65484 12.8877 2.50813 12.8877 2.32742C12.8877 2.14672 12.7432 2 12.5651 2H5.09465C4.49106 2 4 2.49955 4 3.11328V21.187C4 21.8007 4.49106 22.3003 5.09465 22.3003H12.5651C12.7432 22.3003 12.8877 22.1535 12.8877 21.9728C12.8877 21.7921 12.7433 21.6454 12.5651 21.6454V21.6454ZM20.1499 11.9186L15.7247 7.42719C15.5987 7.29929 15.3946 7.29929 15.2684 7.42719C15.1422 7.55509 15.1424 7.76247 15.2684 7.89036L19.1433 11.8227H8.61245C8.43442 11.8227 8.28987 11.9694 8.28987 12.1501C8.28987 12.3308 8.43442 12.4775 8.61245 12.4775H19.1433L15.2684 16.4103C15.1424 16.5382 15.1424 16.7454 15.2684 16.8734C15.3314 16.9374 15.4136 16.9694 15.4964 16.9694C15.5792 16.9694 15.6617 16.9374 15.7245 16.8734L20.1497 12.382C20.21 12.3208 20.2442 12.2375 20.2442 12.1505C20.2444 12.0633 20.2105 11.9802 20.1499 11.9186V11.9186Z"
          stroke-width="1.5"
          fill={color}
        />
      </g>
    </svg>
  );
};

export default LogOutIcon;
