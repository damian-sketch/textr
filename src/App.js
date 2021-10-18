import { ChatEngine } from 'react-chat-engine'
import ChatFeed from './components/ChatFeed'
import LoginForm from './components/LoginForm'
import './App.css'

const App = () => {
  if(!localStorage.getItem('username')) return <LoginForm/>

  return (
    <ChatEngine
       height="100vh"
       projectID="b507829d-95f0-4fea-adee-02774e7ad823"
       userName={localStorage.getItem('username')}
       userSecret={localStorage.getItem('password')}
       renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  )
}

export default App;
