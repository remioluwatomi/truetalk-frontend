import React from "react";
import { FaYoutube } from "react-icons/fa";
import "../styles/YouTubeLinkWrapper.scss";
import YouTubeJpg from "../assets/youtube-image.jpg";

const YouTubeVideoLinkWrapper = () => {
  const backgroundStyle = {
    backgroundImage: `url(${YouTubeJpg})`,
  };

  return (
    <section className="">
      <a
        id="youtube-link"
        href="https://youtu.be/G5JJM0f7hhM"
        target="_blank"
        rel="noopener noreferrer"
        className="block relative mx-auto"
      >
        <div
          className="youtube-video-wrapper bg-no-repeat bg-cover mx-auto"
          style={backgroundStyle}
        ></div>
        <div className="overlay">
          <FaYoutube className="youtube-logo" />
        </div>
      </a>
    </section>
  );
};

export default YouTubeVideoLinkWrapper;
