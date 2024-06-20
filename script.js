document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('click', () => {
            card.classList.toggle('is-flipped');
        });
    });
});
