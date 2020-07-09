import React from "react";
import LateralMenu from "./../molecules/LateralMenu"
import MaterialTableDemo from './../molecules/Table';


class Admin extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isShowLateralMenu: false,
            isDisplayCreateAdminAccount: false
        }
        this.displayMenu = this.displayMenu.bind(this)
        this.displayCreateAdminAccount = this.displayCreateAdminAccount.bind(this)

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

    render() {
        const {
             isShowLateralMenu,
             isDisplayCreateAdminAccount
             } = this.state
        return (
            <React.Fragment>
                <header>
                    <button onClick={() => { this.displayMenu() }}>Menu</button>
                    {isShowLateralMenu && <LateralMenu displayCreateAdminAccount= {this.displayCreateAdminAccount}/>}
                    {isDisplayCreateAdminAccount && "Esto es un Form"}
                </header>
            </React.Fragment>
            //<MaterialTableDemo/>
        )
    }
}

export default Admin