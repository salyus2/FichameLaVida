import React from "react";
import img from "./../../../img/Home.jpg"

import "./../../../css/components/Homepage/home.css";


class Home extends React.Component {
    render() {
                return(
            <article id="home">
                <img src= {img} id= "homeimg" alt= "photo rute"/>
                <div>
                <p className= "hometext">Fíchame la vida es una aplicación diseñada para para poder llevar a cabo, de manera sencilla el control horario de los trabajadores de cualquier empresa. Para ello tan solo será necesario una cuenta de usuario a través de la cual podrás acceder a una ficha rellenable en la cual cada trabajador indicará al final de su jornada laboral el tiempo trabajado para la empresa, el lugar de trabajo y el día. Puede además añadir comentarios a la ficha de ser necesario.</p>
                </div>
            </article>
        )
    }
}

export default Home