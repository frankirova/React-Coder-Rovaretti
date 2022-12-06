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
  console.log(categoryId)
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
    <div>
        <h2>Bienvenidos a RealTech</h2>
        <ProdList prod= {prod}/>
    </div>
  )
}

export default ProdConteiner