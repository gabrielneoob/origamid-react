import Modal from './Modal';
import React, { useState } from 'react'
import ButtonModal from './ButtonModal';

const App = () => {
  const [ativo, setAtivo] = useState(false);
  const [dados, setDados] = useState({ nome: 'Gabriel', idade: '25' })

  function handleClick(e) {
    setAtivo(!ativo);
    setDados({ ...dados, faculdade: 'Possui Faculdade' })
  }

  return (
    <>
      <h1>{dados.nome}</h1>
      <p>{dados.idade}</p>
      <p>{dados.faculdade}</p>
      <button onClick={handleClick}>{ativo ? 'Inativo' : 'Ativo'}</button>
    </>
  )
}



export default App;