import React from 'react'
import Footer from './Footer'
import Header from './Header'

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


const App = () => {
  return (
    <>
      <Header estilo={estilo} btnStyle={btnStyle} />

      <Footer cor="#547" textAlign='center' />
    </>

  )
}

export default App