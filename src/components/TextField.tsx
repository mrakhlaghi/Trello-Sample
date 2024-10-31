import clsx from "clsx";
import { useState } from "react";

function TextField({
  label,
  name,
  register,
  // searchParamsLabel,
  validationSchema = {},
  type = "text",
  required,
  errors,
  wrapperClass,
  labelClass,
  inputClass,
  placeholder,
  children,
}: {
  label?: string;
  name?: string;
  register?: any;
  searchParamsLabel?: string;
  validationSchema?: object;
  type?: string;
  required?: boolean;
  errors?: any | undefined;
  wrapperClass?: string;
  labelClass?: string;
  inputClass?: string;
  placeholder?: string;
  children?: any;
}) {
  const [value, setValue] = useState<string | null>("");

  const handleChange = (e: any) => {
    setValue(e.target.value);

   
    return e;
  };

  return (
    <>
      <div
        className={clsx(
          " relative flex flex-col justify-center items-start gap-y-2 ",
          wrapperClass
        )}
      >
        <label
          className={` block text-secondary-700 text-nowrap ${labelClass} `}
          htmlFor={name}
        >
          {label} {required && <span className="text-error">*</span>}
        </label>
        <input
          {...register(name, validationSchema)}
          id={name}
          className={`textField__input ${inputClass} `}
          type={type}
          value={value ?? ""}
          autoComplete="off"
          placeholder={placeholder}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        {errors && name && errors[name] && (
          <span className="absolute -bottom-6 right-2 text-error block text-xs mt-2">
            {errors[name].message ?? ""}
          </span>
        )}
      </div>
      {children}
    </>
  );
}
export default TextField;
