import React from "react";
import Login from "./Login";


import "./../../css/molecules/menu.css";

class Menu extends React.Component {

    constructor(props) {
        super(props)
        this.state= {loginIsShow: false}
        this.showLogin= this.showLogin.bind(this) 
        this.hideLogin= this.hideLogin.bind(this)
    }
    showLogin(){
        this.setState({
            loginIsShow: true
        })
    }
    hideLogin(){
        this.setState({
            loginIsShow: false
        })
    }
    render() {
        const {loginIsShow}= this.state

                return(
            <ul id= "menu">
                <li className= "menu">
                    <a href= "/homepage/">
                        <button>Inicio</button>
                    </a>
                </li>
                <li className= "menu">
                    <a href= "/homepage/contacto">
                       <button>Contacto</button>
                    </a>
                </li>
                <li className= "menu">
                    <a onClick= {()=>{this.showLogin()}}>
                        <button>Login</button>                        
                    </a>
                    {loginIsShow && <Login hideLogin= {this.hideLogin}/>}
                </li>
            </ul>
        )
    }
}

export default Menu