import React, { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
// import DisclaimerWrapper from "../components/DisclaimerWrapper";

function TermsAndServices(props) {
  const { updatePage } = useOutletContext();

  useEffect(() => {
    updatePage("Terms Of Use");
  });
  return (
    <>
      {/* <DisclaimerWrapper content={""} activePage={"terms-and-conditions"} /> */}
    </>
  );
}

export default TermsAndServices;
