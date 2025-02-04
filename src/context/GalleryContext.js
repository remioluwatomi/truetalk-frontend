import React, { createContext, useContext, useEffect, useState } from "react";
import useFetchedData from "../hooks/useFetchedData";

const GalleryContext = createContext();

const GalleryCtxtProvider = React.memo(({ children }) => {
  const [loading, setLoading] = useState(false);

  const imgs = useFetchedData({
    tabToFetchFrom: "gallery",
    setLoading,
  });

  const value = { loading, imgs };
  return (
    <GalleryContext.Provider value={value}>
      {" "}
      {children}{" "}
    </GalleryContext.Provider>
  );
});

const useGalleryContext = () => useContext(GalleryContext);
export { useGalleryContext, GalleryCtxtProvider };
