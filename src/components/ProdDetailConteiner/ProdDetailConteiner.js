import React, { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import {getProdById} from '../../asyncmock'
import ProdDetail from '../ProdDetail/ProdDetail'
const ProdDetailConteiner = () => {

    const [prodById, setProdById] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const {prodId} = useParams()
   
    useEffect (() =>{
        console.log(prodId)
        getProdById(prodId)
    
        .then(response =>{
            setProdById(response)
        })
        .catch(error =>{
            console.log('error')
        })
        .finally(() => setIsLoading(false))
    }, [prodId]);
    console.log(prodById)
if (isLoading)return(<h1>Cargando...</h1>) 
  return (
    <div>
        
        <ProdDetail prodById={prodById} />
    </div>
  )
}

export default ProdDetailConteiner