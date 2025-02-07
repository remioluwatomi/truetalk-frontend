import React from "react";
import useCurrentTab from "../hooks/useCurrentTab";
import { Navigate } from "react-router-dom";

function ReNavigateInvalidRoute({ children }) {
  const { tabTitleCase } = useCurrentTab();
  const tabs = ["Blog", "Video", "Gallery", "Advert", "Book"];

  if (tabTitleCase !== "" && !["Admin", ...tabs]?.includes(tabTitleCase)) {
    return <Navigate to={"/not-found"} />;
  }
  return <>{children}</>;
}

export default ReNavigateInvalidRoute;
