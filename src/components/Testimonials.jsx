import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaQuoteRight } from "react-icons/fa";
import Testimonials from "../data/testimonials";
import "swiper/swiper-bundle.css";
import "../styles/_testimonial_card.scss";
import { FaStar } from "react-icons/fa";

export function generateStarIcons(rating) {
  const starIcons = [];
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      starIcons.push(<FaStar key={i} className="star-icon golden" />);
    } else {
      starIcons.push(<FaStar key={i} className="star-icon" />);
    }
  }

  return starIcons;
}

export function RenderStars({ rating }) {
  return (
    <div className="mb-[20px] flex items-center gap-2 text-[1.3rem]">
      {generateStarIcons(rating)}
    </div>
  );
}

function TestimonialCard({ testimony, testifier, testifierImg, rating }) {
  return (
    <div className="testimonial-card bg-[#f7f7f7]  text-[#154ea4] ml-auto mr-auto w-full max-w-[560px] py-[50px] px-[3rem] mt-[50px]">
      <RenderStars rating={rating} />
      <p className="font-[500] text-[1.1rem] italic">{testimony}</p>

      <div className="relative mt-[30px]">
        <div className="flex max-w-[200px] gap-[1rem]">
          <div className="w-[4rem] mr-auto">
            <img src={testifierImg} alt="" className="rounded-full" />
          </div>
          <div>
            <h4 className="font-[700] text-[1.2rem]">{testifier}</h4>
          </div>
        </div>

        <div className="absolute text-[#ff4d30] hidden testimonials-quote:block text-[3rem] right-[5%] bottom-[10%]">
          <FaQuoteRight />
        </div>
      </div>
    </div>
  );
}

function TestimonialSection(props) {
  return (
    <section className="bg-testimonial-section">
      <div className="py-[100px] px-[1.5rem] mx-auto max-w-[1320px]">
        <div className="flex items-center" id="testimonial-div-header">
          <div>
            <h2
              className="text-[#060340] font-[600] text-[1.7rem]"
              id="testimonial-h"
            >
              Testimonials
            </h2>
            <p className="text-[#154ea4]" id="testimonial-p">
              What others have to say about us...
            </p>
          </div>
          <div className="ml-auto flex items-end h-[40px] gap-4">
            <button className="swiper-button-prev"></button>
            <button className="swiper-button-next"></button>
          </div>
        </div>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={40}
          slidesPerView={1}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            770: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
        >
          {Testimonials.map(
            ({ testifier, testimony, testifier_img, rating }, i) => (
              <SwiperSlide key={i}>
                <TestimonialCard
                  testifier={testifier}
                  testimony={testimony}
                  testifierImg={testifier_img}
                  rating={rating}
                />
              </SwiperSlide>
            )
          )}
        </Swiper>
      </div>
    </section>
  );
}

export default TestimonialSection;
