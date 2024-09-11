const taskInp = document.getElementById("task-inp");
const tasksContainer = document.querySelector(".tasks");

const addTaskBtn = document.getElementById("add-btn");

let allTasks = JSON.parse(localStorage.getItem("tasks")) || [];

addTaskBtn.onclick = () => {
  let newTask = {
    disc: taskInp.value,
  };
  taskInp.value != ""
    ? (allTasks.push(newTask), (taskInp.value = ""))
    : alert(`Write Task To Add!`);
  dispalyTask();
  localStorage.setItem("tasks", JSON.stringify(allTasks));
};

// Create Task and Dispaly it
function dispalyTask() {
  let taskCard = "";
  allTasks.forEach((tsk, index) => {
    taskCard += `
      <div class="task-group">
        <div class="taskText">
          <span class="task-num">${index + 1}</span>
          <h3>${tsk.disc}</h3>
        </div>
        <button class="btn" type="button" onclick="deleteTask(${index})" >Delete</button>
      </div>
  `;
  });
  tasksContainer.innerHTML = taskCard;
}
dispalyTask();

// Deleye Task
function deleteTask(index) {
  allTasks.splice(index, 1);
  localStorage.tasks = JSON.stringify(allTasks);
  dispalyTask();
}
