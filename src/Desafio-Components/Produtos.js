import React from 'react'

const Produtos = ({ prods, cor, texto }) => {
  return <>
    <h2 style={{ color: cor }}>{texto}</h2>
    {prods.map(({ nome, propriedades }) => <div key={nome} style={{ border: '2px solid #aaa', margin: '0 0 1rem', padding: '1rem' }}>
      <h3>{nome}</h3>
      {propriedades.map((item) => <ul key={item}>
        <li>{item}</li>
      </ul>)}
    </div>)}</>
}

export default Produtos