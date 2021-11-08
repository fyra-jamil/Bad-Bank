import {Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  return (    
    <div>
    <br/>
      <center>
<Card style={{ width: '70rem' }}>
<Card.Img variant="top" src="WelcomeHeader.png" />
<Card.Body>
<Card.Title>Welcome to our Banking System</Card.Title>

</Card.Body>
</Card>
</center>
  </div>
  );
};

export default Home;