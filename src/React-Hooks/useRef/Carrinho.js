import React, { useState, useEffect, useRef } from 'react'

const App = () => {
  const [notificacao, setNotificacao] = useState(null)
  const [carrinho, setCarrinho] = useState(0);
  const timeoutRef = useRef()
  function handleClick(e) {
    setCarrinho(carrinho + 1)
    setNotificacao('Item adicionado ao carrinho')

    clearInterval(timeoutRef.current)
    timeoutRef.current = setTimeout(() => {
      setNotificacao(null)
    }, 2000)
  }

  return (
    <div>
      {notificacao ? <p>{notificacao}</p> : null}
      <button onClick={handleClick}>Adicionar Carrinho {carrinho}</button>
    </div>
  )
}

export default App;