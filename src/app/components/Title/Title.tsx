import { merry } from "@/app/layout";

interface ITitle {
  title: string;
  className?: string;
}

const Title = ({ title, className }: ITitle) => {
  return <h3 className={`${merry.className} title ${className}`}>{title}</h3>;
};

export default Title;
