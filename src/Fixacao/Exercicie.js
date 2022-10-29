import React, { useState } from "react";
import Button from "./Button";
import Modal from "./Modal"

// Os links abaixo puxam dados de um produto em formato JSON
// https://ranekapi.origamid.dev/json/api/produto/tablet
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// https://ranekapi.origamid.dev/json/api/produto/notebook
// Crie uma interface com 3 botões, um para cada produto.
// Ao clicar no botão faça um fetch a api e mostre os dados do produto na tela.
// Mostre apenas um produto por vez
// Mostre a mensagem carregando... enquanto o fetch é realizado

const App = () => {
  const [dados, setDados] = useState(null)

  return (
    <>
      <Button dados={dados} setDados={setDados} bgColor='#a00' text='smartphone' />
      <Button dados={dados} setDados={setDados} text='tablet' />
      <Button dados={dados} setDados={setDados} text='notebook' />
      <button onClick={(() => setDados(null))}>Fechar</button>
      {dados && <Modal dados={dados} />}
    </>
  )
}

export default App