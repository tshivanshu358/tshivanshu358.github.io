document.querySelectorAll('.card-content a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        document.querySelectorAll('.section').forEach(section => {
            section.style.display = 'none';
        });
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.style.display = 'block';
        }
    });
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Message sent successfully!');
});
