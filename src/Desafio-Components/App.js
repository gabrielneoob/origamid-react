import React from 'react'
import Home from './Home';
import Produtos from './Produtos';

// Replique a interface como a apresentada na aula
// Utilize a array abaixo para mostrar os produtos
// Quebre em componentes o que precisar ser reutilizado
// Dica: const { pathname } = window.location; (puxa o caminho do URL)

const App = () => {
  const produtos = [
    { nome: 'Notebook', propriedades: ['16gb ram', '512gb'] },
    { nome: 'Smartphone', propriedades: ['2gb ram', '128gb'] },
  ];
  const { pathname } = window.location;
  let Component = pathname === '/produtos' ? Produtos : Home;
  return (
    <>
      <ul>
        <li><a href='/'>Home</a></li>
        <li><a href='/produtos'>Produtos</a></li>
      </ul>

      {/* <Home cor="green" fontFamily="Arial" /> */}
      <Component prods={produtos} texto="Produtos" cor="red" />
    </>
  )
}

export default App