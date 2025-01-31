import React, { useState, useEffect } from "react";
import BlueButton from "./BlueButton";
import BgImg from "../assets/newsletter-bg.jpg";
import { FiSend } from "react-icons/fi";

function Newsletter(props) {
  const [isMobile, setIsMobile] = useState(false);
  const [newsLetterEmail, setNewsletterEmail] = useState("");

  const backgroundStyle = {
    backgroundImage: `url(${BgImg})`,
    backgroundSize: "cover",
  };

  const subscribeToNewsLetter = () => {
    //validate email
    // send newsLetterEmail
  };

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 575);
    }

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section
      id="newsletter-section"
      style={backgroundStyle}
      className="text-white bg-no-repeat bg-cover bg-center"
    >
      <div id="newsletter-div">
        <div className="flex items-center text-center justify-center flex-col py-[50px] px-4">
          <p className="font-[600]">
            Subscribe to our newsletter for the latest books updates
          </p>
          <div className="w-[95%] mx-auto" id="form-div">
            <form>
              <div className="p-[5px] flex">
                <input
                  type="email"
                  placeholder="Your Email Address"
                  className="bg-transparent pl-[10px] w-[100%]"
                  value={newsLetterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                />
                <BlueButton
                  callback={subscribeToNewsLetter}
                  text={isMobile ? <FiSend /> : "Subscribe"}
                  styles={`flex items-center justify-center w-[50px] h-[50px]`}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;
