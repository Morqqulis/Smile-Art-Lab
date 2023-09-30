import Title from "../components/Title/Title";

import { Metadata, NextPage } from "next";

export const metadata: Metadata = {
  title: "Privacy/Policy - Smile Art Lab",
  description: "Privacy/Policy Page",
  keywords: "Smile Art Lab",
};

const PrivacyPolicy: NextPage = () => {
  return (
    <section className="bg-gray-100 px-5 py-16">
      <div className="container mx-auto rounded-[60px] bg-[rgba(233,232,228,0.40)] px-6 py-10">
        <Title title="Privacy Policy" className="mb-8 text-4xl font-bold" />

        <p className="text-gray-700 mb-6 leading-relaxed">
          Welcome to the Privacy Policy page of Smile Art Lab &quot;here in
          after referred to as the &quot;Website&quot;. Our company, Smile Art
          Lab &quot;hereinafter referred to as &quot;We&quot; or &quot;Our
          Company&quot;, places great importance on your privacy and the
          protection of your personal data. In this document, we describe the
          types of information we collect, how we use it, and how we ensure its
          confidentiality.
        </p>

        <Title
          title="Information We Collect"
          className="mt-8 text-2xl font-bold"
        />

        <p className="text-gray-700 mb-6 leading-relaxed">
          We collect various types of information from our users, including:
        </p>

        <ul className="text-gray-700 mb-6 list-inside list-disc pl-6">
          <li>
            Personal information that you provide to us when registering on the
            site, making a purchase, or filling out forms on the site.
          </li>
          <li>
            Information automatically collected by our servers when you visit
            the website, including your IP address, browser type, and operating
            system.
          </li>
          <li>
            Usage information related to your interactions with the site, such
            as pages visited, time spent on the site, and referral sources.
          </li>
          <li>
            Information collected through cookies and similar tracking
            technologies. Please refer to our Cookie Policy for more details.
          </li>
        </ul>

        <Title
          title="How We Use Your Information"
          className="mt-8 text-2xl font-bold"
        />

        <p className="text-gray-700 mb-6 leading-relaxed">
          We use the collected information for various purposes, including:
        </p>

        <ul className="text-gray-700 mb-6 grid list-inside list-disc gap-2.5 pl-6">
          <li>Providing and maintaining the website.</li>
          <li>Personalizing your experience on the site.</li>
          <li>Improving our products and services.</li>
          <li>Processing transactions and delivering requested information.</li>
          <li>
            Communicating with you, including responding to inquiries and
            providing updates.
          </li>
          <li>Protecting against fraud and unauthorized access.</li>
        </ul>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
