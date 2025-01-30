import React, { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Books from "./pages/Books";
import Disclaimer from "./pages/Disclaimer";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Videos from "./pages/Videos";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Blogs from "./pages/Blogs";
import TermsAndServices from "./pages/TermsAndServices";
import Account from "./pages/Account";
import NotFound from "./pages/NotFound";
import SharedLayout from "./components/SharedLayout";
import "./styles/truetalk.scss";
import Admin from "./pages/Admin";
import Header_Footer from "./components/Header_Footer";
import NotFoundLogo from "./assets/404.png";
import OpenedTab from "./components/admin/OpenedTab";
import UploadResources from "./pages/UploadResources";

function App(props) {
  const [page, updatePage] = useState("home");
  const location = useLocation();

  return (
    <>
      <Routes>
        <Route path="/admin/" element={<Admin updatePage={updatePage} />} />
        <Route
          path="/admin/add/:resource"
          element={<UploadResources updatePage={updatePage} />}
        />
        <Route
          path="/admin/edit/:resource"
          element={<UploadResources updatePage={updatePage} />}
        />

        <Route path="/admin/" element={<Admin updatePage={updatePage} />}>
          <Route
            path=":id"
            element={
              <OpenedTab key={location.pathname} path={location.pathname} />
            }
          ></Route>
        </Route>

        <Route element={<Header_Footer updatePage={updatePage} page={page} />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/books" element={<Books />}></Route>

          <Route element={<SharedLayout updatePage={updatePage} page={page} />}>
            <Route path="/about" element={<About />}></Route>
            <Route path="/account" element={<>Login / Sign up page</>}></Route>
            <Route path="/account" element={<Account />}></Route>
            <Route path="/gallery" element={<Gallery />}></Route>
            <Route path="/videos" element={<Videos />}></Route>
            <Route path="/blog" element={<Blogs />}></Route>
            <Route path="/contact-us" element={<Contact />}></Route>
            <Route path="/privacy-policy" element={<PrivacyPolicy />}></Route>
            <Route path="/disclaimer" element={<Disclaimer />}></Route>
            <Route
              path="/terms-and-conditions"
              element={<TermsAndServices />}
            ></Route>
          </Route>
          <Route
            path="*"
            element={
              <NotFound
                heading={"Page Not Found :("}
                text={
                  "Oops! 😖 The requested URL was not found on this server."
                }
                img={NotFoundLogo}
              />
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
