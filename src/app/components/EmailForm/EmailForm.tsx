"use client";
// Используйте строку вместо объекта RegExp валидационной схемы

// components/SimpleForm.tsx
import { Formik, Form } from "formik";
import CustomField from "../CustomField/CustomField";

interface SimpleFormProps {
  data: string[];
  type?: string[] | string;
  placeholder: string[] | string;
  formClassName?: string;
  inputClassName?: string;
  children?: React.ReactNode;
}

const EmailForm = ({
  data,
  type,
  placeholder,
  formClassName,
  inputClassName,
  children,
}: SimpleFormProps) => {
  const initialValues = Object.fromEntries(data.map((key) => [key, ""]));

  const aaa = Object.keys(initialValues);

  const handleSubmit = (value: typeof initialValues) => {
    console.log(value);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validateOnChange
    >
      <Form className={`${formClassName}`}>
        {data.map((value, index) => (
          <CustomField
          id="email-input-two"
            key={index}
            className={`${inputClassName}`}
            type={`${type}`}
            name={`${value}`}
            placeholder={`${placeholder}`}
          />
        ))}
        {children}
      </Form>
    </Formik>
  );
};

export default EmailForm;
