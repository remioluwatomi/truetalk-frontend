import React, { createContext, useContext, useEffect, useState } from "react";
import useFetchedData from "../hooks/useFetchedData";

const BookContext = createContext();

const BookCtxtProvider = React.memo(({ children }) => {
  const [loading, setLoading] = useState(false);

  const { data: booksDetails } = useFetchedData({
    tabToFetchFrom: "book",
    setLoading,
  });

  const value = { loading, booksDetails };
  return (
    <BookContext.Provider value={value}> {children} </BookContext.Provider>
  );
});

const useBookContext = () => useContext(BookContext);
export { useBookContext, BookCtxtProvider };
