import React from 'react';
import Button from '../Components/Button.js'

// props


const Titulo = (props) => {
  return <h1 style={{ color: props.cor }}>{props.texto}</h1>
}

const Titulo2 = ({ cor, texto }) => {
  return <h1 style={{ color: cor }}>{texto}</h1>
}

const Children = ({ children, cor }) => {
  return <h1 style={{ color: cor }}>{children}</h1>
}

// Usando Rest & Spread
const Input = ({ label, id, type, ...props }) => {
  return (
    <div style={{ marginBottom: '1rem' }}>
      <label htmlFor={id}>{label}</label>
      <input id={id} type={type} {...props} />
    </div>
  )
}


const App = () => {
  const inputName = 'Senha';
  const btnName = 'Enviar'
  const arr = ['Item 1', 'Item 2'];
  return (
    <>
      <Titulo texto="Título 1" cor="red" />
      <Titulo texto="Título 2" cor="blue" />
      <Titulo2 texto="Título 3" cor="green" />
      <Children cor='pink'>Olá</Children>
      <Input label="Nome" id="name" type="text" maxlength="10" />
      <Input label={inputName} id="password" type="password" maxlength="10" />
      <Button items={arr} id="btn" name={btnName} />
    </>
  )
}

export default App