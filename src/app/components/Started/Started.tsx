import { merry } from "@/app/layout";
import NumHeading from "../NumHeading/NumHeading";
import SquareSvg from "../SquareSvg/SquareSvg";
import Link from "next/link";

const Started = () => {
  return (
    <section className="Started py-20 mobile:py-10">
      <div className=" mx-auto max-w-[1018px] px-5">
        <h3
          className={`title text-center text-5xl ${merry.className} mb-[90px] mobile:mb-14`}
        >
          Getting Started
        </h3>
        <div className="items mb-[80px] grid gap-2.5 mobile:mb-[50px] mobile:gap-4">
          <div className="item flex items-center gap-12 mobile:w-full mobile:flex-col mobile:gap-4">
            <SquareSvg
              src="/started/1.svg"
              width={118}
              height={122}
              className="bg-[rgba(195,_162,_77,_0.50)]"
            />
            <div className="mobile:flex mobile:flex-col mobile:justify-center">
              <NumHeading num={1} heading="Complete Our Quick & Easy Form" />
              <div className="mt-[38px] text-lg font-light text-[#080A11] mobile:mt-[18px]">
                <Link className=" pr-[5px] underline" href={"/"}>
                  Click here
                </Link>
                to open our enquiry form and complete the details accordingly.
                We will be in touch as soon as possible with pricing and further
                information. Chat soon!”
              </div>
            </div>
          </div>
          <div className="item flex items-center gap-12 mobile:w-full mobile:flex-col mobile:gap-4">
            <SquareSvg
              src="/started/2.svg"
              width={139}
              height={138}
              className="bg-[rgba(195,_162,_77,_0.80)]"
            />
            <div className="mobile:flex mobile:flex-col mobile:justify-center">
              <NumHeading num={2} heading="Update Your Preferences" />
              <div className="mt-[38px] text-lg font-light text-[#080A11] mobile:mt-[18px]">
                We will help you open a Smile Art Lab account and update your
                design preferences so we know exactly what your style is when it
                comes to dental work (contact, occlusion, etc.).
              </div>
            </div>
          </div>
          <div className="item flex items-center gap-12 mobile:w-full mobile:flex-col mobile:gap-4">
            <SquareSvg src="/started/3.svg" width={145} height={134} />
            <div className="mobile:flex mobile:flex-col mobile:justify-center">
              <NumHeading num={3} heading="Send Your Case" />
              <div className="mt-[38px] text-lg font-light text-[#080A11] mobile:mt-[18px]">
                As soon as your account setup has been completed, you can call
                us to arrange a pickup or send a digital case across. If you
                need any assistance with this, please reach out.
              </div>
            </div>
          </div>
        </div>
        <Link className="btn mx-auto max-w-fit mobile:max-w-[75%]" href={"/"}>
          Work With Us
        </Link>
      </div>
    </section>
  );
};

export default Started;
