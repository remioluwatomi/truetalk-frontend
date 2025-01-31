import React from "react";
import "../styles/_404.scss";
import { Link } from "react-router-dom";

function NotFound({ heading, text, img, notFoundWrapper }) {
  return (
    <section>
      <div
        className={`custom-container ${notFoundWrapper && "not-found-wrapper"}`}
      >
        <div className="custom-wrapper">
          <h2 className="custom-heading">{heading}</h2>
          <p className="custom-paragraph">{text}</p>
          <Link to="/" className="custom-button">
            Back to home
          </Link>
          <div className="custom-image">
            <img
              src={img}
              alt="Error Illustration"
              className="custom-img"
              width="500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default NotFound;
