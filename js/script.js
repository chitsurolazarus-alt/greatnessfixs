// ============================================
// CHRIST OR NOTHING - OPTIMIZED SCRIPT
// Mobile-Optimized with Dual Column Grid
// Grouped Products with Color Options at Bottom
// Randomized initial colors for each product
// Shopping Cart, Product Details, Recommendations
// SEO Optimized with lazy loading
// ============================================

// Product Database - Grouped by Design with Color Options
const productsData = {
    tshirts: [
        {
            id: 'tshirt1',
            name: 'Christ or Nothing',
            description: 'Crew neck T-shirt\nChrist or nothing\nPremium quality cotton for everyday wear.',
            basePrice: 300,
            type: 'Standard',
            colors: [
                { name: 'white', displayName: 'White', image: 'images/tshirts/tshirt1-white.jpg' },
                { name: 'camel', displayName: 'Camel Brown', image: 'images/tshirts/tshirt1-camel.jpg' },
                { name: 'black', displayName: 'Black', image: 'images/tshirts/tshirt1-black.jpg' }
            ],
            sizes: ['S', 'M', 'L', 'XL', 'XXL'],
            category: 'tshirts'
        },
        {
            id: 'tshirt2',
            name: 'Faith Breaks Protocol',
            description: 'Faith breaks protocol\nCotton T-shirt\nBold statement design with premium print.',
            basePrice: 400,
            typeOptions: ['Standard', 'Oversized'],
            colors: [
                { name: 'white', displayName: 'White', frontImage: 'images/tshirts/tshirt2-white-front.jpg', backImage: 'images/tshirts/tshirt2-white-back.jpg' },
                { name: 'camel', displayName: 'Camel Brown', frontImage: 'images/tshirts/tshirt2-camel-front.jpg', backImage: 'images/tshirts/tshirt2-camel-back.jpg' },
                { name: 'black', displayName: 'Black', frontImage: 'images/tshirts/tshirt2-black-front.jpg', backImage: 'images/tshirts/tshirt2-black-back.jpg' }
            ],
            sizes: ['S', 'M', 'L', 'XL', 'XXL'],
            category: 'tshirts',
            hasBackImage: true
        },
        {
            id: 'tshirt3',
            name: 'Christ Died Once For All Time',
            description: 'Christ died once for all time\nCotton T-shirt\nPowerful gospel message on premium fabric.',
            basePrice: 400,
            typeOptions: ['Standard', 'Oversized'],
            colors: [
                { name: 'white', displayName: 'White', frontImage: 'images/tshirts/tshirt3-white-front.jpg', backImage: 'images/tshirts/tshirt3-white-back.jpg' },
                { name: 'camel', displayName: 'Camel Brown', frontImage: 'images/tshirts/tshirt3-camel-front.jpg', backImage: 'images/tshirts/tshirt3-camel-back.jpg' },
                { name: 'black', displayName: 'Black', frontImage: 'images/tshirts/tshirt3-black-front.jpg', backImage: 'images/tshirts/tshirt3-black-back.jpg' }
            ],
            sizes: ['S', 'M', 'L', 'XL', 'XXL'],
            category: 'tshirts',
            hasBackImage: true
        },
        {
            id: 'tshirt4',
            name: 'Pray Without Ceasing',
            description: 'Pray without ceasing\nCotton T-shirt\nA reminder to stay in constant prayer.',
            basePrice: 400,
            typeOptions: ['Standard', 'Oversized'],
            colors: [
                { name: 'white', displayName: 'White', frontImage: 'images/tshirts/tshirt4-white-front.jpg', backImage: 'images/tshirts/tshirt4-white-back.jpg' },
                { name: 'camel', displayName: 'Camel Brown', frontImage: 'images/tshirts/tshirt4-camel-front.jpg', backImage: 'images/tshirts/tshirt4-camel-back.jpg' },
                { name: 'black', displayName: 'Black', frontImage: 'images/tshirts/tshirt4-black-front.jpg', backImage: 'images/tshirts/tshirt4-black-back.jpg' }
            ],
            sizes: ['S', 'M', 'L', 'XL', 'XXL'],
            category: 'tshirts',
            hasBackImage: true
        },
        {
            id: 'tshirt5',
            name: 'Jesus Christ The Perfect Sacrifice',
            description: 'Jesus Christ the perfect sacrifice\nCotton T-shirt\nDeclare the ultimate sacrifice.',
            basePrice: 400,
            typeOptions: ['Standard', 'Oversized'],
            colors: [
                { name: 'white', displayName: 'White', frontImage: 'images/tshirts/tshirt5-white-front.jpg', backImage: 'images/tshirts/tshirt5-white-back.jpg' },
                { name: 'camel', displayName: 'Camel Brown', frontImage: 'images/tshirts/tshirt5-camel-front.jpg', backImage: 'images/tshirts/tshirt5-camel-back.jpg' },
                { name: 'black', displayName: 'Black', frontImage: 'images/tshirts/tshirt5-black-front.jpg', backImage: 'images/tshirts/tshirt5-black-back.jpg' }
            ],
            sizes: ['S', 'M', 'L', 'XL', 'XXL'],
            category: 'tshirts',
            hasBackImage: true
        }
    ],
    hoodies: [
        {
            id: 'hoodie1',
            name: 'Faith Breaks Protocol Hoodie',
            description: 'Faith breaks protocol\nHeavy hoodies & Hoodies\nPremium heavyweight hoodie.',
            basePrice: 600,
            colors: [
                { name: 'white', displayName: 'White', frontImage: 'images/hoodies/hoodie1-white-front.jpg', backImage: 'images/hoodies/hoodie1-white-back.jpg' },
                { name: 'camel', displayName: 'Camel Brown', frontImage: 'images/hoodies/hoodie1-camel-front.jpg', backImage: 'images/hoodies/hoodie1-camel-back.jpg' },
                { name: 'black', displayName: 'Black', frontImage: 'images/hoodies/hoodie1-black-front.jpg', backImage: 'images/hoodies/hoodie1-black-back.jpg' }
            ],
            sizes: ['S', 'M', 'L', 'XL', 'XXL'],
            category: 'hoodies',
            hasBackImage: true
        },
        {
            id: 'hoodie2',
            name: 'Christ Died Once For All Time Hoodie',
            description: 'Christ died once for all time\nHeavy hoodies & Hoodies\nWarm, comfortable, and faith-filled.',
            basePrice: 600,
            colors: [
                { name: 'white', displayName: 'White', frontImage: 'images/hoodies/hoodie2-white-front.jpg', backImage: 'images/hoodies/hoodie2-white-back.jpg' },
                { name: 'camel', displayName: 'Camel Brown', frontImage: 'images/hoodies/hoodie2-camel-front.jpg', backImage: 'images/hoodies/hoodie2-camel-back.jpg' },
                { name: 'black', displayName: 'Black', frontImage: 'images/hoodies/hoodie2-black-front.jpg', backImage: 'images/hoodies/hoodie2-black-back.jpg' }
            ],
            sizes: ['S', 'M', 'L', 'XL', 'XXL'],
            category: 'hoodies',
            hasBackImage: true
        },
        {
            id: 'hoodie3',
            name: 'Pray Without Ceasing Hoodie',
            description: 'Pray without ceasing\nHeavy hoodies & Hoodies\nStay warm while staying in prayer.',
            basePrice: 600,
            colors: [
                { name: 'white', displayName: 'White', frontImage: 'images/hoodies/hoodie3-white-front.jpg', backImage: 'images/hoodies/hoodie3-white-back.jpg' },
                { name: 'camel', displayName: 'Camel Brown', frontImage: 'images/hoodies/hoodie3-camel-front.jpg', backImage: 'images/hoodies/hoodie3-camel-back.jpg' },
                { name: 'black', displayName: 'Black', frontImage: 'images/hoodies/hoodie3-black-front.jpg', backImage: 'images/hoodies/hoodie3-black-back.jpg' }
            ],
            sizes: ['S', 'M', 'L', 'XL', 'XXL'],
            category: 'hoodies',
            hasBackImage: true
        },
        {
            id: 'hoodie4',
            name: 'Jesus Christ The Perfect Sacrifice Hoodie',
            description: 'Jesus Christ the perfect sacrifice\nHeavy hoodies & Hoodies\nPremium quality with bold statement.',
            basePrice: 600,
            colors: [
                { name: 'white', displayName: 'White', frontImage: 'images/hoodies/hoodie4-white-front.jpg', backImage: 'images/hoodies/hoodie4-white-back.jpg' },
                { name: 'camel', displayName: 'Camel Brown', frontImage: 'images/hoodies/hoodie4-camel-front.jpg', backImage: 'images/hoodies/hoodie4-camel-back.jpg' },
                { name: 'black', displayName: 'Black', frontImage: 'images/hoodies/hoodie4-black-front.jpg', backImage: 'images/hoodies/hoodie4-black-back.jpg' }
            ],
            sizes: ['S', 'M', 'L', 'XL', 'XXL'],
            category: 'hoodies',
            hasBackImage: true
        }
    ],
    sweaters: [
        {
            id: 'sweater1',
            name: 'Faith Breaks Protocol Sweater',
            description: 'Faith breaks protocol\nCrew neck sweaters\nComfortable crewneck for everyday wear.',
            basePrice: 560,
            colors: [
                { name: 'white', displayName: 'White', frontImage: 'images/sweaters/sweater1-white-front.jpg', backImage: 'images/sweaters/sweater1-white-back.jpg' },
                { name: 'camel', displayName: 'Camel Brown', frontImage: 'images/sweaters/sweater1-camel-front.jpg', backImage: 'images/sweaters/sweater1-camel-back.jpg' },
                { name: 'black', displayName: 'Black', frontImage: 'images/sweaters/sweater1-black-front.jpg', backImage: 'images/sweaters/sweater1-black-back.jpg' }
            ],
            sizes: ['S', 'M', 'L', 'XL', 'XXL'],
            category: 'sweaters',
            hasBackImage: true
        },
        {
            id: 'sweater2',
            name: 'Christ Died Once For All Time Sweater',
            description: 'Christ died once for all time\nCrew neck sweaters\nSoft, warm, and faith-inspired.',
            basePrice: 560,
            colors: [
                { name: 'white', displayName: 'White', frontImage: 'images/sweaters/sweater2-white-front.jpg', backImage: 'images/sweaters/sweater2-white-back.jpg' },
                { name: 'camel', displayName: 'Camel Brown', frontImage: 'images/sweaters/sweater2-camel-front.jpg', backImage: 'images/sweaters/sweater2-camel-back.jpg' },
                { name: 'black', displayName: 'Black', frontImage: 'images/sweaters/sweater2-black-front.jpg', backImage: 'images/sweaters/sweater2-black-back.jpg' }
            ],
            sizes: ['S', 'M', 'L', 'XL', 'XXL'],
            category: 'sweaters',
            hasBackImage: true
        },
        {
            id: 'sweater3',
            name: 'Pray Without Ceasing Sweater',
            description: 'Pray without ceasing\nCrew neck sweaters\nComfort meets faith in this classic piece.',
            basePrice: 560,
            colors: [
                { name: 'white', displayName: 'White', frontImage: 'images/sweaters/sweater3-white-front.jpg', backImage: 'images/sweaters/sweater3-white-back.jpg' },
                { name: 'camel', displayName: 'Camel Brown', frontImage: 'images/sweaters/sweater3-camel-front.jpg', backImage: 'images/sweaters/sweater3-camel-back.jpg' },
                { name: 'black', displayName: 'Black', frontImage: 'images/sweaters/sweater3-black-front.jpg', backImage: 'images/sweaters/sweater3-black-back.jpg' }
            ],
            sizes: ['S', 'M', 'L', 'XL', 'XXL'],
            category: 'sweaters',
            hasBackImage: true
        },
        {
            id: 'sweater4',
            name: 'Jesus Christ The Perfect Sacrifice Sweater',
            description: 'Jesus Christ the perfect sacrifice\nCrew neck sweaters\nPremium crewneck with powerful message.',
            basePrice: 560,
            colors: [
                { name: 'white', displayName: 'White', frontImage: 'images/sweaters/sweater4-white-front.jpg', backImage: 'images/sweaters/sweater4-white-back.jpg' },
                { name: 'camel', displayName: 'Camel Brown', frontImage: 'images/sweaters/sweater4-camel-front.jpg', backImage: 'images/sweaters/sweater4-camel-back.jpg' },
                { name: 'black', displayName: 'Black', frontImage: 'images/sweaters/sweater4-black-front.jpg', backImage: 'images/sweaters/sweater4-black-back.jpg' }
            ],
            sizes: ['S', 'M', 'L', 'XL', 'XXL'],
            category: 'sweaters',
            hasBackImage: true
        }
    ],
    headwear: [
        {
            id: 'cap',
            name: 'Christ or Nothing CAP',
            description: 'Christ or nothing CAPS\nPremium quality cap with embroidered logo\nAdjustable strap for perfect fit.',
            basePrice: 250,
            colors: [
                { name: 'black', displayName: 'Black', image: 'images/headwear/cap-black.jpg' }
            ],
            sizes: ['OSFA'],
            category: 'headwear'
        },
        {
            id: 'bucket',
            name: 'Christ or Nothing Bucket Hat',
            description: 'Christ or nothing Bucket hats\nStreet style bucket hat with faith message\nOne size fits most.',
            basePrice: 250,
            colors: [
                { name: 'black', displayName: 'Black', image: 'images/headwear/bucket-black.jpg' }
            ],
            sizes: ['OSFA'],
            category: 'headwear'
        }
    ]
};

