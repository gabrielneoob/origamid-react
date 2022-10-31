import React, { useEffect, useState, useRef } from "react";

const App = () => {
  const [comentarios, setComentarios] = useState([]);
  const [input, setInput] = useState('');
  const inputText = useRef();


  function handleClick(e) {


    if (input && !comentarios.includes((input))) {
      setComentarios([...comentarios, input]);
      setInput('')
      inputText.current.focus();
      localStorage.comments = JSON.stringify([...comentarios, input]);
    }
  }

  function clear(e) {
    localStorage.removeItem('comments')
    setComentarios([])
  }

  useEffect(() => {
    if (localStorage.comments) {
      setComentarios(JSON.parse(localStorage.comments));
    }
  }, [])

  return (
    <>
      <input value={input} onChange={((e) => setInput(e.target.value))} type="text" ref={inputText} />
      <button onClick={handleClick}>Add</button>
      <button onClick={clear}>Clear</button>
      <ul>
        {comentarios.map((coment) => <li key={coment}>{coment}</li>)}
      </ul>
    </>
  )
}

export default App;