import React, { useEffect, useState } from "react";
import setBinaryToImage from "../utils/setBinaryToImage";

function useTabCardImage(imgDetails) {
  const [imgToDisplay, setImgToDisplay] = useState(null);
  const [newUpload, setNewUpload] = useState(false);

  useEffect(() => {
    const processImg = () => {
      //newUpload for when this hook is utilized in an edit page.. hence there is default img for that
      if (newUpload) return;

      if (import.meta.env.VITE_USE_SUPABASE === "true" && imgDetails) {
        setImgToDisplay(imgDetails);
      } else if (imgDetails) setBinaryToImage(imgDetails, setImgToDisplay); //imgDetails is binary when not using supabase..
    };

    processImg();
  }, [newUpload]);

  return { imgToDisplay, setNewUpload, setImgToDisplay };
}

export default useTabCardImage;
