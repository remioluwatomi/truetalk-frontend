import { useEffect, useState } from "react";
import postData from "../utils/postData";
import { supabaseCreateResource } from "../supabase/supabase";

export default function usePostResources({
  setPostingData,
  tabToPostTo,
  resourceToPost,
  newUpload,
  setImplementedPostHook,
}) {
  const [response, setResponse] = useState({});
  const useSupabase = import.meta.env.VITE_USE_SUPABASE;
  useEffect(() => {
    const postResource = async () => {
      if (!resourceToPost || !tabToPostTo) return;

      try {
        setPostingData(true);
        let immediateResponse;

        if (useSupabase) {
          immediateResponse = await supabaseCreateResource(
            tabToPostTo,
            resourceToPost
          );

          setResponse(immediateResponse);
        } else {
          immediateResponse = await postData(
            tabToPostTo,
            resourceToPost,
            newUpload
          );
        }

        setResponse(immediateResponse);
      } catch (error) {
        console.log(error);
      } finally {
        setPostingData(false);
        setImplementedPostHook(true);
      }
    };

    postResource();
  }, [resourceToPost, tabToPostTo]);

  return response;
}
