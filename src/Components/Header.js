import React from 'react'

const Header = () => {
  const ativo = true;
  return (
    <header style={{ display: ativo ? 'flex' : 'initial', justifyContent: ativo ? 'space-between' : 'center' }}>
      <h2>Neoob</h2>
      <ul style={{ display: 'flex', listStyle: 'none', gap: ativo ? '1rem' : '2rem' }}>
        <li>Home</li>
        <li>Contato</li>
        <li>Sobre</li>
      </ul>
    </header>
  )
}

export default Header