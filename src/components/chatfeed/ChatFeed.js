import LogoutForm from '../logout/LogoutForm';
import MessageForm from '../messageform/MessageForm';
import MyMessage from '../mymessage/MyMessage';
import TheirMessage from '../theirmessage/TheirMessage';
import { useContext } from 'react'
import { ChatEngineContext, IsTyping, getOrCreateChat } from 'react-chat-engine'
import './styles.css'

const ChatFeed = (props) => {
    // destructure the props
    const { chats, activeChat, userName, messages, renderIsTyping} = props;
    const chat = chats && chats[activeChat];
    // console.log(chat.is_direct_chat)
    const {typingCounter} = useContext(ChatEngineContext)
    const typers = typingCounter && typingCounter[activeChat] ? typingCounter[activeChat] : []


    // function to render read receipts
    const renderReadReceipts = (message, isMyMessage) => chat.people.map((person, index) => person.last_read === message.id && (
        <div
          key={`read_${index}`}
          className="read-receipt"
          style={{
            float: isMyMessage ? 'right' : 'left',
            backgroundImage: person.person.avatar && `url(${person.person.avatar})`,
          }}
        />
      ));

      // function to render messages
    const renderMessages = () => {

        const keys = Object.keys(messages);
        return keys.map((key, index) => {
            const message = messages[key];
            const lastMessageKey = index === 0 ? null : keys[index - 1]
            const isMyMessage = userName === message.sender.username
            
            

            return (
                
                <div key={`msg_${index}`} style={{width: '100%' }}>
                    <div className="message-block">
                        {
                            isMyMessage
                            ? <MyMessage message={message} />
                            : <TheirMessage message={message} lastMessage={messages[lastMessageKey]} /> 
                        }
                    </div>
                    <div className="read-receipts" style={{ marginRight: isMyMessage? '18px': '0px', marginLeft: isMyMessage ? '0px': '68px'}}>
                         {renderReadReceipts(message, isMyMessage)}     
                   </div>    
                </div>
            )
        })
    }

    if(!chat) return (
        <>
        <p style={{textAlign: 'center', marginTop: '70px', fontSize: 'larger', fontWeight :'bolder'}}>Create a conversation to start chatting!</p> 
        <LogoutForm />
        </>
        )

    return (
        <>

        <div className="chat-feed">
            <div className="chat-title-container">
                <div className="chat-title">{chat.title}</div>
                <div className="chat-subtitle">
                    {chat.people.map((person) => `${person.person.username}`)}
                </div>
            </div>
            {renderMessages()}
            <div style={{ height: '100px' }} />
            <div className="message-form-container">
            <div className="isTyping">{renderIsTyping ? renderIsTyping(typers) : <IsTyping />}</div>
                <MessageForm {...props} chatId={activeChat} />
            </div>
        </div>
        <LogoutForm />
        </>
    );
}

export default ChatFeed;