import axios from "axios";
import { useEffect, useState } from 'react';
import './styles.css'

const ChatList = (props) => {

    const [list, setList] = useState('')

    // this will be called after render
    useEffect(() => {
        const authObject = {'Project-ID': process.env.REACT_APP_PROJECT_ID, 'User-Name': 'aangjul', 'User-Secret': '12341234' }
        axios.get('https://api.chatengine.io/chats/', {headers: authObject})
                                    .then((response) => {
                                        const texts = response.data
                                        console.log(texts)
                                        const textitems = texts.map((text) => {
                                            return text.title
                                        })

                                        
                                        setList(textitems)
                                    })
                                    .catch(error => console.error(`Error: ${error}`))
    }, []);

        // const { chats, activeChat } = props;
        // const chat = chats && chats[activeChat]
        
        return(
            <>
            {/* s */}
            <div className="chat-list">
                {list}
            </div>
            </>
        )


   
}

export default ChatList;