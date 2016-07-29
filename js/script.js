var todos = ["By some eggs", "Code Javascript", "Read book"];
var todoElement = document.getElementById("todo-list");

loadTodo();

function loadTodo() {
  todoElement.innerHTML = "";
  for(var i = 0; i < todos.length; i++) {
    todoElement.innerHTML += i + 1 + ". " + todos[i] + "<br>";
  }
}

function addTodo() {
  var todoItem = prompt("What task do you want to do?");
  todos.push(todoItem);
  loadTodo();
}

function removeTodo() {
  var todoItemDone = prompt("Which todoitem do you want to remove?");
  todos.splice(parseInt(todoItemDone) - 1, 1);
  loadTodo();
}
