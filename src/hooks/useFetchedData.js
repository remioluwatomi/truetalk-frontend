import { useEffect, useState } from "react";
import fetchData from "../utils/fetchData";

export default function useFetchedData({ tabToFetchFrom, setLoading }) {
  const [data, setData] = useState([]);

  const handleFilteredData = (resourceId) => {
    const filterFetchedData = () => {
      return data.filter((cardItem) => {
        if (cardItem?.title) return cardItem.title !== resourceId;
        if (cardItem?.id) return cardItem.id !== resourceId;

        return false;
      });
    };

    const result = filterFetchedData();
    setData(result);
  };

  let calling = 1;

  useEffect(() => {
    const newController = new AbortController();

    const makeFetchReq = async () => {
      try {
        if (setLoading) setLoading(true);

        if (!tabToFetchFrom) {
          setData([]);
          return;
        }

        const fetchedData = await fetchData(
          tabToFetchFrom,
          newController.signal
        );
        setData(fetchedData);
      } catch (err) {
        console.log(err);
        setData([]);
      } finally {
        if (setLoading) setLoading(false);
      }
    };

    makeFetchReq();

    // return () => newController?.abort();
  }, [tabToFetchFrom]);

  return { data, handleFilteredData };
}
