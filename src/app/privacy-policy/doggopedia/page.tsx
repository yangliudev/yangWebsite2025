import React from "react";

const Doggopedia = () => {
  return (
    <>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Privacy Policy</title>
        <style>{`
          body {
            font-family: 'Inter', sans-serif;
            background: linear-gradient(to bottom, #1f2937, #111827);
            color: #e5e7eb;
            padding: 2em;
            margin: 0;
          }

          h1, h2, h3 {
            color: #3b82f6;
            font-weight: bold;
          }

          h1 {
            font-size: 2.5rem;
            margin-bottom: 1.5rem;
          }

          h2 {
            font-size: 1.75rem;
            margin-bottom: 1rem;
          }

          h3 {
            font-size: 1.25rem;
            margin-bottom: 1rem;
          }

          p {
            margin-bottom: 1rem;
            font-size: 1rem;
            line-height: 1.6;
          }

          a {
            color: #3b82f6;
            text-decoration: none;
            font-weight: bold;
          }

          a:hover {
            text-decoration: underline;
          }

          .section {
            background-color: #2d3748;
            padding: 2em;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            margin-bottom: 2em;
          }

          .section ul {
            list-style-type: disc;
            margin-left: 20px;
            color: #e5e7eb;
          }

          .footer {
            text-align: center;
            font-size: 0.875rem;
            color: #6b7280;
            margin-top: 4em;
          }

          .footer a {
            color: #3b82f6;
            text-decoration: none;
          }

          .footer a:hover {
            text-decoration: underline;
          }

          .footer p {
            margin-top: 1rem;
          }

        `}</style>
      </head>
      <body>
        <h1>Privacy Policy for Doggopedia</h1>
        <p>
          Yang Liu built the Doggopedia app as a free app. This service is
          provided by Yang Liu at no cost and is intended for use as is.
        </p>
        <p>
          This page informs visitors of my policies regarding the collection,
          use, and disclosure of personal information if anyone uses my service.
        </p>
        <p>
          If you choose to use my service, you agree to the collection and use
          of information in relation to this policy. The personal information
          that I collect is used for providing and improving the service.
        </p>

        <div className="section">
          <h2>Information Collection and Use</h2>
          <p>
            For a better experience, while using our service, I may require you
            to provide certain personally identifiable information. The
            information will be retained on your device and is not collected by
            me in any way.
          </p>
          <p>
            The app does use third-party services that may collect information
            to identify you.
          </p>
          <p>
            Here are the privacy policies of the third-party service providers
            used by the app:
          </p>
          <ul>
            <li>
              <a
                href="https://www.google.com/policies/privacy/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Play Services
              </a>
            </li>
          </ul>
        </div>

        <div className="section">
          <h2>Log Data</h2>
          <p>
            In case of an error in the app, I collect data and information on
            your phone called Log Data. This may include information such as
            your device Internet Protocol (“IP”) address, device name, operating
            system version, the configuration of the app when utilizing my
            service, and other statistics.
          </p>
        </div>

        <div className="section">
          <h2>Cookies</h2>
          <p>
            Cookies are small files commonly used as anonymous unique
            identifiers. These are sent to your browser and stored on your
            device's memory.
          </p>
          <p>
            This service does not explicitly use cookies. However, third-party
            libraries in the app may use cookies to collect information and
            improve their services. You can choose to accept or refuse these
            cookies.
          </p>
        </div>

        <div className="section">
          <h2>Service Providers</h2>
          <p>
            I may employ third-party companies and individuals for the following
            reasons:
          </p>
          <ul>
            <li>To facilitate our service;</li>
            <li>To provide the service on our behalf;</li>
            <li>To perform service-related tasks;</li>
            <li>To help analyze how our service is used.</li>
          </ul>
          <p>
            These third parties have access to your personal information only to
            perform their tasks, and they are obligated not to disclose or use
            it for any other purpose.
          </p>
        </div>

        <div className="section">
          <h2>Security</h2>
          <p>
            I value your trust in providing us with your personal information.
            While we strive to use commercially acceptable means to protect it,
            please remember that no method of transmission over the internet or
            electronic storage is 100% secure.
          </p>
        </div>

        <div className="section">
          <h2>Links to Other Sites</h2>
          <p>
            This service may contain links to other sites. If you click on a
            third-party link, you will be directed to that site. I advise you to
            review the privacy policy of these external sites as I have no
            control over their content.
          </p>
        </div>

        <div className="section">
          <h2>Children’s Privacy</h2>
          <p>
            This service does not address anyone under the age of 13. I do not
            knowingly collect personally identifiable information from children
            under 13. If I discover that a child under 13 has provided me with
            personal information, I will delete it immediately.
          </p>
        </div>

        <div className="section">
          <h2>Changes to This Privacy Policy</h2>
          <p>
            I may update this privacy policy from time to time. You are advised
            to review this page periodically for any changes. Any updates will
            be posted here.
          </p>
          <p>This policy is effective as of 2023-07-10.</p>
        </div>

        <div className="section">
          <h2>Contact Us</h2>
          <p>
            If you have any questions or suggestions about my privacy policy,
            feel free to contact me at yangliudeveloper@gmail.com.
          </p>
        </div>

        <footer className="footer">
          <p>
            This privacy policy page was created at{" "}
            <a
              href="https://privacypolicytemplate.net"
              target="_blank"
              rel="noopener noreferrer"
            >
              Privacy Policy Template
            </a>{" "}
            and modified/generated by{" "}
            <a
              href="https://app-privacy-policy-generator.nisrulz.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              App Privacy Policy Generator
            </a>
          </p>
        </footer>
      </body>
    </>
  );
};

export default Doggopedia;