// Flatten products for recommendations
let allProducts = [];
for (const category in productsData) {
    allProducts = allProducts.concat(productsData[category]);
}

// Global variables
let cart = [];
const WHATSAPP_NUMBER = '27671664440';
const DELIVERY_FEE = 60;
let lastScrollY = 0;
let selectedColors = {};
let selectedTypes = {};
let selectedSizes = {};

// Helper function to get random color from array
function getRandomColor(colors) {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex].name;
}

// Helper Functions
function escapeHTML(str) {
    if (!str) return '';
    return str.replace(/[&<>]/g, function(m) {
        if (m === '&') return '&amp;';
        if (m === '<') return '&lt;';
        if (m === '>') return '&gt;';
        return m;
    });
}

function showNotification(message) {
    const existing = document.querySelector('.notification');
    if (existing) existing.remove();
    
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerHTML = '<i class="fas fa-check-circle"></i> ' + message;
    document.body.appendChild(notification);
    
    setTimeout(function() {
        if (notification && notification.remove) {
            notification.remove();
        }
    }, 3000);
}

function findProductById(id) {
    for (const category in productsData) {
        const found = productsData[category].find(function(p) { return p.id === id; });
        if (found) return found;
    }
    return null;
}

function formatPrice(price) {
    return 'R ' + price.toLocaleString();
}

