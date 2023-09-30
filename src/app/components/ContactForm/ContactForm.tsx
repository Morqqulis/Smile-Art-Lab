"use client";

import { Formik, Form } from "formik";
import { object, string } from "yup";
import CustomField from "../CustomField/CustomField";
import { useRouter } from "next/navigation";
const contactFormSchema = object({
  name: string().required("Name is required"),
  lastName: string().required("Last Name is required"),
  email: string()
    .required("Email is required")
    .matches(/[@]/, 'Please use "@" symbol')
    .email("Please enter a valid email"),
  phone: string()
    .required("Phone is required")
    .matches(/^[0-9]+$/, "Please enter a numbers"),
  message: string().required("Message is required"),
});

const initialValues = {
  name: "",
  lastName: "",
  email: "",
  phone: "",
  message: "",
};

const ContactForm = () => {
  const navigate = useRouter();

  const handleSubmit = (values: typeof initialValues) => {
    navigate.push("/Thanks");
    console.log(values);
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={contactFormSchema}
        validateOnChange
      >
        <Form>
          <div className="mb-2.5 grid grid-cols-2 gap-2.5 middle:grid-cols-1">
            <CustomField name="name" placeholder="First Name" id="name-id" />
            <CustomField
              name="lastName"
              placeholder="Last Name"
              id="lastName-id"
            />
          </div>
          <div className="mb-20 grid gap-2.5">
            <CustomField
              name="email"
              placeholder="E-mail Address *"
              id="email-id"
            />
            <CustomField
              id="phone-id"
              name="phone"
              placeholder="Phone Number"
              pattern="[0-9]*"
            />
            <CustomField
              id="message-id"
              className={`min-h-[240px] rounded-[44px]`}
              name="message"
              placeholder="Message"
              as="textarea"
            />
          </div>
          <button className="btn mx-auto" type="submit" title="submit button">
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
