import React, { useState, useEffect } from "react";
import BlueButton from "./BlueButton";
import { FaCalendar } from "react-icons/fa";
import ytThumbnail from "../assets/vids_page/yt_thumbnail.jpg";
import useFetchedData from "../hooks/useFetchedData";
import { TabCardSkeleton } from "./admin/TabCard";
import NotFound from "../pages/NotFound";
import NotFoundLogo from "../assets/not-found.avif";

function BlogCard({ link, date, imgUrl, title, isBlog, desc }) {
  return (
    <>
      <div className="blogs-card mx-auto">
        <a href={link} target={isBlog ? "" : "_blank"}>
          <div className="blog-graphic">
            {isBlog ? (
              <img
                src={imgUrl}
                alt={`Logo for the ${isBlog ? "blog" : "video"} title ${title}`}
              />
            ) : (
              <img src={ytThumbnail} alt="Video Thumbnail" />
            )}
          </div>
          <div className={`bg-black ${!isBlog ? "no-blog" : ""}`}>
            <h4 className="text-[#03a9f4] font-[600]">{title}</h4>
            <div className="text-white">
              <span className="flex items-center gap-2 py-4">
                {isBlog ? (
                  <>
                    <FaCalendar />
                    {date}
                  </>
                ) : (
                  <>{desc}</>
                )}
              </span>
            </div>
          </div>
        </a>
      </div>
    </>
  );
}

function VidsBlogsComp({ tab }) {
  const itemsPerPage = 6;
  const [currentTabDetails, setCurrentTabDetails] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  let { data: tabDetails } = useFetchedData({
    tabToFetchFrom: tab ?? "none",
    setLoading,
  });

  useEffect(() => {
    setCurrentTabDetails(tabDetails?.slice(startIndex, endIndex));
    setTotalPages(Math.ceil(tabDetails?.length / itemsPerPage));
  }, [currentPage, tabDetails, startIndex, endIndex]);

  return (
    <>
      //{" "}
      {!loading && tabDetails?.length < 1 ? (
        <NotFound
          heading={`${tab?.toUpperCase()} NOT FOUND :(`}
          text={`Oops! 😖 No ${tab} available presently. Check Back Later.`}
          img={NotFoundLogo}
          notFoundWrapper={true}
        />
      ) : (
        <div
          id=""
          className="grid mx-auto content-grid items-center gap-6 relative"
        >
          {!loading ? (
            currentTabDetails?.map(
              ({ date, imgUrl, title, vid_link, description }, i) => (
                <BlogCard
                  desc={description}
                  isBlog={false}
                  key={i}
                  link={vid_link}
                  date={date}
                  imgUrl={imgUrl}
                  title={title}
                />
              )
            )
          ) : (
            <TabCardSkeleton darkSkeleton={true} />
          )}

          {tabDetails?.length > 6 && (
            <div
              id="blogCtrlBtns"
              className={`flex items-center gap-3 ${
                currentPage > 1 && currentTabDetails?.length < 4 && "shift-down"
              }`}
            >
              <BlueButton text={"<< Back"} callback={handlePrevPage} />
              <BlueButton text={"Next >>"} callback={handleNextPage} />
              <br />
              <div id="pages-details" className="text-white">
                {currentPage} / {totalPages}
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}

VidsBlogsComp.defaultProps = {
  isBlog: true,
};

export default VidsBlogsComp;
