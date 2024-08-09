const tasks = [];

function loadFromLocalStorage() {
  const allTasks = JSON.parse(localStorage.getItem("allTasks"));

  if (allTasks) {
    tasks.push(...allTasks);
  }

  loadTasks();
}
loadFromLocalStorage();

function loadTasks() {
  localStorage.setItem("allTasks", JSON.stringify(tasks));

  const tasksContainer = document.getElementById("tasks-container");
  tasksContainer.innerHTML = "";

  for (const task of tasks) {
    tasksContainer.innerHTML += `
    <div class="todo-container">
      <div class="todo-item">
       ${task}
       <button class="btn-del" type="button" onclick="deleteTask('${task}')">
         Delete
       </button>
      </div>
     </div>
  `;
  }
}

function deleteTask(task) {
  const taskIndex = tasks.indexOf(task);
  tasks.splice(taskIndex, 1);

  loadTasks();
}

function addTask() {
  const taskInputElement = document.getElementById("task-input");
  const task = taskInputElement.value;

  if (!task) {
    alert("Please enter a task");
    return;
  }

  tasks.unshift(task);
  loadTasks();

  taskInputElement.value = "";
}