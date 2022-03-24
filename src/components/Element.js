import React from "react";
import InputEmail from "./Elements/inputEmail";
import InputNumero from "./Elements/InputNumero";
import InputPassword from "./Elements/inputPassword";
import Select from "./Elements/select";

const Element = ({ id: { type, name, label, id, ordem, options, value, text } }) => {
  switch (type) {
    case "email":
      return (
        <InputEmail
          name={name}
          label={label}
          id={id}
          ordem={ordem}
        />
      );

    case "password":
      return (
        <InputPassword
          name={name}
          label={label}
          id={id}
          ordem={ordem}
        />
      );

    case "number":
      return (
        <InputNumero
          name={name}
          label={label}
          id={id}
          ordem={ordem}
        />
      );

    case "select":
      return (
        <Select
          name={name}
          label={label}
          id={id}
          ordem={ordem}
          options={options}
          value={value}
          text={text}
        />
      );

    default:
      break;
  }
  return null;
};

export default Element;
