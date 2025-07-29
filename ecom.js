document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileToggle = document.getElementById('mobileToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    
    mobileToggle.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
        this.innerHTML = mobileMenu.classList.contains('active') 
            ? '<i class="fas fa-times"></i>' 
            : '<i class="fas fa-bars"></i>';
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.navbar') && !event.target.closest('.mobile-menu')) {
            mobileMenu.classList.remove('active');
            mobileToggle.innerHTML = '<i class="fas fa-bars"></i>';
        }
    });
    
    // Close mobile menu when clicking on links
    const mobileLinks = document.querySelectorAll('.mobile-menu a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
            mobileToggle.innerHTML = '<i class="fas fa-bars"></i>';
        });
    });
    
    // Update cart/wishlist counts (example functionality)
    function updateCartCount(count) {
        document.querySelectorAll('.cart-icon .badge').forEach(el => {
            el.textContent = count;
        });
    }
    
    function updateWishlistCount(count) {
        document.querySelectorAll('.wishlist-icon .badge').forEach(el => {
            el.textContent = count;
        });
    }
    
    // Example counts - in a real app these would come from your backend
    updateCartCount(5);
    updateWishlistCount(3);
    
    // Add active class to current page link
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-links a, .mobile-menu a');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href').includes(currentPage)) {
            link.classList.add('active');
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Parallax effect for hero section
    const hero = document.querySelector('.hero');
    if (hero) {
        window.addEventListener('scroll', function() {
            const scrollPosition = window.pageYOffset;
            hero.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
        });
    }

    // Animate elements when they come into view
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.hero-content');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };

    // Initialize animation
    window.addEventListener('load', animateOnScroll);
    window.addEventListener('scroll', animateOnScroll);

    // Button hover effects
    const buttons = document.querySelectorAll('.cta-button, .cta-button-outline');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Add to cart functionality
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const productCard = this.closest('.product-card');
            const productName = productCard.querySelector('h3').textContent;
            const productPrice = productCard.querySelector('.price').textContent.split(' ')[0];
            
            // Visual feedback
            const originalText = this.innerHTML;
            this.innerHTML = '<i class="fas fa-check"></i> Added!';
            this.style.backgroundColor = '#2ecc71';
            
            // Reset button after 2 seconds
            setTimeout(() => {
                this.innerHTML = originalText;
                this.style.backgroundColor = '';
            }, 2000);
            
            // In a real app, you would add to cart here
            console.log(`Added to cart: ${productName} - ${productPrice}`);
        });
    });
    
    // Quick view functionality
    const quickViewButtons = document.querySelectorAll('.quick-view');
    
    quickViewButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            const productCard = this.closest('.product-card');
            const productName = productCard.querySelector('h3').textContent;
            
            // In a real app, you would show a modal here
            console.log(`Quick view: ${productName}`);
        });
    });
    
    // Product card click (excluding buttons)
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach(card => {
        card.addEventListener('click', function(e) {
            if (!e.target.classList.contains('add-to-cart') && 
                !e.target.classList.contains('quick-view') &&
                !e.target.closest('.add-to-cart') &&
                !e.target.closest('.quick-view')) {
                const productName = this.querySelector('h3').textContent;
                
                // In a real app, you would navigate to product page
                console.log(`View product: ${productName}`);
            }
        });
    });
    
    // View all button hover effect
    const viewAllBtn = document.querySelector('.view-all-btn');
    if (viewAllBtn) {
        viewAllBtn.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        viewAllBtn.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    }
});

//categories product

document.addEventListener('DOMContentLoaded', function() {
    // Smooth hover effects on category cards
    const categoryCards = document.querySelectorAll('.category-card');
    
    categoryCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Animate category links on hover
    const categoryLinks = document.querySelectorAll('.category-link');
    
    categoryLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            const arrow = this.querySelector('i');
            arrow.style.transform = 'translateX(5px)';
        });
        
        link.addEventListener('mouseleave', function() {
            const arrow = this.querySelector('i');
            arrow.style.transform = 'translateX(0)';
        });
    });
});

// about for brand

document.addEventListener('DOMContentLoaded', function() {
    // Button hover effect
    const ctaButton = document.querySelector('.cta-button');
    
    if (ctaButton) {
        ctaButton.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px)';
        });
        
        ctaButton.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    }

    // Image hover effect
    const aboutImage = document.querySelector('.about-image');
    
    if (aboutImage) {
        aboutImage.addEventListener('mouseenter', function() {
            this.querySelector('img').style.transform = 'scale(1.03)';
        });
        
        aboutImage.addEventListener('mouseleave', function() {
            this.querySelector('img').style.transform = 'scale(1)';
        });
    }
});

//reviews for section
document.addEventListener('DOMContentLoaded', function() {
    // Animate review cards on hover
    const reviewCards = document.querySelectorAll('.review-card');
    
    reviewCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});

// offers section 
document.addEventListener('DOMContentLoaded', function() {
    // Countdown Timer (24 hours from now)
    const countdown = () => {
        const endDate = new Date();
        endDate.setHours(endDate.getHours() + 24); // 24-hour flash sale
        
        const timer = setInterval(function() {
            const now = new Date().getTime();
            const distance = endDate - now;
            
            // Time calculations
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
            // Display
            document.getElementById('days').textContent = days.toString().padStart(2, '0');
            document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
            document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
            document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
            
            // End timer
            if (distance < 0) {
                clearInterval(timer);
                document.querySelector('.countdown-timer').innerHTML = '<div class="sale-ended">SALE ENDED!</div>';
            }
        }, 1000);
    };
    
    countdown();
    
    // Button hover effects
    const buttons = document.querySelectorAll('.shop-now-btn, .cta-button');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});

//Contact & Support
document.addEventListener('DOMContentLoaded', function() {
    // FAQ Accordion Functionality
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            // Close other open FAQs
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current FAQ
            item.classList.toggle('active');
        });
    });

    // Form Submission
    const supportForm = document.getElementById('supportForm');
    
    if (supportForm) {
        supportForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = this.querySelector('#name').value;
            const email = this.querySelector('#email').value;
            
            // Simulate form submission
            const submitBtn = this.querySelector('.submit-btn');
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            
            setTimeout(() => {
                submitBtn.innerHTML = '<i class="fas fa-check"></i> Sent!';
                submitBtn.style.backgroundColor = '#4CAF50';
                
                // Reset form after 2 seconds
                setTimeout(() => {
                    this.reset();
                    submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Submit';
                    submitBtn.style.backgroundColor = '';
                }, 2000);
            }, 1500);
            
            console.log(`Form submitted by ${name} (${email})`);
        });
    }
});

//footer 
document.addEventListener('DOMContentLoaded', function() {
    // Newsletter Form Submission
    const newsletterForm = document.querySelector('.newsletter-form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            const submitBtn = this.querySelector('button');
            
            // Simulate submission
            submitBtn.textContent = 'SENDING...';
            submitBtn.style.opacity = '0.8';
            
            setTimeout(() => {
                submitBtn.textContent = 'SUBSCRIBED!';
                submitBtn.style.backgroundColor = '#4CAF50';
                emailInput.value = '';
                
                // Reset after 2 seconds
                setTimeout(() => {
                    submitBtn.textContent = 'SUBSCRIBE';
                    submitBtn.style.backgroundColor = '';
                    submitBtn.style.opacity = '1';
                }, 2000);
            }, 1000);
            
            console.log(`Subscribed email: ${emailInput.value}`);
        });
    }
});