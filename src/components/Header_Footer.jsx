import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { BookCtxtProvider } from "../context/BookContext";
// import { GalleryCtxtProvider } from "../context/GalleryContext";

function Header_Footer({ updatePage, page }) {
  return (
    <>
      <Header />

      <BookCtxtProvider>
        <Outlet context={{ updatePage, page }} />
      </BookCtxtProvider>
      <Footer />
    </>
  );
}

export default Header_Footer;
