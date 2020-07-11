import React from "react";

import error from "./../../img/404.jpg"
import "./../../css/molecules/notfound.css"

class NotFound extends React.Component{
    render(){
        return(
            <article id= "not_found">
                <img alt= "404" src= {error}/>
            </article>
        )
    }
}

export default NotFound