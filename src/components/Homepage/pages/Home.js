import React from "react";
import img from "./../../../img/Home.jpg"

import "./../../../css/components/Homepage/home.css";


class Home extends React.Component {
    render() {
                return(
            <article id="home">
                <img src= {img} id= "homeimg" alt= "photo rute"/>
                <div>
                <p className= "hometext">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae massa varius, dapibus lectus et, sagittis mauris. Praesent condimentum fermentum dui, vitae rhoncus sem pulvinar a. Etiam in sem id turpis hendrerit tempus ut eu odio. Vestibulum bibendum malesuada feugiat. Aenean et lorem id purus faucibus iaculis. Nam facilisis ante consequat neque sagittis egestas. Praesent quis faucibus ligula.</p>
                <p className= "hometext">
Nunc nec nulla scelerisque sem tempus pellentesque. Pellentesque sollicitudin, eros a dapibus auctor, velit ex maximus risus, et eleifend nunc ipsum at leo. Sed quis mi molestie, malesuada ante sit amet, vulputate eros. Maecenas non interdum lacus. Morbi non ex id quam efficitur tincidunt in ac orci. Aliquam tristique tincidunt risus ut bibendum. Nunc et elit pharetra, ullamcorper velit non, sollicitudin lectus. </p>
</div>
            </article>
        )
    }
}

export default Home