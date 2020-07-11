import React from "react";
import LateralMenu from "./../molecules/LateralMenu"
import Demo from "./../molecules/Table"

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

    render() {
        const {
             isShowLateralMenu,
             isDisplayCreateAdminAccount,
             isDisplayCreateAccount
             } = this.state
        return (
            <React.Fragment>
                <header><div id="admin_header">
                    <button id= "admin_menu" onClick={() => { this.displayMenu() }}>Menu</button>
                    <h1>JalamelaVida</h1>
                    </div>
                    {isShowLateralMenu && 
                    <LateralMenu
                     displayCreateAdminAccount= {this.displayCreateAdminAccount}
                     displayCreateAccount= {this.displayCreateAccount}
                     
                     />}
                    {isDisplayCreateAdminAccount && <UserForm typeForm= "admin" displayCreateAdminAccount= {this.displayCreateAdminAccount}/>}
                    {isDisplayCreateAccount && <UserForm typeForm= "user" displayCreateAccount= {this.displayCreateAccount}/>}
                </header>
                <body>
                    <Demo/>
                </body>
            </React.Fragment>
        )
    }
}

export default Admin