// DOM Elements
const loginBtn = document.getElementById('login-btn');
const loginModal = document.getElementById('login-modal');
const closeBtn = document.querySelector('.close-btn');
const loginForm = document.getElementById('login-form');
const decorativeElements = document.querySelectorAll('.circle, .square, .triangle');

// Show login modal when button is clicked
loginBtn.addEventListener('click', () => {
    loginModal.style.display = 'flex';
});

// Close modal when X is clicked
closeBtn.addEventListener('click', () => {
    loginModal.style.display = 'none';
});

// Close modal when clicking outside of it
window.addEventListener('click', (e) => {
    if (e.target === loginModal) {
        loginModal.style.display = 'none';
    }
});

// Handle login form submission
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Simulate login (in a real app, you'd send this to a server)
    if (username && password) {
        // Close the modal
        loginModal.style.display = 'none';
        
        // Show welcome message
        const welcomeMessage = document.createElement('div');
        welcomeMessage.className = 'welcome-message';
        welcomeMessage.innerHTML = `
            <div class="welcome-content">
                <h2>Bem-vindo, ${username}!</h2>
                <p>Você está conectado à plataforma UniHub Edu.</p>
                <button id="close-welcome" class="btn-primary">Continuar</button>
            </div>
        `;
        
        // Add styling to the welcome message
        welcomeMessage.style.position = 'fixed';
        welcomeMessage.style.top = '0';
        welcomeMessage.style.left = '0';
        welcomeMessage.style.width = '100%';
        welcomeMessage.style.height = '100%';
        welcomeMessage.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        welcomeMessage.style.display = 'flex';
        welcomeMessage.style.justifyContent = 'center';
        welcomeMessage.style.alignItems = 'center';
        welcomeMessage.style.zIndex = '2000';
        
        document.body.appendChild(welcomeMessage);
        
        // Close welcome message when button is clicked
        document.getElementById('close-welcome').addEventListener('click', () => {
            document.body.removeChild(welcomeMessage);
        });
        
        // Clear the form
        loginForm.reset();
    }
});

// Add some interactive animations for decorative elements
document.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    
    decorativeElements.forEach((element) => {
        // Create subtle movement based on mouse position
        if (element.classList.contains('circle')) {
            element.style.transform = `translate(${x * 20}px, ${y * 20}px)`;
        } else if (element.classList.contains('square')) {
            element.style.transform = `translate(${-x * 15}px, ${-y * 15}px) rotate(${x * 10}deg)`;
        } else if (element.classList.contains('triangle')) {
            element.style.transform = `translate(${y * 10}px, ${-x * 10}px)`;
        }
    });
});
