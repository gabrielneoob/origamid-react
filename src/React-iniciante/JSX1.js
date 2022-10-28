import React from "react";
import Header from "./Header";
import Produtos from "./Produtos";

const App = () => {
  const estiloH1 = {
    color: '#f60',
    fontSize: '3.2rem',
    fontFamily: 'Helvetica'
  }
  const random = (Math.random() * 100).toFixed(0);
  const ativo = false;
  let Componente = (ativo ? Header : Produtos);
  function showName(lastName = 'Neoob') {
    return 'Gabriel ' + lastName;
  }
  return (
    //Atributos passados como no HTML 
    // Casos Especiais
    // class -> className
    // for -> htmlFor
    < React.Fragment >
      <h2 className={ativo ? 'ativo' : 'inativo'}>{random}</h2>
      < Componente />
      <div>{ativo ? 'Ativo' : 'Inativo'}</div>
      <h1 style={estiloH1}>{showName()}</h1>

    </React.Fragment >
  )
}



export default App;
