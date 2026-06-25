/**
 * KALI MAA MANDIR - MAIN JAVASCRIPT
 * Handles animations, interactions, and dynamic content loading
 */

// ========================================
// INITIALIZATION
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    initAOS();
    initNavigation();
    initCTAButton();
    loadGalleryImages();
    initScrollEffects();
});

// ========================================
// AOS (Animate On Scroll) INITIALIZATION
// ========================================

function initAOS() {
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: false,
            mirror: true,
            offset: 100,
            disable: 'mobile'
        });
        console.log('✨ AOS animations initialized successfully');
    } else {
        console.warn('⚠️ AOS library not loaded');
    }
}

// ========================================
// NAVIGATION & HAMBURGER MENU
// ========================================

function initNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle mobile menu
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu?.classList.toggle('active');
        });
    }

    // Close menu on link click
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger?.classList.remove('active');
            navMenu?.classList.remove('active');
        });
    });

    // Close menu on scroll
    document.addEventListener('scroll', () => {
        hamburger?.classList.remove('active');
        navMenu?.classList.remove('active');
    });
}

// ========================================
// CTA BUTTON INTERACTIONS
// ========================================

function initCTAButton() {
    const ctaButton = document.querySelector('.cta-button');
    
    if (ctaButton) {
        ctaButton.addEventListener('click', () => {
            // Scroll to About section
            const aboutSection = document.getElementById('about');
            if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: 'smooth' });
            }
        });

        // Add ripple effect on click
        ctaButton.addEventListener('click', (e) => {
            createRipple(e, ctaButton);
        });
    }
}

/**
 * Creates a ripple effect on button click
 */
function createRipple(event, button) {
    const circle = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = diameter + 'px';
    circle.style.left = event.clientX - button.offsetLeft - radius + 'px';
    circle.style.top = event.clientY - button.offsetTop - radius + 'px';
    circle.classList.add('ripple');

    const ripple = button.querySelector('.ripple');
    if (ripple) {
        ripple.remove();
    }
    button.appendChild(circle);
}

// ========================================
// GALLERY IMAGE LOADING
// ========================================

function loadGalleryImages() {
    const galleryGrid = document.getElementById('galleryGrid');
    
    if (!galleryGrid) return;

    // Define placeholder images (fallback if photos/ folder is empty)
    const placeholderImages = [
        'photos/temple1.jpg',
        'photos/temple2.jpg',
        'photos/temple3.jpg',
        'photos/temple4.jpg',
        'photos/temple5.jpg',
        'photos/temple6.jpg',
        'photos/temple7.jpg',
        'photos/temple8.jpg',
        'photos/temple9.jpg'
    ];

    // Try to load images from photos/ folder
    let imagesLoaded = 0;
    let imagesAttempted = 0;

    placeholderImages.forEach((imagePath, index) => {
        imagesAttempted++;
        
        const img = new Image();
        img.onload = () => {
            imagesLoaded++;
            createGalleryItem(imagePath);
        };
        img.onerror = () => {
            // Image not found, this is expected if photos/ folder is empty
            if (imagesLoaded === 0 && imagesAttempted === placeholderImages.length) {
                console.log('📷 No photos found in photos/ folder. Using placeholder.');
                // Keep the placeholder that's already in HTML
            }
        };
        img.src = imagePath;
    });
}

/**
 * Creates a gallery item with image
 */
function createGalleryItem(imagePath) {
    const galleryGrid = document.getElementById('galleryGrid');
    
    // Remove placeholder if it exists and we're adding real images
    const placeholder = galleryGrid.querySelector('.placeholder');
    if (placeholder && galleryGrid.children.length === 1) {
        placeholder.remove();
    }

    const item = document.createElement('div');
    item.className = 'gallery-item';
    item.setAttribute('data-aos', 'zoom-in');
    item.setAttribute('data-aos-duration', '800');

    const img = document.createElement('img');
    img.src = imagePath;
    img.alt = `Kali Maa Mandir - ${imagePath}`;
    img.loading = 'lazy';

    item.appendChild(img);
    
    // Add click handler for lightbox effect
    item.addEventListener('click', () => {
        openImageLightbox(imagePath);
    });

    galleryGrid.appendChild(item);

    // Reinitialize AOS for new elements
    if (typeof AOS !== 'undefined') {
        AOS.refresh();
    }
}

/**
 * Opens an image in a lightbox view
 */
function openImageLightbox(imagePath) {
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.innerHTML = `
        <div class="lightbox-content">
            <button class="lightbox-close">✕</button>
            <img src="${imagePath}" alt="Gallery Image" />
        </div>
    `;

    // Add styles if not already present
    if (!document.getElementById('lightbox-styles')) {
        const style = document.createElement('style');
        style.id = 'lightbox-styles';
        style.textContent = `
            .lightbox {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.95);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 10000;
                animation: fadeIn 0.3s ease-in;
            }
            .lightbox-content {
                position: relative;
                max-width: 90vw;
                max-height: 90vh;
            }
            .lightbox-content img {
                width: 100%;
                height: 100%;
                object-fit: contain;
                border-radius: 8px;
                box-shadow: 0 0 50px rgba(255, 215, 0, 0.3);
            }
            .lightbox-close {
                position: absolute;
                top: -40px;
                right: 0;
                background: #FFD700;
                border: none;
                color: #0B0C10;
                font-size: 2rem;
                width: 40px;
                height: 40px;
                border-radius: 50%;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: all 0.3s ease;
                font-weight: bold;
            }
            .lightbox-close:hover {
                background: #D2143A;
                color: #FFD700;
                transform: scale(1.1);
            }
            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }
        `;
        document.head.appendChild(style);
    }

    document.body.appendChild(lightbox);

    // Close lightbox handlers
    const closeBtn = lightbox.querySelector('.lightbox-close');
    closeBtn.addEventListener('click', () => lightbox.remove());
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) lightbox.remove();
    });

    // Close on Escape key
    const escapeHandler = (e) => {
        if (e.key === 'Escape') {
            lightbox.remove();
            document.removeEventListener('keydown', escapeHandler);
        }
    };
    document.addEventListener('keydown', escapeHandler);
}

// ========================================
// SCROLL EFFECTS
// ========================================

function initScrollEffects() {
    const navbar = document.querySelector('.navbar');
    let lastScrollTop = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        // Navbar scroll effect
        if (navbar) {
            if (currentScroll > 100) {
                navbar.style.borderBottomColor = 'rgba(255, 215, 0, 0.8)';
                navbar.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.4)';
            } else {
                navbar.style.borderBottomColor = 'rgba(255, 215, 0, 0.5)';
                navbar.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.2)';
            }
        }

        // Parallax effect for hero section (subtle)
        const heroParallax = document.querySelector('.hero-parallax');
        if (heroParallax && currentScroll < window.innerHeight) {
            heroParallax.style.backgroundPosition = `center ${currentScroll * 0.5}px`;
        }

        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    });
}

// ========================================
// UTILITY FUNCTIONS
// ========================================

/**
 * Debounce function for performance optimization
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Smooth scroll to element
 */
function smoothScrollTo(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

/**
 * Log initialization complete
 */
console.log('%c🙏 Kali Maa Mandir Website Loaded Successfully! 🙏', 
    'color: #FFD700; font-size: 16px; font-weight: bold; text-shadow: 0 0 10px rgba(255, 215, 0, 0.5);');
console.log('%cDeveloped with spiritual devotion and cosmic reverence', 
    'color: #D2143A; font-style: italic;');
