import { useEffect, useState } from "react";
import fetchData from "../utils/fetchData";
import { fetchDataFromSupabase } from "../supabase/supabase";

export default function useFetchedData({ tabToFetchFrom, setLoading }) {
  const [data, setData] = useState([]);
  // const [useSupabase, setUseSupabase] = useState(false);
  const useSupabase = import.meta.env.VITE_USE_SUPABASE;

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

  useEffect(() => {
    const newController = new AbortController();

    const makeFetchReq = async () => {
      try {
        if (setLoading) setLoading(true);

        if (!tabToFetchFrom) {
          setData([]);
          return;
        }

        if (useSupabase === "true") {
          const { data, error } = await fetchDataFromSupabase(tabToFetchFrom);

          if (error) throw new Error("couldn't fetch from supabase");
          else setData(data);
        } else {
          const fetchedData = await fetchData(
            tabToFetchFrom,
            newController.signal
          );
          setData(fetchedData);
        }
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
