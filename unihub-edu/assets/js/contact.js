// Manipulação do formulário de contato
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Obter valores do formulário
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Em um caso real, aqui você enviaria os dados para um servidor
            console.log('Formulário enviado:', { name, email, subject, message });
            
            // Mostrar mensagem de sucesso
            const successMessage = document.createElement('div');
            successMessage.className = 'success-message';
            successMessage.innerHTML = `
                <h3>Mensagem enviada com sucesso!</h3>
                <p>Obrigado por entrar em contato, ${name}. Retornaremos em breve.</p>
            `;
            
            // Estilizar a mensagem
            successMessage.style.backgroundColor = '#e8f5e9';
            successMessage.style.color = '#2e7d32';
            successMessage.style.padding = '1rem';
            successMessage.style.borderRadius = '5px';
            successMessage.style.marginTop = '1rem';
            
            // Limpar formulário e mostrar mensagem
            contactForm.reset();
            contactForm.parentNode.insertBefore(successMessage, contactForm.nextSibling);
            
            // Remover a mensagem após 5 segundos
            setTimeout(() => {
                successMessage.style.opacity = '0';
                successMessage.style.transition = 'opacity 0.5s';
                
                setTimeout(() => {
                    successMessage.remove();
                }, 500);
            }, 5000);
        });
    }
});
