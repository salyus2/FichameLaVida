import React from "react";

 

import getDataRows from "./../fetch/getDataRows"

 

import "./../../css/molecules/table.css"

 

class Table extends React.Component {

    constructor(props) {

        super(props)

        this.state = { rows: [] }

    }

 

    componentDidMount(prevProps) {

    getDataRows().then(data=>{

 

        for(const row of data){

            let output = `

            <tr>

            <td>${row.workSheetId}</td>

            <td>${row.workPlace}</td>

            <td>${row.workDate}</td>

            <td>${row.workTimeIn}</td>

            <td>${row.workTimeOut}</td>

            <td>${row.observations}</td>

            </tr> `

           document.getElementById("t_body").innerHTML= output + document.getElementById("t_body").innerHTML;

        }

    })

        

    }





    render() {

 

        return (

            <table id="work_sheets">

                <tr className="table_header">

 

                    <th>Numero Identificación</th>

 

                    {/* <th>Opciones</th> */}

 

                    <th>Lugar de Trabajo</th>

 

                    <th>Fecha</th>

 

                    <th>Hora Entrada</th>

 

                    <th>Hora Salida</th>

 

                    <th>Observaciones</th>

 

                </tr>

                <tbody id="t_body">

                </tbody>

 

            </table>

        )

    }

}

 

export default Table

 

