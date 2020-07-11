import React from "react";

import "./../../css/molecules/lateralmenu.css"

class LateralMenu extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const {displayCreateAdminAccount}= this.props
        const {displayCreateAccount}= this.props
        return(
            <article id= "lateral_menu_options">
                <button onClick= {()=> {displayCreateAdminAccount()}}>Crear Administrador</button>
                <button onClick= {()=> {displayCreateAccount()}}>Crear Cuenta Usuario</button>
                <button>Histórico</button>
                <button>Pendiente</button>
                <button>Logout</button>
            </article>
        )
    }
}


export default LateralMenu