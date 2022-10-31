import React, { useState, useEffect } from 'react'


const ProdutosExercicie = ({ produto }) => {
  const [dado, setDados] = useState(null);

  useEffect(() => {
    if (produto) {
      fetch(`https://ranekapi.origamid.dev/json/api/produto/${produto}`)
        .then((response) => response.json())
        .then((json) => setDados(json));
    }

  }, [produto])


  if (dado) {
    return (
      <div>
        <h2>{dado.nome}</h2>
        <p>{dado.preco}</p>
      </div>
    )
  }
  else {
    return null
  }
}

export default ProdutosExercicie