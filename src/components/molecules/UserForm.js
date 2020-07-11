import React from "react";

import "./../../css/molecules/userform.css"

import closer from "./../../img/closer.png"

class UserForm extends React.Component {
    constructor(props){
        super(props)
        this.hide= this.hide.bind(this)
    }

    hide(){
        const {displayCreateAdminAccount, displayCreateAccount, typeForm} = this.props
        if (typeForm==="admin") {
            displayCreateAdminAccount()
        } else{
            displayCreateAccount()
        }

    }
    render() {

        return (
            
            <form id="register_form">
                <img src={closer} alt="Close Login" id="closer" onClick={() => {this.hide() }} />
                <fieldset className="user_form">
                    <label>Name</label>
                    <input id="name" type="name" placeholder="Nombre" />
                </fieldset>
                <fieldset className="user_form">
                    <label>Password</label>
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