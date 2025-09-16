document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('login-form');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const messageContainer = document.querySelector('.form-message');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        messageContainer.textContent = '';

        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        if (email === '' || password === '') {
            messageContainer.textContent = 'All fields are required.';
            return;
        }

        if (!validateEmail(email)) {
            messageContainer.textContent = 'Please enter a valid email address.';
            return;
        }

        // If validation passes
        messageContainer.style.color = 'green';
        messageContainer.textContent = 'Login successful!';
        form.reset();
    });

    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
});
