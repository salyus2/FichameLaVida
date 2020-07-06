import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
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
            <Router>
                <Header
                    slideImage={slideImage}
                />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/contacto">
                        <Contact />
                    </Route>
                    <Route path="/*">

                    </Route>
                </Switch>
            </Router>
        )
    }
}

export default Homepage