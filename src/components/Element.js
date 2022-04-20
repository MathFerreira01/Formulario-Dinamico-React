import React from "react";
import InputEmail from "./Elements/inputEmail";
import FormElement from '../formElement.json'

function Element({ type, name, label, id, ordem, options, value, text }) {
  switch (type) {
    case "email":
    case "password":
    case "number":
    case "select":
      return (
        <InputEmail
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
}

export default Element;
