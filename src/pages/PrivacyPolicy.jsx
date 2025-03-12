import React, { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import DisclaimerWrapper from "../components/DisclaimerWrapper";

function PrivacyPolicyContent() {
  return (
    <>
      <div>
        <p className="">
          <strong>PRIVACY POLICY</strong>
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
            The information provided by Truetalk Arena ('we', 'us', or 'our')
            describes how and why we might collect, store, use, and/or share (
            'process ' ) your information when you use our services ( 'Services
            ' ), such as when you: Visit our website at
            http://www.truetalkarena.com , or any website of ours that links to
            this privacy notice Engage with us in other related ways, including
            any sales, marketing, or events Questions or concerns? Reading this
            privacy notice will help you understand your privacy rights and
            choices. If you do not agree with our policies and practices, please
            do not use our Services. If you still have any questions or
            concerns, please contact us at{" "}
            <a href="mailto:contact@truetalkarena.com">
              contact@truetalkarena.com
            </a>{" "}
            .
          </span>
        </p>
        <br />
        <p className="my-[40px]">
          <strong>SUMMARY OF KEY POINTS</strong>
        </p>
        <p>
          <span style={{ color: "rgb(89, 89, 89)" }}>
            This summary provides key points from our privacy notice, but you
            can find out more details about any of these topics by clicking the
            link following each key point or by using our table of contents
            below to find the section you are looking for. What personal
            information do we process? When you visit, use, or navigate our
            Services, we may process personal information depending on how you
            interact with Truetalk Arena and the Services, the choices you make,
            and the products and features you use. Do we process any sensitive
            personal information? We do not process sensitive personal
            information. Do we receive any information from third parties? We do
            not receive any information from third parties. How do we process
            your information? We process your information to provide, improve,
            and administer our Services, communicate with you, for security and
            fraud prevention, and to comply with law. We may also process your
            information for other purposes with your consent. We process your
            information only when we have a valid legal reason to do so. In what
            situations and with which types of parties do we share personal
            information? We may share information in specific situations and
            with specific categories of third parties. How do we keep your
            information safe? We have organisational and technical processes and
            procedures in place to protect your personal information. However,
            no electronic transmission over the internet or information storage
            technology can be guaranteed to be 100% secure, so we cannot promise
            or guarantee that hackers, cybercriminals, or other unauthorised
            third parties will not be able to defeat our security and improperly
            collect, access, steal, or modify your information. What are your
            rights? Depending on where you are located geographically, the
            applicable privacy law may mean you have certain rights regarding
            your personal information. How do you exercise your rights? The
            easiest way to exercise your rights is by filling out our data
            subject request form available here. We will consider and act upon
            any request in accordance with applicable data protection laws.
          </span>
        </p>
        <br />
        <p className="my-[40px]">
          <strong>WHAT INFORMATION DO WE COLLECT?</strong>
        </p>
        <p>
          <span style={{ color: "rgb(89, 89, 89)" }}>
            Personal information you disclose to us In Short: We collect
            personal information that you provide to us.
            <p>
              We collect personal information that you voluntarily provide to us
              when you register on the Services, express an interest in
              obtaining information about us or our products and Services, when
              you participate in activities on the Services, or otherwise when
              you contact us.
            </p>
            <p>
              Personal Information Provided by You. The personal information
              that we collect depends on the context of your interactions with
              us and the Services, the choices you make, and the products and
              features you use. The personal information we collect may include
              the following:
            </p>
            <ul>
              <li>names</li>
              <li>phone numbers</li>
              <li>email addresses</li>
              <li>mailing addresses</li>
              <li>usernames</li>
              <li>passwords</li>
              <li>contact preferences</li>
              <li>contact or authentication data</li>
              <li>billing addresses</li>
              <li>debit/credit card numbers</li>
              <li>
                Sensitive Information. We do not process sensitive information.
              </li>
            </ul>
            Payment Data. We may collect data necessary to process your payment
            if you make purchases, such as your payment instrument number (such
            as a credit card number), and the security code associated with your
            payment instrument.
          </span>
        </p>
        <br />
        <br />
        <p className="my-[40px]">
          <strong>HOW DO WE PROCESS YOUR INFORMATION?</strong>
        </p>
        <p>
          <span style={{ color: "rgb(89, 89, 89)" }}>
            <ul>
              We process your personal information for a variety of reasons,
              depending on how you interact with our Services, including:
              <li>
                <strong>
                  To facilitate account creation and authentication and
                  otherwise manage user accounts.
                </strong>{" "}
                We may process your information so you can create and log in to
                your account, as well as keep your account in working order.
              </li>
              <li>
                <strong>
                  To deliver and facilitate delivery of services to the user.
                </strong>{" "}
                We may process your information to provide you with the
                requested service.
              </li>
              <li>
                <strong>
                  To respond to user inquiries/offer support to users.
                </strong>{" "}
                We may process your information to respond to your inquiries and
                solve any potential issues you might have with the requested
                service.
              </li>
              <li>
                <strong>To send administrative information to you.</strong> We
                may process your information to send you details about our
                products and services, changes to our terms and policies, and
                other similar information.
              </li>
              <li>
                <strong>To fulfil and manage your orders.</strong> We may
                process your information to fulfil and manage your orders,
                payments, returns, and exchanges made through the Services.
              </li>
              <li>
                <strong>To enable user-to-user communications.</strong> We may
                process your information if you choose to use any of our
                offerings that allow for communication with another user.
              </li>
              <li>
                <strong>
                  To save or protect an individual's vital interest.
                </strong>{" "}
                We may process your information when necessary to save or
                protect an individual’s vital interest, such as to prevent harm.
              </li>
            </ul>
          </span>
        </p>
        <br />
        <br />
        <br />
        <p className="my-[40px]">
          <strong>
            WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
          </strong>
        </p>
        <p>
          <span style={{ color: "rgb(89, 89, 89)" }}>
            Vendors, Consultants, and Other Third-Party Service Providers. We
            may share your data with third-party vendors, service providers,
            contractors, or agents ( 'third parties ' ) who perform services for
            us or on our behalf and require access to such information to do
            that work. We have contracts in place with our third parties, which
            are designed to help safeguard your personal information. This means
            that they cannot do anything with your personal information unless
            we have instructed them to do it. They will also not share your
            personal information with any organisation apart from us. They also
            commit to protect the data they hold on our behalf and to retain it
            for the period we instruct. The categories of third parties we may
            share personal information with are as follows:
            <ul>
              <li>Ad Networks</li>
              <li>Payment Processors</li>
              <li>Data Storage Service Providers</li>
              <li>User Account Registration & Authentication Services</li>
              <li>Social Networks</li>
              <li>Data Analytics Services</li>
              <li>Performance Monitoring Tools</li>
              <li>Product Engineering & Design Tools</li>
              <li>Retargeting Platforms</li>
              <li>Affiliate Marketing Programs</li>
              <li>Website Hosting Service Providers</li>
              <li>Sales & Marketing Tools</li>
            </ul>
          </span>
        </p>
        <br />
        <p className="my-[40px]">
          <strong>WHAT IS OUR STANCE ON THIRD-PARTY WEBSITES</strong>
        </p>
        <p>
          <span style={{ color: "rgb(89, 89, 89)" }}>
            The Services may link to third-party websites, online services, or
            mobile applications and/or contain advertisements from third parties
            that are not affiliated with us and which may link to other
            websites, services, or applications. Accordingly, we do not make any
            guarantee regarding any such third parties, and we will not be
            liable for any loss or damage caused by the use of such third-party
            websites, services, or applications. The inclusion of a link towards
            a third-party website, service, or application does not imply an
            endorsement by us. We cannot guarantee the safety and privacy of
            data you provide to any third parties. Any data collected by third
            parties is not covered by this privacy notice. We are not
            responsible for the content or privacy and security practices and
            policies of any third parties, including other websites, services,
            or applications that may be linked to or from the Services. You
            should review the policies of such third parties and contact them
            directly to respond to your questions.
          </span>
        </p>
      </div>
    </>
  );
}

function PrivacyPolicy(props) {
  const { updatePage } = useOutletContext();

  useEffect(() => {
    updatePage("Privacy Policy");
  });
  return (
    <>
      <DisclaimerWrapper
        Content={PrivacyPolicyContent}
        activePage={"privacy-policy"}
      />
    </>
  );
}

export default PrivacyPolicy;
