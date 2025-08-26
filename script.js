// Theme toggle functionality
const themeSelect = document.querySelector('.select');
const body = document.body;

// Add click event to the user profile to toggle between views
const userProfile = document.querySelector('.user-profile');
const calculatorView = document.querySelector('.calculator-view');
const settingsView = document.querySelector('.settings-view');

// Toggle between calculator and settings views
userProfile.addEventListener('click', function() {
  if (calculatorView.style.display === 'block') {
    calculatorView.style.display = 'none';
    settingsView.style.display = 'block';
    userProfile.innerHTML = '<i class="user-icon">👤</i><span class="user-name">Ray W.</span>';
  } else {
    calculatorView.style.display = 'block';
    settingsView.style.display = 'none';
    userProfile.innerHTML = '<i class="user-icon">👤</i><span class="user-name">Settings</span>';
  }
});

// Add hover effect to input fields
const inputFields = document.querySelectorAll('.input-field');
inputFields.forEach(field => {
  field.addEventListener('mouseenter', function() {
    this.style.borderColor = '#3498db';
  });
  
  field.addEventListener('mouseleave', function() {
    this.style.borderColor = '#d1d5da';
  });
});

// Add active state to buttons
const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
  button.addEventListener('mousedown', function() {
    this.style.backgroundColor = '#1e66a3';
  });
  
  button.addEventListener('mouseup', function() {
    this.style.backgroundColor = '#3498db';
  });
});

// Handle theme selection
themeSelect.addEventListener('change', function() {
  if (this.value === 'Dark theme') {
    body.classList.add('dark-theme');
  } else {
    body.classList.remove('dark-theme');
  }
});

// Mobile toggle functionality
const mobileToggle = document.querySelector('.mobile-toggle');
const sidebar = document.querySelector('.sidebar');

mobileToggle.addEventListener('click', function() {
  sidebar.classList.toggle('collapsed');
});