function getPrice(product, type) {
    if (product.typeOptions && type) {
        if (type === 'Oversized') {
            return product.basePrice + 100;
        }
    }
    return product.basePrice;
}

function getProductImages(product, colorName) {
    const color = product.colors.find(function(c) { return c.name === colorName; });
    if (!color) return [];
    
    if (product.hasBackImage && color.frontImage && color.backImage) {
        return [color.frontImage, color.backImage];
    } else if (color.image) {
        return [color.image];
    } else if (color.frontImage) {
        return [color.frontImage];
    }
    return [];
}

function loadCart() {
    const savedCart = localStorage.getItem('christOrNothingCart');
    if (savedCart) {
        try {
            cart = JSON.parse(savedCart);
            updateCartUI();
        } catch (e) {
            console.error('Failed to load cart:', e);
        }
    }
}

function saveCart() {
    localStorage.setItem('christOrNothingCart', JSON.stringify(cart));
}

function initScrollHeader() {
    const header = document.getElementById('mainHeader');
    if (!header) return;
    
    window.addEventListener('scroll', function() {
        const currentScrollY = window.scrollY;
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
            header.classList.add('header-hidden');
        } else if (currentScrollY < lastScrollY) {
            header.classList.remove('header-hidden');
        }
        lastScrollY = currentScrollY;
    });
}

