import React from "react";

const InputPassword = ({name, label, id, ordem}) => {
  

  return (   
      <div>
        <label>{label}</label>
        <input name={name} type="password" id={id} />
      </div>
  );
};

export default InputPassword;