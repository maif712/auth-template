document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('register-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirm-password');
    const messageContainer = document.querySelector('.form-message');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        messageContainer.textContent = '';

        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();
        const confirmPassword = confirmPasswordInput.value.trim();

        if (name === '' || email === '' || password === '' || confirmPassword === '') {
            messageContainer.textContent = 'All fields are required.';
            return;
        }

        if (!validateEmail(email)) {
            messageContainer.textContent = 'Please enter a valid email address.';
            return;
        }

        if (password !== confirmPassword) {
            messageContainer.textContent = 'Passwords do not match.';
            return;
        }

        // If validation passes
        messageContainer.style.color = 'green';
        messageContainer.textContent = 'Registration successful!';
        form.reset();
    });

    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
});
