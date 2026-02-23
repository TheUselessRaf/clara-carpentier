document.addEventListener('DOMContentLoaded', function() {
    const cvImage = document.querySelector('.cv-clickable');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.querySelector('.lightbox-image');
    const closeBtn = document.querySelector('.lightbox-close');

    // Ouvrir le lightbox au clic sur le CV
    cvImage.addEventListener('click', function() {
        lightboxImg.src = this.src;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    // Fermer le lightbox
    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }

    closeBtn.addEventListener('click', closeLightbox);

    // Fermer en cliquant sur le fond
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    // Fermer avec la touche Échap
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) {
            closeLightbox();
        }
    });
});