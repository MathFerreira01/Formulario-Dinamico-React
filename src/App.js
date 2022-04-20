import { type } from "@testing-library/user-event/dist/type";
import React, { useState, useEffect } from "react";

import Element from "./components/Element";

import FormJson from "./formElement.json";
console.log(FormJson);

function App() {
  const [elementos, setElementos] = useState(FormJson);
  const { titulo, campos } = elementos;
  useEffect(() => {
    setElementos(FormJson);
  }, []);

  if(type === 'select') {
    return 
  }

  return (
    <div>
      <h3>{titulo}</h3>
      <form>
        {campos ? campos.map((campo, index) => (
              <div key={index}>
                <label>{campo.label}</label>
                <input
                  name={campo.name}
                  type={campo.type}
                  ordem={campo.ordem}
                  id={campo}
                /> 
                {campo.options?.map((op) => 
                <select type={campo.type} id={op}>
                  <option value={op.value}>{op.text}</option>
                </select>
                )}                                           
              </div>        
            ))
          : null}
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default App;
