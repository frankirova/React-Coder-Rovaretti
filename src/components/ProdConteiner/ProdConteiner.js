import React from 'react'
import './ProdConteiner.css'
import {useState, useEffect} from 'react'
import {getProds} from '../../asyncmock'
import ProdList from '../CardListConteiner/ProdList'
const ProdConteiner = () => {
  const [prod, setProd] = useState([]);

  useEffect(()=>{

        getProds()
           
        .then(response => {
        setProd(response)
      })
           
        .catch(error => {
         console.log('error')
      })
  }, []);

  return (
    <div>
        <h2>Bienvenidos a RealTech</h2>
        <ProdList prod= {prod}/>
    </div>
  )
}

export default ProdConteiner