function initMobileMenu() {
    const menuBtn = document.getElementById('mobileMenuBtn');
    const navMenu = document.getElementById('navMenu');
    
    if (menuBtn && navMenu) {
        menuBtn.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            const icon = menuBtn.querySelector('i');
            if (icon) {
                if (navMenu.classList.contains('active')) {
                    icon.classList.remove('fa-bars');
                    icon.classList.add('fa-times');
                } else {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }
        });
        
        // Close menu when clicking a link
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(function(link) {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                const icon = menuBtn.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            });
        });
    }
}

function initAboutModal() {
    const modal = document.getElementById('aboutModal');
    const aboutLinks = document.querySelectorAll('#aboutLink, #aboutLinkHero');
    const closeBtn = document.querySelector('.about-close');
    
    if (aboutLinks.length > 0) {
        aboutLinks.forEach(function(link) {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                if (modal) modal.classList.add('show');
            });
        });
    }
    
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            if (modal) modal.classList.remove('show');
        });
    }
    
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.classList.remove('show');
            }
        });
    }
}

// Carousel Functions
function initializeSingleCarousel(carouselElement, totalImages) {
    const imgContainer = carouselElement.querySelector('.carousel-images');
    const prevBtn = carouselElement.querySelector('.prev');
    const nextBtn = carouselElement.querySelector('.next');
    
    if (!imgContainer) return;
    if (totalImages <= 1) return;
    
    let currentIndex = 0;
    
    function updateCarousel() {
        imgContainer.style.transform = 'translateX(-' + (currentIndex * 100) + '%)';
    }
    
    if (prevBtn) {
        const newPrev = prevBtn.cloneNode(true);
        prevBtn.parentNode.replaceChild(newPrev, prevBtn);
        newPrev.addEventListener('click', function(e) {
            e.stopPropagation();
            currentIndex = (currentIndex - 1 + totalImages) % totalImages;
            updateCarousel();
        });
    }
    
    if (nextBtn) {
        const newNext = nextBtn.cloneNode(true);
        nextBtn.parentNode.replaceChild(newNext, nextBtn);
        newNext.addEventListener('click', function(e) {
            e.stopPropagation();
            currentIndex = (currentIndex + 1) % totalImages;
            updateCarousel();
        });
    }
}

function initializeCarousels() {
    const carousels = document.querySelectorAll('.carousel[data-carousel]');
    for (let i = 0; i < carousels.length; i++) {
        const carousel = carousels[i];
        const images = carousel.querySelectorAll('.carousel-img');
        if (images.length > 1) {
            initializeSingleCarousel(carousel, images.length);
        }
    }
}

function createCarousel(images, productId) {
    if (!images || images.length === 0) {
        return '<div class="carousel" data-product-id="' + productId + '">' +
            '<div class="carousel-images">' +
            '<img src="https://placehold.co/800x600/111111/FFFFFF?text=No+Image" class="carousel-img" alt="Product" loading="lazy">' +
            '</div>' +
            '</div>';
    }
    
    let imagesHTML = '';
    for (let i = 0; i < images.length; i++) {
        imagesHTML += '<img src="' + images[i] + '" class="carousel-img" alt="Product image" loading="lazy" onerror="this.src=\'https://placehold.co/800x600/111111/FFFFFF?text=Image+Error\'">';
    }
    
    if (images.length === 1) {
        return '<div class="carousel" data-product-id="' + productId + '">' +
            '<div class="carousel-images">' +
            imagesHTML +
            '</div>' +
            '</div>';
    }
    
    return '<div class="carousel" data-carousel data-product-id="' + productId + '">' +
        '<div class="carousel-images">' +
        imagesHTML +
        '</div>' +
        '<button class="carousel-btn prev" aria-label="Previous image">‹</button>' +
        '<button class="carousel-btn next" aria-label="Next image">›</button>' +
        '</div>';
}

// Cart Functions
function addToCart(item) {
    const newItem = {
        id: item.id,
        name: item.name,
        description: item.description,
        color: item.color,
        colorName: item.colorName,
        size: item.size,
        type: item.type,
        price: item.price,
        addedAt: new Date().toLocaleString()
    };
    cart.push(newItem);
    saveCart();
    updateCartUI();
    showNotification(item.name + ' (' + item.colorName + ', ' + item.size + (item.type ? ', ' + item.type : '') + ') added to cart');
}

function removeFromCart(index) {
    const removedItem = cart[index];
    cart.splice(index, 1);
    saveCart();
    updateCartUI();
    showNotification(removedItem.name + ' removed from cart');
}

function clearCart() {
    if (cart.length > 0) {
        cart = [];
        saveCart();
        updateCartUI();
        showNotification('Cart cleared');
    }
}

function getCartTotal() {
    return cart.reduce(function(total, item) {
        return total + item.price;
    }, 0);
}

