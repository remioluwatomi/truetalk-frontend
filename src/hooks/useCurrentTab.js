import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function useCurrentTab(props) {
  const [tabLowerCase, setTabLowerCase] = useState("");
  const [tabUpperCase, setTabUpperCase] = useState("");
  const [tabTitleCase, setTabTitleCase] = useState("");
  const { pathname } = useLocation();
  useEffect(() => {
    const tab = pathname?.split("/").pop();
    setTabLowerCase(tab.toLowerCase());
    setTabUpperCase(tab.toUpperCase());

    setTabTitleCase(tab.charAt(0).toUpperCase() + tab.slice(1));
  }, []);
  return { tabLowerCase, tabUpperCase, tabTitleCase };
}

export default useCurrentTab;
