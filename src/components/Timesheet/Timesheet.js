import React from "react";
import { TextField } from "@material-ui/core"
import UserProfile from './../molecules/session';
import createRegister from './../fetch/createRegister';

import "./../../css/components/Timesheet/timesheet.css"

class TimeSheet extends React.Component {
    constructor(props){
        super(props)
        this.onSubmit= this.onSubmit.bind(this)
    }

    onSubmit(event){
        event.preventDefault();
        createRegister(event)
    }


    render() {
       const userId = UserProfile.getToken()
       const role = UserProfile.getRole()
       
        if(!userId){

        window.location="/homepage/"
        }else if(role === "user"){

        const date = new Date()
        return (
            <article id="ficha">
                
                <form onSubmit={e => {this.onSubmit(e)}}>
                    <fieldset className="date">
                        <label>Día</label>
                        <TextField
                            id="date"
                            type="date"
                            defaultValue={date}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </fieldset>
                    <fieldset className="workplace">
                        <label>Centro de Trabajo</label>
                        <input id="workplace" type="workplace" placeholder="Centro de Trabajo" />
                    </fieldset>
                    <fieldset className="start_time">
                        <label>Hora de Entrada</label>
                        <TextField
                            id="time_in"
                            type="time"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </fieldset>
                    <fieldset className="end_time">
                        <label>Hora de Salida</label>
                        <TextField
                            id="time_out"
                            type="time"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </fieldset>
                    <fieldset className="text">
                        <label>Comentarios</label>
                        <textarea id="observations" type="text" placeholder="Incluye aquí tu comentario" />
                    </fieldset>
                    <button>Enviar</button>
                </form>
            </article>
        )
    }

}
}


export default TimeSheet

//nombre (poner el id que me pasa back)
//rellenable para empresa
//rellenable para campo/sitio de trabajo, input tipe text
//date
// desplegable para poner la hora de entrada y salida 
// dibujar cuadro de comentario, input text area
// votón de enviar.
// pop up validación. Form