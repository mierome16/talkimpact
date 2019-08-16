import React, { useEffect } from 'react'
import { logout } from '../actions/auth.actions'
import '../styles/chatroom.css'

import Messages from './Messages'
import ChatForm from './ChatForm'
import ChannelBar from './ChannelBar'
import UsersBar from './UsersBar'
import { join } from 'path';

export default props => {

    useEffect(() => {
        join(props.match.params.roomname)
    }, [props.match.params.roomname])
    return (
        <div className="chatpage">
            <header>
                <h2>devDiscuss( )</h2>
                <button className="logoutbutton"onClick={logout}>Logout</button>
            </header>
            <div className="chatapp">
                <ChannelBar/>
            <div className="chatcontainer">
            <Messages room={props.match.params.roomname}></Messages>
            <ChatForm room={props.match.params.roomname}></ChatForm>
            </div>
                <UsersBar/>
            </div>
        </div>
    )
}
