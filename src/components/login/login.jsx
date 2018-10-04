import React from 'react'
import './login.css'
import LoginBoxComponent from './login-form/login-form'

export default (props) => (
    <div className="login-main">
        <LoginBoxComponent router = {props}></LoginBoxComponent>
    </div>
)