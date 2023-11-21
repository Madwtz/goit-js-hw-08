const throttle = require('lodash.throttle');

document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.feedback-form');
    const emailInput = form.querySelector('input[name="email"]');
    const messageInput = form.querySelector('textarea[name="message"]');

    const localStorageKey = 'feedback-form-state';

    const saveFormState = throttle(() => {
        const formState = {
            email: emailInput.value,
            message: messageInput.value,
        };
        localStorage.setItem(localStorageKey, JSON.stringify(formState));
    }, 500);

    const loadFormState = () => {
        const savedState = localStorage.getItem(localStorageKey);
        if (savedState) {
            const parsedState = JSON.parse(savedState);
            emailInput.value = parsedState.email || '';
            messageInput.value = parsedState.message || '';
        }
    };

    loadFormState();

   
    form.addEventListener('input', saveFormState);

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const currentState = {
            email: emailInput.value,
            message: messageInput.value,
        };
        console.log('Form submitted with state:', currentState);
        localStorage.removeItem(localStorageKey);
    });
});
