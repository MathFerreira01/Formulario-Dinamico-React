import React from "react";

const Select = ({ name, label, id, ordem, options, value, text }) => {
  return (
    <>
      <label>{label}</label>
      <select name="selecao" type="select" id="4">
        <option>Select menu</option>
          {options.map((option, id) => 
              <option value={option.value} key={id}>{option.text}</option>
          )}
      </select>
    </>
  );
};

export default Select;
