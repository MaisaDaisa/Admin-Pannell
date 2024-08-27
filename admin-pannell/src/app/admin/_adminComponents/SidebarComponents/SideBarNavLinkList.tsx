"use client";
import React from "react";
import SidebarNavLink from "./SidebarNavLink";
import HomeIcon from "@/../public/icons/HomeIcon";
import DollyIcon from "@/../public/icons/DollyIcon";
import ChartIcon from "@/../public/icons/ChartIcon";
import BoxIcon from "@/../public/icons/BoxIcon";
import CheckListIcon from "@/../public/icons/CheckListIcon";
import ProfileIcon from "public/icons/ProfileIcon";

export enum SidebarNavLinkListEnum {
  Dashboard = "Dashboard",
  Inventory = "Inventory",
  Reports = "Reports",
  Suppliers = "Suppliers",
  Orders = "Orders",
  "Manage Store" = "Manage Store",
}

interface SideBarNavLinkListProps {
  activeName: SidebarNavLinkListEnum;
}

const SideBarNavLinkList: React.FC<SideBarNavLinkListProps> = ({
  activeName,
}) => {
  const currentHref = "/admin";
  const NavLink = [
    {
      icon: <HomeIcon />,
      text: SidebarNavLinkListEnum.Dashboard,
      link: "/",
    },
    {
      icon: <DollyIcon />,
      text: SidebarNavLinkListEnum.Inventory,
      link: "/inventory",
    },
    {
      icon: <ChartIcon />,
      text: SidebarNavLinkListEnum.Reports,
      link: "/reports",
    },
    {
      icon: <ProfileIcon />,
      text: SidebarNavLinkListEnum.Suppliers,
      link: "/suppliers",
    },
    {
      icon: <BoxIcon />,
      text: SidebarNavLinkListEnum.Orders,
      link: "/orders",
    },
    {
      icon: <CheckListIcon />,
      text: SidebarNavLinkListEnum["Manage Store"],
      link: "/manage-store",
    },
  ];

  return (
    <div className="mt-8 flex flex-col items-start justify-start gap-3 px-4 py-2">
      {NavLink.map((navLink, index) => (
        <SidebarNavLink
          key={index}
          icon={navLink.icon}
          text={navLink.text}
          active={navLink.text === activeName}
          link={"/admin/" + navLink.link}
        />
      ))}
    </div>
  );
};

export default SideBarNavLinkList;
