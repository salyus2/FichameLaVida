import config from "./../../config"
import jwt_decode from 'jwt-decode';
import UserProfile from './../molecules/session'

async function getDataRows(changeValues) {
    const data= {

}
console.log(data)
    fetch('http://192.168.0.22:8080/api/readEntries',{
        method: "GET",
        headers: {
        'Content-Type': 'application/json',
    },}) .then(
                response=> {
                    if(response.ok){
                       return response.json()
                    }else if(response) {
                    alert('Algo ha ido mal')
                    }

                }
            )
}

export default getDataRows