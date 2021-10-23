import { ChatEngine, IsTyping } from 'react-chat-engine'
import ChatFeed from './components/chatfeed/ChatFeed'
import LoginForm from './components/login/LoginForm'
import './App.css'
import DirectChat from './components/privatechat/PrivateChat'
import { useState } from 'react';
import ChatList from './components/chatlist/ChatList'

const App = () => {
  
  const [chat, setChat] = useState(false)
  
  // display dms and hide groupchats when button is clicked
  const handleClick = (bool) => {
    setChat(bool);
  }

  // if not logged in return log in form
  if(!localStorage.getItem('username')) return <LoginForm/>

  return (
    <>
     <button onClick={() => handleClick(true)}>
      dm
    </button>
    <button onClick={() => handleClick(false)}>
      groups
    </button>
    {chat ? <DirectChat /> : <ChatEngine
            height='100vh'
            projectID={process.env.REACT_APP_PROJECT_ID}
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatList={(chatAppState) => <ChatList {...chatAppState}/>}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
            renderIsTyping={(typers) => <IsTyping />}
			      
		/>}
    </>
  )
}

export default App;
