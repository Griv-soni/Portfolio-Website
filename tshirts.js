document.addEventListener('DOMContentLoaded', function() {
   
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productId = this.getAttribute('data-id');
            const productCard = this.closest('.product-card');
            const productName = productCard.querySelector('h3').textContent;
            const productPrice = parseFloat(productCard.querySelector('.price').textContent.replace('$', ''));
            const productImage = productCard.querySelector('.product-image').src;
            
            
            const existingItem = cart.find(item => item.id === productId);
            
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({
                    id: productId,
                    name: productName,
                    price: productPrice,
                    image: productImage,
                    quantity: 1
                });
            }
            
           
            localStorage.setItem('cart', JSON.stringify(cart));
            
        
            showCartNotification(productName);
        });
    });
    
   
    const sortSelect = document.getElementById('sort');
    if (sortSelect) {
        sortSelect.addEventListener('change', function() {
            sortProducts(this.value);
        });
    }
    
    
    function sortProducts(sortBy) {
        const productsGrid = document.querySelector('.products-grid');
        const products = Array.from(document.querySelectorAll('.product-card'));
        
        products.sort((a, b) => {
            const priceA = parseFloat(a.querySelector('.price').textContent.replace('$', ''));
            const priceB = parseFloat(b.querySelector('.price').textContent.replace('$', ''));
            
            switch(sortBy) {
                case 'Price: Low to High':
                    return priceA - priceB;
                case 'Price: High to Low':
                    return priceB - priceA;
                case 'Newest':
                   
                    return 1;
                default:
                    return -1;
            }
        });
        
      
        productsGrid.innerHTML = '';
        products.forEach(product => {
            productsGrid.appendChild(product);
        });
    }
    
   
    function showCartNotification(productName) {
        const notification = document.createElement('div');
        notification.className = 'cart-notification';
        notification.innerHTML = `
            <span>${productName} added to cart!</span>
            <a href="#" class="view-cart">View Cart</a>
        `;
        
        document.body.appendChild(notification);
        
        notification.style.position = 'fixed';
        notification.style.bottom = '20px';
        notification.style.right = '20px';
        notification.style.backgroundColor = '#FFD700';
        notification.style.color = '#000';
        notification.style.padding = '15px 20px';
        notification.style.borderRadius = '5px';
        notification.style.display = 'flex';
        notification.style.alignItems = 'center';
        notification.style.gap = '15px';
        notification.style.zIndex = '1000';
        notification.style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)';
        notification.style.animation = 'slideIn 0.3s ease-out';
        
        
        const viewCartLink = notification.querySelector('.view-cart');
        viewCartLink.style.color = '#000';
        viewCartLink.style.textDecoration = 'underline';
        viewCartLink.style.fontWeight = 'bold';
        
     
        viewCartLink.addEventListener('click', function(e) {
            e.preventDefault();
            
            alert('Redirecting to cart page - implement this functionality as needed');
        });
        
     
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease-in';
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, 3000);
    }
    
   
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideOut {
            from { transform: translateX(0); opacity: 1; }
            to { transform: translateX(100%); opacity: 0; }
        }
    `;
    document.head.appendChild(style);
    
   
    const mobileMenuToggle = document.createElement('div');
    mobileMenuToggle.className = 'mobile-menu-toggle';
    mobileMenuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    mobileMenuToggle.style.display = 'none'; 
   
    function checkMobile() {
        if (window.innerWidth <= 768) {
            mobileMenuToggle.style.display = 'block';
           
        } else {
            mobileMenuToggle.style.display = 'none';
        }
    }
    
    window.addEventListener('resize', checkMobile);
    checkMobile();
});