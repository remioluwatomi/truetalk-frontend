import React, { useEffect, useState } from "react";
import Newsletter from "../components/Newsletter";
import { useOutletContext } from "react-router-dom";
// import BlueButton from '../components/BlueButton';
import "../styles/_blogs.scss";
import VidsBlogsComp from "../components/VidsBlogsComp";

// function BlogCard({link, date, imgUrl, title}) {
//       return(
//         <>
//           <div className='blogs-card mx-auto'>
//             <a href={link}>
//               <div className='blog-graphic'>
//                 <img src={imgUrl} alt={`Logo for the blog title ${title}`} />
//               </div>
//               <div className='bg-black'>
//                 <h4 className='text-[#03a9f4] font-[600]'>
//                     {title}
//                 </h4>
//                 <div className='text-white'>
//                   <span className='flex items-center gap-2 py-4'>
//                     <FaCalendar />
//                     {date}
//                   </span>
//                 </div>
//               </div>
//               </a>
//           </div>
//         </>
//       )
// }

function Blogs(props) {
  const { updatePage } = useOutletContext();

  useEffect(() => {
    updatePage("Blogs");
  }, []);

  return (
    <>
      <main>
        <section
          id="blog-section"
          className="bg-[#212529] pt-[50px] pb-[100px]"
        >
          <VidsBlogsComp tab={"blog"} />
        </section>
      </main>
      <Newsletter />
    </>
  );
}

export default Blogs;
