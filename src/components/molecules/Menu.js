import React from "react";


import "./../../css/molecules/menu.css";

class Menu extends React.Component {
    render() {
                return(
            <ul id= "menu">
                <li className= "menu">
                    <a href= "/">
                        Inicio
                    </a>
                </li>
                <li className= "menu">
                    <a href= "/contacto">
                       Contacto
                    </a>
                </li>
                <li className= "menu">
                    <a href= "/login">
                        Login
                    </a>
                </li>
            </ul>
        )
    }
}

export default Menu