import { useState } from 'react';
import  axios from 'axios';
import './styles.css'


const SignupForm = () => {
    

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [firstname, setFirst] = useState('');
    const [lastname, setLast] = useState('');
    const [error, setError] = useState('');

    // function to handle the submit
    const handleSubmit = async (e) => {
        e.preventDefault();

        //header for authentication
        const authObject = {'Private-Key': '4922e43b-42bb-42b6-b063-ead3ca710071'}
        
        // post request to create user
        try {
            await axios.post('https://api.chatengine.io/users/',
            { 'username': username,'secret': password },
            { headers: authObject},
            )
            // login the user
            localStorage.setItem('username', username)
            localStorage.setItem('password', password)

            window.location.reload()
         } catch (error) {
             console.log(error)
             setError('Incorrect credentials, try again')
         }
                            
    }

    return(
        <div className="signup-wrapper">
            <div className="signup-form">
                <h1 className="signup-title">Register for an account</h1>
                <form onSubmit={handleSubmit}>
                <input type="text" value={firstname} onChange={(e) => setFirst(e.target.value)} className="input" placeholder="FirstName" required/>
                    <input type="text" value={lastname} onChange={(e) => setLast(e.target.value)} className="input" placeholder="LastName" required/>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required/>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required/>
                    <div align="center">
                        <button type="submit" className="button">
                            <span>Register</span>
                        </button>
                    </div>
                    <h2 className="error"> {error} </h2>
                </form>
            </div>
        </div>
    )
}

export default SignupForm;