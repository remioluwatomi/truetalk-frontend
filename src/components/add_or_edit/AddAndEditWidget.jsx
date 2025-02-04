import React, { useRef, useState } from "react";
import { useTabContextData } from "../../context/TabContext";
import Blog from "./Blog";
import Video from "./Video";
import Gallery from "./Gallery";
import Advert from "./Advert";
import Book from "./Book";
import ConfirmationModal from "./components/ConfirmationModal";
import { Bars } from "react-loader-spinner";
import useCurrentTab from "../../hooks/useCurrentTab";
import { Link, useLocation, useNavigate } from "react-router-dom";
import usePostResources from "../../hooks/usePostResources";

const tabComponentMap = new Map([
  ["blog", Blog],
  ["video", Video],
  ["gallery", Gallery],
  ["advert", Advert],
  ["book", Book],
]);

export function CancelUploadButton({ btnRef }) {
  const { tabLowerCase } = useCurrentTab();
  return (
    <div className="mr-[10px]">
      <button className="btn-transition-hover add-edit-cancel-btn rounded-[7px]">
        <Link
          ref={btnRef}
          className="flex items-center justify-center w-[100%] h-12"
          to={`/admin/${tabLowerCase}`}
        >
          {" "}
          Cancel{" "}
        </Link>
      </button>
    </div>
  );
}

function AddAndEditWidget() {
  const location = useLocation();
  const { state: uploadState, pathname } = location;
  const { tabLowerCase } = useCurrentTab();
  const [resourceToPost, setResourceToPost] = useState();
  const [isPostingData, setPostingData] = useState(false);
  const [implementedPostHook, setImplementedPostHook] = useState(false);
  const navigate = useNavigate();
  const isANewUpload = uploadState?.newUpload ?? true;

  if (
    pathname.includes("edit") &&
    !uploadState?.data &&
    !uploadState?.navigated
  )
    navigate(`/not-found`);

  const postResponse = usePostResources({
    setPostingData,
    tabToPostTo: tabLowerCase,
    resourceToPost,
    newUpload: isANewUpload,
    setImplementedPostHook,
  });

  let componentToRender;

  const clickCancelBtn = () => {
    setImplementedPostHook(false);
    navigate(`/admin/${tabLowerCase}`);
  };

  if (tabComponentMap.has(tabLowerCase)) {
    const Component = tabComponentMap.get(tabLowerCase);

    if (Component)
      componentToRender = (
        <Component
          newUpload={isANewUpload}
          data={uploadState?.data ?? {}}
          setResourceToPost={setResourceToPost}
        />
      );
  }

  return (
    <section
      id="add_edit_container"
      className={`py-[15px] ${isPostingData ? "disabled-opacity" : ""} `}
    >
      <section className={`add-edit-input-wrapper ${tabLowerCase}`}>
        {componentToRender ?? null}
      </section>
      {isPostingData && (
        <div className="fixed-center-modal">
          <Bars
            height="80"
            width="80"
            color="#154ea4"
            ariaLabel="bars-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      )}
      {implementedPostHook && (
        <ConfirmationModal
          singleButton={true}
          heading={`Upload ${tabLowerCase}`}
          text={
            postResponse?.message ??
            "A problem occured while uploading.. check back later"
          }
          cancelBtnCallback={clickCancelBtn}
          btnsText={["OK"]}
        />
      )}
    </section>
  );
}

export default AddAndEditWidget;
