import React from 'react'

const Button = ({ text, bgColor, dados, setDados }) => {
  async function handleClick(e) {
    try {
      const response = await fetch(`https://ranekapi.origamid.dev/json/api/produto/${e.target.innerText}`);
      const json = await response.json();

      setDados(json)
      console.log(dados);
    }
    catch (e) {
      console.log(e)
    }
  }


  return (
    <button onClick={handleClick} style={{ backgroundColor: bgColor, margin: '0 10px' }}>{text}</button>
  )
}

export default Button