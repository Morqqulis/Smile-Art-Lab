import Btn from "../components/Btn/Btn";
import Card from "../components/Cards/Card/Card";
import Hero from "../components/Hero/Hero";
import NumHeading from "../components/NumHeading/NumHeading";
import SimpleBlock from "../components/SimpleBlock/SimpleBlock";
import Title from "../components/Title/Title";
import Txt from "../components/Txt/Txt";
import { Metadata, NextPage } from "next";

export const metadata: Metadata = {
  title: "Design - Smile Art Lab",
  description: "Smile Art Lab Design Page",
  keywords: "Smile Art Lab",
};

const Design: NextPage = () => {
  return (
    <>
      <Hero
        bgUrl="bg-[url('/hero/bg-5.webp')] bg-cover"
        title="Headline - Lorem Ipsum Dolor ..."
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure."
      />

      <SimpleBlock
        title="We Design, You Save Time"
        text={[
          `We know that a lot of dental practices have their own in-house milling machine and 
wish to outsource their designs to external parties. That’s where we come in!
`,
          `Allow us to put together a custom Smile Art Lab design for your patients. They’ll be wearing 
a beautiful “artistic smile” in no time.
`,
          `We design dazzling veneers, crowns, inlays, onlays, screw-retained crowns, 
custom abutments, full arch anatomical hybrids and much more.
`,
          `
Simply send us your digital files and we’ll deliver the finished design back to you on time, 
with the highest-quality and design aspects. 
`,
        ]}
      />

      <section className="rounded-[95px] bg-[rgba(233,232,228,0.50)] py-20 mobile:py-12">
        <div className="mx-auto max-w-[1250px] px-[15px]">
          <Title
            className="mb-[87px] text-center mobile:mb-12"
            title="Why Design With Smile Art Lab?"
          />
          <div className="grid grid-flow-col gap-2.5 tablets:grid-flow-row tablets:grid-cols-2 tablets:justify-items-center middle:grid-cols-1">
            <Card
              className="design-card justify-center justify-items-center middle:max-w-full"
              imageUrl="/Design/card/1.svg"
              width={175}
              height={136}
              heading="Save Time"
              text="You scan, we design. It’s as simple as that. You get to spend more time servicing your patients instead of wasting time designing"
            />
            <Card
              className="design-card justify-center justify-items-center middle:max-w-full"
              imageUrl="/Design/card/2.svg"
              width={143}
              height={143}
              heading="Get Unparalleled Designs"
              text="Your patient satisfaction will go through the roof when they experience life with our modern, innovative and aesthetically pleasing design techniques."
            />
            <Card
              className="design-card justify-center justify-items-center tablets:col-span-2 tablets:max-w-full middle:col-auto"
              imageUrl="/Design/card/3.svg"
              width={180}
              height={130}
              heading="Gain More Control"
              text="Dental work is tricky at times. Our digital solutions allow you to complete work of the highest standard with minimal hassle."
            />
          </div>
        </div>
      </section>

      <section className="rounded-[95px] py-20 mobile:py-12">
        <div className="mx-auto max-w-[1200px] px-[15px]">
          <Title className="mb-12 text-center" title="Getting Started" />
          <div className="mx-auto grid max-w-[834px] gap-2.5">
            <NumHeading
              className=" whitespace-nowrap text-lg"
              num={1}
              heading="Send your scans: "
              text="We accept scans from any platform. Click here to connect with us!"
            />
            <NumHeading
              className="whitespace-nowrap text-lg"
              num={2}
              heading="Update your Preferences:"
              text="Every dentist is different. Let us know your design preferences so that we can tailor our work to your style."
            />
            <NumHeading
              className="whitespace-nowrap text-lg"
              num={3}
              heading="Receive your design:"
              text="You will receive your design within the time frame you choose. Every design has a 3-day satisfaction guarantee."
            />
          </div>
        </div>
      </section>

      <section className="rounded-[95px] pb-28 mobile:pb-20">
        <div className="mx-auto max-w-[1100px] px-[15px]">
          <div className="relative z-[1] rounded-[60px] bg-white px-5 py-20 text-center shadow-[35px_35px6_0px_0px_rgba(0,_0,_0,_0.15)] mobile:py-12">
            <Title
              className=" mb-3"
              title="Interested to collaborate with us?"
            />
            <Txt
              className="mx-auto mb-12 max-w-[490px]"
              text={[
                `To get started now, click on the button below and we look forward to working with you `,
              ]}
            />
            <Btn className="mx-auto whitespace-nowrap tablets:max-w-[40%] mobile:max-w-fit" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Design;
