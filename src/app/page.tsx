//----------------------------------------------

import { Metadata } from "next";
import About from "./components/About/About";
import Cards from "./components/Cards/Cards";
import GradientBlock from "./components/GradientBlock/GradientBlock";
import Hero from "./components/Hero/Hero";
import Slider from "./components/Slider/Slider";
import Started from "./components/Started/Started";

export const metadata: Metadata = {
  title: "Home - Smile Art Lab",
  description: "Smile Art Lab Home Page",
  keywords: "Smile Art Lab",
};

const Home = () => {
  const homeCardData = {
    heading: [
      "The Perfect Fit Every Time",
      "Punctual and Prompt Delivery",
      "Competitive Pricing",
      "Smile Design",
      "Innovation is Key",
    ],
    text: [
      `For every restoration, we fabricate 3-4 models to ensure the perfect fit, functionality and results each and every time.`,
      "As a Smile Art Lab customer, you receive a guarantee that all work completed on your behalf by our technicians will be delivered on time, within the schedule you provide.",
      "Our prerogative is to serve the dental industry and their patients. We don’t see the point in overcharging for a service that helps so many people.",
      "Your Smile Designer is your point of contact at Smile Art Lab for all things dental! They work with you to provide the personalised service you deserve.",
      "If you work digitally with a scanner, we can accommodate. Our technology and processes make it easy for you to send us your digital files.",
    ],
    imageUrl: [
      "/cards/1.svg",
      "/cards/2.svg",
      "/cards/3.svg",
      "/cards/4.svg",
      "/cards/5.svg",
    ],
    width: [51, 54, 51, 71, 54],
    height: [53, 55, 47, 32, 49],
  };

  return (
    <main className="home group grow">
      <Hero
        num="1"
        title="Unparalleled Service, With A Smile"
        text="Smile Art Lab is Sydney’s premier dental laboratory, catering to dentists looking for 
        a bespoke, turnkey service for all their patient’s needs. We supply state-of-the-art products, easy-to-navigate services and quality design and we do it all with a smile. (Crowns, Bridges, Veneers,  Implants, and Smile Design)"
      />
      <About />
      <Cards data={homeCardData} />
      <Started />
      <GradientBlock>
        <Slider />
      </GradientBlock>
    </main>
  );
};
export default Home;
