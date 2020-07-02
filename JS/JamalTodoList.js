// SELECTORS

const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

//EVENT LISTENER

todoButton.addEventListener("click", addTodo);

//FUNCTIONS

function addTodo(event) {
  Console.console.log("Hey");
  //prevent from Submitting
  event.preventDefault();
}
