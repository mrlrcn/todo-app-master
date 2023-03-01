const list = [];

function addToDo() {

    //Buscamos el input y guardamos su valor
    const inputValue = document.querySelector('.actions__input').value;

    //Creamos un objeto donde almacenar los datos que necesitemos
    const todoItem = {
        text: inputValue,
        status: 'ongoing',
        date: new Date(),
    };

    //Metemos el objeto en la lista
    list.push(todoItem);

    // Seleccionamos el contenedor en HTML (VACIO)
    const container = document.querySelector('.todo-list');
    container.innerHTML = '';

    //Hacemos un bucle para ejecutar esa función cada vez que se añada un elemento a la lista
    list.forEach(function(toDoItem) {
        const template = `<div class="todo-list_item">
            <input type="checkbox" class="todo-list_check">
            <label class="todo-list_label">${todoItem.text}</label>
        </div>`;
        container.innerHTML = container.innerHTML + template;

    });

    // Queremos que cuando se marque el checkbox(evento) se tache el texto. Para eso hay que añadir una clase a la etiqueta (tachado visual)
 
    // Constante compuesta de todos los checks de la lista
    const todoListChecks = document.querySelectorAll('.todo-list_check');

    // Para cada uno de ellos creamos una función
    todoListChecks.forEach(function(item, index) {
        // Relacionamos cada label con su check (con index) para escuchar el evento de cada uno de ellos segun su posición
        // Asumimos que siempre va a haber el mismo número de checks que de labels (check 0 con label 0, check 1 con label 1...)
        // NO podemos usar luego estas clases para otros inputs porque lo descuadra todo
        item.addEventListener('click', () => {
            const labels = document.querySelectorAll('.todo-list_label');
            labels[index].classList.toggle('completed')
        });
    });
    // Sería "más seguro" hacerlo a través del padre (contenedor) (mirar video clase)
    // ¡¡Repasar clase 3º método relacionando input e index de manera que no descuadran con id's!!
}

    
    
