import React from 'react'

const Button = (props, { id }) => {
  function handleClick() {
    console.log(props);
  }
  return (
    <button id={id} onClick={handleClick}>{props.name}</button>
  )
}

export default Button