import React from "react";
import ImageSlide from "../molecules/ImageSlide";
import Menu from "../molecules/Menu";
import Logo from "./../../img/logo.png"

import "./../../css/components/Homepage/header.css";

class Header extends React.Component {
    render() {
        const {slideImage} = this.props;
        return(
            <header>
                <ImageSlide
                slideImage= {slideImage}
                />              
                <section>
                <h1 id="title"><img src={Logo}/></h1>
                <Menu/>    
                </section>        
            </header>
        )
    }
}

export default Header