import React, { useEffect } from "react";
import Newsletter from "../components/Newsletter";
import { useOutletContext } from "react-router-dom";
import "../styles/_about.scss";
import { FaUserShield } from "react-icons/fa";
import aboutMsg from "../data/aboutMsg";
import HeroJpg from "../assets/about/hero.jpg";
import BlueButton from "../components/BlueButton";
import redirectToPage from "../utils/redirectPage";
import contentData from "../data/heroContentData";

function AboutCard({ header, msg }) {
  return (
    <div className="about-card bg-black">
      <div>
        <FaUserShield />
      </div>

      <h3 className="text-[#03a9f4] font-[600] my-[15px] text-[1.5rem]">
        {header}
      </h3>
      <p className="text-white text-[1.1rem]">{msg}</p>
    </div>
  );
}

function About(props) {
  const { updatePage } = useOutletContext();
  useEffect(() => {
    updatePage("About Us");
  });

  return (
    <>
      <main>
        <section className="bg-[#212529] py-[80px]" id="about-section">
          <div id="">
            <div id="hero-jpg-div" className="w-[90%] mx-auto">
              <img
                src={HeroJpg}
                className="w-[100%]"
                alt="Mr Cyril Ajibolade"
              />

              <ul className="bg-black text-white my-8 py-1" id="about-ul">
                {contentData.map(({ header }, i) => (
                  <li className="w-[95%] my-3 mx-auto" key={i}>
                    <span className="text-[#154ea4] inline-block mr-2 font-[500]">
                      &#x2713;{" "}
                    </span>
                    {header}
                  </li>
                ))}
              </ul>
            </div>

            <div id="about-content" className="w-[90%] mx-auto">
              <h2 className="text-[#03a9f4] font-[600]">True Talk Arena</h2>
              <p className="text-white mt-5">
                TRUE TALK ARENA IS A PLAT FORM WHERE SOCIAL CONTENTS, MORAL
                TEACHINGS AND OTHER MOTIVATIONAL TALKS HAPPEN. BE REST ASSURED
                THAT YOU CAN GET UNBIASED MORAL DIRECTION, GUIDANCE AND
                COUNSELING BY WATCHING VIDEOS, READING BOOKS WRITTEN BY THE
                DIRECTOR OF TRUETALK ARENA (MR. CYRIL) AND BY ATTENDING HIS TALK
                SHOWS. STAY SENSITIZED..
              </p>
              <BlueButton
                text={"Contact Us"}
                callback={() => {
                  redirectToPage("/contact-us");
                }}
                styles={`font-[600] w-[120px] h-[50px] my-[20px]`}
              />
            </div>
          </div>

          <div id="about-cards" className="mx-auto py-10">
            {aboutMsg.map(({ header, msg }, i) => (
              <AboutCard key={header} header={header} msg={msg} />
            ))}
          </div>
        </section>
      </main>
      <Newsletter />
    </>
  );
}

export default About;
