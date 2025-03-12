import React from "react";
import LinkWrapper from "./LinkWrapper";
import "../styles/_disclaimerWrapper.scss";

function DisclaimerWrapper({ Content, activePage }) {
  return (
    <section id="disclaimer-wrapper-section">
      <div className="py-[70px]">
        <Content />
        <LinkWrapper activePage={activePage} />
      </div>
    </section>
  );
}

export default DisclaimerWrapper;
