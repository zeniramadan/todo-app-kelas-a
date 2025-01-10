const toDoInput = document.getElementById('textToDo');
const toDoAddUpdate = document.getElementById('addToDo');
const toDoAlert = document.getElementById('alertToDo');
const toDoList = document.getElementById('listTodo');

let todo = JSON.parse(localStorage.getItem('todo-list'));

if (!todo) {
    todo = [];
}

function addItem() {
    console.log("ADD")

    if (toDoInput.value === '') {
        toDoAlert.innerText = "Please enter your todo text"
        toDoInput.focus()
    } else {
        let li = document.createElement('li')
        const toDoItem = `<div ondblclick="completeToDo(this)">
                        ${toDoInput.value}
                        <i>Done</i>
                    </div>
                    <div>
                        <i>Edit</i>
                        <i>Delete</i>
                    </div>`;
        li.innerHTML = toDoItem;
        toDoList.appendChild(li);

        let item = {
            item: toDoInput.value,
            status: false
        };

        todo.push(item);
        setLocalStorage();

        toDoInput.value = '';
        setAlertMessage("Add ToDo Item Success!")
    }
}

function readToDoItems() {
    for (let element of todo) {
        let li = document.createElement('li')
        const toDoItem = `<div ondblclick="completeToDo(this)">
                        ${element.item}
                        <i>Done</i>
                    </div>
                    <div>
                        <i>Edit</i>
                        <i>Delete</i>
                    </div>`;
        li.innerHTML = toDoItem;
        toDoList.appendChild(li);
    }
}
readToDoItems();

function completeToDo(element) {
    console.log(element)
}

function setLocalStorage() {
    localStorage.setItem('todo-list', JSON.stringify(todo));
}

function setAlertMessage(message) {
    toDoAlert.innerText = message
}