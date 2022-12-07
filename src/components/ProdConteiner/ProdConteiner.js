import React from 'react'
import './ProdConteiner.css'
import {useState, useEffect} from 'react'
import {getProds, getProdByCategory} from '../../asyncmock'
import ProdList from '../CardListConteiner/ProdList'
import { useParams } from 'react-router-dom'
const ProdConteiner = () => {
  const [prod, setProd] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  const {categoryId} = useParams()
  
  useEffect(()=>{
    if(!categoryId){
      getProds()
       
        .then(response => {
          setProd(response)
        })
            
        .catch(error => {
          console.log('error')
        })
        .finally(() => setIsLoading(false))

    } else {
      getProdByCategory(categoryId)
       
        .then(response => {
          setProd(response)
        })
            
        .catch(error => {
          console.log('error')
        })
        .finally(() => setIsLoading(false))
    }
      }, [categoryId])
    
  
if (isLoading)return(<h1>Cargando...</h1>) 
  return (
    <div className='contenedor-list conteiner d-flex flex-column justify-content-center h-100'>
        <h2 className='my-3'>Bienvenidos a <span className='titulo-color'>RealTech</span></h2>
        <ProdList prod= {prod}/>
    </div>
  )
}

export default ProdConteiner