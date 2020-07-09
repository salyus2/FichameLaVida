import React from "react";

import "./../../css/molecules/lateralmenu.css"

class LateralMenu extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const {displayCreateAdminAccount}= this.props
        return(
            <article id= "lateral_menu_options">
                <button onClick= {()=> {displayCreateAdminAccount()}}>Crear Cuenta Administrador</button>
                <button>Crear Cuenta Usuario</button>
            </article>
        )
    }
}


export default LateralMenu