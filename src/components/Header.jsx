import React, { useEffect, useState } from "react";
import Logo from "../assets/logo.png";
import { FaUser, FaBars, FaSearch, FaTimes } from "react-icons/fa";
import {
  BsFacebook,
  BsInstagram,
  BsSnapchat,
  BsTwitter,
  BsWhatsapp,
  BsYoutube,
} from "react-icons/bs";
import Cart from "./Cart";
import BlueButton from "./BlueButton";
import { mobileNavLinks } from "../data/links";
import kabbasToTitleCase from "../utils/toTitleCase";
import redirectToPage from "../utils/redirectPage";
import { Link, useLocation } from "react-router-dom";

function Header(props) {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();

  const toggleMenu = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    // window.scrollTo(0, 0);
    setIsOpen(false);
  }, [pathname]);

  return (
    <header>
      <div className="text-white header-wrapper" id="">
        <div className="flex items-center py-[8.5px]" id="logo-login-wrapper">
          <div id="logo-div">
            <img src={Logo} alt="True Talk Logo" />
          </div>

          <div id="hamburger-login" className="ml-auto flex items-center">
            <BlueButton
              text={<Link to={"/contact-us"}>Get In Touch</Link>}
              id={"get-in-touch"}
              callback={() => {
                // redirectToPage("/contact-us");
              }}
              type="button"
            />

            <BlueButton
              text={
                <Link to={"/account"}>
                  <FaUser />
                </Link>
              }
              styles={``}
              callback={() => {}}
            />

            <div className={`hamburger-menu ${isOpen ? "open" : ""}`}>
              <BlueButton
                id={"menu-button"}
                icon={isOpen ? <FaTimes /> : <FaBars />}
                styles={""}
                callback={toggleMenu}
              />
            </div>
          </div>

          <div id="cart-search" className="flex items-center ml-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search Books Here"
                className="text-black min-w-[450px] h-[50px] px-[20px]"
              />
              <button id="search-btn">
                <FaSearch className="" />
              </button>
            </div>

            <Cart numOfItem={0} />
          </div>
        </div>
      </div>

      <div id="mobile-nav" className={`w-[275px] ${isOpen ? "open" : ""} `}>
        <div id="mobile-logo" className="w-[12rem] mt-[2rem]">
          <img src={Logo} alt="True Talk Logo" />
        </div>

        <div className="relative w-[90%] mx-auto my-[30px]">
          <input
            type="text"
            placeholder="Search Books Here"
            className="text-black h-[50px] block mx-auto w-[95%] px-[20px]"
          />
          <button id="mobile-search-btn">
            <FaSearch className="" />
          </button>
        </div>

        <nav>
          {mobileNavLinks.map((link) => {
            let word = kabbasToTitleCase(link);
            word = word === "Contact Us" ? "Contact" : word;
            return (
              <Link
                key={link}
                to={`/${link}`}
                className="block hover:text-[#154ea4] visited:text-purple-500 text-white text-[1.1rem] w-[90%] mx-auto my-[10px] py-[7px]"
              >
                {" "}
                {word}{" "}
              </Link>
            );
          })}
        </nav>

        <ul
          id="mobile-nav-socials"
          className="pt-[30px] dz-social-icon style-1 flex items-center justify-around w-[90%] mx-auto max-w-[370px] flex-wrap"
        >
          <li>
            <a
              href="https://wa.me/message/IWJJ2RQTHSESL1"
              rel="noreferrer"
              target="_blank"
            >
              <BsWhatsapp />
            </a>
          </li>

          <li>
            <a
              href="https://www.facebook.com/True-Talk-Arena-106493278807255/"
              rel="noreferrer"
              target="_blank"
            >
              <BsFacebook />
            </a>
          </li>

          <li>
            <a
              href="https://instagram.com/truetalkarena?igshid=YmMyMTA2M2Y="
              rel="noreferrer"
              target="_blank"
            >
              <BsInstagram />
            </a>
          </li>

          <li>
            <a
              href="https://twitter.com/Truetalkarena?t=wfcVyVXgJOCbTbqTm9Nd2w&s=09"
              rel="noreferrer"
              target="_blank"
            >
              <BsTwitter />
            </a>
          </li>

          <li>
            <a
              href="https://www.youtube.com/channel/UCrrB4cN9G_0kJqQqUoadidA"
              rel="noreferrer"
              target="_blank"
            >
              <BsYoutube />
            </a>
          </li>

          <li>
            <a
              href="https://www.snapchat.com/add/truetalkarena?share_id=TWgfxIVgLv0&locale=en-GB"
              rel="noreferrer"
              target="_blank"
            >
              <BsSnapchat />
            </a>
          </li>
        </ul>
      </div>

      <nav id="tab-nav" className="bg-[#060340] py-[10px]">
        <div className="flex items-center">
          <div className="flex items-center gap-4">
            {mobileNavLinks.map((link) => {
              let word = kabbasToTitleCase(link);
              word = word === "Contact Us" ? "Contact" : word;
              return (
                <Link
                  key={link}
                  to={`/${link}`}
                  className="blue-text-hover text-white text-[1.1rem] w-[90%] mx-auto my-[10px] py-[7px]"
                >
                  {" "}
                  {word}{" "}
                </Link>
              );
            })}
          </div>

          <div className="ml-auto">
            <BlueButton
              text={<Link to={"/contact-us"}>Get In Touch</Link>}
              id={"get-in-touch"}
              styles={`w-[150px] h-[50px] mr-[15px]`}
              callback={() => {}}
              type="button"
            />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
