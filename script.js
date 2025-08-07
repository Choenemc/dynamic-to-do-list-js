document.addEventListener('DOMContentLoaded', function() {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {
        // Get and trim the task text
        const taskText = taskInput.value.trim();
        
        // Check if input is empty
        if (taskText === '') {
            alert('Please enter a task!');
            return;
        }

        // Create new list item
        const li = document.createElement('li');
        
        // Create task text span
        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;
        
        // Create remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.className = 'remove-btn';
        
        // Add click event to remove button
        removeBtn.addEventListener('click', function() {
            li.remove();
        });

        // Add double click to mark as complete
        li.addEventListener('dblclick', function() {
            li.classList.toggle('completed');
        });

        // Append elements to list item
        li.appendChild(taskSpan);
        li.appendChild(removeBtn);
        
        // Add list item to task list
        taskList.appendChild(li);
        
        // Clear input field
        taskInput.value = '';
        
        // Focus back on input
        taskInput.focus();
    }

    // Event listener for add button
    addButton.addEventListener('click', addTask);

    // Event listener for Enter key
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});


