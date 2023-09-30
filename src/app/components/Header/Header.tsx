import Link from "next/link";
import TopLink from "./TopLink/TopLink";
import Logo from "../Logo/Logo";
import NavLink from "./NavLink/NavLink";
import Burger from "./Burger/Burger";
import ActionButtonTr from "./ActionButtonTr/ActionButtonTr";
import ActionButtonBl from "./ActionButtonBl/ActionButtonBl";

const Header = () => {
  return (
    <header className="z-50 bg-gg text-white">
      <div className="header-top bg-white px-5 text-black 1250:flex 1250:justify-between">
        <div className="header-actions hidden items-center gap-2.5 1250:flex mobile:hidden">
          <ActionButtonTr />
          <ActionButtonBl />
        </div>
        <ul className="mx-auto flex max-w-[1390px] items-center justify-end gap-10 py-[15px] 1250:mx-0 1250:max-w-fit tablets:gap-6 mobile:w-full mobile:max-w-full mobile:justify-between mobile:gap-5 small:gap-3">
          <li>
            <TopLink text="Log In" href="#" />
          </li>
          <li>
            <TopLink text="RX Form" href="/Contact" />
          </li>
          <li>
            <TopLink text="(02) 9119 3276" href="tel:0291193276" />
          </li>
        </ul>
      </div>
      <nav className="header-bottom z-20 mx-auto flex max-w-[1400px] items-center justify-between gap-2.5 px-[25px] py-2.5">
        <Logo fill="white" />
        <div className="items-center transition-[left] duration-700 tablets:absolute tablets:left-[-200%] tablets:top-[149px] tablets:h-[100vh] tablets:w-full tablets:flex-col tablets:overflow-scroll tablets:bg-black tablets:pb-20 tablets:pt-10 tablets:text-center tablets:group-[.menu-open]:left-0 small:top-[124px]">
          <ul className="flex gap-[35px]  whitespace-nowrap tablets:flex-col tablets:gap-5 ">
            <li className="tablets:w-full">
              <NavLink text="Home" href="/" />
            </li>
            <li className="tablets:w-full">
              <NavLink text="About Us" href="/About" />
            </li>
            <li className="tablets:w-full">
              <NavLink text="Products/Services" href="/Products" />
            </li>
            <li className="tablets:w-full">
              <NavLink text="Send a Case" href="/Case" />
            </li>
            <li className="tablets:w-full">
              <NavLink text="Design Service" href="/Design" />
            </li>
            <li className="tablets:w-full">
              <NavLink text="Blog" href="/Blog" />
            </li>
          </ul>
          <div className="header-actions mt-10 hidden items-center justify-center gap-2.5 1250:hidden tablets:flex tablets:flex-col tablets:gap-5 tablets:pb-[120px]">
            <ActionButtonTr bc="bottom" />
            <ActionButtonBl bc="menu" />
          </div>
        </div>
        <div className="header-actions flex items-center gap-2.5 1250:hidden">
          <ActionButtonTr bc="bottom" />
          <ActionButtonBl />
        </div>
        <Burger />
      </nav>
    </header>
  );
};

export default Header;
