import React from "react";
import {Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const CreateAccount = () => {
    
    
    const [name, setName]         = React.useState('');
    const [email, setEmail]       = React.useState('');
    const [password, setPassword] = React.useState('');
    let status = false;
    const handleSubmit = event => {
        
        if(status)
        {
            var person = {name:name, email:email, password:password};
            localStorage.setItem("UserData", JSON.stringify(person));
            localStorage["persons"] = JSON.stringify(person);

            // Loading
            var users = JSON.parse(localStorage.getItem("users") || "[]");
            console.log("# of users: " + users.length);
            users.forEach(function(person, index) {
                console.log("[" + index + "]: " + person.name);
            });

  
            users.push(person);
            console.log("Added user #" + person.name);

            // Saving
            var listusers = localStorage.setItem("users", JSON.stringify(users));

            console.log(users);
            console.log(localStorage.getItem('listusers'));
            /*console.log(localStorage.getItem('UserEmail'));
            console.log(localStorage.getItem('UserPass'));*/
            alert(`Account created!`);
            window.location.replace("./successcreate");


        }

        event.preventDefault();
      };
    
    function validate(field, label){
        if (!field) {
          alert('Error: ' + label);
          return false;
        }
        return true;
    }

    const handleCreate = event => {
        if(!validate(name,'name'))
            return; 
        if(!validate(email,'email'))
            return;
        if(!validate(password,'password'))
            return;
        if(password.length < 8)
        {
            alert('Password length is less than 8 characters!');
            return;
        }
        status = true;
    }

    return (
        <div>
            <br/>
            <center>
                <Card style={{ width: '70rem' }}>
                    <Card.Img variant="top" src="CreateAccountHeader.png" />
                    <Card.Body>
                        <Card.Title>Create Account</Card.Title>
                        Enter Credentials
                        <form onSubmit={handleSubmit}>
                            <table>
                                <tr>
                                    <td>
                                        Name
                                    </td>
                                    <td>
                                        <input type='text' value={name} onChange={e => setName(e.currentTarget.value)}></input>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Email
                                    </td>
                                    <td>
                                        <input type='email' value={email} onChange={e => setEmail(e.currentTarget.value)}></input>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Password
                                    </td>
                                    <td>
                                        <input type='password' value={password} onChange={e => setPassword(e.currentTarget.value)}></input>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <input type='submit' disabled={!name || !email || !password} onClick={handleCreate}></input>
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

  //ReactDOM.render(<CreateAccount />, document.getElementById("root"));
 export default CreateAccount;