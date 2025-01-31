import React from "react";

function BlueButton({ icon, id, text, callback, iconLeft, styles, type }) {
  return (
    <button
      type={type}
      id={id}
      className={`bg-[#154ea4] btn-transition-hover blue-btn text-white ${styles}`}
      onClick={(e) => {
        if (callback) callback(e);
      }}
    >
      {iconLeft && icon && <span className="mr-1">{icon}</span>}
      {text}
      {!iconLeft && icon && <span className="ml-1">{icon}</span>}
    </button>
  );
}

export default BlueButton;
