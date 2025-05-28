const putData=()=>{
    const update = {
        titulo: "Actualizado",
        descripcion: "actualizado",
        fecha: new Date().toISOString()
    };
    fetch(`${API_URL}/2`,{
        method: "PUT",
        Headers: {
            "Content-Type":"application/json",
            "Accept":"application/json"
        },
        body:JSON.stringify(update)
    })
    .then(response=>{
        if(!response.ok){
            throw new console.error(`ERROR EN LA RESPUESTA estado: ${response.status}`);
        }
        return response.json
    }).then(data => showResult(data))
    .catch(error => showResult(error.message,true));
}