import config from "./../../config"
import jwt_decode from 'jwt-decode';
import UserProfile from "./../molecules/session"

function processFormLogin(event) {
    const data= {
    email: event.target.email.value,
    password: event.target.password.value,
    type: "admin"   
}

    fetch('http://192.168.0.22:8080/api/login',{
        method: "POST",
        headers: {
        'Content-Type': 'application/json',
    },
        body: JSON.stringify(data)
            }) .then(
                response=> {
                    if(response.ok){
                    return(response.json())
                    }else{
                        alert("Usuario o contraseña incorrectos")
                        window.location.reload()
                    }
                }
            ).then(token => {
                console.log(token.accessToken)
                console.log(token.role)

                UserProfile.setToken(token.accessToken)
                UserProfile.setRole(token.role)

                window.location.href="/admin"
            })
}

export default processFormLogin