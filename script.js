let todos = [];

const todoInput = document.getElementById('todoInput');
const todoList = document.getElementById('todoList');
const addTodoBtn = document.getElementById('addTodoBtn');

function renderTodos() {
    const todoItems = todos.map((todo, index) => {
        return `
            <li>
                ${todo}
                <button onclick="removeTodo(${index})">Delete</button>
            </li>
        `;
    }).join('');
    todoList.innerHTML = todoItems;
}
function addTodo() {
    const newTodo = todoInput.value.trim();
    if (newTodo !== '') {
        todos = [...todos, newTodo];
        renderTodos();
        todoInput.value = '';
    }
}

function removeTodo(index) {
    todos = todos.filter((_, i) => i !== index);
    renderTodos();
}

addTodoBtn.addEventListener('click', addTodo);


todoInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addTodo();
    }
});


function removeTodo(index) {
    todos = todos.filter((_, i) => i !== index);
    renderTodos();
}
todoInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addTodo();
    }
});