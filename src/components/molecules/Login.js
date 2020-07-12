import React from "react";
import processForLogin from "./../fetch/login"

import "./../../css/molecules/login.css"

import closer from "./../../img/closer.png"

class Login extends React.Component {

    constructor(props){
        super(props)
        this.onSubmit= this.onSubmit.bind(this)
    }
    
    onSubmit(event){
        event.preventDefault();
        console.log(event.target.email.value)
        processForLogin(event)
    }
    
    render () {
        const {hideLogin}= this.props
        return(
            <article id= "login">
                <img src= {closer} alt= "Close Login" id= "closer" onClick= {()=> {hideLogin()}}/>
                <form onSubmit={e => {this.onSubmit(e)}}>
                <fieldset className= "field-group">
                <label>Email</label>
                <input id= "email" type= "email" placeholder= "Email"/>
                </fieldset>   
                <fieldset className= "field-group">
                <label>Contraseña</label>
                <input id= "password" type= "password" placeholder= "Password"/>
                </fieldset>
                <button>Aceptar</button>
                </form>
            </article>
        )
    }
}

export default Login