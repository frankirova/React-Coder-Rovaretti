import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ProdDetail from '../ProdDetail/ProdDetail'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../../services/firebaseConfig'




const ProdDetailConteiner = () => {

    const [prodById, setProdById] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const { prodId } = useParams()

 
   
    useEffect (() =>{
        
        const prodRef = doc(db, 'products', prodId)

        getDoc(prodRef)
          .then(response => {
                const data = response.data()
                const prodAdapted = { id: response.id, ...data}
                setProdById(prodAdapted)
          })
    
        .catch(error =>{
            console.log('error')
        })
        .finally(() => setIsLoading(false))
    }, [prodId]);

    if (isLoading)return(<h1>Cargando...</h1>) 
    

  return (
    <div className='container d-flex justify-content-center align-items-center h-100'>
        
        <ProdDetail 
        prodById={prodById}
        id={prodById.id} 
        categoria={prodById.categoria} 
        nombre={prodById.nombre} 
        precio={prodById.precio}
        img={prodById.img}
        pantalla={prodById.pantalla}
        almacenamiento={prodById.almacenamiento}
        procesador={prodById.procesador}
        stock={prodById.stock}
        />
    </div>
  )
}

export default ProdDetailConteiner