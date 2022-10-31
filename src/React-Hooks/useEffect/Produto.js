import React, { useEffect } from 'react'
// Utilizamos o useEffect para adicionarmos eventos direto ao DOM


const Produto = () => {
  useEffect(() => {
    function handleScroll(e) {
      console.log(e);
    }
    window.addEventListener('scroll', handleScroll)
    // Limpa o evento quando o elemento é removido do DOM.
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }

  }, [])

  return <p style={{ height: '200vh' }}>Produto</p>
}

export default Produto