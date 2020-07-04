import React from "react";
import ImageSlide from "../molecules/ImageSlide";
import Menu from "../molecules/Menu";

import "./../../css/components/Homepage/header.css";

class Header extends React.Component {
    render() {
        const {slideImage} = this.props;
        return(
            <React.Fragment>
                <h1 id= "title">Fíchame la Vida</h1>
                <ImageSlide
                slideImage= {slideImage}
                />              
                <Menu/>            
            </React.Fragment>
        )
    }
}

export default Header