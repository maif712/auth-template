document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        duration: 1000,
        once: true,
    });

    // Login Form Validation
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        const emailInput = loginForm.querySelector('#email');
        const passwordInput = loginForm.querySelector('#password');
        const messageContainer = loginForm.querySelector('.form-message');

        loginForm.addEventListener('submit', (e) => {
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

            messageContainer.style.color = 'green';
            messageContainer.textContent = 'Login successful!';
            loginForm.reset();
        });
    }

    // Register Form Validation
    const registerForm = document.getElementById('register-form');
    if (registerForm) {
        const nameInput = registerForm.querySelector('#name');
        const emailInput = registerForm.querySelector('#email');
        const passwordInput = registerForm.querySelector('#password');
        const confirmPasswordInput = registerForm.querySelector('#confirm-password');
        const messageContainer = registerForm.querySelector('.form-message');

        registerForm.addEventListener('submit', (e) => {
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

            if (password.length < 8) {
                messageContainer.textContent = 'Password must be at least 8 characters long.';
                return;
            }

            if (password !== confirmPassword) {
                messageContainer.textContent = 'Passwords do not match.';
                return;
            }

            messageContainer.style.color = 'green';
            messageContainer.textContent = 'Registration successful!';
            registerForm.reset();
        });
    }

    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    // Hero Parallax Effect
    const hero = document.querySelector('.hero');
    if (hero) {
        const shapes = hero.querySelectorAll('.shape');
        hero.addEventListener('mousemove', (e) => {
            const { clientX, clientY } = e;
            const x = clientX / window.innerWidth;
            const y = clientY / window.innerHeight;

            shapes.forEach((shape, index) => {
                const speed = (index + 1) * 0.5;
                const xPos = (x - 0.5) * 20 * speed;
                const yPos = (y - 0.5) * 20 * speed;
                shape.style.transform = `translate(${xPos}px, ${yPos}px)`;
            });
        });
    }
});
