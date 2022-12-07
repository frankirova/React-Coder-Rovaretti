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
        
        getProdById(prodId)
    
        .then(response =>{
            setProdById(response)
        })
        .catch(error =>{
            console.log('error')
        })
        .finally(() => setIsLoading(false))
    }, [prodId]);
    
if (isLoading)return(<h1>Cargando...</h1>) 
  return (
    <div className='container d-flex justify-content-center align-items-center h-100'>
        
        <ProdDetail prodById={prodById} />
    </div>
  )
}

export default ProdDetailConteiner