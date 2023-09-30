import Link from "next/link";

interface IBtn {
  className?: string;
  text?: string;
  children?: React.ReactNode;
  elemType?: "link" | "button";
  btnType?: "button" | "submit";
  href?: string;
}

const Btn = ({ className, text, children, elemType, btnType, href }: IBtn) => {
  if (elemType == "button") {
    return (
      <button
        className={`btn ${className && className}`}
        type={btnType}
        title="Button"
      >
        {!text && "Work With Us"}
        <span>{text}</span>
        {children}
      </button>
    );
  } else {
    return (
      <Link className={`btn ${className}`} href={href || "/"}>
        {!text && "Work With Us"}
        <span>{text}</span>
        {children}
      </Link>
    );
  }
};

export default Btn;
