import React from 'react'
import Button from './Button'
import Input from './Input'

const Form = () => {
  return (
    <form>
      <div>
        <label htmlFor='nome'>Nome</label>
        <Input />
      </div>
      <div>
        <label htmlFor='email'>E-mail</label>
        <Input />
      </div>
      <Button />
    </form>
  )
}

export default Form