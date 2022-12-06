import React from 'react'
import './ProdDetail.css'
import Count from '../Count/Count'

const ProdDetail = ({prodById}) => {
  return (
    <div className='conteiner' key={prodById.id}>
      
      <img className='card-img-top' src={prodById.img} alt={prodById.marca}/>
      
      <div className='caract'>
        <h3>{prodById.marca}</h3>
        <h4>{prodById.categoria}</h4>
        <p>{prodById.procesador}</p>
        <p>{prodById.pantalla}</p>
        <p>{prodById.almacenamiento}</p>
        <p>{prodById.ram}</p>
        <p className='price'> {prodById.precio}</p>
      
      <div className='count-component'>
        <Count />
      </div>
      </div>
    </div>
  )
}

export default ProdDetail