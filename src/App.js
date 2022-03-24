import React, { useState, useEffect } from "react";

import Element from "./components/Element";

import FormJson from "./formElement.json";
console.log(FormJson);

function App() {
  const [elementos, setElementos] = useState(null);

  useEffect(() => {
    setElementos(FormJson);
  }, []);

  const { titulo, campos } = elementos ?? {};
  
  return (
    
    <div>
      <h3>{titulo}</h3>
      <form>
        {campos ? campos.map((id) => <Element key={id} id={id}/>) : null}
        <button type="submit">Submit</button>
      </form>
    </div>
    
  );
}

export default App;
