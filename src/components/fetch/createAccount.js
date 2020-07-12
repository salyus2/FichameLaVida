import config from "./../../config"
import jwt_decode from 'jwt-decode';

function createAccount(event) {
    const data= {
    name: event.target.name.value,
    email: event.target.email.value,
    password:event.target.password.value

}
console.log(data)
    fetch('http://192.168.0.22:8080/api/createAccount',{
        method: "POST",
        headers: {
        'Content-Type': 'application/json',
    },
        body: JSON.stringify(data)
            }) .then(
                response=> {
                    if(response.ok){
                    alert('Registrado correctamente')
                    window.reload();
                    }else {
                    alert('Algo a ido mal')
                    }

                }
            )
}

export default createAccount