import React from 'react'

const ProdDetail = ({prodById}) => {
  return (
    <div key={prodById.id}>
      <img src={prodById.img} alt={prodById.marca}/>
      <h3>{prodById.marca}</h3>
      <div>
        <p>{prodById.procesador}</p>
        <p>{prodById.pantalla}</p>
        <p>{prodById.marca}</p>
        <p>{prodById.almacenamiento}</p>
        <p>{prodById.ram}</p>
        <p> {prodById.precio}</p>
      </div>
    </div>
  )
}

export default ProdDetail