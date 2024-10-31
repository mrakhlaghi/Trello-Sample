import Select from "react-select";
import { useForm, Controller } from "react-hook-form";
import "./index.css";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
type RSelectFormProps = {
  label?: string;
  name?: string;
  control?: any;
  errors?: any;
  required?: boolean;
  searchParamsLabel?: string;
  options?: { value: string | number; label: string }[];
  children?: any;
  wrapperClass?: string;
  className?: string;
};

const MultiRHFSelect = ({
  label = "",
  name = "",
  control,
  errors,
  required,
  searchParamsLabel = "",
  children,
  wrapperClass = "",
  className = "",
  options = [],
}: RSelectFormProps) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectDefaultValue, setSelectDefaultValue] = useState<{
    label: string;
    value: string | number;
  } | null>(null);

  const getDefaultValue = () => {
    const defaultOption =
      options.find(
        (option) => option.value == searchParams.get(searchParamsLabel)
      ) || options[0];
    console.log("🚀 ~ getDefaultValue ~ defaultOption:", defaultOption);

    setSelectDefaultValue(defaultOption);
  };

  useEffect(() => {
    getDefaultValue();
  }, []);

  useEffect(() => {
    getDefaultValue();
  }, [searchParams]);

  const { control: internalControl } = useForm({
    defaultValues: {
      value: selectDefaultValue,
    },
  });

  // { value: string; label: string }
  const handleChange = (e: { value: string; label: string }) => {
    if (searchParamsLabel) {
      searchParams.set(searchParamsLabel, e.value);
      setSearchParams(searchParams);
    }
    return e;
  };

  // useEffect(() => {
  //   if (selectDefaultValue) {
  //     setValue(label, selectDefaultValue);
  //   }
  // }, [selectDefaultValue, setValue, label]);

  return (
    <div
      className={`w-full flex  justify-start items-center gap-x-2  ${wrapperClass}`}
    >
      <div className={`  ${className} `}>
        <label
          htmlFor={label}
          className="block text-nowrap  text-xs sm:text-sm lg:text-base text-secondary-700 "
        >
          {label} {required && <span className="text-error">*</span>}
        </label>
        <div className="w-full flex-wrap flex md:flex-nowrap justify-start items-start gap-x-2 gap-y-5">
          <Controller
            rules={{ required: required ?? false }}
            name={name}
            control={control ? control : internalControl}
            // defaultValue={selectDefaultValue}
            render={({ field }) => (
              <Select
                {...field}
                id={label}
                options={options}
                defaultValue={selectDefaultValue}
                classNamePrefix={"select"}
                // menuIsOpen
                getOptionValue={(option) => option.value}
                className=" w-full  text-xs  lg:text-sm "
                onChange={(e) => {
                  field.onChange(e);
                  handleChange(e);
                }}
                value={field.value}
              />
            )}
          />

          {errors && name && errors[name] && (
            <span className="absolute -bottom-6 right-2 text-error block text-xs mt-2">
              {errors[name].message ?? ""}
            </span>
          )}
          {children}
        </div>
      </div>
    </div>
  );
};

export default MultiRHFSelect;
