import React from 'react'

const Modal = ({ dados }) => {
  return (
    <section>
      <h2>{dados.nome}</h2>
      <p>R$ {dados.preco}</p>
      <img src={dados.fotos[0].src} />
      <p>{dados.descricao}</p>
    </section>
  )
}

export default Modal