import React, { useEffect } from "react";
import Newsletter from "../components/Newsletter";
import { useOutletContext } from "react-router-dom";
import VidsBlogsComp from "../components/VidsBlogsComp";
import useFetchedData from "../hooks/useFetchedData";

function Videos(props) {
  const { updatePage } = useOutletContext("Videos");

  useEffect(() => {
    updatePage("Videos");
  }, []);

  return (
    <>
      {/* "blog" is used to identify video on this page.
            hence "blog-data" means "video-data"  */}
      <main>
        <section
          id="blog-section"
          className="bg-[#212529] pt-[50px] pb-[100px]"
        >
          <VidsBlogsComp tab={"video"} />
        </section>
      </main>
      <Newsletter />
    </>
  );
}

export default Videos;
