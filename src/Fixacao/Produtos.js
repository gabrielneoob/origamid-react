import React from "react";




const Produtos = ({ divStyle, cor }) => {
  const produtos = [
    { name: 'Notebook', price: 1999.99, ano: 2020 },
    { name: 'Computador', price: 1299.99, ano: 2015 },
    { name: 'Playstation', price: 3999.99, ano: 2019 },
    { name: 'Xbox', price: 2999.99, ano: 2018 },
  ]

  return <section>
    {produtos.map(({ name, price, ano }) => <div key={name} style={divStyle}>
      <h2 style={{ color: cor }}>{name}</h2>
      <p>R$ {price}</p>
      <p>Ano: {ano}</p>
    </div>)}
  </section>
}

export default Produtos;