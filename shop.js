document.addEventListener('DOMContentLoaded', function() {
    // Add to cart functionality
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productId = this.getAttribute('data-id');
            const productCard = this.closest('.product-card');
            const productName = productCard.querySelector('h3').textContent;
            
            // Visual feedback
            const originalText = this.innerHTML;
            this.innerHTML = '<i class="fas fa-check"></i> ADDED!';
            this.style.backgroundColor = '#4CAF50';
            
            setTimeout(() => {
                this.innerHTML = originalText;
                this.style.backgroundColor = '';
            }, 2000);
            
            console.log(`Added to cart: ${productName} (ID: ${productId})`);
            // In real implementation, add to cart logic here
        });
    });
    
    // Category navigation active state
    const categoryLinks = document.querySelectorAll('.mens-categories a');
    
    categoryLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            categoryLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            
            // In real implementation, filter products here
            console.log(`Selected category: ${this.textContent}`);
        });
    });
    
    // Sort functionality
    const sortSelect = document.getElementById('sort');
    
    sortSelect.addEventListener('change', function() {
        console.log(`Sorted by: ${this.value}`);
        // In real implementation, sort products here
    });
    
    // Lookbook "Shop This Look" buttons
    const shopLookButtons = document.querySelectorAll('.shop-the-look');
    
    shopLookButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            // In real implementation, show products from this look
            console.log('Shop this look clicked');
        });
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            if(this.getAttribute('href') !== '#') {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});