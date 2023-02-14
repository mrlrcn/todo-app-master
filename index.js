const list = [];

function addToDo() {

    //Buscamos el input y guardamos su valor
    const inputValue = document.querySelector('.actions__input').value;

    //Creamos un objeto donde almacenar los datos que necesitemos
    const toDoItem = {
        text: inputValue,
        status: 'ongoing',
        date: new Date(),
    };

    //Metemos el objeto en la lista
    list.push(toDoItem);

    // Seleccionamos el contenedor en HTML (VACIO)
    const container = document.querySelector('.todo-list');
    container.innerHTML = '';

    //Hacemos un bucle para ejecutar esa función cada vez que se añada un elemento a la lista
    list.forEach(function(toDoItem) {
        const template = `<div class="todo-list__item">
            <input type="checkbox">
            <label>${toDoItem.text}</>
        </div>`;
        container.innerHTML = container.innerHTML + template;

    });

}