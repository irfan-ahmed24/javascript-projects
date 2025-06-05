let inputName = document.querySelector("#title");
let inputDescription = document.querySelector("#details");
let inputForm = document.querySelector("#todoForm");
let todoList = document.querySelector(".AllList");

//delete todo item from the todo list
// This function is called when the delete button is clicked
const deleteTodo = (e) => {
  let todoItem = e.target.closest(".List");
  todoList.removeChild(todoItem);
};

inputForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let name = inputName.value;
  let description = inputDescription.value;

  let title = document.createElement("h2");
  let details = document.createElement("h4");
  title.innerHTML = name;
  details.innerHTML = description;
  let descriptionDiv = document.createElement("div");

  descriptionDiv.appendChild(title);
  descriptionDiv.appendChild(details);

  let deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.classList.add("btn");

  let deleteIcon = document.createElement("div");
  deleteIcon.appendChild(deleteButton);

  let todoItem = document.createElement("div");
  todoItem.classList.add("List");

  todoItem.appendChild(descriptionDiv);
  todoItem.appendChild(deleteIcon);

  todoList.appendChild(todoItem);

  inputName.value = "";
  inputDescription.value = "";

  // Add event listener to the delete button
  deleteButton.addEventListener("click", deleteTodo);
});
