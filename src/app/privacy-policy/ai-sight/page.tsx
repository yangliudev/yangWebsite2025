"use client";
import React from "react";
import Head from "next/head";

const AISight = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="min-h-screen bg-gradient-to-b from-gray-800 to-gray-900 text-gray-200 p-8 font-sans">
        <h1 className="text-4xl font-bold text-blue-500 mb-6">
          Privacy Policy for AI Sight
        </h1>
        <p className="mb-4">
          Yang Liu built the AI Sight app as a free app. This service is
          provided by Yang Liu at no cost and is intended for use as is.
        </p>
        <p className="mb-4">
          This page informs visitors of my policies regarding the collection,
          use, and disclosure of personal information if anyone uses my service.
        </p>
        <p className="mb-8">
          If you choose to use my service, you agree to the collection and use
          of information in relation to this policy.
        </p>

        <Section title="Information Collection and Use">
          <p className="mb-4">
            For a better experience, while using our service, I may require you
            to provide certain personally identifiable information. The
            information will be retained on your device and is not collected by
            me in any way.
          </p>
          <p className="mb-4">
            The app does use third-party services that may collect information
            to identify you.
          </p>
          <p className="mb-4">
            Here are the privacy policies of the third-party service providers
            used by the app:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>
              <a
                href="https://www.google.com/policies/privacy/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                Google Play Services
              </a>
            </li>
          </ul>
        </Section>

        <Section title="Log Data">
          <p>
            In case of an error in the app, I collect data and information on
            your phone called Log Data. This may include information such as
            your device Internet Protocol (&quot;IP&quot;) address, device name,
            operating system version, the configuration of the app when
            utilizing my service, and other statistics.
          </p>
        </Section>

        <Section title="Cookies">
          <p className="mb-4">
            Cookies are small files commonly used as anonymous unique
            identifiers. These are sent to your browser and stored on your
            device&apos;s memory.
          </p>
          <p>
            This service does not explicitly use cookies. However, third-party
            libraries in the app may use cookies to collect information and
            improve their services.
          </p>
        </Section>

        <Section title="Service Providers">
          <p className="mb-4">
            I may employ third-party companies and individuals for the following
            reasons:
          </p>
          <ul className="list-disc list-inside mb-4">
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
        </Section>

        <Section title="Security">
          <p>
            I value your trust in providing us with your personal information.
            While we strive to use commercially acceptable means to protect it,
            please remember that no method of transmission over the internet or
            electronic storage is 100% secure.
          </p>
        </Section>

        <Section title="Links to Other Sites">
          <p>
            This service may contain links to other sites. If you click on a
            third-party link, you will be directed to that site. I advise you to
            review the privacy policy of these external sites as I have no
            control over their content.
          </p>
        </Section>

        <Section title="Children's Privacy">
          <p>
            This service does not address anyone under the age of 13. I do not
            knowingly collect personally identifiable information from children
            under 13. If I discover that a child under 13 has provided me with
            personal information, I will delete it immediately.
          </p>
        </Section>

        <Section title="Changes to This Privacy Policy">
          <p className="mb-4">
            I may update this privacy policy from time to time. You are advised
            to review this page periodically for any changes. Any updates will
            be posted here.
          </p>
          <p>This policy is effective as of 2025-05-05.</p>
        </Section>

        <Section title="Contact Us">
          <p>
            If you have any questions or suggestions about my privacy policy,
            feel free to contact me at yangliudeveloper@gmail.com.
          </p>
        </Section>

        <footer className="text-center text-sm text-gray-400 mt-12">
          <p>
            This privacy policy page was created at{" "}
            <a
              href="https://privacypolicytemplate.net"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              Privacy Policy Template
            </a>{" "}
            and modified/generated by{" "}
            <a
              href="https://app-privacy-policy-generator.nisrulz.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              App Privacy Policy Generator
            </a>
          </p>
        </footer>
      </main>
    </>
  );
};

const Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div className="bg-gray-700 p-6 rounded-lg shadow mb-8">
    <h2 className="text-2xl font-bold text-blue-400 mb-4">{title}</h2>
    {children}
  </div>
);

export default AISight;