function renderCartModal() {
    const cartItemsContainer = document.getElementById('cartItemsList');
    const cartTotalSpan = document.getElementById('cartTotalPrice');
    const cartTotalAmount = document.getElementById('cartTotalAmount');
    
    if (!cartItemsContainer) return;
    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<div class="empty-cart">Your cart is empty</div>';
        if (cartTotalSpan) cartTotalSpan.textContent = 'Total Items: 0';
        if (cartTotalAmount) cartTotalAmount.innerHTML = 'Total: R 0';
        return;
    }
    
    let itemsHTML = '';
    for (let i = 0; i < cart.length; i++) {
        const item = cart[i];
        let typeText = item.type ? ' | ' + item.type : '';
        
        itemsHTML += `
            <div class="cart-item">
                <div class="cart-item-info">
                    <div class="cart-item-title">${escapeHTML(item.name)}</div>
                    <div class="cart-item-details">Color: ${escapeHTML(item.colorName)} | Size: ${escapeHTML(item.size)}${typeText}</div>
                    <div class="cart-item-details">${formatPrice(item.price)}</div>
                </div>
                <button class="remove-item" data-index="${i}" aria-label="Remove item">Remove</button>
            </div>
        `;
    }
    
    cartItemsContainer.innerHTML = itemsHTML;
    if (cartTotalSpan) cartTotalSpan.textContent = 'Total Items: ' + cart.length;
    
    const subtotal = getCartTotal();
    const totalWithDelivery = subtotal + DELIVERY_FEE;
    
    if (cartTotalAmount) {
        cartTotalAmount.innerHTML = `
            <div class="cart-summary">
                <div>Subtotal: ${formatPrice(subtotal)}</div>
                <div>Delivery Fee: ${formatPrice(DELIVERY_FEE)}</div>
                <div><strong>Total: ${formatPrice(totalWithDelivery)}</strong></div>
            </div>
        `;
    }
    
    const removeBtns = document.querySelectorAll('.remove-item');
    for (let i = 0; i < removeBtns.length; i++) {
        const btn = removeBtns[i];
        btn.addEventListener('click', function(e) {
            const index = parseInt(btn.getAttribute('data-index'));
            removeFromCart(index);
        });
    }
}

function updateCartUI() {
    const cartCount = document.getElementById('cartCount');
    if (cartCount) {
        cartCount.textContent = cart.length;
    }
    renderCartModal();
}

function generateWhatsAppMessage() {
    if (cart.length === 0) {
        return "Hello, I would like to place an order with Christ or Nothing.";
    }
    
    const currentDate = new Date().toLocaleString();
    const orderNumber = 'ORD-' + Date.now().toString().slice(-6);
    const subtotal = getCartTotal();
    const totalWithDelivery = subtotal + DELIVERY_FEE;
    
    let message = "";
    
    message += "*CHRIST OR NOTHING - ORDER SUMMARY*\n";
    message += "━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n";
    message += "Order #: " + orderNumber + "\n";
    message += "Date: " + currentDate + "\n";
    message += "━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n";
    
    message += "*ITEMS ORDERED:*\n";
    message += "─────────────────\n";
    
    for (let i = 0; i < cart.length; i++) {
        const item = cart[i];
        let typeText = item.type ? " (" + item.type + ")" : "";
        message += (i + 1) + ". " + item.name + typeText + "\n";
        message += "   Color: " + item.colorName + "\n";
        message += "   Size: " + item.size + "\n";
        message += "   Price: " + formatPrice(item.price) + "\n";
        message += "   ─────────────────\n";
    }
    
    message += "\n";
    
    message += "*PRICE SUMMARY:*\n";
    message += "─────────────────\n";
    message += "Subtotal (" + cart.length + " items): " + formatPrice(subtotal) + "\n";
    message += "Delivery Fee: " + formatPrice(DELIVERY_FEE) + "\n";
    message += "━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n";
    message += "*TOTAL AMOUNT: " + formatPrice(totalWithDelivery) + "*\n";
    message += "━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n";
    
    message += "*CUSTOMER DETAILS:*\n";
    message += "─────────────────\n";
    message += "Full Name: \n";
    message += "Delivery Address: \n";
    message += "Phone Number: \n";
    message += "Email: \n\n";
    
    message += "*THANK YOU FOR SHOPPING WITH CHRIST OR NOTHING!*\n";
    message += "We will confirm your order shortly. God bless!";
    
    return message;
}

function sendWhatsAppQuote() {
    if (cart.length === 0) {
        showNotification('Your cart is empty. Add items before checking out.');
        return;
    }
    
    const message = generateWhatsAppMessage();
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodedMessage;
    
    window.open(whatsappUrl, '_blank');
    showNotification('Opening WhatsApp to complete your order...');
}

// Render Products on Homepage
function renderProductGrid(category, productsArray) {
    const container = document.getElementById(category + 'Grid');
    if (!container) return;
    
    container.innerHTML = '';
    
    for (let p = 0; p < productsArray.length; p++) {
        const product = productsArray[p];
        
        if (!selectedColors[product.id]) {
            selectedColors[product.id] = getRandomColor(product.colors);
        }
        if (!selectedTypes[product.id]) {
            selectedTypes[product.id] = product.typeOptions ? product.typeOptions[0] : null;
        }
        if (!selectedSizes[product.id]) {
            selectedSizes[product.id] = product.sizes[0];
        }
        
        const currentImages = getProductImages(product, selectedColors[product.id]);
        const carouselHTML = createCarousel(currentImages, product.id);
        const currentPrice = getPrice(product, selectedTypes[product.id]);
        
        let colorSwatchesHTML = '';
        for (let c = 0; c < product.colors.length; c++) {
            const color = product.colors[c];
            const isActive = selectedColors[product.id] === color.name;
            const swatchClass = 'color-swatch color-swatch-' + color.name;
            colorSwatchesHTML += '<div class="' + swatchClass + (isActive ? ' active' : '') + '" data-product-id="' + product.id + '" data-color="' + color.name + '" title="' + color.displayName + '" aria-label="Select ' + color.displayName + ' color"></div>';
        }
        
        let typeButtonsHTML = '';
        if (product.typeOptions) {
            for (let t = 0; t < product.typeOptions.length; t++) {
                const type = product.typeOptions[t];
                const isActive = selectedTypes[product.id] === type;
                typeButtonsHTML += '<button class="type-btn' + (isActive ? ' active' : '') + '" data-product-id="' + product.id + '" data-type="' + type + '">' + type + '</button>';
            }
        }
        
        const escapedName = escapeHTML(product.name);
        const escapedDesc = escapeHTML(product.description).replace(/\n/g, '<br>');
        
        const card = document.createElement('div');
        card.className = 'product-card';
        card.setAttribute('data-product-id', product.id);
        card.setAttribute('data-aos', 'fade-up');
        card.setAttribute('data-aos-duration', '600');
        
        card.innerHTML = carouselHTML +
            '<div class="product-info">' +
            '<h3 class="product-name">' + escapedName + '</h3>' +
            '<div class="product-price">' + formatPrice(currentPrice) + '</div>' +
            '<div class="product-desc">' + escapedDesc.substring(0, 80) + (escapedDesc.length > 80 ? '...' : '') + '</div>' +
            (typeButtonsHTML ? '<div class="type-options">' + typeButtonsHTML + '</div>' : '') +
            '<div class="color-options">' + colorSwatchesHTML + '</div>' +
            '</div>';
        
        container.appendChild(card);
    }
    
    attachProductEvents();
}

