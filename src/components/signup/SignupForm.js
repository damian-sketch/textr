import { useState } from 'react';
import  axios from 'axios';
import './styles.css'


const SignupForm = (props) => {
    

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpass, setConfirm] = useState('');
    const [error, setError] = useState('');


    // function to handle the submit
    const handleSubmit = async (e) => {
        e.preventDefault();

        //header for authentication
        const authObject = {'Private-Key': '4922e43b-42bb-42b6-b063-ead3ca710071'}

        // check that credentials meet requirements
        if (!(password.length > 5)){
            setError('Your password should be more than 5 characters!')
        } else if (!(username.length > 3)) {
            setError('Your username should be more than 3 characters')
        }
        else if (password !== confirmpass) {
            setError('Your passwords do not match!')
        } 
        else {

            // get all users that exist
            const users = await axios.get('https://api.chatengine.io/users/', {headers: authObject})
            const people = (users.data)

            // return the array of their usernames
            const list = people.map(element => {
                return element.username
            });

            // check if the user already exists
            if(list.includes(username)){
                setError('This user already exists!')
            }else{

            // create a new user if they don't    
            await axios.post('https://api.chatengine.io/users/',
            { 'username': username,'secret': password },
            { headers: authObject},
            )
            // login the user
            localStorage.setItem('username', username)
            localStorage.setItem('password', password)

            window.location.reload()
        }
         
                            
    }

}

    return(
        <div className="signup-wrapper">
            <div className="signup-form">
            <span className="close-icon" onClick={props.handleClose}>x</span>
                <h1 className="signup-title">Register for an account</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required/>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required/>
                    <input type="password" value={confirmpass} onChange={(e) => setConfirm(e.target.value)} className="input" placeholder="Confirm Password" required/>
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