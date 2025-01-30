import React from "react";
import { Outlet } from "react-router-dom";
import SecondaryHero from "./SecondaryHero";

function SharedLayout({ updatePage, page }) {
  return (
    <>
      <SecondaryHero page={page} />
      <Outlet context={{ updatePage, page }} />
    </>
  );
}

export default SharedLayout;
