import React, { useState } from 'react'
import { login } from '../actions/auth.actions'
import { Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Materialicon from 'material-icons-react'
import '../styles/login.css'

export default props => {
const [username, setUsername] = useState('')
const authorized = useSelector(appState => appState.authReducer.authorized)

    function handleSubmit(e){
        e.preventDefault()
        login(username)
        props.history.push('/general')
    }
    return (
        authorized ? <Redirect to="/general"></Redirect> :
        <div className="loginpage">
             <header>
                    
            </header>
            <div className="logincontainer">
                <img className="loginlogo"src='https://t3.ftcdn.net/jpg/01/20/04/80/240_F_120048024_wcshlHob8rAq3HpKn5rjcCYKXRMpmALY.jpg'></img>
                <h1 className="logintitle">Login</h1>
                <form onSubmit={handleSubmit}>
                    <div className="usernameinput">
                        <Materialicon icon="account_circle" id="usericon"/>
                    <input type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder="Enter a Username" id="username"></input>
                    </div>
                    <button type="submit" className="loginbutton">Login</button>
                </form>
            </div>
        </div>
    )
}
