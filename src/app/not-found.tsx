import Link from "next/link";
import Title from "./components/Title/Title";
import Txt from "./components/Txt/Txt";
import Btn from "./components/Btn/Btn";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home - Smile Art Lab",
  description: "Smile Art Lab Home Page",
  manifest: "/manifets.ts",
  robots: "/robots.txt",
  viewport: "width=device-width",
  keywords: "Smile Art Lab Error",
};
export default function NotFound() {
  return (
    <section className="flex min-h-[65dvh] flex-col items-center justify-center py-20">
      <div className="mx-auto grid gap-10 px-5 text-center">
        <Title title="Not Found" />
        <Txt text={["Could not find requested resource"]} />
        <Btn className="mx-auto" text="Return Home" />
      </div>
    </section>
  );
}
