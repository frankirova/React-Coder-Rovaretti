

import Button from 'react-bootstrap/Button';
import './Card.css'
import Card from 'react-bootstrap/Card';

function ProdCard({prod}) {

  
  return (
    <Card >
      <Card.Img variant="top" src={prod.img} className='img-card'/>
      <Card.Body>
        <Card.Title>{prod.marca}</Card.Title>
        <Card.Text className='d-flex flex-column'>
          <p>{prod.procesador}</p>
        
      
          <p>{prod.pantalla}</p>
          
        
          <p>{prod.marca}</p>
          
      
          <p>{prod.almacenamiento}</p>
          
      
          <p>{prod.ram}</p>
          
      
          <p> {prod.precio}</p>
            </Card.Text>
          
        <Button variant="success">Add to cart</Button>
      </Card.Body>
    </Card>
  );
}

export default ProdCard;