import ContactForm from "../components/ContactForm/ContactForm";
import Title from "../components/Title/Title";
import Image from "next/image";
import Txt from "../components/Txt/Txt";
import SimpleForm from "../components/EmailForm/EmailForm";
import Btn from "../components/Btn/Btn";
import { Metadata, NextPage } from "next";

export const metadata: Metadata = {
  title: "Contact - Smile Art Lab",
  description: "Smile Art Lab Contact Page",
  keywords: "Smile Art Lab",
};

const Contact: NextPage = () => {
  return (
    <>
      <section className="mb-28">
        <div className="mb-10 rounded-b-[80px] bg-[rgba(233,_232,_228,_0.40)] py-20 text-center tablets:py-14">
          <Title title="Contact Us" />
        </div>
        <div className="mx-auto max-w-[1130px] px-[15px]">
          <ul className="mb-20 flex items-center justify-between gap-2.5 tablets:flex-wrap tablets:justify-center tablets:gap-5">
            <li className="small:grid small:text-center">
              <span className="pr-1 font-bold">Address:</span>
              301 10-12 Clarke Street, Crow Nest, NSW, 2065
            </li>
            <li className="small:grid small:text-center">
              <span className="pr-1 font-bold">E-mail:</span>
              Info@smileartlab.com
            </li>
            <li className="small:grid small:text-center">
              <span className="pr-1 font-bold">Phone Number:</span>
              0405 995 310
            </li>
          </ul>
          <span className="mx-auto mb-20 block h-1 w-full max-w-[480px] rounded-[96px] bg-[#13110D]"></span>
          <div className="mx-auto max-w-[930px] pb-20 mobile:pb-14">
            <ContactForm />
          </div>
        </div>
        <div className="mobile:pb-18 mx-auto rounded-[95px] bg-[#F5F4F2] p-[50px] pb-24 tablets:px-5 mobile:pb-10">
          <Image
            className="mx-auto mb-20 h-auto w-full rounded-[60px] mobile:mb-12"
            src={"/Contact/map.jpg"}
            alt="Map Image"
            width={"1440"}
            height={"615"}
          />
          <div className="mx-auto flex max-w-[1250px] items-center justify-between gap-2.5 bg-[#F5F4F2] px-[15px] tablets:flex-col tablets:gap-5">
            <Txt text={[`Sign up to get our latest offers and updates.`]} />
            <div className="w-full max-w-[800px] mobile:max-w-full">
              <SimpleForm
                data={["email"]}
                formClassName="flex items-center gap-2.5 mobile:flex-col mobile:w-full mobile:gap-5"
                inputClassName="max-w-[500px] w-full mobile:max-w-full"
                type={"email"}
                placeholder="Your Email"
              >
                <Btn
                  className="whitespace-nowrap px-8 mobile:px-12"
                  elemType="button"
                  btnType="submit"
                />
              </SimpleForm>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
