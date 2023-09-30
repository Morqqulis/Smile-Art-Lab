import Title from "../components/Title/Title";
import Txt from "../components/Txt/Txt";
import { merry } from "../layout";
import Image from "next/image";
import Btn from "../components/Btn/Btn";
import { Metadata, NextPage } from "next";

export const metadata: Metadata = {
  title: "Thanks - Smile Art Lab",
  description: "Smile Art Lab Home Page",
  keywords: "Smile Art Lab",
};

const Thanks: NextPage = () => {
  return (
    <>
      <section className="rounded-b-[80px] bg-[rgba(233,_232,_228,_0.40)] py-20">
        <div
          className={`${merry.className} text-center font-bold text-[#13110D]`}
        >
          <h1
            className={`mb-5 text-[64px] tablets:text-5xl mobile:text-4xl middle:text-3xl small:text-2xl`}
          >
            Thank you for contacting us!
          </h1>
          <h2 className="text-4xl tablets:text-3xl mobile:text-2xl middle:text-xl small:text-lg">
            We’ll get back to you as soon as possible!
          </h2>
        </div>
      </section>
      <div className="py-18 mx-auto mb-20 mt-12 max-w-[1332px] rounded-[95px] bg-white px-4">
        <div className="p-[25px] pb-20">
          <div className="mb-20  grid grid-cols-3 items-start gap-5 text-center mobile:grid-cols-2 middle:grid-cols-1">
            <div className=" grid h-full items-center justify-center justify-items-center gap-6">
              <div className="mx-auto flex h-[153px] w-[153px] items-center justify-center rounded-[36px] bg-gg mobile:h-[103px] mobile:w-[103px]">
                <Image
                  className="mobile:h-full mobile:w-full mobile:max-w-[70%]"
                  src={"/Thanks/1.svg"}
                  alt="Thanks Icon"
                  width={60}
                  height={80}
                />
              </div>
              <Title className="text-center" title="Address" />
              <Txt
                className="max-w-[517px]"
                text={["301 10-12 Clarke Street, Crow Nest, NSW, 2065"]}
              />
            </div>
            <div className=" grid h-full items-center justify-center justify-items-center gap-6">
              <div className="mx-auto flex h-[153px] w-[153px] items-center justify-center rounded-[36px] bg-gg mobile:h-[103px] mobile:w-[103px]">
                <Image
                  className="mobile:h-full mobile:w-full mobile:max-w-[70%]"
                  src={"/Thanks/2.svg"}
                  alt="Thanks Icon"
                  width={78}
                  height={61}
                />
              </div>
              <Title className="text-center" title="Email Address" />
              <Txt className="max-w-[517px]" text={[" Info@smileartlab.com"]} />
            </div>
            <div className=" grid h-full items-center justify-center justify-items-center gap-6 mobile:col-span-2 middle:col-auto">
              <div className="mx-auto flex h-[153px] w-[153px] items-center justify-center rounded-[36px] bg-gg mobile:h-[103px] mobile:w-[103px]">
                <Image
                  className="mobile:h-full mobile:w-full mobile:max-w-[70%]"
                  src={"/Thanks/3.svg"}
                  alt="Thanks Icon"
                  width={72}
                  height={72}
                />
              </div>
              <Title className="text-center" title="Telephone" />
              <Txt className="max-w-[517px]" text={["(02) 9119 3276"]} />
            </div>
          </div>
          <span className="mx-auto mb-20 block h-[4.5px] w-full max-w-[480px] rounded-[96px] bg-[#13110D]"></span>
          <Btn className="mx-auto" text="Back to Homepage" />
        </div>
      </div>
    </>
  );
};

export default Thanks;
