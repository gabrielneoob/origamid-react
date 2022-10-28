import React from "react";


// Mostre os dados da aplicação, como aprensetado no vídeo
// Não utilize CSS externo, use o style para mudar as cores
// Se a situação estiver ativa pinte de verde, inativa vermelho
// Se o gasto for maior que 10000 mostre uma mensagem
const luana = [{
  cliente: 'Luana',
  idade: 27,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
  ],
  ativa: true,
}];

const mario = [{
  cliente: 'Mario',
  idade: 31,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
    { nome: 'Guitarra', preco: 'R$ 3500' },
  ],
  ativa: false,
}];

const App = () => {
  const pessoa = mario;
  const total = pessoa[0].compras.map(({ preco }) => Number(preco.slice(3))).reduce((previous, current) => previous + current);
  return (
    <ul>
      {pessoa.map(({ cliente, idade, ativa }) => {
        return (
          <ul key={cliente}>
            <li>Nome: {cliente}</li>
            <li>Idade: {idade}</li>
            <li>Situação: <span style={{ color: ativa ? 'green' : 'red', fontWeight: 'bold' }}>{ativa ? 'Ativa' : 'Inativa'}</span></li>
            <li>Total Gasto: {total}</li>
            {total > 10000 && <li style={{ fontWeight: 'bold' }}>Você está gastando muito!</li>}
          </ul>
        )
      })}
    </ul>
  )
}

export default App