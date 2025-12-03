// Select DOM elements
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Add task function
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    const li = document.createElement('li');

    // Task text span
    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;

    // Buttons container
    const btnContainer = document.createElement('div');
    btnContainer.classList.add('task-buttons');

    // Pending Button
    const pendingBtn = document.createElement('button');
    pendingBtn.textContent = 'Pending';
    pendingBtn.classList.add('pending-btn');
    pendingBtn.addEventListener('click', () => {
        li.classList.remove('completed');
    });

    // Completed Button
    const completeBtn = document.createElement('button');
    completeBtn.textContent = 'Completed';
    completeBtn.classList.add('complete-btn');
    completeBtn.addEventListener('click', () => {
        li.classList.add('completed');
    });

    // Delete Button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', () => {
        li.style.animation = 'fadeOut 0.3s ease-in-out';
        li.addEventListener('animationend', () => {
            li.remove();
        });
    });

    // Append buttons
    btnContainer.appendChild(pendingBtn);
    btnContainer.appendChild(completeBtn);
    btnContainer.appendChild(deleteBtn);

    // Add task text + buttons to list item
    li.appendChild(taskSpan);
    li.appendChild(btnContainer);

    // Add the new task to the list
    taskList.appendChild(li);

    // Clear input field
    taskInput.value = '';
}

// Event listeners
addTaskBtn.addEventListener('click', addTask);
taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addTask();
});
