document.getElementById('taskInput').addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        addTask();
    }
});

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    const taskList = document.getElementById('taskList');

    const li = document.createElement('li');
    li.textContent = taskText;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'delete-btn';
    deleteButton.onclick = function () {
        taskList.removeChild(li);
    };

    li.appendChild(deleteButton);
    li.onclick = function () {
        li.classList.toggle('completed');
    };

    taskList.appendChild(li);
    taskInput.value = '';
}
