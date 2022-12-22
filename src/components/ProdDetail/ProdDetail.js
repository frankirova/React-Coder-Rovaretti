import React from 'react'
import './ProdDetail.css'
import Count from '../Count/Count'
import { Link } from 'react-router-dom'
import { useState } from 'react'


const ProdDetail = ( {prodById} ) => {
  const [quantityToAdd, setQuantity] = useState(0)

  
  // const addToCart = (quantity) => {
  //   console.log('add cart ' + (quantity))
  //   setQuantity(quantity)
  // }
  return (
  <div>

    <div className="card">

      <div className="card-img-top">
        <img src={prodById.img} alt="img"></img>
      </div>

      <h4 className="card-title">{prodById.title}</h4>
    
      <div className="caracteristicas">
        <p className="card-text text-secondary">{prodById.ram}</p>
        <p className="card-text text-secondary">{prodById.pantalla}</p>
        <p className="card-text text-secondary">{prodById.almacenamiento}</p>
        <p className="card-text text-secondary">{prodById.procesador}</p>
      </div>

      <p className='price'><b>{prodById.precio}</b></p>

    </div>

      <div className='count-component d-flex align-items-center justify-content-center'>
         
        {
         quantityToAdd === 0 ? <Count stock={prodById.stock} /> 
                             : <Link to='/cart' className='btn btn-success mx-2 my-auto'>Finalizar compra</Link>
        }
        
        
      </div>

    </div>
  )
}
export default ProdDetail