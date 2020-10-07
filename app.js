// Selector
const todoInput = document.querySelector(".todo-Input");
const buttonTodo = document.querySelector(".todo-Button");
const todoList = document.querySelector(".todoListUL");

//Adding Event Listners

buttonTodo.addEventListener("click", appFunc);
todoList.addEventListener("click", deleteFunc);

//Todo App Functionality

function appFunc(event) {
  //Stop reolading of page
  event.preventDefault();

  //Create div for li

  const todoDiv = document.createElement("div");
  todoDiv.classList.add("div-List");

  //Create li for submit

  const todoListUpdate = document.createElement("li");
  todoListUpdate.innerText = todoInput.value;
  todoListUpdate.classList.add("todoListItem");

  // append list to div
  todoDiv.appendChild(todoListUpdate);

  // create check button
  const checkmate = document.createElement("button");
  checkmate.innerHTML = "<i class='fas fa-check-double'></i>";
  checkmate.classList.add("checker-btn");
  todoDiv.appendChild(checkmate);

  // add delete and check button
  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = "Delete";
  deleteButton.classList.add("delete-btn");
  todoDiv.appendChild(deleteButton);

  // append div to ul
  todoList.appendChild(todoDiv);
  //clear input after submition
  todoInput.value = "";
}

function deleteFunc(e) {
  const deletedEle = e.target;
  //Delete Todo
  if (deletedEle.classList[0] === "delete-btn") {
    const todoAPP = deletedEle.parentElement;
    //animation
    todoAPP.classList.add("fall");
    todoAPP.addEventListener("transitionend", function () {
      todoAPP.remove();
    });
  }

  if (deletedEle.classList[0] === "checker-btn") {
    const todoapp = deletedEle.parentElement;
    todoapp.classList.toggle("finished");
  }
}
