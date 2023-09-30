"use client";

import { Formik, Form } from "formik";
import { object, string } from "yup";
import Btn from "../Btn/Btn";
import CustomField from "../CustomField/CustomField";
import { useEffect } from "react";

const loginSchema = object({
  login: string().required("Name is required"),
  password: string().required("Password is required"),
});

const Popup: React.FC = () => {
  //----------------------------------------------
  useEffect(() => {
    document.addEventListener("click", (e: any) => {
      const target = e.target;
      const html = document.documentElement;

      if (html.classList.contains("popup-open")) {
        if (!target.closest(".popup")) {
          html.classList.remove("popup-open");
        }
      }
      if (target.closest(".TopLink" && '[href="#"]')) {
        html.classList.add("popup-open");
      }
    });
  }, []);

  //----------------------------------------------

  const initialValues = {
    login: "",
    password: "",
  };

  const handleSubmit = (values: typeof initialValues) => {
    console.log(values);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 top-0 -z-50 opacity-0 transition-all duration-500 group-[.popup-open]:z-50 group-[.popup-open]:block group-[.popup-open]:opacity-100">
      <div className="popup absolute left-1/2 top-1/2 grid w-full max-w-[800px] -translate-x-1/2 -translate-y-1/2 gap-5 rounded-[60px] bg-white p-5">
        <div className="flex items-center justify-between gap-1.5 p-[20px]">
          <h6 className="title">Rx Form</h6>
          <button
            onClick={() =>
              document.documentElement.classList.remove("popup-open")
            }
            className="flex items-center justify-center text-center text-5xl font-bold"
            type="button"
            title="Close Popup"
          >
            X
          </button>
        </div>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={loginSchema}
          validateOnChange
        >
          <Form className="grid gap-5">
            <div>
              <CustomField type="text" name="login" />
            </div>
            <div>
              <CustomField type="password" name="password" />
            </div>

            <Btn
              elemType="button"
              btnType="submit"
              className="mx-auto"
              text="Login"
            />
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Popup;
