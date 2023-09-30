interface IHero {
  num?: string;
  title: string;
  text: string;
  bgUrl?: string;
}
import { merry } from "@/app/layout";

const Hero = ({ num, title, text, bgUrl }: IHero) => {
  return (
    <section>
      <div
        className={`hero mmobile:group-[.home]:bg-[url('/hero/bg-1.webp')] ${bgUrl} relative flex flex-col rounded-b-[50px] bg-bottom bg-no-repeat text-white mobile:grid mobile:grid-cols-1 mobile:gap-12 mobile:bg-[#171818] `}
      >
        <div
          className={`hidden min-h-[543px] rounded-b-[50px] bg-[url('/hero/bg-1.webp')] bg-auto bg-bottom mobile:group-[.home]:block`}
        ></div>

        <div className=" container mx-auto grid max-w-[1400px] grow px-[25px]">
          <div className="hero-content mb-[65px] h-fit max-w-[920px] self-end overflow-hidden rounded-[50px] bg-[#00000080] px-10 py-[45px]">
            <h1
              className={`text-[44px] font-bold leading-normal text-gg ${merry.className} mb-4 tablets:text-4xl mobile:text-3xl`}
            >
              {title}
            </h1>
            <div className="hero-text mb-[30px] max-w-[802px] text-[18px] leading-normal mobile:text-[16px]">
              {num === "1" ? (
                <p>
                  Smile Art Lab is Sydney’s premier dental laboratory, catering
                  to dentists looking for <br /> a bespoke, turnkey service for
                  all their patient’s needs. We supply state-of-the-art
                  products, easy-to-navigate services and quality design and we
                  do it all with a smile. <br /> (Crowns, Bridges, Veneers,
                  Implants, and Smile Design)
                </p>
              ) : (
                <p>{text}</p>
              )}
            </div>
            <button className="btn" type="button">
              Work With Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
