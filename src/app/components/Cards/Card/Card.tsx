import { merry } from "@/app/layout";
import Image from "next/image";

interface ICard {
  heading: string;
  text?: string;
  imageUrl: string;
  width: number;
  height: number;
  className?: string;
  children?: React.ReactNode;
  textNum?: string;
}

const Card = ({
  heading,
  text,
  imageUrl,
  width,
  height,
  className,
  textNum,
  children,
}: ICard) => {
  return (
    <div
      className={` card group max-w-[400px] rounded-[60px] bg-white px-5 py-10 pb-[95px] shadow-card middle:px-6 middle:py-10 small:pb-[45px]  ${className}`}
    >
      <div
        className={`mb-12 flex h-[90px] w-[90px] items-center justify-center rounded-[32px] bg-[#F5F4F2] group-[.design-card]:h-auto group-[.design-card]:w-auto group-[.design-card]:bg-transparent mobile:mb-8 middle:mb-6`}
      >
        <Image src={imageUrl} alt="Card Icon" width={width} height={height} />
      </div>
      <div
        className={`heading mb-[46px] mobile:mb-6 middle:mb-4 ${merry.className}`}
      >
        {heading}
      </div>
      <div className={`${children && "grid gap-3"}`}>
        <p className="flex items-center gap-1">
          {textNum && <span className="text-lg font-bold"></span>}
          {text}
        </p>
        {children}
      </div>
    </div>
  );
};

export default Card;
