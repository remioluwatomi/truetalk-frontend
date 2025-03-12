import React, { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import DisclaimerWrapper from "../components/DisclaimerWrapper";

function DisclaimerContent() {
  return (
    <>
      <div>
        <p className="">
          <strong>DISCLAIMER</strong>
        </p>
        <br />
        <p className="my-[40px]">
          <strong style={{ color: "rgb(127, 127, 127)" }}>
            Last updated September 05, 2022
          </strong>
        </p>
        <p className="my-[20px]">
          <strong>WEBSITE DISCLAIMER</strong>
        </p>
        <p>
          <span style={{ color: "rgb(89, 89, 89)" }}>
            The information provided by Truetalk Arena ('we', 'us', or 'our') on{" "}
            <a
              href="https://truetalkarena.com"
              rel="noopener noreferrer"
              target="_blank"
              style={{ color: "rgb(89, 89, 89)" }}
            >
              https://truetalkarena.com
            </a>{" "}
            (the 'Site') is for general informational purposes only. All
            information on the Site is provided in good faith, however we make
            no representation or warranty of any kind, express or implied,
            regarding the accuracy, adequacy, validity, reliability,
            availability, or completeness of any information on the Site. UNDER
            NO CIRCUMSTANCE SHALL WE HAVE ANY LIABILITY TO YOU FOR ANY LOSS OR
            DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF THE SITE OR
            RELIANCE ON ANY INFORMATION PROVIDED ON THE SITE. YOUR USE OF THE
            SITE AND YOUR RELIANCE ON ANY INFORMATION ON THE SITE IS SOLELY AT
            YOUR OWN RISK.
          </span>
        </p>
        <br />
        <p className="my-[40px]">
          <strong>EXTERNAL LINKS DISCLAIMER</strong>
        </p>
        <p>
          <span style={{ color: "rgb(89, 89, 89)" }}>
            The Site may contain (or you may be sent through the Site) links to
            other websites or content belonging to or originating from third
            parties or links to websites and features in banners or other
            advertising. Such external links are not investigated, monitored, or
            checked for accuracy, adequacy, validity, reliability, availability,
            or completeness by us. WE DO NOT WARRANT, ENDORSE, GUARANTEE, OR
            ASSUME RESPONSIBILITY FOR THE ACCURACY OR RELIABILITY OF ANY
            INFORMATION OFFERED BY THIRD-PARTY WEBSITES LINKED THROUGH THE SITE
            OR ANY WEBSITE OR FEATURE LINKED IN ANY BANNER OR OTHER ADVERTISING.
            WE WILL NOT BE A PARTY TO OR IN ANY WAY BE RESPONSIBLE FOR
            MONITORING ANY TRANSACTION BETWEEN YOU AND THIRD-PARTY PROVIDERS OF
            PRODUCTS OR SERVICES.
          </span>
        </p>
        <br />
        <p className="my-[40px]">
          <strong>PROFESSIONAL DISCLAIMER</strong>
        </p>
        <p>
          <span style={{ color: "rgb(89, 89, 89)" }}>
            The Site cannot and does not contain financial advice. The
            information contained is provided for general informational and
            educational purposes only and is not a substitute for professional
            advice. Accordingly, before taking any actions based upon such
            information, we encourage you to consult with the appropriate
            professionals. We do not provide any kind of professional or
            financial advice. THE USE OR RELIANCE OF ANY INFORMATION CONTAINED
            ON THE SITE IS SOLELY AT YOUR OWN RISK.
          </span>
        </p>
        <br />
        <br />
        <p className="my-[40px]">
          <strong>AFFILIATES DISCLAIMER</strong>
        </p>
        <p>
          <span style={{ color: "rgb(89, 89, 89)" }}>
            The Site may contain links to affiliate websites, and we receive an
            affiliate commission for any purchases made by you on the affiliate
            website using such links. Our affiliates include the following:
          </span>
        </p>
        <br />
        <br />
        <br />
        <p className="my-[40px]">
          <strong>TESTIMONIALS DISCLAIMER</strong>
        </p>
        <p>
          <span style={{ color: "rgb(89, 89, 89)" }}>
            The Site may contain testimonials by users of our products and/or
            services. These testimonials reflect the real-life experiences and
            opinions of such users. However, the experiences are personal to
            those particular users, and may not necessarily be representative of
            all users of our products and/or services. We do not claim, and you
            should not assume, that all users will have the same experiences.
            YOUR INDIVIDUAL RESULTS MAY VARY.
          </span>
        </p>
        <br />
        <p>
          <span style={{ color: "rgb(89, 89, 89)" }}>
            The testimonials on the Site are submitted in various forms such as
            text, audio and/or video and are reviewed by us before being posted.
            They appear on the Site verbatim as given by the users, except for
            the correction of grammar or typing errors. Some testimonials may
            have been shortened for the sake of brevity where the full
            testimonial contained extraneous information not relevant to the
            general public.
          </span>
        </p>
        <br />
        <p>
          <span style={{ color: "rgb(224, 224, 224)" }}>
            The views and opinions contained in the testimonials belong solely
            to the individual user and do not reflect our views and opinions. We
            are not affiliated with users who provide testimonials, and users
            are not paid or otherwise compensated for their testimonials.
          </span>
        </p>
        <br />
        <br />
      </div>
    </>
  );
}

function Disclaimer(props) {
  const { updatePage } = useOutletContext();

  useEffect(() => {
    updatePage("Disclaimer");
  }, []);
  return (
    <>
      <DisclaimerWrapper
        Content={DisclaimerContent}
        activePage={"disclaimer"}
      />
    </>
  );
}

export default Disclaimer;
