import React, { useEffect } from 'react'
import { logout } from '../actions/auth.actions'
import '../styles/chatroom.css'
import { Link } from 'react-router-dom'

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
        <div className="channels">
            <header id="sidebarheader">
                <h1>channelBar()</h1>
            </header>
            <div>
                <Link to="/general"><h4>general</h4></Link>
                <Link to="/Javascript"><h4>JavaScript</h4></Link>
                <Link to="/HTML"><h4>HTML</h4></Link>
                <Link to="/CSS"><h4>CSS</h4></Link>
                <Link to="/React"><h4>React</h4></Link>
            </div>
        </div>
            <div className="chatcontainer">
            <Messages room={props.match.params.roomname}></Messages>
            <div className="msgstyle">

            </div>
            <ChatForm room={props.match.params.roomname}></ChatForm>
            </div>
                <UsersBar/>
            </div>
        </div>
    )
}