function attachProductEvents() {
    const colorSwatches = document.querySelectorAll('.color-swatch');
    for (let i = 0; i < colorSwatches.length; i++) {
        const swatch = colorSwatches[i];
        swatch.addEventListener('click', function(e) {
            e.stopPropagation();
            const productId = swatch.getAttribute('data-product-id');
            const color = swatch.getAttribute('data-color');
            changeProductColor(productId, color);
        });
    }
    
    const typeBtns = document.querySelectorAll('.type-btn');
    for (let i = 0; i < typeBtns.length; i++) {
        const btn = typeBtns[i];
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const productId = btn.getAttribute('data-product-id');
            const type = btn.getAttribute('data-type');
            changeProductType(productId, type);
        });
    }
    
    const productCards = document.querySelectorAll('.product-card');
    for (let i = 0; i < productCards.length; i++) {
        const card = productCards[i];
        const productId = card.getAttribute('data-product-id');
        card.addEventListener('click', function(e) {
            if (!e.target.classList.contains('color-swatch') && 
                !e.target.classList.contains('type-btn') &&
                !e.target.classList.contains('carousel-btn') && 
                !e.target.closest('.carousel-btn')) {
                window.location.href = 'product.html?id=' + productId;
            }
        });
    }
    
    initializeCarousels();
}

function changeProductColor(productId, color) {
    selectedColors[productId] = color;
    const product = findProductById(productId);
    if (!product) return;
    
    const newImages = getProductImages(product, color);
    const carouselContainer = document.querySelector('.carousel[data-product-id="' + productId + '"]');
    
    if (carouselContainer) {
        const imgContainer = carouselContainer.querySelector('.carousel-images');
        if (imgContainer) {
            let newImagesHTML = '';
            for (let i = 0; i < newImages.length; i++) {
                newImagesHTML += '<img src="' + newImages[i] + '" class="carousel-img" alt="Product image" loading="lazy" onerror="this.src=\'https://placehold.co/800x600/111111/FFFFFF?text=Image+Error\'">';
            }
            imgContainer.innerHTML = newImagesHTML;
            imgContainer.style.transform = 'translateX(0)';
            
            if (newImages.length > 1) {
                const carouselAttr = carouselContainer.getAttribute('data-carousel');
                if (!carouselAttr) {
                    carouselContainer.setAttribute('data-carousel', '');
                }
                initializeSingleCarousel(carouselContainer, newImages.length);
            }
        }
    }
    
    const priceElement = document.querySelector('.product-card[data-product-id="' + productId + '"] .product-price');
    if (priceElement) {
        const currentPrice = getPrice(product, selectedTypes[productId]);
        priceElement.textContent = formatPrice(currentPrice);
    }
    
    const colorSwatches = document.querySelectorAll('.color-swatch[data-product-id="' + productId + '"]');
    for (let i = 0; i < colorSwatches.length; i++) {
        const swatch = colorSwatches[i];
        if (swatch.getAttribute('data-color') === color) {
            swatch.classList.add('active');
        } else {
            swatch.classList.remove('active');
        }
    }
}

function changeProductType(productId, type) {
    selectedTypes[productId] = type;
    const product = findProductById(productId);
    if (!product) return;
    
    const priceElement = document.querySelector('.product-card[data-product-id="' + productId + '"] .product-price');
    if (priceElement) {
        const newPrice = getPrice(product, type);
        priceElement.textContent = formatPrice(newPrice);
    }
    
    const typeBtns = document.querySelectorAll('.type-btn[data-product-id="' + productId + '"]');
    for (let i = 0; i < typeBtns.length; i++) {
        const btn = typeBtns[i];
        if (btn.getAttribute('data-type') === type) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    }
}

// Product Detail Page Functions
function getUrlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

