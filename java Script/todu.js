let todos = [];

function addTodo() {

    let input = document.getElementById("todoInput");
    let list = document.getElementById("todoList");

    if (input.value == "") {
        alert("Please Enter Todo");
        return;
    }

    let li = document.createElement("li");

    li.innerHTML = `
        <span>${input.value}</span>
        <button onclick="editTodo(this)">Edit</button>
        <button onclick="deleteTodo(this)">Delete</button>
    `;

    list.appendChild(li);

    input.value = "";
}

function deleteTodo(button) {
    button.parentElement.remove();
}

function editTodo(button) {

    let li = button.parentElement;

    let text = li.querySelector("span");

    let newText = prompt("Edit Todo", text.innerText);

    if (newText != "" && newText != null) {
        text.innerText = newText;
    }
}