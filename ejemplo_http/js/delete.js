const deleteData=()=>{
    fetch(`${API_URL}/2266`,{
        method: "DELETE"
    })
    .then(response=>{
        if(!response.ok){
            throw new console.error(`ERROR EN LA RESPUESTA estado: ${response.status}`);
        }
        showResult({
            message:"el post con id 1 fue eliminado",
            status: response.status
        });

}).catch(error => showResult(error.message, true))
};