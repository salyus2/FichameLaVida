import React from "react";
import Header from "./Header";
import Home from "./pages/Home";
import Contact from "./pages/Contact"


import wallpaper1 from "./../../img/Fondo_1.jpg";
import wallpaper2 from "./../../img/Fondo_2.jpg";

class Homepage extends React.Component {
       render() {
        const slideImage = [
            {
                src: wallpaper1,
                alt: "wp1"
            },
            {
                src: wallpaper2,
                alt: "wp2"
            }
        ]
        return (
            <React.Fragment>
                <Header
                    slideImage={slideImage}
                />
                <Contact/>
            </React.Fragment>
        )
    }
}

export default Homepage