function renderProductDetail() {
    const productId = getUrlParameter('id');
    if (!productId) {
        window.location.href = 'index.html';
        return;
    }
    
    const product = findProductById(productId);
    if (!product) {
        document.getElementById('productDetail').innerHTML = '<div class="error">Product not found. <a href="index.html">Return to shop</a></div>';
        return;
    }
    
    if (!selectedColors[product.id]) {
        selectedColors[product.id] = getRandomColor(product.colors);
    }
    if (!selectedTypes[product.id]) {
        selectedTypes[product.id] = product.typeOptions ? product.typeOptions[0] : null;
    }
    if (!selectedSizes[product.id]) {
        selectedSizes[product.id] = product.sizes[0];
    }
    
    const currentImages = getProductImages(product, selectedColors[product.id]);
    const currentPrice = getPrice(product, selectedTypes[product.id]);
    
    let thumbnailsHTML = '';
    for (let i = 0; i < currentImages.length; i++) {
        thumbnailsHTML += '<img src="' + currentImages[i] + '" class="thumbnail" data-index="' + i + '" alt="Thumbnail" loading="lazy">';
    }
    
    let colorButtonsHTML = '';
    for (let c = 0; c < product.colors.length; c++) {
        const color = product.colors[c];
        const isActive = selectedColors[product.id] === color.name;
        colorButtonsHTML += '<button class="color-btn' + (isActive ? ' active' : '') + '" data-color="' + color.name + '">' + color.displayName + '</button>';
    }
    
    let typeButtonsHTML = '';
    if (product.typeOptions) {
        for (let t = 0; t < product.typeOptions.length; t++) {
            const type = product.typeOptions[t];
            const isActive = selectedTypes[product.id] === type;
            typeButtonsHTML += '<button class="type-btn' + (isActive ? ' active' : '') + '" data-type="' + type + '">' + type + '</button>';
        }
    }
    
    let sizeButtonsHTML = '';
    for (let s = 0; s < product.sizes.length; s++) {
        const size = product.sizes[s];
        const isActive = selectedSizes[product.id] === size;
        sizeButtonsHTML += '<button class="size-btn' + (isActive ? ' active' : '') + '" data-size="' + size + '">' + size + '</button>';
    }
    
    const detailHTML = `
        <div class="product-detail-grid">
            <div class="product-detail-images">
                <img src="${currentImages[0]}" class="product-detail-main-image" id="mainImage" alt="${product.name}" loading="eager">
                <div class="product-detail-thumbnails">
                    ${thumbnailsHTML}
                </div>
            </div>
            <div class="product-detail-info">
                <h1>${escapeHTML(product.name)}</h1>
                <div class="product-detail-price" id="detailPrice">${formatPrice(currentPrice)}</div>
                <div class="product-detail-description">${escapeHTML(product.description).replace(/\n/g, '<br>')}</div>
                <div class="color-options"><strong>Color:</strong><br> ${colorButtonsHTML}</div>
                ${typeButtonsHTML ? '<div class="type-options"><strong>Style:</strong><br> ' + typeButtonsHTML + '</div>' : ''}
                <div class="size-options"><strong>Size:</strong><br> ${sizeButtonsHTML}</div>
                <button class="add-to-cart-detail" id="addToCartDetail">
                    <i class="fas fa-plus"></i> Add to Cart
                </button>
                <div class="back-to-shop">
                    <a href="index.html" class="back-link"><i class="fas fa-arrow-left"></i> Back to Shop</a>
                </div>
            </div>
        </div>
    `;
    
    document.getElementById('productDetail').innerHTML = detailHTML;
    
    const thumbnails = document.querySelectorAll('.thumbnail');
    const mainImage = document.getElementById('mainImage');
    for (let i = 0; i < thumbnails.length; i++) {
        thumbnails[i].addEventListener('click', function() {
            mainImage.src = this.src;
            for (let j = 0; j < thumbnails.length; j++) {
                thumbnails[j].classList.remove('active');
            }
            this.classList.add('active');
        });
    }
    if (thumbnails.length > 0) thumbnails[0].classList.add('active');
    
    const colorBtns = document.querySelectorAll('.color-btn');
    for (let i = 0; i < colorBtns.length; i++) {
        const btn = colorBtns[i];
        btn.addEventListener('click', function() {
            const color = this.getAttribute('data-color');
            changeProductColorDetail(product.id, color);
        });
    }
    
    const typeBtnsDetail = document.querySelectorAll('.type-options .type-btn');
    for (let i = 0; i < typeBtnsDetail.length; i++) {
        const btn = typeBtnsDetail[i];
        btn.addEventListener('click', function() {
            const type = this.getAttribute('data-type');
            changeProductTypeDetail(product.id, type);
        });
    }
    
    const sizeBtns = document.querySelectorAll('.size-btn');
    for (let i = 0; i < sizeBtns.length; i++) {
        const btn = sizeBtns[i];
        btn.addEventListener('click', function() {
            for (let j = 0; j < sizeBtns.length; j++) {
                sizeBtns[j].classList.remove('active');
            }
            this.classList.add('active');
            selectedSizes[product.id] = this.getAttribute('data-size');
        });
    }
    
    const addToCartBtn = document.getElementById('addToCartDetail');
    if (addToCartBtn) {
        addToCartBtn.addEventListener('click', function() {
            addToCart({
                id: product.id,
                name: product.name,
                description: product.description,
                color: selectedColors[product.id],
                colorName: product.colors.find(function(c) { return c.name === selectedColors[product.id]; }).displayName,
                size: selectedSizes[product.id],
                type: selectedTypes[product.id],
                price: getPrice(product, selectedTypes[product.id])
            });
        });
    }
    
    renderRecommendations(product);
}

