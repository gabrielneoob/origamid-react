import React, { useState } from 'react'
import Produto from './Produto'

const App = () => {
  const [ativo, setAtivo] = useState(false)
  return (
    <>
      <p>Meu App</p>
      <button onClick={(() => setAtivo(!ativo))}>{ativo ? 'Fechar' : 'Abrir'}</button>
      {ativo && <Produto />}
    </>
  )
}

export default App