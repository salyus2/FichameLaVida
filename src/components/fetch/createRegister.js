import config from "./../../config"
import jwt_decode from 'jwt-decode';
import UserProfile from './../molecules/session'

function createRegister(event) {
    const token = UserProfile.getToken()
    console.log(token)
    const data= {
    workDate: event.target.date.value,
    workplace: event.target.workplace.value,
    timeIn: event.target.time_in.value,
    timeOut: event.target.time_out.value,
    observations: event.target.observations.value,
    token: token

}
console.log(data)
    fetch('http://192.168.0.22:8080/api/createRegister',{
        method: "POST",
        headers: {
        'Bearer': token,
        'Content-Type': 'application/json',
    },
        body: JSON.stringify(data)
            }) .then(
                response=> {
                    if(response.ok){
                    alert('Registrado correctamente')
                    }else if(response) {
                    alert('Algo ha ido mal')
                    }

                }
            )
}

export default createRegister