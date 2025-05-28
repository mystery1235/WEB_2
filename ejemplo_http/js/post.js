//creamos una variable que contenga un archivo para enviar a la base de datos
const postData =()=>{
    const newPost = {
        titulo: "Nuevo Post",
        descripcion: "nueva descripcion",
        fecha: new Date().toISOString()
    };
    fetch(API_URL, {
        method: "POST",
        headers : {
            "Content-Type":"application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(newPost)
    })
    .then(response=>{
        if(!response.ok){
            throw new console.error(`ERROR EN LA RESPUESTA estado: ${response.status}`);
        }
        return response.json
    }).then(data => showResult(data))
    .catch(error => showResult(error.message,true));
};