import React from "react";
import Title from "./components/Title/Title";
import { Metadata, NextPage } from "next";

export const metadata: Metadata = {
  title: "Loading - Smile Art Lab",
  description: "Smile Art Lab Loading Page",
  keywords: "Smile Art Lab",
};

const Loading: NextPage = () => {
  return (
    <section className="mx-auto px-10 py-20">
      <Title className="text-center" title="Loading..." />
      <div className="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </section>
  );
};

export default Loading;
