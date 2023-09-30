import Link from "next/link";
import Logo from "../Logo/Logo";
import NavLink from "../Header/NavLink/NavLink";
import Gradient from "../Gradient/Gradient";

const Footer = () => {
  const footerMenuText = {
    text: [
      "Home",
      "About Us",
      "Products/Services",
      "Send a Case",
      "Design Service",
      "Blog",
      "Smile Design",
    ],
    links: ["/", "/About", "/Products", "/Case", "/Design", "/Blog", "/Design"],
  };

  return (
    <footer className="relative whitespace-nowrap rounded-t-[80px] bg-[rgba(233,_232,_228,_0.60)] p-[50px] pt-[70px] mobile:pt-8 small:p-[20px]">
      <Gradient className="absolute right-[5%] top-[-80%] -z-[1] h-full max-h-[470px] w-full max-w-[470px]" />
      <div className="footer-top mb-[40px] flex items-center justify-between mobile:grid mobile:justify-center mobile:justify-items-center mobile:gap-8">
        <div className="order-[-2]">
          <Logo fill="black" />
        </div>
        <div className="flex flex-col gap-2 text-base font-normal text-black">
          <span>© 2023 Smile Art Lab. All rights reserved.</span>
          <div className="flex items-center justify-evenly gap-[25px] mobile:order-3">
            <Link
              className="relative text-base font-medium text-black transition-transform before:absolute before:bottom-[-5px] before:left-[50%] before:h-[2px] before:w-0 before:translate-x-[-50%] before:bg-black before:transition-[width] hover:scale-[1.2] hover:before:w-full"
              href={"/Terms"}
            >
              Terms & Conditions
            </Link>
            <Link
              className="relative text-base font-medium text-black transition-transform before:absolute before:bottom-[-5px] before:left-[50%] before:h-[2px] before:w-0 before:translate-x-[-50%] before:bg-black before:transition-[width] hover:scale-[1.2] hover:before:w-full"
              href={"/Privacy"}
            >
              Privacy Policy
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-2.5 mobile:order-[-1]">
          <Link
            className="flex h-[55px] w-[55px] items-center justify-center rounded-[20px] bg-gg transition-all duration-300 hover:scale-[1.1] hover:bg-black"
            href={"/"}
          >
            <svg
              className="soc-icon group fill-white transition-[fill]"
              width="17"
              height="33"
              viewBox="0 0 17 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M11.014 32.7276V18.0871H15.9263L16.6632 12.3797H11.014V8.73642C11.014 7.08452 11.4709 5.95878 13.8424 5.95878L16.8621 5.95753V0.852665C16.3399 0.784801 14.5473 0.629211 12.4609 0.629211C8.10416 0.629211 5.12148 3.28851 5.12148 8.17117V12.3797H0.194336V18.0871H5.12148V32.7276H11.014Z" />
            </svg>
          </Link>
          <Link
            className="flex h-[55px] w-[55px] items-center justify-center rounded-[20px] bg-gg duration-300 hover:scale-[1.1] hover:bg-black"
            href={"/"}
          >
            <svg
              className="soc-icon group fill-white transition-[fill]"
              width="35"
              height="35"
              viewBox="0 0 35 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M24.4535 0.652527H10.6901C5.09657 0.652527 0.545898 5.20319 0.545898 10.7967V24.5601C0.545898 30.1536 5.09657 34.7043 10.6901 34.7043H24.4535C30.047 34.7043 34.5977 30.1536 34.5977 24.5601V10.7967C34.5976 5.20319 30.0469 0.652527 24.4535 0.652527ZM31.1721 24.5601C31.1721 28.2706 28.164 31.2787 24.4535 31.2787H10.6901C6.97956 31.2787 3.97151 28.2706 3.97151 24.5601V10.7967C3.97151 7.08612 6.97956 4.07813 10.6901 4.07813H24.4535C28.164 4.07813 31.1721 7.08612 31.1721 10.7967V24.5601Z" />
              <path d="M17.5726 8.87067C12.7164 8.87067 8.76562 12.8215 8.76562 17.6776C8.76562 22.5337 12.7164 26.4846 17.5726 26.4846C22.4288 26.4846 26.3796 22.5338 26.3796 17.6776C26.3796 12.8214 22.4288 8.87067 17.5726 8.87067ZM17.5726 23.0591C14.6005 23.0591 12.1912 20.6497 12.1912 17.6777C12.1912 14.7056 14.6006 12.2963 17.5726 12.2963C20.5447 12.2963 22.954 14.7056 22.954 17.6777C22.954 20.6497 20.5446 23.0591 17.5726 23.0591Z" />
              <path d="M26.396 11.0473C27.5615 11.0473 28.5063 10.1025 28.5063 8.937C28.5063 7.77149 27.5615 6.82666 26.396 6.82666C25.2305 6.82666 24.2856 7.77149 24.2856 8.937C24.2856 10.1025 25.2305 11.0473 26.396 11.0473Z" />
            </svg>
          </Link>
        </div>
      </div>
      <div className="footer-bottom">
        <ul className="flex flex-wrap items-center justify-center gap-12 whitespace-nowrap mobile:gap-7">
          {footerMenuText.links.map((link, i) => (
            <li key={i}>
              <Link
                className="relative block text-base font-medium text-black transition-transform before:absolute before:bottom-[-5px] before:left-[50%] before:h-[2px] before:w-0 before:translate-x-[-50%] before:bg-black before:transition-[width] hover:scale-[1.2] hover:before:w-full"
                href={link}
              >
                {footerMenuText.text[i]}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
