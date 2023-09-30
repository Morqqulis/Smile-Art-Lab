import { merry } from "@/app/layout";
import Image from "next/image";
import Btn from "../Btn/Btn";

const AboutLab = () => {
  return (
    <section className="about-our-lab pb-[66px] pt-[150px] tablets:pt-24 mobile:mb-10 mobile:pb-1 mobile:pt-20 small:pt-14">
      <div className="mx-auto max-w-[1247px] px-2.5">
        <div className="mb-14 grid grid-cols-2 items-center tablets:grid-cols-1 tablets:gap-5 mobile:mb-8">
          <div className="max-w-[497px] tablets:max-w-full">
            <h2 className={`title mb-9 tablets:text-center ${merry.className}`}>
              About Our Lab
            </h2>
            <div className="grid gap-7 text-lg mobile:text-base small:text-sm">
              <p>
                Smile Art Lab is a full-service dental laboratory based in
                Sydney, Australia.{" "}
              </p>
              <p>
                Our goal is to help dentists like you deliver the highest
                quality service to their patients, so they can walk away with a
                dazzling “artistic smile”.
              </p>
              <p>
                Our promise to you is that we will provide a consistent standard
                of excellence backed by our technology, products, customer
                service and competitive pricing.
              </p>
              <p>
                Our processes integrate cutting-edge technology with the latest
                scientific advances in order to ensure you and your patients
                receive only the best modern restorations that fit perfectly and
                achieve a beautiful look for years to come.
              </p>
              <p>
                We provide a personalised service so that you don’t have to
                worry about a thing. Simply reach out to us and we’ll guide you
                through the rest. We’ll always keep you updated on the status of
                your order through accessible communication that works around
                your schedule.
              </p>
              <p>
                Our goal aligns with yours: To make a difference in the lives of
                patients using science and artistry while upholding a stellar
                reputation in the dental industry.
              </p>
            </div>
          </div>
          <div className=" justify-self-end tablets:justify-self-auto">
            <Image
              className="max-w-full tablets:w-full"
              src={"/aboutlab/1.jpg"}
              alt="About our Lab Image"
              width={645}
              height={645}
            />
          </div>
        </div>
        <Btn className="mx-auto w-fit" />
      </div>
    </section>
  );
};

export default AboutLab;
