import React from 'react'

function Header() {
  const title='OMAR AIT BENHADDI';
  const info = {
    name : "MON",
    nick : "CLIENT"
  }
  return (
    <div className='navbar bg-dark rounded text-white'>
      Hello { `${info.name} ${info.nick}`}
    <h1 >{ title }</h1>
    </div>
 )
}

export default Header