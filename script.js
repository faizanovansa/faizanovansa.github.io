document.addEventListener('DOMContentLoaded', function() {
    // Navigation toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });

    // Close menu on link click
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
        });
    });

    // Mouse glow effect
    const mouseGlow = document.querySelector('.mouse-glow');
    document.addEventListener('mousemove', function(e) {
        mouseGlow.style.left = (e.clientX - 100) + 'px';
        mouseGlow.style.top = (e.clientY - 100) + 'px';
        mouseGlow.style.opacity = '1';
    });

    document.addEventListener('mouseleave', function() {
        mouseGlow.style.opacity = '0';
    });

    // Footer year
    document.getElementById('year').textContent = new Date().getFullYear();

    // Easter eggs
    const easterEggs = {
        'elaina': '✨ Elaina vibes detected',
        'frieren': '🌙 An elf\'s thousand year journey',
        'vibe': '🎵 You found the vibe',
        'konami': '↑ ↑ ↓ ↓ ← → ← → B A - Nice!'
    };

    let konami = [];
    const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let typeBuffer = '';
    let typeTimeout;

    document.addEventListener('keydown', function(e) {
        konami.push(e.key);
        if (konami.length > konamiCode.length) {
            konami.shift();
        }

        if (JSON.stringify(konami) === JSON.stringify(konamiCode)) {
            showToast(easterEggs['konami']);
            konami = [];
        }

        // Text input easter eggs
        clearTimeout(typeTimeout);
        typeBuffer += e.key.toLowerCase();
        typeTimeout = setTimeout(() => {
            typeBuffer = '';
        }, 500);

        Object.keys(easterEggs).forEach(key => {
            if (typeBuffer.includes(key) && key !== 'konami') {
                showToast(easterEggs[key]);
                typeBuffer = '';
            }
        });
    });

    // Toast notification
    function showToast(message) {
        const toast = document.getElementById('toast');
        toast.textContent = message;
        toast.classList.add('show');

        setTimeout(() => {
            toast.classList.remove('show');
        }, 3000);
    }

    // Smooth scroll for mobile
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // Observe sections for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.skill-card, .project-card, .timeline-item').forEach(el => {
        observer.observe(el);
    });
});

// Add fadeInUp animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);
