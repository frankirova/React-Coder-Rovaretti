import React, { useEffect } from 'react'
import { useState } from 'react'
import {getProdById} from '../../asyncmock'
import ProdDetail from '../ProdDetail/ProdDetail'
const ProdDetailConteiner = () => {

    const [prodById, setProdById] = useState('')
    useEffect (() =>{
        getProdById(2)
    
        .then(response =>{
            setProdById(response)
        })
        .catch(error =>{
            console.log('error')
        })
    }, []);
  return (
    <div>
        <h2>Producto Renderizado Por Id</h2>
        <ProdDetail prodById={prodById} />
    </div>
  )
}

export default ProdDetailConteiner