import React from 'react'
import '../styles/chatroom.css'
import {useSelector} from 'react-redux'

export default props => {
    const messages = useSelector(appState => appState.chatReducer.messages
        .filter(message => message.room === props.room))


    return (
        <div className="usersbar">
            <header id="sidebarheader">
            <h1>usersBar()</h1>
            </header>
            <div>
                {messages.map(message => {
                    return <h4>{message.username}</h4>
                })}
            </div>
        </div>
    )
}
