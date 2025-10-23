// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(10, 10, 10, 0.98)';
    } else {
        header.style.background = 'rgba(10, 10, 10, 0.95)';
    }
});

// Button hover animations
document.querySelectorAll('.btn-primary, .btn-secondary, .btn-launch, .btn-demo').forEach(btn => {
    btn.addEventListener('mouseenter', () => {
        btn.style.transform = 'translateY(-2px)';
    });
    
    btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'translateY(0)';
    });
});

// Feature cards hover animation
document.querySelectorAll('.feature-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-8px)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});

// Parallax effect for hero shapes
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const shapes = document.querySelectorAll('.shape');
    
    shapes.forEach((shape, index) => {
        const speed = 0.5 + (index * 0.2);
        shape.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// CTA button click handler
document.querySelector('.cta-card .btn-primary').addEventListener('click', () => {
    // Scroll to top and show launch modal or redirect
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Simulate launch dapp
    setTimeout(() => {
        alert('Launching NeuraDex Dapp... 🚀');
    }, 500);
});

// Demo button handlers
document.querySelectorAll('.btn-demo, .hero-buttons .btn-secondary').forEach(btn => {
    btn.addEventListener('click', () => {
        // Scroll to features section
        document.querySelector('.features').scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Launch Dapp buttons
document.querySelectorAll('.btn-launch, .hero-buttons .btn-primary').forEach(btn => {
    btn.addEventListener('click', () => {
        // Redirect to dapp or show modal
        window.open('https://dapp.neuradex.com', '_blank');
    });
});

// Add loading animation on page load
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe feature cards and CTA
document.querySelectorAll('.feature-card, .cta-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});