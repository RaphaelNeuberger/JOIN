// State
let tasks = [];
let subtasks = [];
let selectedPriority = 'Medium';

// DOM Elements
const form = document.getElementById('taskForm');
const titleInput = document.getElementById('title');
const descriptionInput = document.getElementById('description');
const dueDateInput = document.getElementById('dueDate');
const assignedToSelect = document.getElementById('assignedTo');
const categorySelect = document.getElementById('category');
const subtaskInput = document.getElementById('subtaskInput');
const subtaskList = document.getElementById('subtaskList');
const addSubtaskBtn = document.getElementById('addSubtaskBtn');
const clearBtn = document.getElementById('clearBtn');
const submitBtn = document.getElementById('submitBtn');
const successMessage = document.getElementById('successMessage');
const priorityButtons = document.querySelectorAll('.priority-buttons__button');

// Priority Selection
function handlePriority(e) {
  if (e.target.classList.contains('priority-buttons__button')) {
    priorityButtons.forEach(btn => btn.classList.remove('priority-buttons__button--active'));
    e.target.classList.add('priority-buttons__button--active');
    selectedPriority = e.target.dataset.priority;
  }
}

// Add Subtask
function addSubtask() {
  const value = subtaskInput.value.trim();
  if (!value) return;
  subtasks.push(value);
  renderSubtasks();
  subtaskInput.value = '';
}

// Render Subtasks
function renderSubtasks() {
  subtaskList.innerHTML = subtasks.map((task, index) => `
    <li class="subtask-list__item">
      <span class="subtask-list__text">${task}</span>
      <button type="button" class="subtask-list__delete" data-index="${index}">
        <svg width="16" height="16" viewBox="0 0 16 16">
          <path d="M4 4L12 12M12 4L4 12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        </svg>
      </button>
    </li>
  `).join('');
}

// Delete Subtask
function deleteSubtask(index) {
  subtasks.splice(index, 1);
  renderSubtasks();
}

// Validate Field
function validateField(input, errorId, message) {
  const errorEl = document.getElementById(errorId);
  if (!input.value.trim()) {
    errorEl.textContent = message;
    return false;
  }
  errorEl.textContent = '';
  return true;
}

// Validate Form
function validateForm() {
  const titleValid = validateField(titleInput, 'titleError', 'This field is required');
  const dateValid = validateField(dueDateInput, 'dueDateError', 'This field is required');
  const categoryValid = validateField(categorySelect, 'categoryError', 'This field is required');
  return titleValid && dateValid && categoryValid;
}

// Clear Form
function clearForm() {
  form.reset();
  subtasks = [];
  selectedPriority = 'Medium';
  renderSubtasks();
  priorityButtons.forEach(btn => btn.classList.remove('priority-buttons__button--active'));
  document.querySelector('[data-priority="Medium"]').classList.add('priority-buttons__button--active');
  document.getElementById('titleError').textContent = '';
  document.getElementById('dueDateError').textContent = '';
  document.getElementById('categoryError').textContent = '';
}

// Show Success
function showSuccess() {
  successMessage.classList.add('show');
  setTimeout(() => successMessage.classList.remove('show'), 3000);
}

// Save Task
function saveTask(taskData) {
  tasks.push(taskData);
  try {
    const stored = JSON.stringify(tasks);
    console.log('Task saved:', taskData);
  } catch (e) {
    console.log('Storage not available');
  }
}

// Handle Submit
function handleSubmit(e) {
  e.preventDefault();
  if (!validateForm()) return;
  
  const taskData = {
    id: Date.now(),
    title: titleInput.value.trim(),
    description: descriptionInput.value.trim(),
    dueDate: dueDateInput.value,
    priority: selectedPriority,
    assignedTo: assignedToSelect.value,
    category: categorySelect.value,
    subtasks: [...subtasks],
    createdAt: new Date().toISOString()
  };
  
  saveTask(taskData);
  showSuccess();
  clearForm();
}

// Event Listeners
priority
Buttons.forEach(btn => btn.addEventListener('click', handlePriority));
addSubtaskBtn.addEventListener('click', addSubtask);
subtaskInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    addSubtask();
  }
});
subtaskList.addEventListener('click', (e) => {
  if (e.target.closest('.subtask-list__delete')) {
    const index = parseInt(e.target.closest('.subtask-list__delete').dataset.index);
    deleteSubtask(index);
  }
});
clearBtn.addEventListener('click', clearForm);
form.addEventListener('submit', handleSubmit);

// Initialize
renderSubtasks();