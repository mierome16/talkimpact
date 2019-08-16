import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/chatroom.css'

export default props => {


    return (
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
    )
}
