import checkComplete from "./componentes/checkComplete.js";
import deleteIcon from "./componentes/deleteIcon.js";

(() => {
    const btn = document.querySelector('[data-form-btn]');
    const list = document.querySelector('[data-list]');

    //funciona para actualizar el contador de tareas pendientes
    const updatePendingTasksCount = () => {
        const pendingTasks = document.querySelectorAll('.card:not(.completed)'); 
        const pendingTasksCount = document.getElementById('pendingTasksCount');
        pendingTasksCount.textCon   tent = pendingTasks.length; 
    };

    //sirve para crear una tarea
    const createTask = (evento) => {
        evento.preventDefault();
        const input = document.querySelector('[data-form-input]');
        const value = input.value.trim();

        if (value === "") {
            alert("Por favor, ingresa una tarea válida.");
            return;
        }

        const task = document.createElement('li');
        task.classList.add('card');
        input.value = '';

        const contTask = document.createElement('div');
        contTask.appendChild(checkComplete());

        const titleTask = document.createElement('span');
        titleTask.classList.add('task');
        titleTask.innerText = value;
        contTask.appendChild(titleTask);

        task.appendChild(contTask);
        task.appendChild(deleteIcon());
        list.appendChild(task);

        updatePendingTasksCount(); // actualiza el contador despurs de agregar una tarea
    };

    btn.addEventListener('click', createTask);

    list.addEventListener('click', (evento) => {
        if (evento.target.classList.contains('icon')) {
            updatePendingTasksCount(); // Actualiza el contador
        }
    });

    // Evento para actualizar 
    list.addEventListener('click', (evento) => {
        if (evento.target.classList.contains('fa-trash-alt')) {
            setTimeout(updatePendingTasksCount, 0); // espera a que la tarea se elimine antes de actualizar
        }
    });

    // inicializar el contador al cargar la pagina
    updatePendingTasksCount();
    /* const checkComplete=()=>{
        const i =document.createElement('i')// creacion de un icono 
        i.classList.add("far","fa-check-square","icon")//dando estilos al icono
        i.addEventListener("click",color)
        return i;
    }
    
    const color =(evento)=>{
        const element= evento.target
        element.classList.add('fas');
        element.classList.add('completeIcon');
        element.classList.remove('far');
    }; */

   /* const deleteIcon=()=>{
        const i =document.createElement('i')// creacion de un icono 
        i.classList.add("fas","fa-trash-alt","icon")//dando estilos al icono
        i.addEventListener("click",eliminarTarea)
        return i;

    }
    const eliminarTarea=(evento)=>{
        const parent=evento.target.parentElement;
        parent.remove();
    } */


    
})();
document.addEventListener('DOMContentLoaded', function() {
    const newItemInput = document.getElementById('newItem');
    const addBtn = document.getElementById('addBtn');
    const taskList = document.getElementById('taskList');
    const toggleBtn = document.getElementById('toggleBtn');
    const countBtn = document.getElementById('countBtn');
    const outputDiv = document.getElementById('output');
    const items = document.querySelectorAll('.item');


    addBtn.addEventListener('click', function() {
        const itemText = newItemInput.value.trim();
        /*aqui añadimos unaf unciones para añadir una nueva tarea*/
        if (itemText === '') {
            alert('El input está vacío. Por favor ingrese una tarea.');
            return;
        }
        
        const newItem = document.createElement('li');
        newItem.className = 'item task';
        newItem.textContent = itemText;
        newItem.dataset.id = Date.now();
        
        newItem.addEventListener('click', function() {
            this.classList.toggle('relleno');
        });
        
        newItem.addEventListener('dblclick', function() {
            this.remove();
        });
        
        taskList.appendChild(newItem);
        newItemInput.value = '';
    });

    // Agregamos  con Enter
    newItemInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addBtn.click();
        }
    });

    // Tachamos el  último elemento 
    toggleBtn.addEventListener('click', function() {
        const items = taskList.querySelectorAll('.item');
        if (items.length > 0) {
            items[items.length - 1].classList.add('tachado');
        }
    });

    // cuenta los  items
    countBtn.addEventListener('click', function() {
        const count = taskList.querySelectorAll('.item').length;
        outputDiv.textContent = `Total  tareas : ${count}`;
    });

    //  eventos para items iniciales
    items.forEach(item => {
        item.dataset.id = Date.now() - Math.floor(Math.random() * 1000);
        
        item.addEventListener('click', function() {
            this.classList.toggle('relleno');
        });
        
        item.addEventListener('dblclick', function() {
            this.remove();
        });
    });
});