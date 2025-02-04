import React, { useEffect, useRef } from "react";
import illustrationPng from "../../assets/dashboard/man-with-laptop-light.png";
import logo from "../../assets/logo.png";
import "../../styles/admin/_dashboard.scss";
import { RxHamburgerMenu } from "react-icons/rx";
import adminImg from "../../assets/gallery/4.png";
import disc from "../../assets/cd.svg";
import { useTabContextData } from "../../context/TabContext";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import useCurrentTab from "../../hooks/useCurrentTab";

function Dashboard({ name, outlet }) {
  const { tabs } = useTabContextData();
  const location = useLocation();
  const navRef = useRef(null);
  const dashboardSection = useRef(null);
  const { tabLowerCase } = useCurrentTab();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1200) {
        dashboardSection?.current.classList.remove("disabled-opacity");
        return;
      }
      if (!dashboardSection?.current.classList.contains("nav-visible"))
        dashboardSection?.current.classList.remove("disabled-opacity");
      else dashboardSection?.current.classList.add("disabled-opacity");
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const turnOffNav = (e) => {
    dashboardSection?.current.classList.remove("nav-visible");

    if (window.innerWidth < 1200) {
      navRef.current.classList.remove("visible");
      dashboardSection?.current.classList.remove("disabled-opacity");
    }
  };

  const turnOnNav = (e) => {
    dashboardSection?.current.classList.add("nav-visible");

    if (window.innerWidth < 1200) {
      navRef.current.classList.add("visible");
      dashboardSection?.current.classList.add("disabled-opacity");
    }
  };

  const openedTab = React.createElement(outlet, {
    key: location.pathname,
  });

  return (
    <section
      id="dashboard-section"
      className={`relative`}
      ref={dashboardSection}
    >
      <div className="text-[#697a8d]">
        {
          <div
            id="ham-wrapper"
            className="bg-white px-[0.5rem] text-[1.3rem] flex items-center mx-auto py-[.7rem]"
          >
            <button onClick={turnOnNav}>
              <RxHamburgerMenu />
            </button>
            <div className="ml-auto w-[3rem] relative" id="admin-img">
              <img src={adminImg} alt="admin" />
            </div>
          </div>
        }

        <aside ref={navRef}>
          <div>
            <div id="logo-div" className="w-[250px] mx-auto my-4">
              <img src={logo} alt="Truetalk logo div" />
            </div>
            <button onClick={turnOffNav} id="close-nav">
              <MdKeyboardDoubleArrowLeft />
            </button>

            <div className="m-4">
              <Link to={"/admin/"} onClick={turnOffNav}>
                <span>SVG</span>
                Dashboard
              </Link>
            </div>
            <hr />

            <ul>
              {tabs.map((tab, i) => (
                <li key={tab}>
                  <Link
                    to={`/admin/${tab.toLowerCase()}`}
                    className="w-[100%]"
                    data-tab={tab.toLowerCase()}
                    onClick={turnOffNav}
                  >
                    <div className="w-[1.5rem]">
                      <img src={disc} alt="list-disc" className="w-[100%]" />
                    </div>
                    <span>{tab}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        <main>
          {tabLowerCase !== "" && tabLowerCase !== "admin" ? (
            <>{openedTab}</>
          ) : (
            <div id="no-tab-user-info-box" className="relative  bg-white">
              <div>
                <h3 className="text-[#696cff]">
                  Hi <span>{name.toUpperCase()}</span> 🎉
                </h3>
                <p>Hello {name.toUpperCase()}, How're you today?</p>
              </div>
              <div id="illustration-box" className="mx-auto mt-12">
                <img src={illustrationPng} alt="illustration" />
              </div>
            </div>
          )}
        </main>
      </div>
    </section>
  );
}

export default Dashboard;
