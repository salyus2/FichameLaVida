import React from "react";
import createAccount from './../fetch/createAccount'
import "./../../css/molecules/userform.css"

import closer from "./../../img/closer.png"

class UserForm extends React.Component {
    constructor(props){
        super(props)
        this.hide= this.hide.bind(this)
        this.onSubmit= this.onSubmit.bind(this)
    }

    hide(){
        const {displayCreateAdminAccount, displayCreateAccount, typeForm} = this.props
        if (typeForm==="admin") {
            displayCreateAdminAccount()
        } else{
            displayCreateAccount()
        }

    }

    onSubmit(event){
        event.preventDefault();
        createAccount(event)
    }

    render() {

        return (
            
            <form id="register_form" onSubmit={e => {this.onSubmit(e)}}>
                <img src={closer} alt="Close Login" id="closer" onClick={() => {this.hide() }} />
                <fieldset className="user_form">
                    <label>Nombre</label>
                    <input id="name" type="name" placeholder="Nombre" />
                </fieldset>
                <fieldset className="user_form">
                    <label>Constraseña</label>
                    <input id="password" type="password" placeholder="Contraseña" />
                </fieldset>
                <fieldset className="user_form">
                    <label>Email</label>
                    <input id="email" type="email" placeholder="Email" />
                </fieldset>
                <button>Aceptar</button>
            </form >
        )
    }
}

export default UserForm