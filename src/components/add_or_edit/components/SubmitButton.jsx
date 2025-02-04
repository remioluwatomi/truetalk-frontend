import React from "react";
import BlueButton from "../../BlueButton";

function SubmitButton({ callback }) {
  return (
    <>
      <BlueButton text={"Submit"} callback={callback} type={"submit"} />
    </>
  );
}

export default SubmitButton;
