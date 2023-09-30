interface INumHeading {
  num: number;
  heading: string;
  className?: string;
  text?: string;
}

const NumHeading = ({ num, heading, className, text }: INumHeading) => {
  return (
    <div className={`flex items-center gap-[20px] mobile:gap-5`}>
      <span className="flex min-h-[64px] min-w-[64px] items-center justify-center rounded-[20px] border-[3px] border-gg text-center text-2xl font-bold text-gg">{`${num}.`}</span>
      <div>
        <span
          className={`text-2xl font-bold text-[#13110D] mobile:text-xl small:text-lg ${className}`}
        >
          {heading}
        </span>
        <span>{text}</span>
      </div>
    </div>
  );
};

export default NumHeading;
