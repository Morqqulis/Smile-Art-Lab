import Image from "next/image";
import Title from "../Title/Title";

interface ITextImageBlock {
  src: string;
  children?: React.ReactNode;
  width: number;
  height: number;
  className?: string;
}

const TextImageBlock = ({
  children,
  src,
  width,
  height,
  className,
}: ITextImageBlock) => {
  return (
    <div className="TextImageBlock">
      <div
        className={`relative z-10 flex items-center justify-between  gap-3 tablets:flex-col mobile:mb-12 ${className}`}
      >
        <div className="grid min-h-[350px] w-full max-w-[65%] gap-5 rounded-[60px] bg-[rgba(255,_255,_255,_0.60)] px-10 py-14 text-[18px] leading-9 tablets:max-w-[80%] mobile:max-w-full mobile:py-10 middle:min-h-0 middle:px-8 middle:py-8 middle:leading-7">
          {children}
        </div>
        <div className="relative flex h-[348px] min-w-[369px] items-center justify-center rounded-[60px] tablets:h-auto  tablets:w-full mobile:min-w-[280px]">
          <Image
            className="tablets:min-w-auto rounded-[60px] tablets:w-full tablets:max-w-[65%] mobile:w-full mobile:max-w-[90%] middle:max-w-full mmobile:min-w-[369px]"
            src={`${src}`}
            alt="Teeth Image"
            width={width}
            height={height}
          />
        </div>
      </div>
    </div>
  );
};

export default TextImageBlock;
