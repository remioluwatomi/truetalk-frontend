import React, { useEffect, useState } from "react";
import Dashboard from "../components/admin/Dashboard";
import redirectToPage from "../utils/redirectPage";
import { TabContextProvider } from "../context/TabContext";
import { Outlet } from "react-router-dom";
import ReNavigateInvalidRoute from "../components/ReNavigateInvalidRoute";

function Admin({ updatePage }) {
  const [{ loggedIn, adminLoggedIn, loggedInUser }, setLoginObj] = useState({
    loggedIn: true,
    adminLoggedIn: true,
    loggedInUser: {
      name: "Cyril",
    },
  });

  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    updatePage("admin");

    // Admin should never be logged in if the user is not loggedIn, but additional checks are good
    if (adminLoggedIn && !loggedIn) {
      redirectToPage("/");
    }

    if (!adminLoggedIn) {
      if (loggedIn) {
        redirectToPage("/");
      } else {
        redirectToPage("/account");
      }
    }
  }, []);

  useEffect(() => {
    if (adminLoggedIn && loggedIn) setShouldRender(true);
  }, []);

  return (
    <>
      {adminLoggedIn && shouldRender && loggedIn ? (
        <TabContextProvider>
          <ReNavigateInvalidRoute>
            <Dashboard name={loggedInUser.name} outlet={Outlet} />
          </ReNavigateInvalidRoute>
        </TabContextProvider>
      ) : null}
    </>
  );
}

export default Admin;
