document.addEventListener('DOMContentLoaded', function () {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    function renderTasks() {
        taskList.innerHTML = '';
        tasks.forEach((task, index) => {
            const li = document.createElement('li');
            li.textContent = task.text;
            if (task.completed) {
                li.classList.add('completed');
            }
            li.addEventListener('click', () => toggleTask(index));

            const buttonContainer = document.createElement('div');
            buttonContainer.classList.add('button-container');

            const updateButton = document.createElement('button');
            updateButton.innerHTML = '<i class="fas fa-edit"></i>';
            updateButton.classList.add('update-btn');
            updateButton.addEventListener('click', (event) => updateTask(event, index));

            const deleteButton = document.createElement('button');
            deleteButton.innerHTML = '<i class="fas fa-trash-alt"></i>';
            deleteButton.classList.add('delete-btn');
            deleteButton.addEventListener('click', (event) => deleteTask(event, index));

            buttonContainer.appendChild(updateButton);
            buttonContainer.appendChild(deleteButton);

            li.appendChild(buttonContainer);

            taskList.appendChild(li);
        });
    }

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            tasks.push({ text: taskText, completed: false });
            taskInput.value = '';
            saveTasks();
            renderTasks();
        }
    }

    function toggleTask(index) {
        tasks[index].completed = !tasks[index].completed;
        saveTasks();
        renderTasks();
    }

    function deleteTask(event, index) {
        event.stopPropagation();
        tasks.splice(index, 1);
        saveTasks();
        renderTasks();
    }

    function updateTask(event, index) {
        event.stopPropagation();
        const newTaskText = prompt('Enter the updated task:');
        if (newTaskText !== null && newTaskText.trim() !== '') {
            tasks[index].text = newTaskText.trim();
            saveTasks();
            renderTasks();
        }
    }

    function saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
    document.getElementById('addTaskBtn').addEventListener('click', addTask);
    taskList.addEventListener('click', function (event) {
        if (event.target.tagName === 'LI') {
            const index = Array.from(taskList.children).indexOf(event.target);
            toggleTask(index);
        }
    });
    renderTasks();
});
