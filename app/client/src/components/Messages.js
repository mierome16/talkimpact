import React, {useEffect} from 'react'
import { useSelector } from 'react-redux'
import moment from 'moment'
import Linkify from 'react-linkify'
import '../styles/chatroom.css'

export default props => {
    const messages = useSelector(appState => appState.chatReducer.messages
        .filter(message => message.room === props.room))


    return (
            <div className="messages">
                {/* <header id="messageheader">
                    message room 
                </header> */}
                
                {messages.map((message, i) => {
                    const regex = /(https?:\/\/.*\.(?:png|jpg|gif))/i
                    let img = ''
                    if(regex.test(message.text)){
                        img = <img alt="" src={message.text.match(regex)[0]}></img>
                    }
                    return (
                        <div className="msgwimg">
                            <div className="singlemsg" key={`message${i}`}>
                                <h3 className="nametime"><img className="userpic"src="https://urbandsm.com/forum/styles/FLATBOOTS/theme/images/user4.png"></img><span className="name">{message.username}</span> <span className="time">{moment(message.time).fromNow()}</span> </h3>
                                <p style={message.style}><Linkify>{message.text}</Linkify></p>
                            </div>
                            {img ? <div className="msgimg" >{img}</div> : ''}
                        </div>
                    )
                })}
            </div>
    )
}
