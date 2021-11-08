import React from 'react'
import {Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
var AvailableCash = localStorage.getItem('TotalCash');



function Withdraw() {

    const [withdrawVal, setWithdrawVal] = React.useState('');
    let status = false;
    function validate(field,label)
    {
        if (!field) {
            alert('Error: ' + label);
            return false;
          }
          console.log({AvailableCash})
          return true;
    }

    const handleWithdraw = () =>{
        if(!validate(withdrawVal,'withdraw'))
            return;
        if(withdrawVal > Number(AvailableCash))
        {
            alert("Value entered is more than available cash!");
            return;
        }

        status = true;

    }

    const handleSubmit = event => {
        
        if(status)
        {
            console.log(Number(AvailableCash)-Number(withdrawVal))
            localStorage.setItem('TotalCash',(Number(AvailableCash)-Number(withdrawVal)));
            console.log(localStorage.getItem('TotalCash'));
            alert(`Withdraw successful!`);
            window.location.reload(false);
        }
        event.preventDefault();
    };

    return (
        <div>
            <br/>
            <center>
                <Card style={{ width: '70rem' }}>
                    <Card.Img variant="top" src="WithdrawMoneyHeader.png" />
                    <Card.Body>
                        <Card.Title>Withdraw</Card.Title>
                        Current Account Value (RM): {AvailableCash}
                        <form onSubmit={handleSubmit}>
                            <table>
                                <tr>
                                    <td>Withdraw(RM)</td>
                                    <td>
                                        <input type='number' value={withdrawVal} onChange={e => setWithdrawVal(e.currentTarget.value)}></input>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <input type='submit' disabled={!withdrawVal} onClick={handleWithdraw}></input>
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

export default Withdraw;