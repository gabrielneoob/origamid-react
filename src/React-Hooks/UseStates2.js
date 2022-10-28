import React, { useState } from "react";
let val = 3;

const App = () => {
  // const [items, setItems] = useState(['Item 1', 'Item 2']);
  const [items, setItems] = useState(['Item 1']);
  const [contar, setContar] = useState(2);

  function handleClick() {
    setContar((contar) => contar + 1);
    setItems((items) => [...items, `Item ${contar}`]);
    console.log(contar);
  }

  // function handleClickReativo(e) {
  //   setItems([...items, `Item ${val}`])
  //   val = val + 1;
  // }

  return (
    <>
      {items.map((item) => <li key={item}>{item}</li>)}
      <button onClick={handleClick}>{contar}</button>
      {/* {items.map((item) => <li key={item}>{item}</li>)}
      <button onClick={handleClickReativo}
      >Adicionar</button> */}
    </>
  )
}

export default App;