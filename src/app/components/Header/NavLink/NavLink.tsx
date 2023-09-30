import Link from "next/link";

interface INavLink {
  href: string;
  text?: string;
}

const NavLink = ({ href, text }: INavLink) => {
  return (
    <Link
      className="NavLink relative text-base font-medium leading-normal transition-transform before:absolute before:bottom-[-5px] before:left-[50%] before:h-[2px] before:w-0 before:translate-x-[-50%] before:bg-black before:transition-[width] hover:scale-[1.2] hover:before:w-full tablets:block tablets:py-3 tablets:text-2xl small:text-xl"
      href={href}
    >
      {text}
    </Link>
  );
};

export default NavLink;
