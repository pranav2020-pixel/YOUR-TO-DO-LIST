
function add() {
    let textv = document.getElementById("taskinput");
    let text = textv.value;

    if (text === "") {
        alert("Please! Enter your task.");
        return;
    }
    if (text.length > 60) {
        alert("Maximum limit reached");
        return;
    }

    let li = document.createElement("li");

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    let span = document.createElement("span");
    span.textContent = text;

    checkbox.onclick = function () {
        span.style.textDecoration = checkbox.checked ? "line-through" : "none";
        saveTasks();
    };

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌";
    deleteBtn.onclick = function () {
        li.remove();
        saveTasks();
    };

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);

    document.getElementById("taskList").appendChild(li);

    textv.value = "";
    saveTasks();
}

function saveTasks() {
    localStorage.setItem("tasks", document.getElementById("taskList").innerHTML);
}

function loadTasks() {
    let taskList = document.getElementById("taskList");
    taskList.innerHTML = localStorage.getItem("tasks") || "";

    taskList.querySelectorAll("li").forEach(li => {
        let checkbox = li.querySelector("input[type='checkbox']");
        let span = li.querySelector("span");
        let deleteBtn = li.querySelector("button");

        checkbox.onclick = function () {
            span.style.textDecoration = checkbox.checked ? "line-through" : "none";
            saveTasks();
        };

        deleteBtn.onclick = function () {
            li.remove();
            saveTasks();
        };
    });
}

window.onload = loadTasks;

