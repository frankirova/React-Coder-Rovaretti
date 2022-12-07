
import { Link } from 'react-router-dom'
import './Card.css'



// function ProdCard({prod}) {

  
//   return (
//     <Card >
//       <div className='card-img-top'>
//       <Card.Img variant="top" src={prod.img} className='img-card'/>
//       </div>
//       <Card.Body>
//         <Card.Title>{prod.marca}</Card.Title>
//         <Card.Text className='d-flex flex-column'>
//           <p>{prod.procesador}</p>
        
      
//           <p>{prod.pantalla}</p>
          
        
//           <p>{prod.marca}</p>
          
      
//           <p>{prod.almacenamiento}</p>
          
      
//           <p>{prod.ram}</p>
          
      
//           <p> {prod.precio}</p>
//             </Card.Text>
          
//         <Link className='btn btn-success' to={`/prod/${prod.id}`}>Ver detalle</Link>
//       </Card.Body>
//     </Card>
//   );
// }

// export default ProdCard;


function ProdCard({ prod }) {

  return (
    <div className="card">
      <div className="card-img-top">
          <img src={prod.img} alt="img"></img>
      </div>
      <h4 className="card-title">{prod.title}</h4>
      
      
      <div className="caracteristicas">
        <p className="card-text text-secondary">{prod.ram}</p>
        <p className="card-text text-secondary">{prod.pantalla}</p>
        <p className="card-text text-secondary">{prod.almacenamiento}</p>
        <p className="card-text text-secondary">{prod.procesador}</p>
      </div>
      <p><b>{prod.precio}</b></p>
      <Link className='btn btn-success' to={`/prod/${prod.id}`}>Ver detalle</Link>
    </div>
    
  );
}
export default ProdCard;