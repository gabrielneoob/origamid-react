import React, { useState, useEffect } from "react";
import ProdutosExercicie from "./ProdutosExercicie";
// Quando o usuário clicar em um dos botões, faça um fetch do produto clicado utilizando a api abaixo
// https://ranekapi.origamid.dev/json/api/produto/notebook
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// Mostre o nome e preço na tela (separe essa informação em um componente Produto.js)
// Defina o produto clicado como uma preferência do usuário no localStorage
// Quando o usuário entrar no site, se existe um produto no localStorage, faça o fetch do mesmo


const App = () => {
  const [produto, setProduto] = useState(null);

  useEffect(() => {
    const produtoLocal = localStorage.produto;
    if (produtoLocal) {
      setProduto(produtoLocal)
    }
  }, [])

  useEffect(() => {
    if (produto) {
      localStorage.produto = produto;
    }
  }, [produto])

  function handleClick({ target }) {
    setProduto(target.innerText);
  }

  return (
    <>
      <h1>Preferência: {produto}</h1>
      <button onClick={handleClick}>smartphone</button>
      <button onClick={handleClick}>tablet</button>
      <ProdutosExercicie produto={produto} />
    </>
  )
}

export default App;