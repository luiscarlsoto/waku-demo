import React, {useEffect} from 'react'
import "./auth.css" 
import logo from '../assets/Steam-Logo.png'
import { useHistory } from 'react-router-dom'

export const Auth = (props) => {
    const  history = useHistory()
    const server = process.env.REACT_APP_URL_SERVER || 'http://localhost:4000';
    const query = new URLSearchParams(props.location.search)

    const addToken =()=>{
        localStorage.setItem('token','demoToken')
        history.push('/games')
    }
    return (
        <div className="login-box">
            <img alt="logoSteam" src={logo}></img>
            <h2 className="title">Sign in</h2>
            <div>
                <button onClick={addToken} className="btn-fb">Sign in with facebook</button>
            </div>
        </div>
    ) 
}

export default Auth