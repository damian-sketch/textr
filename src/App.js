import { ChatEngine, IsTyping } from 'react-chat-engine'
import ChatFeed from './components/chatfeed/ChatFeed'
import LoginForm from './components/login/LoginForm'
import './App.css'

const App = () => {
  // if not logged in return log in form
  if(!localStorage.getItem('username')) return <LoginForm/>

  return (
    
    <ChatEngine
       height="100vh"
       projectID={process.env.REACT_APP_PROJECT_ID}
       userName={localStorage.getItem('username')}
       userSecret={localStorage.getItem('password')}
       renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
       renderIsTyping={(typers) => <IsTyping />}
    />
  )
}

export default App;
