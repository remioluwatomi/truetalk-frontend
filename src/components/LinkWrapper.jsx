import React from "react";
import { wrapperLinks } from "../data/links";
import kabbasToTitleCase from "../utils/toTitleCase";
import "../styles/_linkWrapper.scss";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

function LinkWrapper({ activePage }) {
  return (
    <>
      <div id="link-wrapper-div">
        <ul className="">
          {wrapperLinks.map((link) => {
            return (
              <li
                key={link}
                className={`${
                  link == activePage ? "current" : ""
                } w-[95%] px-[1.2rem] py-[1rem] font-[500] text-[1.1rem]`}
              >
                <Link to={`/${link}`}>{kabbasToTitleCase(link)}</Link>
                <FaArrowRight />
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default LinkWrapper;
