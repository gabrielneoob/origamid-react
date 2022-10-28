import React from 'react'

const ButtonModal = ({ setModal, modal }) => {
  return (
    <button onClick={() => setModal((anterior) => !anterior)}>{!modal ? 'Abrir' : 'Fechar'}</button>
  )
}

export default ButtonModal