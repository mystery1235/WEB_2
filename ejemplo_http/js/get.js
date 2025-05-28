//se recupero el arvicho de la de la db.json
const API_URL = 'http://localhost:3000/posts'
//esta funcion nos sirve para hacer la conexion al
const getData =()=>{
    fetch(API_URL)
    .then(response =>{
        if(!response.ok){
            throw new Error(`error en la peticion get el estado es: ${response.status}`)
        }
        return response.json()
    })
    .then(data => showResult(data))
    .catch(error => showResult(error, message, true));
}