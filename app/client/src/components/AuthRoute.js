import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default props => {
    const username = useSelector(appState => appState.authReducer.username)
    // const username = localStorage.getItem('username')
    return (
        username ? <Route {...props}></Route> : <Redirect to="/"></Redirect>
    )
}
