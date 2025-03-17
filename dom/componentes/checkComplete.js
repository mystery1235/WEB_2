const checkComplete = () => {
    const i = document.createElement('i'); // crear de un icono en el link
    i.classList.add("far", "fa-check-square", "icon"); 
    i.addEventListener("click", toggleCheck); // cambie la funcion a toggleCheck
    return i;
};

const toggleCheck = (evento) => {
    const element = evento.target;
    element.classList.toggle('fas'); 
    element.classList.toggle('completeIcon');
    element.classList.toggle('far');
};

export default checkComplete;
