// Cute To-Do List JS
// Created by Ayla Y.
// A to-do list formatted in the style of The Oatmeal. A fun way to experiment with JavaScript and CSS.

// Create empty array to store tasks in
const taskList = [];

// Create JS object for addTask ('.new')
const newTaskButton = document.querySelector(".new");

// Create JS object for randomTask ('.random')
const randomTaskButton = document.querySelector(".random");

// Create JS object for seeTask ('.see')
const seeTasksButton = document.querySelector(".see");

// Create JS object for showTasksList ('.finishedListContainer')
let showTasksList = document.querySelector(".finishedListContainer");

// If user selects newTaskButton ("New Task"), get task from user
newTaskButton.onclick = () => {
  let getNewTask = prompt("Enter a task");
  if (getNewTask != null)
    {
      taskList.push(" " + getNewTask);
    }
}

// Else if user selects randomTaskButton ("Generate Random Task"), display random task from task list
randomTaskButton.onclick = () => {
  if(taskList.length == 0) {
    randomTaskButton.textContent = "Oh no! This list is empty :("
  } else {
    let randomTask = Math.floor(Math.random() * taskList.length);
    randomTaskButton.textContent = taskList[randomTask];
  }
}

// Else if user selects seeTasksButton ("See Tasks"), display task list
seeTasksButton.onclick = () => {
  if (taskList.length == 0) {
    seeTasksButton.textContent = "Nothing to see here! Add a task using the 'New Task' button."
  }
  else {
      seeTasksButton.textContent = taskList.join(', ');
    }
}
