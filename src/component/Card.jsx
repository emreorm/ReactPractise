
import Card from 'react-bootstrap/Card';


function BasicExample(props) {
  return (
    <div className='d-flex justify-content-around '>
    <Card className="mt-3 " style={{ width: '25rem' }}>
      
      <Card.Body className='fluid p-0'>
      <Card.Header><h3>{props.isim}</h3></Card.Header>
       
        <Card.Text className='p-3 '>
          <p className='mb-1'>{props.ücret}</p>
          <p>{props.telefon} </p>
        </Card.Text>
        
      </Card.Body>
    </Card>
 

    <Card className="mt-3 " style={{ width: '25rem' }}>
      
      <Card.Body className='fluid p-0'>
      <Card.Header><h3>{props.isim2}</h3></Card.Header>
       
        <Card.Text className='p-3'>
          <p className='mb-1'>{props.ücret2}</p>
          <p>{props.telefon2}</p>
        </Card.Text>
        
      </Card.Body>
    </Card>

    <Card className="mt-3 " style={{ width: '25rem' }}>
      
      <Card.Body className='fluid p-0'>
      <Card.Header><h3>{props.isim3}</h3></Card.Header>
       
        <Card.Text className='p-3'>
          <p className='mb-1'>{props.ücret3}</p>
          <p>{props.telefon3}</p>
        </Card.Text>
        
      </Card.Body>
    </Card>
    </div>
  );
}

export default BasicExample;