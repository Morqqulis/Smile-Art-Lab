import Link from "next/link";

interface IActionButtonBl {
  bc?: string;
}

const ActionButtonBl = ({ bc }: IActionButtonBl) => {
  return (
    <Link
      href={"/Contact"}
      className={`Action-btn px-[43px] py-[13px] ${
        bc == "menu" && "border-[3px] border-white"
      } hover:text-emerald-400" w-full max-w-[170px] whitespace-nowrap rounded-full bg-black text-base font-bold transition-all hover:scale-[1.1] 1250:text-white`}
      id="contact-btn"
    >
      Contact Us
    </Link>
  );
};

export default ActionButtonBl;
