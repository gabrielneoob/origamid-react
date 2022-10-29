import React, { useState } from 'react'
import Footer from './Footer'
import Header from './Header'
import Produtos from './Produtos'
import ProdutosJson from './ProdutosJson';
let dadosX;


const estilo = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  listStyle: 'none',
  gap: '1rem'
}

const btnStyle = {
  color: '#fff',
  padding: '10px 15px',
  textDecoration: 'none',
  backgroundColor: '#aaa',
  borderRadius: '10px'
}

const divStyle = {
  padding: '1rem',
  border: '1px solid #aaa',
  margin: '0 0 10px'
}



const App = () => {
  const [dados, setDados] = useState(null);
  // async function produto() {
  //   const response = await fetch('https://ranekapi.origamid.dev/json/api/produto/tablet');
  //   const json = await response.json();

  //   return setDados(json);
  // }


  function handleClick(e) {
    fetch('https://ranekapi.origamid.dev/json/api/produto/tablet')
      .then((response) => response.json())
      .then((json) => setDados(json))
  }

  return (
    <>
      <Header estilo={estilo} btnStyle={btnStyle} />
      {dados && <ProdutosJson dados={dados} />}
      {/* <Produtos divStyle={divStyle} cor="red" /> */}
      <button onClick={handleClick}>Alterar</button>
      <Footer cor="#547" textAlign='center' />
    </>

  )
}

export default App