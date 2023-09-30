import Title from "../components/Title/Title";
import { Metadata, NextPage } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms & Conditions Page",
  keywords: "Smile Art Lab Terms & Conditions",
};

const TermsAndConditions: NextPage = () => {
  return (
    <section className="bg-gray-100 px-5 py-16">
      <div className="container mx-auto rounded-[60px] bg-[rgba(233,232,228,0.40)] px-6 py-10">
        <Title title="Terms & Conditions" className="mb-8 text-4xl font-bold" />

        <p className="text-gray-700 mb-6 leading-relaxed">
          Welcome to the Terms & Conditions page of Smile Art Lab here in after
          referred to as the &quot;Website&quot;. By accessing or using our
          website, you agree to comply with and be bound by these Terms &
          Conditions. If you do not agree to these terms, please do not use our
          website.
        </p>

        <h2 className="mt-8 text-2xl font-bold">Use of Our Website</h2>

        <p className="text-gray-700 mb-6 leading-relaxed">
          You agree to use our website for lawful purposes only and in a way
          that does not infringe upon the rights of others or restrict or
          inhibit their use and enjoyment of the website.
        </p>

        <Title
          title="Intellectual Property"
          className="my-8 text-2xl font-bold "
        />

        <p className="text-gray-700 mb-6 leading-relaxed">
          All content and materials available on this website, including but not
          limited to text, graphics, logos, images, and software, are the
          property of Smile Art Lab and are protected by applicable copyright
          and trademark law.
        </p>

        <Title
          title="Limitation of Liability"
          className="my-8 text-2xl font-bold "
        />

        <p className="text-gray-700 mb-6 leading-relaxed">
          Smile Art Lab shall not be liable for any indirect, incidental,
          special, or consequential damages that result from the use of, or the
          inability to use, our website or any content, products, or services
          provided herein.
        </p>
      </div>
    </section>
  );
};

export default TermsAndConditions;
