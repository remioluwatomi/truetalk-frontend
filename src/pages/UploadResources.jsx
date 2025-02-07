import React from "react";
import ReNavigateInvalidRoute from "../components/ReNavigateInvalidRoute";
import AddAndEditWidget from "../components/add_or_edit/AddAndEditWidget";

function UploadResources({ updatePage }) {
  return (
    <ReNavigateInvalidRoute>
      <AddAndEditWidget />
    </ReNavigateInvalidRoute>
  );
}

export default UploadResources;
