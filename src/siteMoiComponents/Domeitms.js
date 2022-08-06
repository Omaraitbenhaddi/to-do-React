import React from 'react'

function Domeitms(props) {
  return (
    <li className='list-group-item' >
        <img src={props.img} alt={`icon of ${props.doma}`} />
    <input type="checkbox" id={props.id}  />
    <label  htmlFor={props.id}>{props.doma}</label>
  </li>
  )
}

export default Domeitms