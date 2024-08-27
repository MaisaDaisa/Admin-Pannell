import React from "react";
import Logo from "public/logo.png";
import Image from "next/image";
import SideBarNavLinkList from "./SideBarNavLinkList";
import { SidebarNavLinkListEnum } from "./SideBarNavLinkList";
import Logout from "./Logout";

function Sidebar({ activeName }: { activeName: SidebarNavLinkListEnum }) {
  return (
    <div className="flex h-dvh w-72 flex-col flex-nowrap items-start justify-between bg-[#FFF] p-6">
      <div className="flex flex-col items-start justify-start">
        <div className="flex flex-row gap-3 px-3 py-1">
          <Image src={Logo} alt="logo" className="h-12 w-12" />
          <p className="text-primary-cta font-inter text-xl font-semibold leading-8">
            SupaStore
          </p>
        </div>
        <SideBarNavLinkList activeName={activeName} />
      </div>
      <Logout />
    </div>
  );
}

export default Sidebar;
