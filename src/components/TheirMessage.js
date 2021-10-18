const TheirMessage = ( {lastMessage, message}) => {
    const isFirstMessageByUser = !lastMessage || lastMessage.sender.username !== message.sender.username;

    return (
        // if it's the first message
        <div className="message-row">
            {isFirstMessageByUser && (
                <div 
                  className="message-avatar"
                  style={{backgroundImage: `url(${message?.sender?.avatar})`}}
                />
            )}

                 {message?.attachments?.length > 0 // if it's an image
                    ? (
                        <img 
                           src={message.attachments[0].file}
                           alt="Message attachment"
                           className="message-image"
                           style={{ marginLeft: isFirstMessageByUser ? '4px' : '48px' }}
                        />
                    ) : (
                        // display it on the left
                        <div className="message" style={{ float: 'left', backgroundColor: 'green', marginLeft: isFirstMessageByUser ? '4px' : '48px'  }}>
                            {message.text}
                         </div>
                    )
                }
        </div>
    )
}

export default TheirMessage;