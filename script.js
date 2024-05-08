// Access DOM elements
const taskInput = document.getElementById('task-input');
const addButton = document.getElementById('add-btn');
const taskList = document.getElementById('task-list');

// Add a new task to the list
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        // Create a new list item
        const listItem = document.createElement('li');

        // Create a span for the task text
        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;
        taskSpan.className = 'task';
        listItem.appendChild(taskSpan);

        // Create a delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'delete-btn';
        deleteButton.addEventListener('click', function() {
            listItem.remove();
        });
        listItem.appendChild(deleteButton);

        // Add the list item to the task list
        taskList.appendChild(listItem);

        // Clear the input field
        taskInput.value = '';
    }
}

// Mark a task as completed
function toggleCompletion(event) {
    const clickedElement = event.target;
    if (clickedElement.classList.contains('task')) {
        clickedElement.classList.toggle('completed');
    }
}

// Event listeners
addButton.addEventListener('click', addTask);
taskList.addEventListener('click', toggleCompletion);
