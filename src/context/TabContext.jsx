import React, { createContext, useContext, useState, useEffect } from "react";
import deleteData from "../utils/deleteData";
import useCurrentTab from "../hooks/useCurrentTab";

const TabContext = createContext();

function TabContextProvider({ children }) {
  const tabs = ["Blog", "Video", "Gallery", "Advert", "Book"];
  const [resourceId, setResourceToDelete] = useState(null);
  const [permissionToDelete, setPermissionToDelete] = useState(false);
  const { tabLowerCase } = useCurrentTab();

  useEffect(() => {
    const deleteResourceFunc = async () => {
      if (!resourceId || !permissionToDelete) return;

      try {
        await deleteData(tabLowerCase, resourceId);
      } catch (error) {
        console.log(error);
      } finally {
        setPermissionToDelete(false);
        setResourceToDelete(null);
      }
    };

    deleteResourceFunc();
  }, [resourceId, permissionToDelete]);

  const value = {
    tabs,
    resourceId,
    setResourceToDelete,
    permissionToDelete,
    setPermissionToDelete,
  };
  return <TabContext.Provider value={value}>{children}</TabContext.Provider>;
}

const useTabContextData = () => useContext(TabContext);

export { TabContextProvider, useTabContextData };
