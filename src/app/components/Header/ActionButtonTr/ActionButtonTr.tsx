import Link from "next/link";

interface IActionButtonTr {
  bc?: string;
}

const ActionButtonTr = ({ bc }: IActionButtonTr) => {
  return (
    <Link
      href={"/"}
      className={`Action-btn w-full max-w-[170px] whitespace-nowrap rounded-full border-[3px] border-black bg-transparent px-[31px] py-[10px] text-base font-bold transition-all hover:scale-[1.1] hover:text-emerald-400 ${
        bc == "bottom" && "border-white"
      }`}
      id="smile-btn"
    >
      Smile Design
    </Link>
  );
};

export default ActionButtonTr;
