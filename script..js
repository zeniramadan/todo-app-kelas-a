const toDoInput = document.getElementById('toDoInput');
const toDoAddUpdate = document.getElementById('addToDo');
const toDoAlert = document.getElementById('alertToDo');
const toDoList = document.getElementById('listToDo');;

let todo = [];

function addItem() {
    console.log("ADD")

    if (toDoInput.value === '') {
        toDoAlert.innerText = "Please enter your to do"
        toDoInput.focus()
    } else {
        let li = document.createElement('li')
        const toDoItem = `<div>
                            ${element.item}
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
        setAlertMassage('Add ToDo Item Success')
    }
}

function readToDoItems()