import React from "react";
import Newsletter from "../components/Newsletter";
import YouTubeLinkWrapper from "../components/YouTubeLinkWrapper";
import TestimonialSection from "../components/Testimonials";
import HomeHero from "../components/HomeHero";

function Home(props) {
  return (
    <main>
      <HomeHero />
      <YouTubeLinkWrapper />
      <TestimonialSection />
      <Newsletter />
    </main>
  );
}

export default Home;
