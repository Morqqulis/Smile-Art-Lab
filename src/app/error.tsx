"use client";
import { Metadata } from "next";
import Title from "./components/Title/Title";

export const metadata: Metadata = {
  title: "Error - Smile Art Lab",
  description: "Smile Art Lab Error Page",
  keywords: "Smile Art Lab",
};

const Error = ({ error }: { error: Error }) => {
  return (
    <section className="mx-auto px-10 py-20 text-center">
      <Title title={`OOPS!.. Something went wrong... ${error.message}`} />
    </section>
  );
};

export default Error;
