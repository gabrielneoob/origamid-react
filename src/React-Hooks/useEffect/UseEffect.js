import React, { useEffect, useState } from "react";

const App = () => {
  const [contar, setContar] = useState(1);
  const [dados, setDados] = useState(null);


  function mais(e) {
    return setContar(contar + 1);
  }

  function menos(e) {
    if (contar > 1)
      return setContar(contar - 1);
  }


  // Com a [] nenhuma dependência só sera executado uma vez
  useEffect(() => {
    console.log('Ocorre apenas uma vez');
  }, []);


  // Ocorre sempre que o estado contar for atualizado
  useEffect(() => {
    document.title = `total ${contar}`
  }, [contar]);

  // O useEffect será essencialmente utilizado quando precisamos definir um efeito que deve ocorrer apenas uma vez, como o fetch de dados no servidor por exemplo

  useEffect(() => {
    fetch('https://ranekapi.origamid.dev/json/api/produto/smartphone')
      .then((response) => response.json())
      .then((json) => setDados(json))
  }, [])

  return (
    <>
      <button onClick={mais}>+</button>
      <span style={{ padding: '0 20px' }}>{contar}</span>
      <button onClick={menos}>-</button>
      {dados && (
        <div>
          <h1>{dados.nome}</h1>
          <p>R$ {dados.preco * contar}</p>
        </div>
      )}
      <button onClick={(() => { console.log(dados) })}>Mostrar dados</button>
    </>
  )
}

export default App;