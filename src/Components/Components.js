import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import Form from "./Form";
import Header from "./Header";

const Teste = () => {
  const ativo = true;
  if (ativo) {
    return <p>Teste</p>
  } else {
    return null
  }
}

const App = () => {
  return (
    <>
      <Header />
      <Form />
      <Footer />
    </>
  )
}

export default App;