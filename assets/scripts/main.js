/**
 * Phoenix Tri - Modern Website JavaScript
 * Handles animations, scroll effects, and interactions
 */

(function() {
    'use strict';

    // ===================================
    // SCROLL ANIMATIONS
    // ===================================
    
    /**
     * Initialize Intersection Observer for scroll animations
     */
    function initScrollAnimations() {
        const animatedElements = document.querySelectorAll('.fade-in, .slide-left, .slide-right');
        
        if (!animatedElements.length) return;

        const observerOptions = {
            root: null,
            rootMargin: '0px 0px -50px 0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Add staggered delay for multiple elements in the same parent
                    const siblings = entry.target.parentElement.querySelectorAll('.fade-in, .slide-left, .slide-right');
                    let delay = 0;
                    
                    siblings.forEach((sibling, index) => {
                        if (sibling === entry.target) {
                            delay = index * 100;
                        }
                    });
                    
                    setTimeout(() => {
                        entry.target.classList.add('visible');
                    }, delay);
                    
                    // Unobserve after animation (performance optimization)
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        animatedElements.forEach((el) => {
            observer.observe(el);
        });
    }

    // ===================================
    // NAVIGATION
    // ===================================

    /**
     * Handle sticky navigation styling on scroll
     * Hides nav on scroll down, shows on scroll up (mobile only)
     */
    function initStickyNav() {
        const nav = document.querySelector('nav');
        if (!nav) return;

        let lastScrollY = window.scrollY;
        let ticking = false;
        const scrollThreshold = 100;
        const isMobile = () => window.innerWidth <= 768;

        function updateNav() {
            const scrollY = window.scrollY;
            const scrollingDown = scrollY > lastScrollY;
            const scrollingUp = scrollY < lastScrollY;
            
            // Add scrolled class when past threshold
            if (scrollY > scrollThreshold) {
                nav.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
            }
            
            // Auto-hide on mobile when scrolling down
            if (isMobile() && scrollY > 200) {
                if (scrollingDown && Math.abs(scrollY - lastScrollY) > 5) {
                    nav.classList.add('hide');
                } else if (scrollingUp && Math.abs(scrollY - lastScrollY) > 5) {
                    nav.classList.remove('hide');
                }
            } else {
                nav.classList.remove('hide');
            }
            
            lastScrollY = scrollY;
            ticking = false;
        }

        window.addEventListener('scroll', () => {
            if (!ticking) {
                window.requestAnimationFrame(updateNav);
                ticking = true;
            }
        }, { passive: true });
        
        // Reset on resize
        window.addEventListener('resize', () => {
            if (!isMobile()) {
                nav.classList.remove('hide');
            }
        }, { passive: true });
    }

    /**
     * Smooth scroll for anchor links
     */
    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
            anchor.addEventListener('click', function(e) {
                const targetId = this.getAttribute('href');
                
                if (targetId === '#' || targetId === '#top') {
                    e.preventDefault();
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                    });
                    return;
                }
                
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    e.preventDefault();
                    const navHeight = document.querySelector('nav')?.offsetHeight || 0;
                    const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    // ===================================
    // PARALLAX EFFECTS
    // ===================================

    /**
     * Subtle parallax effect for banner backgrounds
     */
    function initParallax() {
        const banners = document.querySelectorAll('.banner, header#club');
        
        if (!banners.length) return;

        let ticking = false;

        function updateParallax() {
            const scrollY = window.scrollY;
            
            banners.forEach((banner) => {
                const rect = banner.getBoundingClientRect();
                const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
                
                if (isVisible) {
                    const speed = 0.3;
                    const yPos = -(scrollY * speed);
                    banner.style.backgroundPositionY = `calc(50% + ${yPos}px)`;
                }
            });
            
            ticking = false;
        }

        window.addEventListener('scroll', () => {
            if (!ticking) {
                window.requestAnimationFrame(updateParallax);
                ticking = true;
            }
        }, { passive: true });
    }

    // ===================================
    // ENHANCED INTERACTIONS
    // ===================================

    /**
     * Add hover effects to pricing cards with stagger
     */
    function initPricingCards() {
        const cards = document.querySelectorAll('.pricing-card');
        
        cards.forEach((card, index) => {
            // Stagger the initial animation
            card.style.transitionDelay = `${index * 0.1}s`;
        });
    }

    /**
     * Initialize team member hover effects
     */
    function initTeamEffects() {
        const teamMembers = document.querySelectorAll('.team-grid li');
        
        teamMembers.forEach((member) => {
            member.addEventListener('mouseenter', () => {
                const photo = member.querySelector('.team-photo');
                if (photo) {
                    photo.style.transform = 'scale(1.05)';
                }
            });
            
            member.addEventListener('mouseleave', () => {
                const photo = member.querySelector('.team-photo');
                if (photo) {
                    photo.style.transform = 'scale(1)';
                }
            });
        });
    }

    // ===================================
    // PERFORMANCE OPTIMIZATIONS
    // ===================================

    /**
     * Lazy load images that are not in the viewport
     */
    function initLazyLoading() {
        const images = document.querySelectorAll('img[data-src]');
        
        if (!images.length) return;

        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            });
        }, {
            rootMargin: '50px 0px'
        });

        images.forEach((img) => {
            imageObserver.observe(img);
        });
    }

    // ===================================
    // SCROLL TO TOP BUTTON
    // ===================================

    /**
     * Show/hide back to top buttons based on scroll position
     */
    function initBackToTop() {
        const buttons = document.querySelectorAll('.back-to-top a');
        
        buttons.forEach((button) => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        });
    }

    // ===================================
    // MOBILE MENU
    // ===================================

    /**
     * Initialize mobile menu toggle
     */
    function initMobileMenu() {
        const menuToggle = document.getElementById('menu-toggle');
        const menu = document.getElementById('menu');
        
        if (!menuToggle || !menu) return;

        menuToggle.addEventListener('click', () => {
            menu.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });

        // Close menu when clicking a link
        menu.querySelectorAll('a').forEach((link) => {
            link.addEventListener('click', () => {
                menu.classList.remove('active');
                menuToggle.classList.remove('active');
            });
        });
    }

    // ===================================
    // URL HASH HANDLING
    // ===================================

    /**
     * Handle URL paths and redirect to hash anchors
     */
    function handleUrlRedirects() {
        const path = window.location.pathname;
        
        switch (path) {
            case '/aquathlon':
            case '/aquathlon/':
                window.location.hash = 'aquathlon';
                break;
            case '/training':
            case '/training/':
                window.location.hash = 'training';
                break;
            case '/membership':
            case '/membership/':
                window.location.hash = 'membership';
                break;
            case '/contact':
            case '/contact/':
                window.location.hash = 'contact';
                break;
        }
    }

    // ===================================
    // COUNTER ANIMATION
    // ===================================

    /**
     * Animate numbers counting up
     */
    function initCounters() {
        const counters = document.querySelectorAll('[data-count]');
        
        if (!counters.length) return;

        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const counter = entry.target;
                    const target = parseInt(counter.dataset.count, 10);
                    const duration = 2000;
                    const step = target / (duration / 16);
                    let current = 0;
                    
                    const updateCounter = () => {
                        current += step;
                        if (current < target) {
                            counter.textContent = Math.floor(current);
                            requestAnimationFrame(updateCounter);
                        } else {
                            counter.textContent = target;
                        }
                    };
                    
                    updateCounter();
                    counterObserver.unobserve(counter);
                }
            });
        }, { threshold: 0.5 });

        counters.forEach((counter) => {
            counterObserver.observe(counter);
        });
    }

    // ===================================
    // INITIALIZATION
    // ===================================

    /**
     * Initialize all functionality when DOM is ready
     */
    function init() {
        // Core functionality
        initScrollAnimations();
        initStickyNav();
        initSmoothScroll();
        initBackToTop();
        
        // Enhanced effects (only on capable devices)
        if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            initParallax();
        }
        
        // UI enhancements
        initPricingCards();
        initTeamEffects();
        initMobileMenu();
        
        // Performance
        initLazyLoading();
        initCounters();
        
        // URL handling
        handleUrlRedirects();

        // Log initialization
        console.log('Phoenix Tri website initialized');
    }

    // Run on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
