import React from "react";
import LateralMenu from "./../molecules/LateralMenu"
import Tabla from "./../molecules/Table"
import processFormLogin from "./../fetch/admin_login"
import UserProfile from "./../molecules/session"

import "./../../css/components/admin/admin.css"
import UserForm from "../molecules/UserForm";


class Admin extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isShowLateralMenu: false,
            isDisplayCreateAdminAccount: false,
            isDisplayCreateAccount: false

        }
        this.displayMenu = this.displayMenu.bind(this)
        this.displayCreateAdminAccount = this.displayCreateAdminAccount.bind(this)
        this.displayCreateAccount = this.displayCreateAccount.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    displayMenu() {
        const { isShowLateralMenu } = this.state;
        this.setState({
            isShowLateralMenu: !isShowLateralMenu
        })

    }

    displayCreateAdminAccount() {
        const { isDisplayCreateAdminAccount } = this.state
        this.setState({
            isDisplayCreateAdminAccount: !isDisplayCreateAdminAccount
        })
    }
    displayCreateAccount() {
        const { isDisplayCreateAccount } = this.state
        this.setState({
            isDisplayCreateAccount: !isDisplayCreateAccount
        })
    }
    onSubmit(event){
        event.preventDefault();
        console.log(event.target.email.value)
        processFormLogin(event)
    }
    

    render() {
        const {
             isShowLateralMenu,
             isDisplayCreateAdminAccount,
             isDisplayCreateAccount
             } = this.state
       const userId = UserProfile.getToken()
       const role = UserProfile.getRole()
    

    if(userId && role==="admin"){

        return (
            <React.Fragment>
                <header><div id="admin_header">
                    <button id= "admin_menu" onClick={() => { this.displayMenu() }}>Menu</button>
                    <h1>Fíchame la Vida</h1>
                    </div>
                    {isDisplayCreateAdminAccount && <UserForm typeForm= "admin" displayCreateAdminAccount= {this.displayCreateAdminAccount}/>}
                {isDisplayCreateAccount && <UserForm typeForm= "user" displayCreateAccount= {this.displayCreateAccount}/>}
                </header>
                {isShowLateralMenu && 
                    <LateralMenu
                     displayCreateAdminAccount= {this.displayCreateAdminAccount}
                     displayCreateAccount= {this.displayCreateAccount}
                     
                     />}
                <body id= "admin_body">
                    <Tabla/>
                </body>
            </React.Fragment>
        )
    }else{
    
        return( 
            <React.Fragment>
                <article id= "login">
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
            </React.Fragment>
        )
    
}
    }
}

export default Admin