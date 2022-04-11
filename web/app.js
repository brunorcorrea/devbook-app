import 'regenerator-runtime/runtime';
import axios from 'axios';
import 'dotenv/config';

const instance = axios.create({
    baseURL: `http://localhost:${process.env.API_PORT}`,
    timeout: 2000
  });

async function getUsers(){
    try {
        const response = await instance.get('/usuarios', {
            params: {
                usuario : "j"
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