import React from 'react'
import { Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

var availableCash = localStorage.getItem('TotalCash');
function Deposit() {

    var [deposit , setDeposit] = React.useState('');
    var [totalDeposit, setTotalDeposit] = React.useState('0');
    let status = false;
    function validate(field,label)
    {
        if (!field) {
            alert('Error: ' + label);
            return false;
          }
          return true;
    }

    const handleDeposit = () =>{
        if(!validate(deposit,'deposit'))
            return;
        if(Number(deposit) < 0)
        {
            alert('Negative number entered!');
            return;
        }
        
        status = true;

    }

    const handleSubmit = event => {
        
        if(status)
        {
            setTotalDeposit(Number(availableCash)+Number(deposit));
            console.log(Number(availableCash)+Number(deposit))
            localStorage.setItem('TotalCash',(Number(availableCash)+Number(deposit)));
            console.log(localStorage.getItem('TotalCash'));
            alert(`Deposit successful!`);
            window.location.reload(false);
        }
        event.preventDefault();
    };

    return (
        <div>
            <br/>
            <center>
                <Card style={{ width: '70rem' }}>
                    <Card.Img variant="top" src="DepositMoneyHeader.png" />
                    <Card.Body>
                        <Card.Title>Deposit</Card.Title>
                        Current Account Value (RM): {availableCash}
                        <form onSubmit={handleSubmit}>
                            <table>
                                <tr>
                                    <td>Deposit(RM)</td>
                                    <td>
                                        <input type='number' value={deposit} onChange={e => setDeposit(e.currentTarget.value)}></input>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <input type='submit' disabled={!deposit} onClick={handleDeposit}></input>
                                    </td>
                                </tr>
                            </table>
                        </form>
                    </Card.Body>
                </Card>
                </center>
        </div>
    );
};
export default Deposit;