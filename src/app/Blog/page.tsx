import { Metadata, NextPage } from "next";
import Hero from "../components/Hero/Hero";
import Image from "next/image";
import Title from "../components/Title/Title";
import Txt from "../components/Txt/Txt";
import Btn from "../components/Btn/Btn";

export const metadata: Metadata = {
  title: "Blog - Smile Art Lab",
  description: "Smile Art Lab Blog page",
  keywords: "Smile Art Lab Blog page",
};

const Blog: NextPage = () => {
  return (
    <>
      <Hero
        bgUrl="bg-[url('/hero/bg-6.jpg')] bg-cover"
        title="Headline - Lorem Ipsum Dolor ..."
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure."
      />

      <section className={`blog blog-section pt-20`}>
        <div className="mx-auto max-w-[1245px] px-[15px]">
          <div className="articles grid gap-10">
            <div className="grid grid-flow-col justify-between rounded-[60px] bg-[rgba(255,255,255,0.60)] px-6 py-3 shadow-[35px_35px_60px_0px_rgba(0,0,0,0.15)] tablets:grid-flow-row tablets:justify-center tablets:justify-items-center tablets:gap-5">
              <div className="max-w-[460px] tablets:order-[1]  tablets:w-full tablets:max-w-full">
                <span className="mb-[1px] block underline">
                  12 September 2023
                </span>
                <Title className="mb-[27px]" title="Article Title" />
                <Txt
                  className="mb-12"
                  text={[
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ...",
                  ]}
                />
                <Btn text="Read More" href="Blog/1" />
              </div>
              <div className="tablets:w-full tablets:max-w-full">
                <Image
                  className="h-auto w-auto rounded-[60px] tablets:w-full"
                  src={"/Blog/1.jpg"}
                  alt="Article Image"
                  width={464}
                  height={343}
                />
              </div>
            </div>
            <div className="grid grid-flow-col justify-between rounded-[60px] bg-[rgba(255,255,255,0.60)] px-6 py-3 shadow-[35px_35px_60px_0px_rgba(0,0,0,0.15)] tablets:grid-flow-row tablets:justify-center tablets:justify-items-center tablets:gap-5">
              <div className="order-1 max-w-[460px]  tablets:order-[1] tablets:w-full tablets:max-w-full">
                <span className="mb-[1px] block underline">
                  12 September 2023
                </span>
                <Title className="mb-[27px]" title="Article Title" />
                <Txt
                  className="mb-12"
                  text={[
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ...",
                  ]}
                />

                <Btn text="Read More" href="Blog/2" />
              </div>
              <div className="tablets:w-full tablets:max-w-full">
                <Image
                  className="h-auto w-auto rounded-[60px] tablets:w-full"
                  src={"/Blog/2.jpg"}
                  alt="Article Image"
                  width={464}
                  height={343}
                />
              </div>
            </div>
            <div className="grid grid-flow-col justify-between rounded-[60px] bg-[rgba(255,255,255,0.60)] px-6 py-3 shadow-[35px_35px_60px_0px_rgba(0,0,0,0.15)] tablets:grid-flow-row tablets:justify-center tablets:justify-items-center tablets:gap-5">
              <div className="max-w-[460px] tablets:order-[1]  tablets:w-full tablets:max-w-full">
                <span className="mb-[1px] block underline">
                  12 September 2023
                </span>
                <Title className="mb-[27px]" title="Article Title" />
                <Txt
                  className="mb-12"
                  text={[
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ...",
                  ]}
                />
                <Btn text="Read More" href="Blog/3" />
              </div>
              <div className="tablets:w-full tablets:max-w-full">
                <Image
                  className=" h-auto w-auto rounded-[60px] tablets:w-full"
                  src={"/Blog/3.jpg"}
                  alt="Article Image"
                  width={464}
                  height={343}
                />
              </div>
            </div>
            <div className="grid grid-flow-col justify-between rounded-[60px] bg-[rgba(255,255,255,0.60)] px-6 py-3 shadow-[35px_35px_60px_0px_rgba(0,0,0,0.15)] tablets:grid-flow-row tablets:justify-center tablets:justify-items-center tablets:gap-5">
              <div className="order-1 max-w-[460px]  tablets:order-[1] tablets:w-full tablets:max-w-full">
                <span className="mb-[1px] block underline">
                  12 September 2023
                </span>
                <Title className="mb-[27px]" title="Article Title" />
                <Txt
                  className="mb-12"
                  text={[
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ...",
                  ]}
                />
                <Btn text="Read More" href="Blog/4" />
              </div>
              <div className="tablets:w-full tablets:max-w-full">
                <Image
                  className="h-auto w-auto rounded-[60px] tablets:w-full"
                  src={"/Blog/4.jpg"}
                  alt="Article Image"
                  width={464}
                  height={343}
                />
              </div>
            </div>
            <div className="grid grid-flow-col justify-between rounded-[60px] bg-[rgba(255,255,255,0.60)] px-6 py-3 shadow-[35px_35px_60px_0px_rgba(0,0,0,0.15)] tablets:grid-flow-row tablets:justify-center tablets:justify-items-center tablets:gap-5">
              <div className="max-w-[460px] tablets:order-[1]  tablets:w-full tablets:max-w-full">
                <span className="mb-[1px] block underline">
                  12 September 2023
                </span>
                <Title className="mb-[27px]" title="Article Title" />
                <Txt
                  className="mb-12"
                  text={[
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ...",
                  ]}
                />
                <Btn text="Read More" href="Blog/5" />
              </div>
              <div className="tablets:w-full tablets:max-w-full">
                <Image
                  className=" h-auto w-auto rounded-[60px] tablets:w-full"
                  src={"/Blog/5.jpg"}
                  alt="Article Image"
                  width={464}
                  height={343}
                />
              </div>
            </div>
            <div className="grid grid-flow-col justify-between rounded-[60px] bg-[rgba(255,255,255,0.60)] px-6 py-3 shadow-[35px_35px_60px_0px_rgba(0,0,0,0.15)] tablets:grid-flow-row tablets:justify-center tablets:justify-items-center tablets:gap-5">
              <div className="order-1 max-w-[460px]  tablets:order-[1] tablets:w-full tablets:max-w-full">
                <span className="mb-[1px] block underline">
                  12 September 2023
                </span>
                <Title className="mb-[27px]" title="Article Title" />
                <Txt
                  className="mb-12"
                  text={[
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ...",
                  ]}
                />
                <Btn text="Read More" href="Blog/6" />
              </div>
              <div className="tablets:w-full tablets:max-w-full">
                <Image
                  className="h-auto w-auto rounded-[60px] tablets:w-full"
                  src={"/Blog/6.jpg"}
                  alt="Article Image"
                  width={464}
                  height={343}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24">
        <div className="mx-auto max-w-[1100px] px-[15px] ">
          <div className="relative z-[1] rounded-[60px] bg-white px-5 pb-12 pt-[87px] text-center">
            <Title
              className="mb-3"
              title="Interested to collaborate with us?"
            />
            <Txt
              className="mx-auto mb-14 max-w-[490px] mobile:mb-8"
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

export default Blog;
