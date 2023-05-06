import React from "react";
import { useField } from "formik";
import "../FormikInput/style.css";

type FormikSelectPropsType = {
  label?: string;
  name?: any;
  value?: string;
  type?: string;
  options: any;
};

const FormikSelect = ({
  label,
  name,
  value,
  type,
  options,
}: FormikSelectPropsType) => {
  const [field, meta, helpers] = useField(name);

  const { setValue } = helpers;

  const onChangeHandler = (event: any) => {
    const value = event.target.value;

    return setValue(value);
  };

  return (
    <>
      <label className="input-label" htmlFor="select">
        {label}
      </label>
      <select
        {...field}
        id="select"
        className="input"
        onChange={onChangeHandler}
      >
        {options.map((option: any) => {
          return <option value={option.value}>{option.label}</option>;
        })}
      </select>
    </>
  );
};

export default FormikSelect;
