import Hero from "../components/Hero/Hero";
import SimpleBlock from "../components/SimpleBlock/SimpleBlock";
import Txt from "../components/Txt/Txt";
import TextImageBlock from "../components/TextImageBlock/TextImageBlock";
import Title from "../components/Title/Title";
import Btn from "../components/Btn/Btn";
import Cards from "../components/Cards/Cards";
import { Metadata, NextPage } from "next";

export const metadata: Metadata = {
  title: "Products - Smile Art Lab",
  description: "Smile Art Lab Products Page",
  keywords: "Smile Art Lab",
};

const Products: NextPage = () => {
  return (
    <>
      <Hero
        bgUrl="bg-[url('/hero/bg-3.jpg')] bg-cover"
        title="Headline - Lorem Ipsum Dolor ..."
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure."
      />
      <SimpleBlock
        title="Products"
        text={[
          "Smile Art Lab products are the result of a wealth of shared wisdom, knowledge and skills gained over years of experience in the dental industry.",
          "We are proud of every product we create and stand by our designs 100%. You can rest assured you’ll be receiving the highest quality service and products across the board when you choose to work with Smile Art Lab.",
        ]}
      />
      <section className="products-section rounded-[95px] bg-gray py-24 mobile:py-20 small:py-12">
        <div className="mx-auto grid max-w-[1260px] gap-5 px-5">
          <TextImageBlock src="/products/1.jpg" width={370} height={348}>
            <Title className="" title="Crown & Bridge" />
            <p>
              Our restorations are high-end, contemporary and use an array of
              methods from the traditional metal-based crown to the latest
              zirconia or lithium disilicate materials layered with porcelain.
            </p>
            <p>
              It doesn’t matter whether you’re looking for an economical option
              or premium product, we’ve got you and your patients entirely
              covered with our extensive range.
            </p>
          </TextImageBlock>
          <TextImageBlock
            className=" flex-row-reverse"
            src="/products/2.jpg"
            width={370}
            height={348}
          >
            <Title className="" title="Implants" />
            <p>
              The Smile Art Lab boasts years of experience with dental implants
              and this is exactly why we are leading specialists with this
              particular product
            </p>
            <p>
              We provide implants of a consistently high standard and we support
              dental implant fabrication for almost all recognised systems. Let
              us know what you need, and we’ll make it happen.
            </p>
          </TextImageBlock>
          <TextImageBlock src="/products/3.jpg" width={370} height={348}>
            <Title className="" title="All On Implants" />
            <p>
              Edentulous patients with removable protheses will benefit greatly
              from a set of All On Implants. Our products provide maximum
              stability and function, securely attaching to four or more dental
              implants.
            </p>
          </TextImageBlock>
          <TextImageBlock
            className=" flex-row-reverse"
            src="/products/4.jpg"
            width={370}
            height={348}
          >
            <Title className="" title="Design Services" />
            <p>
              From single crown designs to more complex cases, we will work with
              you to create a bespoke, contemporary treatment plan for your
              patient when it comes to their dental needs.
            </p>
            <p>
              We make the request, design and delivery process for our services
              as quick and easy as possible in order to craft high-quality
              results with a swift turnaround.
            </p>
          </TextImageBlock>
        </div>
      </section>

      <section className=" py-24 mobile:py-20 middle:py-12">
        <div className="mx-auto max-w-[1100px] px-[15px]">
          <div className="relative z-10 rounded-[60px] bg-white px-5 pb-14 pt-20 text-center shadow-[35px_35px_60px_0px_rgba(0,_0,_0,_0.15)]">
            <Title
              className="mb-3"
              title="Interested to collaborate with us?"
            />
            <Txt
              className="mx-auto mb-14 max-w-[490px]"
              text={[
                "To get started now, click on the button below and we look forward to working with you ",
              ]}
            />
            <Btn className="mx-auto" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
