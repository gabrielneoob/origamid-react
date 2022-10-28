import React from "react";

const Header = ({ estilo, btnStyle }) => {
  return (
    <header style={estilo}>
      <span>Neoob</span>
      <ul style={estilo}>
        <li><a style={btnStyle} href="#">Home</a></li>
        <li><a style={btnStyle} href="#">Contato</a></li>
        <li><a style={btnStyle} href="#">Sobre</a></li>
      </ul>
    </header>
  )
}

export default Header