import React from "react";

const InputEmail = ({ name, label, id, ordem }) => {

  return (
    <>
      <div>
        <label>{label}</label>
        <input name="email" type="email" id="1"/>
      </div>
    </>
  );
};

export default InputEmail;
