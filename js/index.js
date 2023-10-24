function addTask() {
    const taskInput = document.getElementById('task');
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    const taskList = document.getElementById('task-list');
    const li = document.createElement('li');
    li.innerHTML = `<input type="checkbox" onchange="toggleComplete(this)"> ${taskText} <button onclick="deleteTask(this)">Delete</button>`;
    taskList.appendChild(li);

    taskInput.value = '';
}

function toggleComplete(checkbox) {
    const li = checkbox.parentElement;
    if (checkbox.checked) {
        li.style.textDecoration = 'line-through';
    } else {
        li.style.textDecoration = 'none';
    }
}

function deleteTask(button) {
    const li = button.parentElement;
    li.remove();
}



document.getElementById('contact-form').addEventListener('submit', function (event) {
    let valid = true;

    // Name validation
    const nameInput = document.getElementById('name');
    const nameError = document.getElementById('name-error');
    if (nameInput.value.trim() === '') {
        nameError.textContent = 'Name is required';
        valid = false;
    } else {
        nameError.textContent = '';
    }

    // Email validation
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('email-error');
    if (!isValidEmail(emailInput.value)) {
        emailError.textContent = 'Invalid email format';
        valid = false;
    } else {
        emailError.textContent = '';
    }

    // Problem validation
    const problemInput = document.getElementById('problem');
    const problemError = document.getElementById('problem-error');
    if (problemInput.value.trim() === '') {
        problemError.textContent = 'Message is required';
        valid = false;
    } else {
        problemError.textContent = '';
    }

    if (!valid) {
        event.preventDefault(); // Prevent form submission if there are errors
    }
});

// accordion
function toggleAccordion(accordionName) {
    var accordionContent = document.getElementById(accordionName);
    if (accordionContent.style.display === "block") {
        accordionContent.style.display = "none";
    } else {
        accordionContent.style.display = "block";
    }
}

function showNotification(message) {
    alert(message);
}














// Function to validate email format
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

let countdownInterval;
let countdownTime;

function startCountdown() {
    const durationInput = document.getElementById('duration');
    const countdownDisplay = document.getElementById('countdown');

    // Get user input for timer duration
    const duration = parseInt(durationInput.value);
    
    if (isNaN(duration) || duration <= 0) {
        alert('Please enter a valid duration in seconds.');
        return;
    }

    // Disable input and start button during the countdown
    durationInput.disabled = true;
    document.querySelector('button').disabled = true;

    // Calculate the target time for the countdown
    const targetTime = Date.now() + (duration * 1000);

    // Start the countdown
    countdownInterval = setInterval(updateCountdown, 1000, targetTime, countdownDisplay);
}

function updateCountdown(targetTime, display) {
    const currentTime = Date.now();
    const timeLeft = Math.max(0, Math.floor((targetTime - currentTime) / 1000));

    display.textContent = timeLeft;

    if (timeLeft === 0) {
        // Countdown is complete, stop the timer and re-enable input and button
        clearInterval(countdownInterval);
        document.getElementById('duration').disabled = false;
        document.querySelector('button').disabled = false;
    }
}

// Initially, you might want to hide the countdown element
document.getElementById('countdown').style.display = 'none';


function myFunction(title) {
    alert("The " + title + " was added to your card");
}





