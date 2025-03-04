import React, { useEffect, useState, useRef } from "react";
import Newsletter from "../components/Newsletter";
import { useOutletContext } from "react-router-dom";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import heroBg from "../assets/hero/secondary_hero_bg.jpg";
import "../styles/_contact.scss";
import BlueButton from "../components/BlueButton";
import sendMessage from "../utils/sendMessage";
import Feedback from "../components/ContactFeedback";

const contactDetails = [
  {
    icon: FaMapMarkerAlt,
    heading: "Our Address",
    text: "Northampton, UK",
  },
  {
    icon: FaEnvelope,
    heading: "Our Email",
    text: "contact@truetalkarena.com",
  },
];

function Contact(props) {
  const { updatePage } = useOutletContext();
  const [msgDetails, setMsgDetails] = useState({
    email: "",
    msg: "",
    fullName: "",
  });
  const [sendingMsg, setSendingMsg] = useState(false);
  const [showFeedBack, setShowFeedBack] = useState(false);
  const [delivered, setDelivered] = useState(false);
  const fullNameRef = useRef(null);
  const emailRef = useRef(null);
  const msgRef = useRef(null);
  const contactFormRef = useRef(null);

  useEffect(() => {
    updatePage("Contact");
  });

  const updateMsgDetails = (e) => {
    const { name, value } = e.target;

    setMsgDetails((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const validateMsg = () => {
    let validated = true;
    Object.keys(msgDetails).forEach((key, i) => {
      const currentRef =
        key === "email" ? emailRef : key === "fullName" ? fullNameRef : msgRef;

      // validate email below

      if (msgDetails[key] === "") {
        validated = false;
        currentRef.current.style.border = "1px solid red";
      } else {
        currentRef.current.style.border = "none";
      }
    });
    return validated;
  };

  const deliverMsg = async (e) => {
    e.preventDefault();
    if (!validateMsg()) {
      return;
    }
    setSendingMsg(true);
    const { msgSent } = await sendMessage(msgDetails);
    processRes(msgSent);
  };

  const processRes = (msgSent) => {
    setSendingMsg(false);
    contactFormRef.current.reset();
    setShowFeedBack(true);
    setDelivered(msgSent);

    setTimeout(() => setShowFeedBack(false), 3000);
  };

  const getInTouchStyle = {
    backgroundImage: `url(${heroBg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%",
    backgroundPosition: "center center",
  };

  return (
    <>
      <main>
        <section id="get-in-touch-section" style={getInTouchStyle}>
          <div id="get-in-touch-text">
            <h3>Get In Touch</h3>
            <p>
              If you are interested in working with us, please get in touch.
            </p>

            {contactDetails.map(({ icon: Icon, heading, text }, i) => (
              <div key={i}>
                <div className="flex items-center loc-and-email">
                  <Icon /> <h4>{heading}</h4>
                </div>
                <span>{text}</span>
              </div>
            ))}
          </div>

          <div id="contact-form-wrapper" className="">
            {showFeedBack && (
              <Feedback
                delivered={delivered}
                setShowFeedBack={setShowFeedBack}
              />
            )}
            <form ref={contactFormRef}>
              <label htmlFor="name" className="block font-[700]">
                Full name
                <span className="text-[#ff4d30]">*</span>
              </label>
              <input
                type="text"
                placeholder='E.g: "John Doe"'
                className="mt-[10px] mb-[30px] block focus:outline-none bg-[#f2f2f2] px-[2rem] py-[1rem]"
                id="name"
                name="fullName"
                ref={fullNameRef}
                value={msgDetails.fullName}
                onChange={(e) => updateMsgDetails(e)}
                required
              />
              <label htmlFor="email" className="block font-[700]">
                Email <span className="text-[#ff4d30]">*</span>
              </label>

              <input
                type="email"
                placeholder="youremail@example.com"
                className="mt-[10px] mb-[30px] block focus:outline-none bg-[#f2f2f2] px-[2rem] py-[1rem]"
                id="email"
                name="email"
                value={msgDetails.email}
                ref={emailRef}
                onChange={(e) => updateMsgDetails(e)}
                required
              />
              <label htmlFor="message" className="block font-[700]">
                Tell us about it
                <span className="text-[#ff4d30]">*</span>
              </label>

              <textarea
                id="contact-message"
                rows="6"
                placeholder="Write Here.."
                className="mt-[10px] mb-[30px] block focus:outline-none bg-[#f2f2f2] px-[2rem] py-[1rem]"
                name="msg"
                ref={msgRef}
                value={msgDetails.msg}
                onChange={(e) => updateMsgDetails(e)}
                required
              ></textarea>

              <BlueButton
                text={`${sendingMsg ? "Sending..." : "Send Message"}`}
                styles={`font-[500] block text-[1.25rem] mt-[20px] mb-[20px]`}
                callback={deliverMsg}
              />
            </form>
          </div>
        </section>
      </main>
      <Newsletter />
    </>
  );
}

export default Contact;
