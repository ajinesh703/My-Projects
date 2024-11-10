// Add a new task to the list
function addTask() {
  let taskInput = document.getElementById("taskInput");
  let task = taskInput.value.trim();

  if (task !== "") {
      let taskList = document.getElementById("taskList");
      let li = document.createElement("li");
      li.innerHTML = task + ' <button class="remove-btn" onclick="removeTask(this)">Remove</button>';
      taskList.appendChild(li);
      taskInput.value = ""; // Clear input field after adding
  } else {
      alert("Please enter a task!");
  }
}

// Remove a task from the list
function removeTask(button) {
  let li = button.parentElement;
  li.remove();
}
