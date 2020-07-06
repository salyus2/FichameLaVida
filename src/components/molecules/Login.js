import React from "react";

import "./../../css/molecules/login.css"

import closer from "./../../img/closer.png"

class Login extends React.Component {

    constructor(props){
        super(props)
    }
    
    render () {
        const {hideLogin}= this.props
        return(
            <article id= "login">
                <img src= {closer} alt= "Close Login" id= "closer" onClick= {()=> {hideLogin()}}/>
                <form>
                <fielset className= "field-group">
                <label>Email</label>
                <input type= "email" placeholder= "Email"/>
                </fielset>   
                <fielset className= "field-group">
                <label>Contraseña</label>
                <input type= "password" placeholder= "Password"/>
                </fielset>
                <button>Aceptar</button>
                </form>
            </article>
        )
    }
}

export default Login