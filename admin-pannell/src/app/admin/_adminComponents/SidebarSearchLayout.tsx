import React from "react";
import Sidebar from "./SidebarComponents/Sidebar";
import { SidebarNavLinkListEnum } from "./SidebarComponents/SideBarNavLinkList";
import MagnifyingGlassIcon from "public/icons/MagnifyingGlassIcon";
import BellIcon from "public/icons/BellIcon";
import ProfileIcon from "public/icons/ProfileIcon";

const SidebarSearchLayout = ({
  children,
  active,
}: {
  children?: React.ReactNode;
  active: SidebarNavLinkListEnum;
}) => {
  return (
    <div className="flex min-h-dvh w-full flex-row bg-border">
      <Sidebar activeName={active}></Sidebar>
      <div className="flex h-full w-full flex-col">
        <div className="flex shrink-0 justify-between border border-[#EEE] bg-[#FFF] px-8">
          <div className="my-6">
            <div className="box-content flex w-full flex-row flex-nowrap gap-2 rounded border border-border px-4 py-[10px]">
              <MagnifyingGlassIcon />
              <input
                type="text"
                placeholder="Search product, supplier, order"
                className="font-Inter box-content w-full border-none bg-transparent text-base font-normal leading-6 outline-none"
              />
            </div>
          </div>
          <div className="flex flex-row flex-nowrap items-center justify-center gap-6">
            <BellIcon />
            <ProfileIcon className="h-8 w-8" />
          </div>
        </div>
        <div className="h-full w-full">{children}</div>
      </div>
    </div>
  );
};

export default SidebarSearchLayout;
