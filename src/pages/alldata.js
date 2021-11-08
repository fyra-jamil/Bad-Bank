import React from 'react'
import { Card,Table} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
var adduser = JSON.parse(localStorage["users"]); 
var listusers;
listusers = [{
    name : 'Abel',
    email : 'abel@mit.edu.com',
    password : 'Abdcesd123'
}];
//listusers.push(adduser[0]);

adduser.forEach((number, index) => {
    listusers.push(adduser[index]);
});

function alldata() {
    return (
        <div>
            <br/>
            <center>
                <Card style={{ width: '70rem' }}>
                    <Card.Img variant="top" src="AllDataHeader.png" />
                    <Card.Body>
                        <Card.Title>All Data</Card.Title>
                        <Table striped bordered hover id="UserDatas">
                            <thead>
                            <tr>
                                <th>Username</th>
                                <th>Email</th>
                                <th>Password</th>
                            </tr>
                            </thead>
                            <tbody>
                            {listusers.map(item => {
                                return (
                                    <tr key={item.name}>
                                    <td>{ item.name }</td>
                                    <td>{ item.email }</td>
                                    <td>{ item.password }</td>
                                 </tr>
                                );
                                })}
                            </tbody>
                        </Table>
                    </Card.Body>
                </Card>
            </center>
        </div>
    )
}

export default alldata;