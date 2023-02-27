const todoInput = document.getElementById("todo-input");

const createTodo = function () {
    const todoList = document.getElementById("todo-list");
    const newLi = document.createElement("li");
    const newSpan = document.createElement("span");
    const newBtn = document.createElement("button");

    newBtn.addEventListener("click", () => {
        newLi.classList.toggle("complete");
    });

    newSpan.textContent = todoInput.value;
    newLi.appendChild(newBtn);
    newLi.appendChild(newSpan);
    todoList.appendChild(newLi);
    todoInput.value = "";
};

const keyCodeCheck = function () {
    if (window.event.keyCode === 13 && todoInput.value !== "") {
        createTodo();
    }
};
