import "./globals.css";
import { Merriweather, Merriweather_Sans } from "next/font/google";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import dynamic from "next/dynamic";

// const montserrat = Montserrat({ subsets: ['latin'], display: 'swap' });
const merri = Merriweather_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "700", "800"],
});
export const merry = Merriweather({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "700"],
});

// const metadata: Metadata = {
// 	title: 'Smile Art Lab',
// 	description: 'Smile Art Lab Next.js Web App',
//
// };

const ThePopup = dynamic(() => import("./components/Popup/Popup"));

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="group h-full " lang="en">
      <body
        className={`${merri.className} relative h-full bg-white font-light text-black group-[.menu-open]:overflow-hidden group-[.popup-open]:overflow-hidden `}
      >
        <div className="wrapper flex min-h-full flex-col ">
          {/* <Header /> */}
          <Header />
          <main className="main grow">{children}</main>
          {/* <Footer /> */}
          <Footer />
        </div>
        <ThePopup />
      </body>
    </html>
  );
}
