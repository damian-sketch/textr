import { ChatEngine, getOrCreateChat, IsTyping} from 'react-chat-engine';
import { useState } from 'react';

const DirectChat = () => {
    const [username, setUsername] = useState('')

    // fucntion called to create a direct chat
    const createDirectChat = (creds) => {
        getOrCreateChat(creds, {is_direct_chat:true, usernames: [username]},
            () => setUsername(''))
    }

    // render our chat form to create a direct chat
    function renderChatForm(creds) {
        return (
            <form >
				<input 
					placeholder='Username' 
					value={username} 
					onChange={(e) => setUsername(e.target.value)} 
				/>
				<button onClick={createDirectChat(creds)}>
					Create
				</button>
			</form>
        )
    }

    return (
		<ChatEngine
			height='100vh'
			projectID={process.env.REACT_APP_PROJECT_ID}
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderIsTyping={(typers) => <IsTyping />}
			renderNewChatForm={(creds) => renderChatForm(creds)}
		/>
	)
    
}


export default DirectChat;