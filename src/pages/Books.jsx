import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import Newsletter from "../components/Newsletter";
import setBinaryToImage from "../utils/setBinaryToImage";
import { RenderStars } from "../components/Testimonials";
import { TabCardSkeleton } from "../components/admin/TabCard";
import { useBookContext } from "../context/BookContext";
import NotFound from "./NotFound";
import NotFoundLogo from "../assets/not-found.avif";
import useTabCardImage from "../hooks/useTabCardImage";

function BookCard({ bookCardDetails }) {
  const { title } = bookCardDetails;
  const { imgToDisplay } = useTabCardImage(
    bookCardDetails?.img?.data ?? bookCardDetails.img_link
  );

  return (
    <div className=" bg-black blogs-card mx-auto">
      <div>
        <img src={imgToDisplay} />
      </div>
      <div className="flex flex-col items-center gap-[.5rem]">
        <p className="text-center text-[#03A9F4] font-semibold text-2xl">
          {title.toUpperCase()}
        </p>
        <RenderStars rating={5} />
      </div>
    </div>
  );
}

function Books({}) {
  const { updatePage, page } = useOutletContext("Books");
  const { booksDetails, loading } = useBookContext();

  useEffect(() => {
    updatePage("Books");
  }, []);

  return (
    <div>
      <main>
        <section className="bg-[#212529] pt-[50px] pb-[100px]">
          {!loading && booksDetails?.length < 1 ? (
            <NotFound
              heading={`${page?.toUpperCase()} NOT FOUND :(`}
              text={`Oops! 😖 No ${page} available presently. Check Back Later.`}
              img={NotFoundLogo}
              notFoundWrapper={true}
            />
          ) : (
            <div
              id="book-content-grid"
              className="grid content-grid mx-auto items-center gap-6 relative"
            >
              {!loading ? (
                [...booksDetails].map((bookCardDetails, i) => (
                  <BookCard
                    key={bookCardDetails?.title}
                    bookCardDetails={bookCardDetails}
                  />
                ))
              ) : (
                <TabCardSkeleton darkSkeleton={true} />
              )}
            </div>
          )}
        </section>
      </main>
      <Newsletter />
    </div>
  );
}

export default Books;
