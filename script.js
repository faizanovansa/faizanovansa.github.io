// ============================================================================
// Smooth Scroll for Navigation
// ============================================================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            const target = document.querySelector(href);
            target.scrollIntoView({ behavior: 'smooth' });
            
            // Close mobile menu if open
            const mobileMenu = document.querySelector('.nav-links');
            if (mobileMenu && mobileMenu.classList.contains('active')) {
                mobileMenu.classList.remove('active');
                document.querySelector('.mobile-menu-btn').setAttribute('aria-expanded', 'false');
            }
        }
    });
});

// ============================================================================
// Mobile Menu Toggle
// ============================================================================
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', () => {
    const isActive = navLinks.classList.toggle('active');
    mobileMenuBtn.setAttribute('aria-expanded', isActive);
    
    // Animate hamburger
    const spans = mobileMenuBtn.querySelectorAll('span');
    if (isActive) {
        spans[0].style.transform = 'rotate(45deg) translate(8px, 8px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(7px, -7px)';
    } else {
        spans[0].style.transform = '';
        spans[1].style.opacity = '';
        spans[2].style.transform = '';
    }
});

// Close mobile menu when clicking on nav links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
    });
});

// ============================================================================
// Mouse Glow Effect
// ============================================================================
const mouseGlow = document.querySelector('.mouse-glow');
const hero = document.querySelector('.hero');

if (mouseGlow && hero) {
    hero.addEventListener('mousemove', (e) => {
        const rect = hero.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        mouseGlow.style.left = (x - 150) + 'px';
        mouseGlow.style.top = (y - 150) + 'px';
        mouseGlow.style.opacity = '1';
    });
    
    hero.addEventListener('mouseleave', () => {
        mouseGlow.style.opacity = '0';
    });
}

// ============================================================================
// Toast Notification System
// ============================================================================
function showToast(message, duration = 3000) {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    
    container.appendChild(toast);
    
    setTimeout(() => {
        toast.style.animation = 'slide-in 0.4s ease reverse';
        setTimeout(() => toast.remove(), 400);
    }, duration);
}

// ============================================================================
// Easter Eggs
// ============================================================================
let easterEggBuffer = '';
const easterEggs = {
    'elaina': '✨ A wanderer\'s spirit dwells within these lines of code.',
    'frieren': '⏳ Thousands of years of coding wisdom compressed into moments.',
    'vibe': '🎨 You found the vibe. Welcome to the aesthetic realm.',
    'konami': '🎮 Up, Up, Down, Down... You\'re legendary!'
};

// Konami Code (↑ ↑ ↓ ↓ ← → ← → B A)
const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let konamiIndex = 0;

// Easter egg text input
document.addEventListener('keydown', (e) => {
    // Konami code
    if (e.key === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
            showToast(easterEggs['konami']);
            konamiIndex = 0;
        }
    } else {
        konamiIndex = 0;
    }
    
    // Text-based easter eggs
    if (/^[a-z]$/i.test(e.key)) {
        easterEggBuffer += e.key.toLowerCase();
        
        // Keep only last 8 characters
        if (easterEggBuffer.length > 8) {
            easterEggBuffer = easterEggBuffer.slice(-8);
        }
        
        // Check for easter eggs
        Object.entries(easterEggs).forEach(([key, value]) => {
            if (easterEggBuffer.includes(key) && key !== 'konami') {
                showToast(value);
                easterEggBuffer = '';
            }
        });
    }
});

// ============================================================================
// Intersection Observer for Fade-in Animations
// ============================================================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all skill cards, project cards, and other elements
document.querySelectorAll('.skill-card, .project-card, .timeline-item, .blog-topic').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ============================================================================
// Parallax Effect on Scroll
// ============================================================================
const auroraElement = document.querySelector('.aurora-bg');
const floatingElement = document.querySelector('.floating-element');

if (auroraElement || floatingElement) {
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        
        if (auroraElement) {
            auroraElement.style.transform = `translateY(${scrollY * 0.5}px)`;
        }
        
        if (floatingElement) {
            floatingElement.style.transform = `translateY(${scrollY * 0.3}px)`;
        }
    });
}

// ============================================================================
// Navbar Background on Scroll
// ============================================================================
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.background = 'linear-gradient(to bottom, rgba(7, 11, 26, 0.95), rgba(7, 11, 26, 0.8))';
        navbar.style.borderBottomColor = 'rgba(148, 163, 184, 0.15)';
    } else {
        navbar.style.background = 'linear-gradient(to bottom, rgba(7, 11, 26, 0.8), rgba(7, 11, 26, 0))';
        navbar.style.borderBottomColor = 'rgba(148, 163, 184, 0.1)';
    }
});

// ============================================================================
// Set Active Navigation Link
// ============================================================================
const navItems = document.querySelectorAll('.nav-links a');
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href') === `#${current}`) {
            item.style.color = 'var(--primary-light)';
        } else {
            item.style.color = '';
        }
    });
});

// ============================================================================
// Performance: Lazy Load External Resources
// ============================================================================
if ('IntersectionObserver' in window) {
    const lazyImages = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    lazyImages.forEach(img => imageObserver.observe(img));
}

// ============================================================================
// Active Link Highlighting
// ============================================================================
function updateActiveLink() {
    const scrollPosition = window.scrollY + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navItems.forEach(item => {
                item.style.color = '';
            });
            
            const activeLink = document.querySelector(`.nav-links a[href="#${sectionId}"]`);
            if (activeLink) {
                activeLink.style.color = 'var(--primary-light)';
            }
        }
    });
}

window.addEventListener('scroll', updateActiveLink);
updateActiveLink();

// ============================================================================
// Keyboard Navigation
// ============================================================================
document.addEventListener('keydown', (e) => {
    // Skip keyboard navigation if typing in input
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
        return;
    }
    
    // Tab key navigation is handled by browser by default
    if (e.key === 'Tab') {
        return;
    }
});

// ============================================================================
// Initialize
// ============================================================================
document.addEventListener('DOMContentLoaded', () => {
    // Fade in hero on load
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.opacity = '0';
        heroContent.style.animation = 'fade-in-up 0.8s ease 0.2s forwards';
    }
    
    // Ensure proper initial state
    updateActiveLink();
});

// ============================================================================
// Performance Monitoring (Optional)
// ============================================================================
if ('PerformanceObserver' in window) {
    try {
        const perfObserver = new PerformanceObserver((entryList) => {
            for (const entry of entryList.getEntries()) {
                if (entry.duration > 3000) {
                    console.warn('Long task detected:', entry);
                }
            }
        });
        perfObserver.observe({ entryTypes: ['longtask'] });
    } catch (e) {
        // PerformanceObserver not supported
    }
}

// ============================================================================
// Accessibility: Skip to Main Content
// ============================================================================
const skipLink = document.createElement('a');
skipLink.href = '#home';
skipLink.className = 'skip-link';
skipLink.textContent = 'Skip to main content';
skipLink.style.cssText = `
    position: absolute;
    top: -40px;
    left: 0;
    background: var(--primary);
    color: white;
    padding: 8px;
    text-decoration: none;
    z-index: 100;
`;
skipLink.addEventListener('focus', () => {
    skipLink.style.top = '0';
});
skipLink.addEventListener('blur', () => {
    skipLink.style.top = '-40px';
});
document.body.prepend(skipLink);

// ============================================================================
// End of Script
// ============================================================================
