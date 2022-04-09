import 'regenerator-runtime/runtime';
import axios from 'axios';


const instance = axios.create({
    baseURL: 'https://2779-167-249-240-246.ngrok.io/',
    timeout: 2000,
  });

async function getUsers(){
    try {
        const response = await instance.get('/usuarios', {
            params: {
                usuario : "b"
            }})
        handleResponse(response)
    }
    catch(error){
        console.log(error);
    }
}

getUsers()

function handleResponse(response) {
    document.body.innerHTML = response.data.map( user => 
        `<p>${user.nome} ${user.email} ${user.nick}</p>
        `
        )

    // document.getElementById("usuario").innerHTML = response.data.map( user => {user})
}