function changeProductColorDetail(productId, color) {
    selectedColors[productId] = color;
    const product = findProductById(productId);
    if (!product) return;
    
    const newImages = getProductImages(product, color);
    const mainImage = document.getElementById('mainImage');
    if (mainImage && newImages.length > 0) {
        mainImage.src = newImages[0];
    }
    
    const thumbnailsContainer = document.querySelector('.product-detail-thumbnails');
    if (thumbnailsContainer) {
        let newThumbnailsHTML = '';
        for (let i = 0; i < newImages.length; i++) {
            newThumbnailsHTML += '<img src="' + newImages[i] + '" class="thumbnail" data-index="' + i + '" alt="Thumbnail" loading="lazy">';
        }
        thumbnailsContainer.innerHTML = newThumbnailsHTML;
        
        const newThumbnails = document.querySelectorAll('.thumbnail');
        for (let i = 0; i < newThumbnails.length; i++) {
            newThumbnails[i].addEventListener('click', function() {
                mainImage.src = this.src;
                for (let j = 0; j < newThumbnails.length; j++) {
                    newThumbnails[j].classList.remove('active');
                }
                this.classList.add('active');
            });
        }
        if (newThumbnails.length > 0) newThumbnails[0].classList.add('active');
    }
    
    const colorBtns = document.querySelectorAll('.color-btn');
    for (let i = 0; i < colorBtns.length; i++) {
        const btn = colorBtns[i];
        if (btn.getAttribute('data-color') === color) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    }
}

function changeProductTypeDetail(productId, type) {
    selectedTypes[productId] = type;
    const product = findProductById(productId);
    if (!product) return;
    
    const priceElement = document.getElementById('detailPrice');
    if (priceElement) {
        const newPrice = getPrice(product, type);
        priceElement.textContent = formatPrice(newPrice);
    }
    
    const typeBtns = document.querySelectorAll('.type-options .type-btn');
    for (let i = 0; i < typeBtns.length; i++) {
        const btn = typeBtns[i];
        if (btn.getAttribute('data-type') === type) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    }
}

function renderRecommendations(currentProduct) {
    const recommendations = allProducts
        .filter(function(p) { 
            return p.id !== currentProduct.id && p.category === currentProduct.category;
        })
        .slice(0, 4);
    
    const container = document.getElementById('recommendationsGrid');
    if (!container) return;
    
    if (recommendations.length === 0) {
        container.innerHTML = '<p>No recommendations available.</p>';
        return;
    }
    
    let recHTML = '';
    for (let i = 0; i < recommendations.length; i++) {
        const rec = recommendations[i];
        const defaultColor = rec.colors[0];
        const defaultImage = rec.hasBackImage ? defaultColor.frontImage : defaultColor.image;
        const defaultPrice = getPrice(rec, rec.typeOptions ? rec.typeOptions[0] : null);
        
        recHTML += `
            <div class="recommendation-card" data-id="${rec.id}" data-aos="fade-up" data-aos-delay="${i * 100}">
                <img src="${defaultImage}" alt="${rec.name}" loading="lazy">
                <h4>${escapeHTML(rec.name)}</h4>
                <p>${formatPrice(defaultPrice)}</p>
            </div>
        `;
    }
    
    container.innerHTML = recHTML;
    
    const recCards = document.querySelectorAll('.recommendation-card');
    for (let i = 0; i < recCards.length; i++) {
        recCards[i].addEventListener('click', function() {
            const id = this.getAttribute('data-id');
            window.location.href = 'product.html?id=' + id;
        });
    }
}

function initModal() {
    const modal = document.getElementById('cartModal');
    const cartIcon = document.getElementById('cartIcon');
    const closeBtn = document.getElementById('closeCartBtn');
    const whatsappBtn = document.getElementById('whatsappOrderBtn');
    const clearCartBtn = document.getElementById('clearCartBtn');
    
    if (cartIcon) {
        cartIcon.addEventListener('click', function() {
            renderCartModal();
            if (modal) modal.classList.add('open');
        });
    }
    
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            if (modal) modal.classList.remove('open');
        });
    }
    
    if (whatsappBtn) {
        whatsappBtn.addEventListener('click', function() {
            sendWhatsAppQuote();
        });
    }
    
    if (clearCartBtn) {
        clearCartBtn.addEventListener('click', function() {
            clearCart();
        });
    }
    
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.classList.remove('open');
            }
        });
    }
}

function updateContactsWithTikTok() {
    const contactGrid = document.querySelector('.contact-grid');
    if (contactGrid && !document.querySelector('.contact-card.tiktok-card')) {
        const tiktokCard = document.createElement('div');
        tiktokCard.className = 'contact-card tiktok-card';
        tiktokCard.setAttribute('data-aos', 'flip-up');
        tiktokCard.setAttribute('data-aos-duration', '600');
        tiktokCard.innerHTML = `
            <div class="contact-icon">
                <i class="fab fa-tiktok"></i>
            </div>
            <h3>TikTok</h3>
            <p>@christ.or.nothing_</p>
            <span class="contact-note">Follow for updates & content</span>
        `;
        tiktokCard.addEventListener('click', function() {
            window.open('https://www.tiktok.com/@christ.or.nothing_?_r=1&_t=ZS-94xMFltNYn9', '_blank');
        });
        contactGrid.appendChild(tiktokCard);
    }
}

function updateWhatsAppButtonText() {
    const whatsappBtn = document.getElementById('whatsappOrderBtn');
    if (whatsappBtn) {
        whatsappBtn.innerHTML = '<i class="fab fa-whatsapp"></i> Checkout via WhatsApp';
    }
}

function initAOS() {
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 600,
            once: true,
            offset: 50,
            disable: window.innerWidth < 768 ? true : false
        });
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    loadCart();
    initScrollHeader();
    initMobileMenu();
    initAboutModal();
    initModal();
    initAOS();
    updateContactsWithTikTok();
    updateWhatsAppButtonText();
    
    if (window.location.pathname.includes('product.html')) {
        renderProductDetail();
    } else {
        renderProductGrid('tshirts', productsData.tshirts);
        renderProductGrid('hoodies', productsData.hoodies);
        renderProductGrid('sweaters', productsData.sweaters);
        renderProductGrid('headwear', productsData.headwear);
    }
});