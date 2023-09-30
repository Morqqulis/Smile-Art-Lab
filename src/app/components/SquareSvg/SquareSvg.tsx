import Image from "next/image";

interface ISquareSvg {
  src: string;
  width: number;
  height: number;
  className?: string;
}

const SquareSvg = ({ src, width, height, className }: ISquareSvg) => {
  return (
    <div
      className={`flex  h-[228px] min-w-[228px] items-center justify-center rounded-[50px] bg-gg ${className}`}
    >
      <div className="flex items-center justify-center">
        <Image src={src} alt="Square Icon" width={width} height={height} />
      </div>
    </div>
  );
};

export default SquareSvg;
