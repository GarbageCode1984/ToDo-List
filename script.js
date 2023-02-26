const todoList = document.getElementById("todo-list");

const keyCodeCheck = function () {
    if (window.event.keyCode === 13) {
        const inputValue = document.getElementById("todo-input").value;
        const newLi = document.createElement("li");
        const newSpan = document.createElement("span");

        newSpan.textContent = inputValue;
        newLi.appendChild(newSpan);
        todoList.appendChild(newLi);
    }
};
