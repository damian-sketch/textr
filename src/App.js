import { ChatEngine } from 'react-chat-engine'
import ChatFeed from './components/ChatFeed'
import './App.css'

const App = () => {
  return (
    <ChatEngine
       height="100vh"
       projectID="b507829d-95f0-4fea-adee-02774e7ad823"
       userName="Adminuser"
       userSecret="123123"
       renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  )
}

export default App;
