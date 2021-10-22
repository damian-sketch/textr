import { useState } from 'react'
import axios from 'axios'
import './styles.css';
import SignupForm from '../signup/SignupForm'


const LoginForm = () => {
    const projectId = process.env.REACT_APP_PROJECT_ID

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isOpen, setIsOpen] = useState(false);
 
    // signup popup
    const togglePopup = () => {
      setIsOpen(!isOpen);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        //header for authentication
        const authObject = { 'Project-ID': projectId, 'User-Name': username, 'User-Secret': password}
        
        // store credentials in local storage if they are valid
        try {
            await axios.get('https://api.chatengine.io/chats', { headers: authObject });
            localStorage.setItem('username', username)
            localStorage.setItem('password', password)

            window.location.reload()
         } catch (error) {
             setError('Incorrect credentials, try again')
         }
                            
    }

    


    return(
        
            <div className="wrapper">
                <div className="form">
                    <h1 className="title">TEXTR</h1>
                    <form onSubmit={handleSubmit}>
                        <input data-testid="username" type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required/>
                        <input data-testid="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required/>
                        <div align="center">
                            <button title="login-button" type="submit" className="button">
                                <span>Login</span>
                            </button>
                        </div>
                        <h2 className="error"> {error} </h2>
                    </form>
                    <button className="signup-button" onClick={togglePopup}>Get an account</button>

                    {isOpen && <SignupForm handleClose={togglePopup} />}
                    
                </div>
            </div>
         
    )

}

export default LoginForm;