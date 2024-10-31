import clsx from "clsx";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

type RHFSelectProps = {
  name: string;
  label: string;
  searchParamsLabel?: string;
  register: any;
  validationSchema?: any;
  options: any;
  wrapperClass?: string;
  labelClass?: string;
  selectClass?: string;
  required?: boolean;
};
function RHFSelect({
  name,
  label,
  searchParamsLabel,
  register,
  validationSchema,
  options,
  required = false,
  wrapperClass,
  labelClass,
  selectClass,
}: RHFSelectProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [value, setValue] = useState(options[0].value);

  useEffect(() => {
    if (searchParamsLabel) {
      if (
        searchParams.get(searchParamsLabel) == null ||
        searchParams.get(searchParamsLabel)?.includes("همه")
      ) {
        searchParams.delete(searchParamsLabel);
        setSearchParams(searchParams);
        setValue("")
      } else {
        setValue(searchParams.get(searchParamsLabel))
      }
    }
  }, []);

  // { value: string; label: string }
  const handleChange = (e: any) => {
    setValue(e.target.value);

    if (searchParamsLabel) {
      if (e.target.value == null || e.target.value.includes("همه")) {
        searchParams.delete(searchParamsLabel);
        setSearchParams(searchParams);
        setValue("")
      } else {
        searchParams.set(searchParamsLabel, e.target.value);
        setSearchParams(searchParams);
      }
    }
    return e;
  };

  return (
    <div className={clsx("", wrapperClass)}>
      <label
        htmlFor={name}
        className={`mb-2 block  text-xs sm:text-sm lg:text-base text-secondary-700 text-nowrap ${labelClass} `}
      >
        {label} {required && <span className="text-error">*</span>}
      </label>
      <select
        {...register(name, validationSchema)}
        id={name}
        className={`textField__input text-xs  lg:text-sm ${selectClass} `}
        value={value ?? ""}
        onChange={(e) => {
          handleChange(e);
          // register.onChange(e);
        }}
        // border-transparent   outline outline-offset-4  outline-neutral-700
      >
        {options.map((option: any) => (
          <option className="p" key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
export default RHFSelect;
