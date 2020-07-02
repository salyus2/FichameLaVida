import React from "react";
import ImageSlide from "./ImageSlide"

class Header extends React.Component {
    render() {
        const {slideImage} = this.props;
        return(
            <React.Fragment>
                <h2>Adios</h2>
                <ImageSlide
                slideImage= {slideImage}
                />
                
            </React.Fragment>
        )
    }
}

export default Header