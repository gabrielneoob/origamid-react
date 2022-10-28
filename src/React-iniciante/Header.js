import React from 'react'

const Header = () => {
  function event(e) {
    console.log(e.target);
  }
  return (
    <header style={{ display: 'flex', justifyContent: 'space-between' }}>
      <h3>Neoob Corporation</h3>
      <ul style={{ display: 'flex', listStyle: 'none', gap: '10px' }}>
        <li onClick={event}>Home</li>
        <li>Contato</li>
        <li>Produtos</li>
      </ul>
    </header>
  )
}

export default Header