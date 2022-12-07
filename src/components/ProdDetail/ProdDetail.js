import React from 'react'
import './ProdDetail.css'
import Count from '../Count/Count'

const ProdDetail = ({prodById}) => {

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
      {/* <Link className='btn btn-success' to={`/prod/${prod.id}`}>Ver detalle</Link> */}
    </div>
      <div className='count-component d-flex align-items-center justify-content-center'>
        <Count />
      </div>
    </div>
  )
}

export default ProdDetail