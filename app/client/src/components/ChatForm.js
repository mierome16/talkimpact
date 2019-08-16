import React, {useState} from 'react'
import { sendMessage } from '../actions/chat.actions'
import '../styles/chatroom.css'
import MaterialIcon, {colorPalette} from 'material-icons-react';

export default props => {

    const [message, setMessage] = useState('')
    function handleSubmit(e){
        e.preventDefault()
        sendMessage(message, props.room)
        setMessage('')
    }
    return (
        <form className="msginput"onSubmit={handleSubmit}>
            <textarea onChange={e => setMessage(e.target.value)} value={message}></textarea>
            <button onClick={handleSubmit} type="submit"><MaterialIcon icon="send"/></button>
        </form>
    )
}
