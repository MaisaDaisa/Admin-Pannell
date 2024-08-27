import React from "react";
import SidebarNavLink from "./SidebarNavLink";
import LogOutIcon from "public/icons/LogOutIcon";
import SettingsIcon from "public/icons/SettingsIcon";

const Logout = () => {
  return (
    <div className="mt-8 flex flex-col items-start justify-start gap-3 px-4 py-2">
      <SidebarNavLink
        icon={<SettingsIcon />}
        text="Settings"
        active={false}
        link="/admin/settings"
      />
      <SidebarNavLink
        icon={<LogOutIcon />}
        text="Log Out"
        active={false}
        link="/logout"
      />
    </div>
  );
};

export default Logout;
