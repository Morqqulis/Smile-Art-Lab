// components/CustomField.tsx
import { Field, FieldAttributes, useField } from "formik";

const CustomField = <V extends unknown>(props: FieldAttributes<V>) => {
  // useField hook is a useful hook to get access to the field's states when using custom components.
  // The meta object contains error, touched states for the specific field
  const [field, meta] = useField(props.name);
  return (
    <div className={`form-control relative z-10 grid gap-1 ${props.className}`}>
      <Field
        {...props}
        className={`block rounded-[131px] bg-[rgba(233,_232,_228,_0.60)] px-10 py-7 ${props.className}`}
      />
      {/* display the field has error and was already touched */}
      {meta.error && meta.touched && (
        <label className="label -order-1 pl-5" htmlFor={props.id}>
          <span className="label-text-alt text-sm text-red-600">
            {meta.error}
          </span>
        </label>
      )}
    </div>
  );
};
export default CustomField;
