import React from 'react'
import { logout } from '../actions/auth.actions'

export default props => {
    return (
        <div>
            <h1>You're in a Chat Room</h1>
            <button onClick={logout}>Logout</button>
        </div>
    )
}
