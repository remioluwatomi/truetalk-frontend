import React, { useState, useEffect } from "react";
import thumbnail from "../../assets/dashboard/thumbnail.jpg";
import "../../styles/admin/_tab_card.scss";
import BlueButton from "../BlueButton";
import { useTabContextData } from "../../context/TabContext";
import setBinaryToImage from "../../utils/setBinaryToImage";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import useCurrentTab from "../../hooks/useCurrentTab";
import { useNavigate } from "react-router-dom";
import ConfirmationModal from "../add_or_edit/components/ConfirmationModal";
import useTabCardImage from "../../hooks/useTabCardImage";

function TabCard({ tabDetails, handleFilteredData }) {
  const { tabLowerCase } = useCurrentTab();
  const { setResourceToDelete, setPermissionToDelete, resourceId } =
    useTabContextData();
  const [showConfirmationModal, setToShowConfrimationModal] = useState(false);
  const navigate = useNavigate();
  const { imgToDisplay } = useTabCardImage(
    tabDetails?.img?.data ?? tabDetails?.img_link
  );

  // useEffect(() => {
  //   if (tabDetails?.img && process.env.REACT_APP_USE_SUPABASE === "false")
  //     setBinaryToImage(tabDetails.img.data, setImageData);
  //   else if (tabDetails?.img_link) setImageData(tabDetails?.img_link);

  //   return () => setImageData(null);
  // }, [tabDetails]);

  const turnModalOff = () => {
    setToShowConfrimationModal(false);
  };

  return (
    <>
      {showConfirmationModal && (
        <ConfirmationModal
          singleButton={false}
          heading={`Delete ${tabLowerCase}`}
          text={`Permanently delete this ${tabLowerCase}? You can't undo this.`}
          cancelBtnCallback={turnModalOff}
          callBack={() => {
            handleFilteredData(resourceId);
            setPermissionToDelete(true);
          }}
          btnsText={["Cancel", "Delete"]}
        />
      )}

      <div className="tab-card">
        <div className="img-wrap">
          <img src={imgToDisplay ? imgToDisplay : thumbnail} />
        </div>

        {tabLowerCase !== "gallery" && (
          <>
            <h3>{tabDetails.title}</h3>
            <p>{tabDetails.desc || tabDetails.description}</p>
          </>
        )}

        <div className="tab-card-btn">
          {tabLowerCase !== "gallery" && (
            <BlueButton
              styles="edit-resource tab-card-btn-w-h"
              text={"Edit"}
              callback={() => {
                navigate(`/admin/edit/${tabLowerCase}`, {
                  state: {
                    data: tabDetails,
                    newUpload: false,
                    navigated: true,
                  },
                });
              }}
            />
          )}

          <button
            className="delete-resource tab-card-btn-w-h btn-transition-hover"
            onClick={() => {
              setResourceToDelete(tabDetails?.title ?? tabDetails?.id ?? null);
              setToShowConfrimationModal(true);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
}

export function TabCardSkeleton({ darkSkeleton }) {
  const [skeletonArray, setSkeletonArray] = useState([]);

  useEffect(() => {
    const setNumberOfSkeleton = () => {
      const lenOfSkeleton = window.innerWidth >= 1120 ? 6 : 4;
      setSkeletonArray([...Array(lenOfSkeleton)]);
    };

    setNumberOfSkeleton();

    const handleResize = () => {
      setNumberOfSkeleton();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const baseColor = darkSkeleton ? "#3f3a3f" : "#ebebeb";
  const highlightColor = darkSkeleton && "#9b939b";

  return (
    <>
      {skeletonArray?.map((_, i) => (
        <div key={i} className="w-[90%] tab-card-skeleton mb-[10px]">
          <div className="mb-[10px]">
            <Skeleton
              baseColor={baseColor}
              highlightColor={highlightColor}
              height={150}
            />
          </div>
          <Skeleton
            baseColor={baseColor}
            highlightColor={highlightColor}
            count={3}
          />
        </div>
      ))}
    </>
  );
}

export default TabCard;
