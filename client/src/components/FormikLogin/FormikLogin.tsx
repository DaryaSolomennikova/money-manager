import React from "react";
import { useField } from "formik";
// import "./style.css";

type FormikLoginPropsType = {
  label?: string;
  name?: any;
  value?: string;
  placeholder?: string;
  type?: string;
};

const FormikLogin = ({
  label,
  name,
  value,
  placeholder,
  type,
}: FormikLoginPropsType) => {
  const [field, meta, helpers] = useField(name);

  const { setValue } = helpers;

  const onChangeHandler = (event: any) => {
    const value = event.target.value;

    return setValue(value);
  };

  return (
    <div className="form">
      <label className="name" htmlFor={name}>
        {label}
      </label>
      <input
        className="field"
        type={type}
        placeholder={placeholder}
        value={field.value}
        onChange={onChangeHandler}
      />
    </div>
  );
};

export default FormikLogin;
