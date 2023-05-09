import React from "react";
import { useField } from "formik";
import "./style.css";

type FormikInputPropsType = {
  label?: string;
  name?: any;
  value?: string | number;
  placeholder?: string;
  type?: string;
};

const FormikInput = ({
  label,
  name,
  value,
  placeholder,
  type,
}: FormikInputPropsType) => {
  const [field, meta, helpers] = useField(name);

  const { setValue } = helpers;

  const onChangeHandler = (event: any) => {
    const value = event.target.value;

    return setValue(value);
  };

  return (
    <div className="input-field">
      <label className="input-label" htmlFor="title">
        {label}
      </label>
      <input
        {...field}
        value={field.value}
        onChange={onChangeHandler}
        type={type}
        placeholder={placeholder}
        className="input"
      />
    </div>
  );
};

export default FormikInput;
