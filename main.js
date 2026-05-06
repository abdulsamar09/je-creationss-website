document.addEventListener('DOMContentLoaded', () => {
    // Scroll Reveal Animation
    const reveals = document.querySelectorAll('.reveal');
    
    const revealOnScroll = () => {
        const triggerBottom = window.innerHeight * 0.9;
        
        reveals.forEach(reveal => {
            const revealTop = reveal.getBoundingClientRect().top;
            
            if (revealTop < triggerBottom) {
                reveal.classList.add('active');
            }
        });
    };

    // Initial check
    revealOnScroll();
    
    // Scroll event listener
    window.addEventListener('scroll', () => {
        revealOnScroll();
        
        // Sticky Nav logic
        const nav = document.querySelector('.nav');
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    // Mobile Menu logic
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const navMenu = document.getElementById('nav-menu');
    if (mobileBtn && navMenu) {
        mobileBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            mobileBtn.classList.toggle('active');
        });
    }

    // Add mobile active state for offerings on scroll
    const offeringItems = document.querySelectorAll('.offering-item');
    if ('IntersectionObserver' in window) {
        const itemObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (window.innerWidth <= 768) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('mobile-active');
                    } else {
                        entry.target.classList.remove('mobile-active');
                    }
                } else {
                    entry.target.classList.remove('mobile-active');
                }
            });
        }, { threshold: 0.5 });
        
        offeringItems.forEach(item => {
            itemObserver.observe(item);
        });
    }

    // Read More functionality
    const readMoreBtn = document.getElementById('read-more-btn');
    const moreContent = document.getElementById('more-about');
    
    if (readMoreBtn && moreContent) {
        readMoreBtn.addEventListener('click', () => {
            moreContent.classList.toggle('expanded');
            
            if (moreContent.classList.contains('expanded')) {
                readMoreBtn.innerHTML = `
                    <span>Read Less</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 15l-6-6-6 6"/></svg>
                `;
            } else {
                readMoreBtn.innerHTML = `
                    <span>Read More</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>
                `;
            }
        });
    }
});
