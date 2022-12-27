import React from 'react'
import './ProdConteiner.css'
import { useState, useEffect } from 'react'
// import { getProds, getProdByCategory } from '../../asyncmock'
import ProdList from '../ProdListConteiner/ProdList'
import { useParams } from 'react-router-dom'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../services/firebaseConfig'
const ProdConteiner = () => {
  const [prod, setProd] = useState([]);

  const [isLoading, setIsLoading] = useState(true)

  const { categoryId } = useParams()

  useEffect(() => {


    const prodRef = categoryId
    ? query(collection(db, 'products'), where ('categoria', '==', categoryId))
    : collection(db, 'products')


    getDocs(prodRef)
      .then(response => {
        const prodAdapted = response.docs.map(doc => {
          const data = doc.data()
          return { id: doc.id, ...data }
        })
        setProd(prodAdapted)
      })


      .catch(error => {
        console.log('error')
      })
      .finally(() => setIsLoading(false))
  }, [categoryId])


  if (isLoading) return (<h1>Cargando...</h1>)
  return (
    <div className='conteiner d-flex flex-column justify-content-center h-100'>
      <h2 className='my-3'>Bienvenidos a <span className='titulo-color'>RealTech</span></h2>
      <ProdList prod={prod} />
    </div>
  )
}

export default ProdConteiner