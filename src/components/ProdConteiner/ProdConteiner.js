import React from 'react'
import './ProdConteiner.css'
import { useState, useEffect } from 'react'
// import { getProds, getProdByCategory } from '../../asyncmock'
import ProdList from '../ProdListConteiner/ProdList'
import { useParams } from 'react-router-dom'

import 'react-toastify/dist/ReactToastify.css';

import { getProducts } from '../../services/Firestore/products'

const ProdConteiner = () => {
  const [prod, setProd] = useState([]);

  const [isLoading, setIsLoading] = useState(true)

  const { categoryId } = useParams()

  useEffect(() => {

    getProducts(categoryId)
      .then(prod => {
        setProd(prod)
      })
      .finally(() => setIsLoading(false))

    }, [categoryId])


  if (isLoading) return (<h1>Cargando...</h1>)

  
  return (
    <div className='conteiner d-flex flex-column justify-content-center h-100 '>
      <h2 className='titulo my-2'>Bienvenidos a <span className='titulo-color'>RealTech</span></h2>
      <ProdList prod={prod} />
    </div>
  )
}

export default ProdConteiner