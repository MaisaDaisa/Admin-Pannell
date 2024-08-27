"use client";
import React from "react";
import SidebarSearchLayout from "@/app/admin/_adminComponents/SidebarSearchLayout";
import { SidebarNavLinkListEnum } from "../_adminComponents/SidebarComponents/SideBarNavLinkList";

const page = () => {
  return (
    <div>
      <SidebarSearchLayout active={SidebarNavLinkListEnum.Inventory}>
        S
      </SidebarSearchLayout>
    </div>
  );
};

export default page;
