const setTask = document.getElementById("setTask");
const btnAdd = document.querySelector("button");
const taskList = document.getElementById("taskList");

function addTask() {
  console.log("pasa por aquí");
  if (setTask.value) {
    //Check if value is not null
    //Create row
    let newTask = document.createElement("div");
    newTask.classList.add("task");

    //Create task text
    let text = document.createElement("p");
    text.innerHTML = setTask.value;

    //Adds task text to the new task
    newTask.appendChild(text);

    //Create buttons an its container and append it to it
    let optionContainer = document.createElement("div");
    let btnComplete = document.createElement("img");
    btnComplete.src = "./img/icoCheck.png";
    btnComplete.addEventListener("click", completeTask);

    let btnDelete = document.createElement("img");
    btnDelete.src = "./img/icoDelete.png";
    btnDelete.addEventListener("click", deleteTask);
    optionContainer.append(btnComplete, btnDelete);

    //Adds option containter to the new task
    newTask.appendChild(optionContainer);

    taskList.appendChild(newTask);
  } else {
    alert("Debe de agregar texto en la caja de texto");
  }
}

function completeTask(e) {
  let task = e.target.parentNode.parentNode;
  console.log(task);
  task.classList.toggle("completed");
  task.childNodes[1].childNodes[0].src = task.classList.contains("completed")
    ? "./img/icoReturn.png"
    : "./img/icoCheck.png";
}

function deleteTask(e) {
  let task = e.target.parentNode.parentNode;
  task.remove();
}

btnAdd.addEventListener("click", addTask);
setTask.addEventListener("keydown", (e) =>{
    if (e.key === 'Enter'){
        addTask()
    }
})
