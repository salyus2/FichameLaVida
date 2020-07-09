import React from "react";
import { TextField } from "@material-ui/core"

import "./../../css/components/Timesheet/timesheet.css"

class TimeSheet extends React.Component {

    render() {
        const date = new Date()
        return (
            <article id="ficha">
                <form>
                    <fieldset className="name">
                        <label>Nombre</label>
                        <input id="name" type="name" placeholder="Name" />
                    </fieldset>
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
                    <fieldset className="company">
                        <label>Empresa</label>
                        <input id="company" type="company" placeholder="Company" />
                    </fieldset>
                    <fieldset className="workplace">
                        <label>Centro de Trabajo</label>
                        <input id="workplace" type="workplace" placeholder="Workplace" />
                    </fieldset>
                    <fieldset className="start_time">
                        <label>Hora de Entrada</label>
                        <TextField
                            id="time1"
                            type="time"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </fieldset>
                    <fieldset className="end_time">
                        <label>Hora de Salida</label>
                        <TextField
                            id="time2"
                            type="time"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </fieldset>
                    <fieldset className="text">
                        <label>Commentarios</label>
                        <input id="text" type="text" placeholder="Text" />
                    </fieldset>
                    <button>Enviar</button>
                </form>
            </article>
        )
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