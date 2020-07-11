import config from "./../../config"

function processFormLogin(event) {
    const data= {
    email: event.target.email.value,
    password: event.target.password.value
}

    fetch('http://192.168.0.22:8080/api/login',{
        method: "POST",
        headers: {
        'Content-Type': 'application/json',
    },
        body: JSON.stringify(data)
            }) .then(
                token=> {
                    console.log(token)
                }
            ) 
}

export default processFormLogin