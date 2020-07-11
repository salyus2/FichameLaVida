import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Header from "./Header";
import Home from "./pages/Home";
import Contact from "./pages/Contact"
import NotFound from "./../molecules/NotFound"



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
                    <Route exact path="/homepage">
                        <Home />
                    </Route>
                    <Route path="/homepage/contacto">
                        <Contact />
                    </Route>
                    <Route path="/homepage/*">
                    <NotFound/>
                    </Route>
                </Switch>
            </Router>
        )
    }
}

export default Homepage