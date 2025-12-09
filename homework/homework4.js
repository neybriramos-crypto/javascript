function displayMessage(message, isError = false) {
  const existingMessage = document.querySelector("#message");
  if (existingMessage) {
    console.log("Removing existing message");
    existingMessage.remove();
  }
  
  let alert = document.createElement("p");

  alert.id = "message";
  alert.textContent = message;

  if (isError) {
    alert.classList.add("text-red-500", "mt-2", "text-sm");
  } else {
    alert.classList.add("text-green-500", "mt-2", "text-sm");
  }

  const table = document.querySelector("#task-table");
  table.insertAdjacentElement("afterend", alert);
}

class TaskManager {
  constructor() {
    this.tasks = [];
  }

  add(title) {
    const task = new Task(title);
    this.tasks.push(task);

    this.updateDisplay();

    let msg = `Task "${title}" added successfully.`;
    displayMessage(msg);
  }

  edit(title) {
    const index = this.tasks.findIndex((task) => task.title === title);

    if (index === -1) {
      displayMessage("Task not found.", true);
      return;
    }

    let newTitle = prompt(
      "Enter the new title for the task:",
      this.tasks[index].title
    );
    if (newTitle !== null && newTitle.trim() !== "") {
      this.tasks[index].title = newTitle.trim();
      this.updateDisplay();
    }

    displayMessage(`Task updated to "${newTitle}".`);
  }

  remove(title) {
    const index = this.tasks.findIndex((task) => task.title === title);

    if (index === -1) {
      displayMessage("Task not found.", true);
      return;
    }

    displayMessage(`Task "${this.tasks[index].title}" removed successfully.`);

    this.tasks.splice(index, 1);
    this.updateDisplay();
  }

  changeStatus(title) {
    const index = this.tasks.findIndex((task) => task.title === title);

    if (index === -1) {
      displayMessage("Task not found.", true);
      return;
    }

    this.tasks[index].completed = !this.tasks[index].completed;
    this.updateDisplay();

    displayMessage(
      `Task "${this.tasks[index].title}" status changed successfully.`
    );
  }

  updateDisplay() {
    let tableBody = document.querySelector("#task-table-body");
    tableBody.innerHTML = "";

    this.tasks.forEach((task) => {
      let row = document.createElement("tr");
      row.innerHTML = `
        <td class="border border-gray-300 px-4 py-2">
        ${task.title}
        </td>
        <td class="border border-gray-300 px-4 py-2">
          ${task.completed ? "Completed" : "Pending"}
        </td>
        <td class="border border-gray-300 px-4 py-2">
          <button id="change-status-btn" onClick="taskManager.changeStatus('${
            task.title
          }')" class="bg-green-500 text-white p-1 rounded hover:bg-green-700 hover:cursor-pointer">
            <i class="fa-solid fa-check"></i>
          </button>
          <button id="edit-task-btn" onClick="taskManager.edit('${
            task.title
          }')" class="bg-yellow-500 text-white p-1 rounded hover:bg-yellow-700 hover:cursor-pointer">
            <i class="fa-solid fa-pen-to-square"></i>
          </button>
          <button id="delete-task-btn" onClick="taskManager.remove('${
            task.title
          }')" class="bg-red-500 text-white p-1 rounded hover:bg-red-700 hover:cursor-pointer">
            <i class="fa-solid fa-trash"></i>
          </button>
        </td>
      `;
      tableBody.appendChild(row);
    });
  }
}

class Task {
  constructor(title) {
    this.title = title;
    this.completed = false;
  }
}

const taskManager = new TaskManager();

const addTaskBtn = document.querySelector("#add-task-btn");
addTaskBtn.addEventListener("click", () => {
  let input = document.querySelector("#task-input");
  let title = input.value;
  taskManager.add(title);
  input.value = "";
});
