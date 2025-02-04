import React, { useEffect, useState } from "react";
import BlueButton from "../BlueButton";
import TabCard, { TabCardSkeleton } from "./TabCard";
import NotFound from "../../pages/NotFound";
import NotFoundLogo from "../../assets/not-found.avif";
import useCurrentTab from "../../hooks/useCurrentTab";
import useFetchedData from "../../hooks/useFetchedData";
import { Link } from "react-router-dom";

function OpenedTab({ path }) {
  const [loading, setLoading] = useState(true);
  const { tabUpperCase, tabLowerCase } = useCurrentTab();

  const { data: tabFetchedData, handleFilteredData } = useFetchedData({
    tabToFetchFrom: tabLowerCase,
    setLoading,
  });

  return (
    <section id="tab-section">
      <div className="tab-section-wrappers">
        <h4 className="text-[1.3rem]">{tabUpperCase ?? "Page"}</h4>

        <Link to={`/admin/add/${tabLowerCase}`} state={{ navigated: true }}>
          <BlueButton
            text={"Add"}
            styles={`tab-card-btn-w-h text-[1.5rem] mt-4`}
          />
        </Link>
      </div>

      {!loading && tabFetchedData?.length < 1 ? (
        <NotFound
          heading={`${tabUpperCase ?? "Resource"} NOT FOUND :(`}
          text={`Oops! 😖 No ${tabLowerCase} available presently. Check Back Later.`}
          img={NotFoundLogo}
        />
      ) : (
        <div id="tab-grid" className="grid bg-white tab-section-wrappers">
          {!loading ? (
            tabFetchedData?.map((tabDetails, i) => (
              <TabCard
                key={i}
                tabDetails={tabDetails}
                handleFilteredData={handleFilteredData}
              />
            ))
          ) : (
            <TabCardSkeleton darkSkeleton={false} />
          )}
        </div>
      )}
    </section>
  );
}

export default OpenedTab;
