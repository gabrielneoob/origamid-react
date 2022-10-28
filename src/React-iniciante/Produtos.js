import React from "react";

const Produtos = (e) => {
  const produtos = [
    { nome: 'Smartphone', preco: 1999.99, ano: 2021 },
    { nome: 'SmartTv', preco: 3000.00, ano: 2022 },
    { nome: 'Notebook', preco: 999.99, ano: 2019 },
  ]
  return <ul>{produtos.map(({ nome, preco, ano }) => <li key={nome} style={{ listStyle: 'none' }}>{nome} | R$ {preco.toString().replace('.', ',')} | {ano}</li>)}</ul>
}

export default Produtos;