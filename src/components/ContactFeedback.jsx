import React from "react";
import { FaTimes } from "react-icons/fa";
import "../styles/_contact_feedback.scss";

function Feedback({ delivered, setShowFeedBack }) {
  return (
    <div
      id="contact-feedback"
      className={`${
        delivered ? "delivered" : "not-delivered"
      } rounded-[.6rem] bg-[white] my-[15px] mt-[0] font-[500] flex items-center`}
    >
      <h3>
        {delivered
          ? "Your message has been sent👍"
          : "Can't send your message at the moment.. please try again! 😣"}
      </h3>
      <button
        id="feedback-btn"
        className="w-[20%]"
        onClick={() => setShowFeedBack(false)}
      >
        <FaTimes />
      </button>
    </div>
  );
}

export default Feedback;
