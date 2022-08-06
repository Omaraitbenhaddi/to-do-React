import React from 'react'
import Domeitms from './Domeitms'

function Social() {
  return (
    <ul className='list-group'>

      <Domeitms
        doma='CYBERSECURITE'
         id='sec'
         img='https://picsum.photos/60'
         />
      <Domeitms
         doma='DEVELOPEMENT WEB'
          id='devweb'
          img='https://picsum.photos/61'
        />
      <Domeitms
         doma='DEVELOPEMENT MOBILE'
         id='devmob'
         img='https://picsum.photos/62'
        />
      <Domeitms
        doma='DATA'
        id='data'
        img='https://picsum.photos/63'
      />
      




  </ul>
  )
}

export default Social



/*
    <li className='list-group-item'>CYBERSECURITE</li>
    <li className='list-group-item'>DEVELOPEMENT WEB </li>
    <li className='list-group-item'>DEVELOPEMENT MOBILE</li>
    <li className='list-group-item' >DATA SCIENCE</li>
    <li className='list-group-item'>DATA ENGENIEING</li>
    <li className='list-group-item'>IA</li>
    */