import React from 'react'

const ProdutosJson = ({ dados }) => {
  return (
    <main>
      <h1>{dados.nome}</h1>
      <p>{dados.preco}</p>
      <img src={dados.fotos[0].src} alt={dados.fotos[0].titulo} />
      <p>{dados.descricao}</p>
    </main>
  )
}

export default ProdutosJson