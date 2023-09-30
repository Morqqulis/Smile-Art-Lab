import { merry } from "@/app/layout";

interface ISimpleBlock {
  title: string;
  text: string[];
  children?: React.ReactNode;
}

const SimpleBlock = ({ title, text, children }: ISimpleBlock) => {
  return (
    <section className="SimpleBlock py-24 mobile:py-20 middle:py-14">
      <div className="mx-auto max-w-[1200px] px-5">
        <h3 className={`title ${merry.className} mb-12 text-center`}>
          {title}
        </h3>
        <div className="mx-auto grid max-w-[863px] gap-5">
          {text.map((txt, i) => (
            <p className="" key={i}>
              {txt}
            </p>
          ))}
        </div>
        {children}
      </div>
    </section>
  );
};

export default SimpleBlock;
