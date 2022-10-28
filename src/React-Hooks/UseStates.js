import Modal from './Modal';
import React, { useState } from 'react'
import ButtonModal from './ButtonModal';

const App = () => {
  // const ativoHook = useState(false);
  // const ativoValor = ativoHook[0];
  // const atualizaValor = ativoHook[1];
  // const [ativo, setAtivo] = useState(true);
  // const [dados, setDados] = useState({ nome: 'Gabriel', idade: '27' });
  // const [modal, setModal] = useState(false)
  const [modal, setModal] = useState(false)

  // function handleClick() {
  //   setAtivo(!ativo)
  //   setDados({ ...dados, faculdade: 'Possui Faculdade' })
  // }

  return (
    <>
      <div>{modal ? 'Modal Aberto' : 'Modal Fechado'}</div>
      <Modal modal={modal} setModal={setModal} />
      <ButtonModal modal={modal} setModal={setModal} />
    </>
  )
}



export default App;