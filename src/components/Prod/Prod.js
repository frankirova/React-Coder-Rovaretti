
import { Link } from 'react-router-dom'
import { useContext } from 'react';
import { CartContext } from '../../App'
import './Prod.css'

function ProdCard({ prod }) {
  return (
    <div className="card ">
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