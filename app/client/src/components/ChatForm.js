import React, {useState} from 'react'
import { sendMessage } from '../actions/chat.actions'
import '../styles/chatroom.css'
import MaterialIcon, {colorPalette} from 'material-icons-react';

export default props => {
    const [font, setFont] = useState('Arial')
    const [color, setColor] = useState('')
    const fonts= [
        'Arial',
        'Helvetica',
        'Times New Roman',
        'Times',
        'Courier New',
        'Verdana',
        'Georgia',
        'Palatino',
        'Garamond',
        'Bookman',
        'Comic Sans MS',
        'Trebuchet MS',
        'Arial Black',
        'Impact'
    ]
    const [message, setMessage] = useState('')

    function handleSubmit(e){
        e.preventDefault()
        sendMessage(message, font, color, props.room)
        setMessage('')
    }
    return (
        <form className="msginput"onSubmit={handleSubmit}>
            <div>
                <select onChange={e => setFont(e.target.value)}>
                    {fonts.map((f,i) => (
                        <option key={`font${i}`} value={f}>{f}</option>
                    ))}
                </select>
                <input type="color" value={color} onChange={e => setColor(e.target.value)}></input>
            </div>
            <textarea style={{fontFamily:font, color:color}} onChange={e => setMessage(e.target.value)} value={message}></textarea>
            <button onClick={handleSubmit} type="submit"><MaterialIcon icon="send"/></button>
        </form>
    )
}
