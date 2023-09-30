import Link from "next/link";
import Card from "./Card/Card";

interface ICardData {
  heading: string[];
  text: string[];
  imageUrl: string[];
  width: number[];
  height: number[];
  linkText?: string;
  linkSvg?: string;
}
const Cards = ({ data }: { data: ICardData }) => {
  return (
    <div className="cards rounded-[95px] bg-[#e9e8e480] py-24 middle:py-16 small:py-12">
      <div className="middle:px2.5 container mx-auto max-w-[1265px] px-5">
        <div className="mb-[100px] grid gap-2.5 mobile:mb-[60px]">
          <div className="flex justify-center gap-2.5 tablets:grid tablets:grid-cols-2 tablets:justify-items-center mobile:grid-cols-1 ">
            <Card
              className={`shadow-[35px_35px_60px_0px_rgba(0,0,0,0.15)] mobile:grid mobile:max-w-[85%] middle:max-w-full`}
              imageUrl={data.imageUrl[0]}
              heading={data.heading[0]}
              text={data.text[0]}
              width={data.width[0]}
              height={data.height[0]}
            />
            <Card
              className={`shadow-[35px_35px_60px_0px_rgba(0,0,0,0.15)] mobile:grid mobile:max-w-[85%] middle:max-w-full`}
              imageUrl={data.imageUrl[1]}
              heading={data.heading[1]}
              text={data.text[1]}
              width={data.width[1]}
              height={data.height[1]}
            />
          </div>
          <div className="flex justify-center gap-2.5  tablets:grid tablets:grid-cols-2 tablets:justify-items-center mobile:grid-cols-1 ">
            <Card
              className={`shadow-[35px_35px_60px_0px_rgba(0,0,0,0.15)] mobile:grid mobile:max-w-[85%] middle:max-w-full`}
              imageUrl={data.imageUrl[2]}
              heading={data.heading[2]}
              text={data.text[2]}
              width={data.width[2]}
              height={data.height[2]}
            />
            <Card
              className={`shadow-[35px_35px_60px_0px_rgba(0,0,0,0.15)] mobile:grid mobile:max-w-[85%] middle:max-w-full`}
              imageUrl={data.imageUrl[3]}
              heading={data.heading[3]}
              text={data.text[3]}
              width={data.width[3]}
              height={data.height[3]}
            />
            <Card
              className={` shadow-[35px_35px_60px_0px_rgba(0,0,0,0.15)] tablets:col-span-2 tablets:grid tablets:max-w-[85%] tablets:justify-items-center tablets:text-center mobile:col-auto mobile:justify-items-start middle:max-w-full `}
              imageUrl={data.imageUrl[4]}
              heading={data.heading[4]}
              text={data.text[4]}
              width={data.width[4]}
              height={data.height[4]}
            />
          </div>
        </div>
        <Link
          className={`btn mx-auto flex max-w-[280px] items-center justify-center whitespace-nowrap ${
            data.linkSvg && "gap-2.5"
          }`}
          href={"/"}
        >
          <span>{!data.linkText && `Work With Us`}</span>
        </Link>
      </div>
    </div>
  );
};

export default Cards;
