'use strict'
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.feedback-form');
  const emailInput = form.querySelector('input[name="email"]');
  const messageTextarea = form.querySelector('textarea[name="message"]');
  
  
  const storedData = localStorage.getItem('feedback-form-state');
  if (storedData) {
    const { email, message } = JSON.parse(storedData);
    emailInput.value = email;
    messageTextarea.value = message;
  }

  
  form.addEventListener('input', () => {
    const formData = {
      email: emailInput.value.trim(),
      message: messageTextarea.value.trim()
    };
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  });

 
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = {
      email: emailInput.value.trim(),
      message: messageTextarea.value.trim()
    };
    if (formData.email && formData.message) {
      console.log(formData);
      localStorage.removeItem('feedback-form-state');
      form.reset();
    } else {
      alert('Please fill in all fields.');
    }
  });
});