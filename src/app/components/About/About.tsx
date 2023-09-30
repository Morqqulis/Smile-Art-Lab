import { merry } from "@/app/layout";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <section className="about py-20 mobile:py-10">
      <div className="container mx-auto grid max-w-[1270px] grid-cols-2 items-center gap-[25px] px-5 tablets:grid-cols-1 tablets:justify-items-center">
        <div
          className={`relative grid h-full max-w-[638px] tablets:w-full tablets:max-w-full`}
        >
          <Image
            className="absolute left-0 top-[0] z-[1] mobile:hidden"
            src={`/about/1.webp`}
            alt="About Image"
            width={199}
            height={199}
          />
          <Image
            className={`mx-auto self-center justify-self-center rounded-[50px] mobile:w-full`}
            src={`/about/big.webp`}
            alt="About Image"
            width={446}
            height={446}
          />
          <Image
            className="absolute bottom-[0] right-0 mobile:hidden"
            src={`/about/3.webp`}
            alt="About Image"
            width={222}
            height={222}
          />
        </div>

        <div className="max-w-[542px] justify-self-end tablets:max-w-full tablets:justify-self-auto">
          <h2 className={`title mb-5 ${merry.className} tablets:text-center`}>
            About Us
          </h2>
          <div className="mb-10 grid gap-[30px] text-lg font-normal mobile:text-base">
            <p>
              We are a contemporary dental laboratory based in Sydney,
              Australia. Our number one goal is to provide dentists with all the
              tools they need to properly service their patients. From implants
              to crowns to bridges and more, you name it - we supply it.
            </p>
            <p>
              Our bespoke dental design technicians will work with you to create
              the best possible treatment plan for your patient. We only use
              materials of the highest quality to ensure you and your patients
              have a truly exceptional dental experience with outstanding
              results.
            </p>
            <p>
              Smile Art Lab co-founders Riccardo Borgonvo and Yannick Roulet
              both hail from Europe. Ricky is from Meda, a small town near Como
              in Italy and Yannick is from Aix-en-Provence in the south of
              France. They both moved to Australia and met while working
              together in Sydney. They soon became fast friends and decided to
              build a business together.
            </p>
          </div>
          <Link
            className="btn tablets:mx-auto tablets:flex tablets:max-w-lg tablets:justify-center mobile:max-w-xs mobile:text-base"
            href={"/"}
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
