import './ProdList.css'
import React from 'react'
import Card from '../Card/Card'
// import { useState, useEfect } from 'react'

const ProdList = ({prod}) => {

  return (
    <div >
      
        <div className="row"> 
          { 
            prod.map(prod =>(
            
              <div className="col-md-4" key={prod.id}>
                <Card className='card' prod={prod}/>
              </div>
            ))
          }
        </div>
      </div>
           
  )
}

export default ProdList