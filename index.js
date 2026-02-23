// Gestion des clics sur les cartes projets
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.projet-card').forEach(card => {
        card.addEventListener('click', function() {
            const link = this.dataset.link;
            if (link) {
                window.location.href = link;
            }
        });
    });
});