// Données des galeries
const galleries = {
    concerto_festivo: [
        'images artiste plasticienne/concerto_festivo_workshop1.png',
        'images artiste plasticienne/concerto_festivo_workshop2.png',
        'images artiste plasticienne/concerto_festivo_workshop3.png',
        'images artiste plasticienne/concerto_festivo_workshop4.png',
        'images artiste plasticienne/concerto_festivo_workshop5.png'
    ],
    cappelli: [
        'images artiste plasticienne/cappelli_frac.png',
        'images artiste plasticienne/cappello.png'
    ],

    perroquet: [
        'images artiste plasticienne/perroquet1.png',
        'images artiste plasticienne/perroquet2.png',
        'images artiste plasticienne/perroquet3.png'

    ],

    gaillette: [
        'images artiste plasticienne/gaillette1.png',
        'images artiste plasticienne/gaillette2.png',
        'images artiste plasticienne/gaillette3.png',
        'images artiste plasticienne/gaillette4.png'
    ],

    chiconnade: [
        'images artiste plasticienne/chiconnade1.png',
        'images artiste plasticienne/chiconnade2.png',
        'images artiste plasticienne/chiconnade3.png',
        'images artiste plasticienne/chiconnade4.png'

    ],

    faits_divers: [
        'images artiste plasticienne/photographie1.png',
        'images artiste plasticienne/photographie2.png',
        'images artiste plasticienne/photographie3.png',
        'images artiste plasticienne/photographie4.png',
        'images artiste plasticienne/photographie5.png',
    ]
};

// Attendre que la page soit chargée
document.addEventListener('DOMContentLoaded', function() {
    
    // Variables
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.querySelector('.lightbox-image');
    const lightboxCounter = document.querySelector('.lightbox-counter');
    const closeBtn = document.querySelector('.lightbox-close');
    const prevBtn = document.querySelector('.lightbox-prev');
    const nextBtn = document.querySelector('.lightbox-next');

    let currentGallery = [];
    let currentIndex = 0;

    // Fonction pour afficher l'image
    function showImage() {
        lightboxImg.src = currentGallery[currentIndex];
        lightboxCounter.textContent = `${currentIndex + 1}/${currentGallery.length}`;
    }

    // Fonction pour ouvrir le lightbox
    function openLightbox() {
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    // Fonction pour fermer le lightbox
    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }

    // Ouvrir lightbox au clic sur une carte
    document.querySelectorAll('.projet-card').forEach(card => {
        card.addEventListener('click', function() {
            const galleryName = this.dataset.gallery;
            currentGallery = galleries[galleryName];
            
            if (!currentGallery) {
                console.error('Galerie non trouvée:', galleryName);
                return;
            }
            
            currentIndex = 0;
            showImage();
            openLightbox();
        });
    });

    // Navigation précédente
    prevBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        currentIndex = (currentIndex - 1 + currentGallery.length) % currentGallery.length;
        showImage();
    });

    // Navigation suivante
    nextBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        currentIndex = (currentIndex + 1) % currentGallery.length;
        showImage();
    });

    // Fermer avec le bouton X
    closeBtn.addEventListener('click', closeLightbox);

    // Fermer en cliquant sur le fond
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    // Navigation au clavier
    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;
        
        if (e.key === 'ArrowLeft') prevBtn.click();
        if (e.key === 'ArrowRight') nextBtn.click();
        if (e.key === 'Escape') closeLightbox();
    });
});