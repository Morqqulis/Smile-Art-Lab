import Image from "next/image";
import Gradient from "../Gradient/Gradient";
import TextImageBlock from "../TextImageBlock/TextImageBlock";

const AboutGradient = () => {
  return (
    <div className="py-20 mobile:py-8 small:py-2">
      <div className="relative rounded-[95px] bg-[rgba(233,_232,_228,_0.50)] py-[110px]">
        <Gradient className="absolute left-1/2 top-24 h-full max-h-[490px] w-full max-w-[470px] -translate-x-1/2" />

        <div className="mx-auto max-w-[1197px] px-5 ">
          <TextImageBlock src="/AboutGradient/1.jpg" width={369} height={348}>
            <p>
              Smile Art Lab co-founders Riccardo Borgonvo and Yannick Roulet
              both hail from Europe. Ricky is from Meda, a small town near Como
              in Italy and Yannick is from Aix-en-Provence in the south of
              France. They both moved to Australia and met while working
              together in Sydney. They soon became fast friends and decided to
              build a business together.
            </p>
          </TextImageBlock>
          <div className="mt-20 grid gap-6">
            <p>
              Ricky has extensive experience providing high-quality restorations
              such as veneers, crowns, bridges and complex implants cases. He
              thrives in an environment that pushes him to innovate and
              continually learn new things.
            </p>
            <p>
              Yannick has a passion for new and improved technologies,
              specialising in digital dentistry. He is a great asset to the
              dental community with his consistence for keeping up to date with
              the latest restorative practices and material innovations.
            </p>
            <p>
              Between the two of them, Ricky and Yannick have a wealth of
              experience working across a number of laboratory settings. Opening
              Smile Art Lab was their way of giving back to the dental community
              by combining their skills and knowledge to provide a quality
              service.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutGradient;
