import React from "react";
import Header from "./Header";

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
            <div>
                <h1>Hola</h1>
                <Header
                    slideImage={slideImage}
                />
            </div>
        )
    }
}

export default Homepage