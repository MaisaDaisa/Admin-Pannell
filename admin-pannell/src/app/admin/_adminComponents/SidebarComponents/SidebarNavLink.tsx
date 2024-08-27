import Link from "next/link";
import React, { ReactElement, ReactNode, useState } from "react";
import { SidebarNavLinkListEnum } from "./SideBarNavLinkList";

interface SidebarNavLinkType {
  icon: React.JSX.Element;
  text: SidebarNavLinkListEnum | string;
  active: boolean;
  link: string;
}

function SidebarNavLink({ icon, text, active, link }: SidebarNavLinkType) {
  const [activeState, setActiveState] = useState(active);
  const color = activeState ? "#1570EF" : "#5D6679";
  return (
    <Link className="flex flex-row justify-start gap-4 py-4" href={link}>
      <div className="flex h-6 w-6 items-center justify-start">
        {React.cloneElement(icon, { color: color })}
      </div>
      <p
        className={`font-inter font-medium leading-6 ${activeState ? "text-primary" : "text-sub-heading"}`}
      >
        {text}
      </p>
    </Link>
  );
}

export default SidebarNavLink;
