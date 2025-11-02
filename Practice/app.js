const inputBox = document.getElementById("input-box");
const addBtn = document.getElementById("add-btn");

const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
addBtn.addEventListener("click", () => {
    const taskCheck = inputBox.value.trim();
    console.log(taskCheck);

    const newTask = {
        id: Date.now(),
        text: taskCheck
    }
    if(taskCheck === "") return;
    localTask();
    tasks.push(newTask);
});

function localTask(){
     localStorage.setItem("tasks", JSON.stringify(tasks));
}
