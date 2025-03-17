const deleteIcon=()=>{
    const i =document.createElement('i')// creacion de un icono 
    i.classList.add("fas","fa-trash-alt","icon")//dando estilos al icono
    i.addEventListener("click",eliminarTarea)
    return i;

}
const eliminarTarea=(evento)=>{
    const parent=evento.target.parentElement;
    parent.remove();
} 
export default deleteIcon;