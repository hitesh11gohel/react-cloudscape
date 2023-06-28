/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import SideNavigation from "@cloudscape-design/components/side-navigation";
import { Badge } from "@cloudscape-design/components";
import { useNavigate } from "react-router-dom";
import { useAppProvider } from "../contexts/AppContext";

const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const { users, setActiveHrefDetails } = useAppProvider();
  const [activeHref, setActiveHref] = React.useState("");

  useEffect(() => {
    activeHref && navigate(activeHref);
  }, [activeHref]);

  useEffect(() => {
    setActiveHref(activeHref ?? "");
    setActiveHrefDetails(activeHref);
  }, [activeHref]);

  return (
    <SideNavigation
      activeHref={activeHref}
      header={{ href: "/", text: "AWS UI" }}
      onFollow={(event) => {
        if (!event.detail.external) {
          event.preventDefault();
          setActiveHref(event.detail.href);
          setActiveHrefDetails(event.detail.href);
        }
      }}
      items={[
        { type: "link", text: "Dashboard", href: "/" },
        { type: "link", text: "Comments", href: "/comments" },
        { type: "link", text: "Vehicles", href: "/vehicles" },

        {
          type: "link",
          text: "Users",
          href: "/users",
          info:
            users.length > 0 ? <Badge color="red">{users.length}</Badge> : "",
        },
        { type: "divider" },
      ]}
    />
  );
};

export default Sidebar;
