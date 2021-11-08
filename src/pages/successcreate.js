import {Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const SuccessCreate = () => {

    const handleClick = event => {
        window.location.replace("./createaccount");
        event.preventDefault();
    }

  return (    
    <div>
    <br/>
      <center>
        <Card style={{ width: '70rem' }}>
            <Card.Img variant="top" src="WelcomeHeader.png" />
            <Card.Body>
                <br />
                <Card.Title>You have successfully created an account!</Card.Title>
                <br />
                <form>
                    <button type='button' onClick={handleClick}>Create New Account</button>
                </form>
            </Card.Body>
        </Card>
</center>
  </div>
  );
};

export default SuccessCreate;