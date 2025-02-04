import React, { useRef } from "react";
import BlueButton from "../../BlueButton";
import "../../../styles/admin/_delete_confirmation.scss";

function ConfirmationModal({
  singleButton,
  heading,
  text,
  cancelBtnCallback,
  callBack,
  btnsText,
}) {
  const cancelRefButton = useRef(null);

  const implementCallBack = () => {
    if (callBack) callBack();
    cancelRefButton?.current.click();
  };

  return (
    <div className="absolute top-0 bottom-0 left-0 right-0 screen-cover">
      <div id="confirmation-wrapper" className="fixed-center-modal">
        <h1 className="text-xl font-semibold">{heading}</h1>
        <p className="text-lg mt-2">{text}</p>
        <div>
          {!singleButton ? (
            <>
              <button
                ref={cancelRefButton}
                className="cancel-delete-btn blue-btn"
                onClick={cancelBtnCallback}
              >
                {btnsText[0]}
              </button>

              <BlueButton text={btnsText[1]} callback={implementCallBack} />
            </>
          ) : (
            <BlueButton text={btnsText[0]} callback={cancelBtnCallback} />
          )}
        </div>
      </div>
    </div>
  );
}

export default ConfirmationModal;
