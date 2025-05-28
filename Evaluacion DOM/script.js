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
        //funcion para añadir una nueva tarea*/
        if (itemText === '') {
            alert('la casilla esta vacia porfavor ingresa  una tarea.');
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

    
    newItemInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addBtn.click();
        }
    });

    // funcion de tachado de el  último item 
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