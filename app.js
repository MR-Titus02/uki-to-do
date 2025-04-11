let totalTasks = 0;
let completedTasks = 0;
let tasks = [];

// Load tasks from localStorage
window.onload = function () {
  const saved = JSON.parse(localStorage.getItem("tasks"));
  if (saved) {
    tasks = saved;
    tasks.forEach(task => renderTask(task.text, task.level, false));
    updateCount();
  }
};

function myFunction() {
  let field = document.getElementById("field").value.trim();
  let level = document.getElementById("dropDown").value;

  if (field === "") return;

  renderTask(field, level, true);

  document.getElementById("field").value = "";
}

function renderTask(text, level, save) {
  let taskList = document.getElementById("taskList");

  let list = document.createElement("div");
  list.className = `task-item ${level.toLowerCase()}`; // Apply color class to the container

  let span = document.createElement("span");
  span.className = "lists";
  span.textContent = `${text}`;

  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  checkbox.addEventListener("click", function () {
    taskList.removeChild(list);
    completedTasks++;
    totalTasks--;
    tasks = tasks.filter(task => !(task.text === text && task.level === level));
    localStorage.setItem("tasks", JSON.stringify(tasks));
    updateCount();
  });

  list.appendChild(span);
  list.appendChild(checkbox);
  taskList.appendChild(list);

  if (save) {
    tasks.push({ text, level });
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  totalTasks++;
  updateCount();
}

function updateCount() {
  document.getElementById("count_total").textContent = totalTasks;
  document.getElementById("count_done").textContent = completedTasks;
}
