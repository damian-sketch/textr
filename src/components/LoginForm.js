import { useState } from 'react'
import axios from 'axios'

const LoginForm = () => {
    let projectId = "b507829d-95f0-4fea-adee-02774e7ad823"

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

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
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required/>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required/>
                    <div align="center">
                        <button type="submit" className="button">
                            <span>Login</span>
                        </button>
                    </div>
                    <h2 className="error"> {error} </h2>
                </form>
            </div>
        </div>
    )

}

export default LoginForm;