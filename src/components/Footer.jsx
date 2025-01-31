import React from "react";
import Logo from "../assets/logo.png";
import {
  BsFacebook,
  BsInstagram,
  BsSnapchat,
  BsTwitter,
  BsWhatsapp,
  BsYoutube,
} from "react-icons/bs";
import { webLinks, webResourceLinks } from "../data/links";
import kabbasToTitleCase from "../utils/toTitleCase";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import { Link } from "react-router-dom";

function Footer(props) {
  const scrollUp = (e) => window.scrollTo(0, 0);

  return (
    <footer id="footer" className="text-white bg-[#000000] pt-[50px]">
      <div>
        <div id="footer-logo-socials">
          <div className="w-[70%] mx-auto">
            <img src={Logo} alt="True talk logo" className="mx-auto" />
          </div>
          <p id="who-am-i" className="text-center mt-[30px] w-[90%] mx-auto">
            Prolific Writer | Motivational Speaker | Content Creator | Brand
            Influencer | Moral Educator | Marriage counsellor
          </p>

          <ul
            id="socials"
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

        <nav className="w-[90%] mx-auto">
          <div className="flex items-center mt-[50px] gap-10">
            <div id="webLinks">
              <h4>Our Links</h4>
              {webLinks.map((link) => {
                let word = kabbasToTitleCase(link);
                word =
                  word === "Terms And Conditions" ? "Terms & Conditions" : word;
                return (
                  <Link
                    key={link}
                    to={`/${link}`}
                    className="block visited:text-purple-500"
                    onClick={(e) => {
                      scrollUp();
                    }}
                  >
                    <span className="footer-entity">&gt;</span> {word}
                  </Link>
                );
              })}
            </div>

            <div id="webResourceLinks">
              <h4>True Talk ?</h4>
              {webResourceLinks.map((link) => {
                const word = kabbasToTitleCase(link);
                link = link === "true-talk-arena" ? "" : link;

                return (
                  <Link
                    key={link}
                    to={`/${link}`}
                    preventScrollReset={true}
                    className="block visited:text-purple-500"
                    onClick={(e) => {
                      scrollUp();
                    }}
                  >
                    <span className="footer-entity">&gt;</span> {word}
                  </Link>
                );
              })}
            </div>
          </div>

          <div id="footer-contact">
            <h4>Get In Touch With Us</h4>
            <ul>
              <li className="contact-list">
                <FiMapPin className="footer-entity" />{" "}
                <span id="city-country">Northampton, UK</span>
              </li>

              <li className="contact-list">
                <FiPhone className="footer-entity" />{" "}
                <a href="tel:+447459340603">+447459340603</a>
              </li>

              <li className="contact-list">
                <FiMail className="footer-entity" />{" "}
                <a href="mailto:contact@truetalkarena.com">
                  contact@truetalkarena.com
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <div id="footer-bottom">
        <hr />
        <small>All Rights Reserved</small>
      </div>
    </footer>
  );
}

export default Footer;
