// ============================================
// CHRIST OR NOTHING - MAIN JAVASCRIPT
// Shopping Cart, Product Display, Color Selection
// Mobile Optimized - Using Your Image Structure
// ============================================

// Product Database with Exact Image Paths
const productsData = {
    tshirts: [
        // Product 1 - Christ or Nothing (Plain)
        { id: 'tshirt1', name: 'Christ or Nothing', description: 'Crew neck T-shirt\nChrist or nothing\nPremium quality cotton.', basePrice: 300, type: 'Standard', colors: ['white', 'camel', 'black'], colorNames: { white: 'White', camel: 'Camel Brown', black: 'Black' }, images: { white: 'images/tshirts/tshirt1-white.jpg', camel: 'images/tshirts/tshirt1-camel.jpg', black: 'images/tshirts/tshirt1-black.jpg' }, sizes: ['S', 'M', 'L', 'XL', 'XXL'], category: 'tshirts', hasBackImage: false },
        // Product 2 - Faith Breaks Protocol
        { id: 'tshirt2', name: 'Faith Breaks Protocol', description: 'Faith breaks protocol\nCotton T-shirt\nBold statement design.', basePrice: 400, typeOptions: ['Standard', 'Oversized'], colors: ['white', 'camel', 'black'], colorNames: { white: 'White', camel: 'Camel Brown', black: 'Black' }, images: { white: ['images/tshirts/tshirt2-white-front.jpg', 'images/tshirts/tshirt2-white-back.jpg'], camel: ['images/tshirts/tshirt2-camel-front.jpg', 'images/tshirts/tshirt2-camel-back.jpg'], black: ['images/tshirts/tshirt2-black-front.jpg', 'images/tshirts/tshirt2-black-back.jpg'] }, sizes: ['S', 'M', 'L', 'XL', 'XXL'], category: 'tshirts', hasBackImage: true },
        // Product 3 - Christ Died Once For All Time
        { id: 'tshirt3', name: 'Christ Died Once For All Time', description: 'Christ died once for all time\nCotton T-shirt\nPowerful gospel message.', basePrice: 400, typeOptions: ['Standard', 'Oversized'], colors: ['white', 'camel', 'black'], colorNames: { white: 'White', camel: 'Camel Brown', black: 'Black' }, images: { white: ['images/tshirts/tshirt3-white-front.jpg', 'images/tshirts/tshirt3-white-back.jpg'], camel: ['images/tshirts/tshirt3-camel-front.jpg', 'images/tshirts/tshirt3-camel-back.jpg'], black: ['images/tshirts/tshirt3-black-front.jpg', 'images/tshirts/tshirt3-black-back.jpg'] }, sizes: ['S', 'M', 'L', 'XL', 'XXL'], category: 'tshirts', hasBackImage: true },
        // Product 4 - Pray Without Ceasing
        { id: 'tshirt4', name: 'Pray Without Ceasing', description: 'Pray without ceasing\nCotton T-shirt\nA reminder to stay in prayer.', basePrice: 400, typeOptions: ['Standard', 'Oversized'], colors: ['white', 'camel', 'black'], colorNames: { white: 'White', camel: 'Camel Brown', black: 'Black' }, images: { white: ['images/tshirts/tshirt4-white-front.jpg', 'images/tshirts/tshirt4-white-back.jpg'], camel: ['images/tshirts/tshirt4-camel-front.jpg', 'images/tshirts/tshirt4-camel-back.jpg'], black: ['images/tshirts/tshirt4-black-front.jpg', 'images/tshirts/tshirt4-black-back.jpg'] }, sizes: ['S', 'M', 'L', 'XL', 'XXL'], category: 'tshirts', hasBackImage: true },
        // Product 5 - Jesus Christ The Perfect Sacrifice
        { id: 'tshirt5', name: 'Jesus Christ The Perfect Sacrifice', description: 'Jesus Christ the perfect sacrifice\nCotton T-shirt\nDeclare the ultimate sacrifice.', basePrice: 400, typeOptions: ['Standard', 'Oversized'], colors: ['white', 'camel', 'black'], colorNames: { white: 'White', camel: 'Camel Brown', black: 'Black' }, images: { white: ['images/tshirts/tshirt5-white-front.jpg', 'images/tshirts/tshirt5-white-back.jpg'], camel: ['images/tshirts/tshirt5-camel-front.jpg', 'images/tshirts/tshirt5-camel-back.jpg'], black: ['images/tshirts/tshirt5-black-front.jpg', 'images/tshirts/tshirt5-black-back.jpg'] }, sizes: ['S', 'M', 'L', 'XL', 'XXL'], category: 'tshirts', hasBackImage: true }
    ],
    hoodies: [
        { id: 'hoodie1', name: 'Faith Breaks Protocol Hoodie', description: 'Faith breaks protocol\nHeavy hoodie\nPremium heavyweight hoodie.', basePrice: 600, colors: ['white', 'camel', 'black'], colorNames: { white: 'White', camel: 'Camel Brown', black: 'Black' }, images: { white: ['images/hoodies/hoodie1-white-front.jpg', 'images/hoodies/hoodie1-white-back.jpg'], camel: ['images/hoodies/hoodie1-camel-front.jpg', 'images/hoodies/hoodie1-camel-back.jpg'], black: ['images/hoodies/hoodie1-black-front.jpg', 'images/hoodies/hoodie1-black-back.jpg'] }, sizes: ['S', 'M', 'L', 'XL', 'XXL'], category: 'hoodies', hasBackImage: true },
        { id: 'hoodie2', name: 'Christ Died Once For All Time Hoodie', description: 'Christ died once for all time\nHeavy hoodie\nWarm and faith-filled.', basePrice: 600, colors: ['white', 'camel', 'black'], colorNames: { white: 'White', camel: 'Camel Brown', black: 'Black' }, images: { white: ['images/hoodies/hoodie2-white-front.jpg', 'images/hoodies/hoodie2-white-back.jpg'], camel: ['images/hoodies/hoodie2-camel-front.jpg', 'images/hoodies/hoodie2-camel-back.jpg'], black: ['images/hoodies/hoodie2-black-front.jpg', 'images/hoodies/hoodie2-black-back.jpg'] }, sizes: ['S', 'M', 'L', 'XL', 'XXL'], category: 'hoodies', hasBackImage: true },
        { id: 'hoodie3', name: 'Pray Without Ceasing Hoodie', description: 'Pray without ceasing\nHeavy hoodie\nStay warm while in prayer.', basePrice: 600, colors: ['white', 'camel', 'black'], colorNames: { white: 'White', camel: 'Camel Brown', black: 'Black' }, images: { white: ['images/hoodies/hoodie3-white-front.jpg', 'images/hoodies/hoodie3-white-back.jpg'], camel: ['images/hoodies/hoodie3-camel-front.jpg', 'images/hoodies/hoodie3-camel-back.jpg'], black: ['images/hoodies/hoodie3-black-front.jpg', 'images/hoodies/hoodie3-black-back.jpg'] }, sizes: ['S', 'M', 'L', 'XL', 'XXL'], category: 'hoodies', hasBackImage: true },
        { id: 'hoodie4', name: 'Jesus Christ The Perfect Sacrifice Hoodie', description: 'Jesus Christ the perfect sacrifice\nHeavy hoodie\nPremium quality.', basePrice: 600, colors: ['white', 'camel', 'black'], colorNames: { white: 'White', camel: 'Camel Brown', black: 'Black' }, images: { white: ['images/hoodies/hoodie4-white-front.jpg', 'images/hoodies/hoodie4-white-back.jpg'], camel: ['images/hoodies/hoodie4-camel-front.jpg', 'images/hoodies/hoodie4-camel-back.jpg'], black: ['images/hoodies/hoodie4-black-front.jpg', 'images/hoodies/hoodie4-black-back.jpg'] }, sizes: ['S', 'M', 'L', 'XL', 'XXL'], category: 'hoodies', hasBackImage: true }
    ],
    sweaters: [
        { id: 'sweater1', name: 'Faith Breaks Protocol Sweater', description: 'Faith breaks protocol\nCrew neck sweater\nComfortable everyday wear.', basePrice: 560, colors: ['white', 'camel', 'black'], colorNames: { white: 'White', camel: 'Camel Brown', black: 'Black' }, images: { white: ['images/sweaters/sweater1-white-front.jpg', 'images/sweaters/sweater1-white-back.jpg'], camel: ['images/sweaters/sweater1-camel-front.jpg', 'images/sweaters/sweater1-camel-back.jpg'], black: ['images/sweaters/sweater1-black-front.jpg', 'images/sweaters/sweater1-black-back.jpg'] }, sizes: ['S', 'M', 'L', 'XL', 'XXL'], category: 'sweaters', hasBackImage: true },
        { id: 'sweater2', name: 'Christ Died Once For All Time Sweater', description: 'Christ died once for all time\nCrew neck sweater\nSoft and faith-inspired.', basePrice: 560, colors: ['white', 'camel', 'black'], colorNames: { white: 'White', camel: 'Camel Brown', black: 'Black' }, images: { white: ['images/sweaters/sweater2-white-front.jpg', 'images/sweaters/sweater2-white-back.jpg'], camel: ['images/sweaters/sweater2-camel-front.jpg', 'images/sweaters/sweater2-camel-back.jpg'], black: ['images/sweaters/sweater2-black-front.jpg', 'images/sweaters/sweater2-black-back.jpg'] }, sizes: ['S', 'M', 'L', 'XL', 'XXL'], category: 'sweaters', hasBackImage: true },
        { id: 'sweater3', name: 'Pray Without Ceasing Sweater', description: 'Pray without ceasing\nCrew neck sweater\nComfort meets faith.', basePrice: 560, colors: ['white', 'camel', 'black'], colorNames: { white: 'White', camel: 'Camel Brown', black: 'Black' }, images: { white: ['images/sweaters/sweater3-white-front.jpg', 'images/sweaters/sweater3-white-back.jpg'], camel: ['images/sweaters/sweater3-camel-front.jpg', 'images/sweaters/sweater3-camel-back.jpg'], black: ['images/sweaters/sweater3-black-front.jpg', 'images/sweaters/sweater3-black-back.jpg'] }, sizes: ['S', 'M', 'L', 'XL', 'XXL'], category: 'sweaters', hasBackImage: true },
        { id: 'sweater4', name: 'Jesus Christ The Perfect Sacrifice Sweater', description: 'Jesus Christ the perfect sacrifice\nCrew neck sweater\nPremium crewneck.', basePrice: 560, colors: ['white', 'camel', 'black'], colorNames: { white: 'White', camel: 'Camel Brown', black: 'Black' }, images: { white: ['images/sweaters/sweater4-white-front.jpg', 'images/sweaters/sweater4-white-back.jpg'], camel: ['images/sweaters/sweater4-camel-front.jpg', 'images/sweaters/sweater4-camel-back.jpg'], black: ['images/sweaters/sweater4-black-front.jpg', 'images/sweaters/sweater4-black-back.jpg'] }, sizes: ['S', 'M', 'L', 'XL', 'XXL'], category: 'sweaters', hasBackImage: true }
    ],
    headwear: [
        { id: 'cap', name: 'Christ or Nothing CAP', description: 'Premium quality cap with embroidered logo\nAdjustable strap.', basePrice: 250, colors: ['black'], colorNames: { black: 'Black' }, images: { black: 'images/headwear/cap-black.jpg' }, sizes: ['OSFA'], category: 'headwear', hasBackImage: false },
        { id: 'bucket', name: 'Christ or Nothing Bucket Hat', description: 'Street style bucket hat with faith message\nOne size fits most.', basePrice: 250, colors: ['black'], colorNames: { black: 'Black' }, images: { black: 'images/headwear/bucket-black.jpg' }, sizes: ['OSFA'], category: 'headwear', hasBackImage: false }
    ]
};

// Global Variables
let cart = [];
const WHATSAPP_NUMBER = '27671664440';
const DELIVERY_FEE = 60;
let selectedColors = {};
let selectedTypes = {};
let selectedSizes = {};

// Helper Functions
function formatPrice(price) {
    return 'R ' + price.toLocaleString();
}

function getRandomColor(colors) {
    return colors[Math.floor(Math.random() * colors.length)];
}

function getPrice(product, type) {
    if (product.typeOptions && type === 'Oversized') {
        return product.basePrice + 100;
    }
    return product.basePrice;
}

function getProductImages(product, colorName) {
    const images = product.images[colorName];
    if (Array.isArray(images)) {
        return images;
    }
    return [images];
}

function showNotification(message) {
    const existing = document.querySelector('.notification');
    if (existing) existing.remove();
    
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerHTML = message;
    document.body.appendChild(notification);
    
    setTimeout(() => notification.remove(), 3000);
}

function findProductById(id) {
    for (const category in productsData) {
        const found = productsData[category].find(p => p.id === id);
        if (found) return found;
    }
    return null;
}

function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/[&<>]/g, function(m) {
        if (m === '&') return '&amp;';
        if (m === '<') return '&lt;';
        if (m === '>') return '&gt;';
        return m;
    });
}

// Cart Functions
function saveCart() {
    localStorage.setItem('christOrNothingCart', JSON.stringify(cart));
}

function loadCart() {
    const saved = localStorage.getItem('christOrNothingCart');
    if (saved) {
        try {
            cart = JSON.parse(saved);
            updateCartUI();
        } catch(e) {}
    }
}

function addToCart(item) {
    cart.push(item);
    saveCart();
    updateCartUI();
    showNotification(item.name + ' (' + item.colorName + ', ' + item.size + (item.type ? ', ' + item.type : '') + ') added to cart');
}

function removeFromCart(index) {
    const removed = cart[index];
    cart.splice(index, 1);
    saveCart();
    updateCartUI();
    showNotification(removed.name + ' removed from cart');
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
    return cart.reduce((total, item) => total + item.price, 0);
}

function updateCartUI() {
    const cartCount = document.getElementById('cartCount');
    if (cartCount) cartCount.textContent = cart.length;
    renderCartModal();
}

function renderCartModal() {
    const container = document.getElementById('cartItemsList');
    if (!container) return;
    
    if (cart.length === 0) {
        container.innerHTML = '<div class="empty-cart">Your cart is empty</div>';
        document.getElementById('cartTotalPrice').textContent = 'Total Items: 0';
        document.getElementById('cartTotalAmount').innerHTML = 'Total: R 0';
        return;
    }
    
    let html = '';
    for (let i = 0; i < cart.length; i++) {
        const item = cart[i];
        html += `
            <div class="cart-item">
                <div>
                    <strong>${escapeHtml(item.name)}</strong><br>
                    <small>${escapeHtml(item.colorName)} | ${escapeHtml(item.size)}${item.type ? ' | ' + escapeHtml(item.type) : ''}</small><br>
                    ${formatPrice(item.price)}
                </div>
                <button class="remove-item" data-index="${i}">Remove</button>
            </div>
        `;
    }
    
    container.innerHTML = html;
    document.getElementById('cartTotalPrice').textContent = 'Total Items: ' + cart.length;
    
    const subtotal = getCartTotal();
    const totalWithDelivery = subtotal + DELIVERY_FEE;
    document.getElementById('cartTotalAmount').innerHTML = `
        Subtotal: ${formatPrice(subtotal)}<br>
        Delivery: ${formatPrice(DELIVERY_FEE)}<br>
        <strong>Total: ${formatPrice(totalWithDelivery)}</strong>
    `;
    
    document.querySelectorAll('.remove-item').forEach(btn => {
        btn.addEventListener('click', () => removeFromCart(parseInt(btn.dataset.index)));
    });
}

function sendWhatsAppQuote() {
    if (cart.length === 0) {
        showNotification('Your cart is empty. Add items before checking out.');
        return;
    }
    
    let message = "*CHRIST OR NOTHING - ORDER SUMMARY*\n";
    message += "━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n";
    message += "Order #: ORD-" + Date.now().toString().slice(-6) + "\n";
    message += "Date: " + new Date().toLocaleString() + "\n";
    message += "━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n";
    message += "*ITEMS ORDERED:*\n";
    message += "─────────────────\n";
    
    for (let i = 0; i < cart.length; i++) {
        const item = cart[i];
        message += (i + 1) + ". " + item.name + (item.type ? " (" + item.type + ")" : "") + "\n";
        message += "   Color: " + item.colorName + "\n";
        message += "   Size: " + item.size + "\n";
        message += "   Price: " + formatPrice(item.price) + "\n";
        message += "   ─────────────────\n";
    }
    
    const subtotal = getCartTotal();
    const totalWithDelivery = subtotal + DELIVERY_FEE;
    
    message += "\n*PRICE SUMMARY:*\n";
    message += "─────────────────\n";
    message += "Subtotal: " + formatPrice(subtotal) + "\n";
    message += "Delivery: " + formatPrice(DELIVERY_FEE) + "\n";
    message += "━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n";
    message += "*TOTAL: " + formatPrice(totalWithDelivery) + "*\n\n";
    message += "*CUSTOMER DETAILS:*\n";
    message += "─────────────────\n";
    message += "Full Name: \n";
    message += "Address: \n";
    message += "Phone: \n\n";
    message += "*THANK YOU FOR SHOPPING WITH CHRIST OR NOTHING!*";
    
    window.open('https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(message), '_blank');
    showNotification('Opening WhatsApp...');
}

// Product Rendering Functions
function renderProductGrid(category, productsArray) {
    const container = document.getElementById(category + 'Grid');
    if (!container) return;
    container.innerHTML = '';
    
    for (const product of productsArray) {
        if (!selectedColors[product.id]) selectedColors[product.id] = getRandomColor(product.colors);
        if (!selectedTypes[product.id]) selectedTypes[product.id] = product.typeOptions ? product.typeOptions[0] : null;
        if (!selectedSizes[product.id]) selectedSizes[product.id] = product.sizes[0];
        
        const images = getProductImages(product, selectedColors[product.id]);
        const currentImage = Array.isArray(images) ? images[0] : images;
        const price = getPrice(product, selectedTypes[product.id]);
        
        let colorSwatches = '';
        for (const color of product.colors) {
            const activeClass = selectedColors[product.id] === color ? 'active' : '';
            colorSwatches += `<div class="color-swatch color-swatch-${color} ${activeClass}" data-product-id="${product.id}" data-color="${color}" title="${product.colorNames[color]}"></div>`;
        }
        
        let typeButtons = '';
        if (product.typeOptions) {
            for (const type of product.typeOptions) {
                const activeClass = selectedTypes[product.id] === type ? 'active' : '';
                typeButtons += `<button class="type-btn ${activeClass}" data-product-id="${product.id}" data-type="${type}">${type}</button>`;
            }
        }
        
        const card = document.createElement('div');
        card.className = 'product-card';
        card.setAttribute('data-product-id', product.id);
        card.innerHTML = `
            <img src="${currentImage}" class="product-image" alt="${product.name}" loading="lazy" onerror="this.src='https://placehold.co/600x600/111111/FFFFFF?text=Image+Not+Found'">
            <div class="product-info">
                <h3 class="product-name">${escapeHtml(product.name)}</h3>
                <div class="product-price">${formatPrice(price)}</div>
                <div class="product-desc">${escapeHtml(product.description.substring(0, 60))}...</div>
                ${typeButtons ? '<div class="type-options">' + typeButtons + '</div>' : ''}
                <div class="color-options">${colorSwatches}</div>
            </div>
        `;
        
        card.addEventListener('click', (e) => {
            if (!e.target.classList.contains('color-swatch') && !e.target.classList.contains('type-btn')) {
                window.location.href = 'product.html?id=' + product.id;
            }
        });
        
        container.appendChild(card);
    }
    
    document.querySelectorAll('.color-swatch').forEach(swatch => {
        swatch.addEventListener('click', (e) => {
            e.stopPropagation();
            const productId = swatch.dataset.productId;
            const color = swatch.dataset.color;
            changeProductColor(productId, color);
        });
    });
    
    document.querySelectorAll('.type-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const productId = btn.dataset.productId;
            const type = btn.dataset.type;
            changeProductType(productId, type);
        });
    });
}

function changeProductColor(productId, color) {
    selectedColors[productId] = color;
    const product = findProductById(productId);
    if (!product) return;
    
    const images = getProductImages(product, color);
    const currentImage = Array.isArray(images) ? images[0] : images;
    
    const img = document.querySelector(`.product-card[data-product-id="${productId}"] .product-image`);
    if (img) img.src = currentImage;
    
    const priceEl = document.querySelector(`.product-card[data-product-id="${productId}"] .product-price`);
    if (priceEl) priceEl.textContent = formatPrice(getPrice(product, selectedTypes[productId]));
    
    document.querySelectorAll(`.color-swatch[data-product-id="${productId}"]`).forEach(sw => {
        if (sw.dataset.color === color) sw.classList.add('active');
        else sw.classList.remove('active');
    });
}

function changeProductType(productId, type) {
    selectedTypes[productId] = type;
    const product = findProductById(productId);
    if (!product) return;
    
    const priceEl = document.querySelector(`.product-card[data-product-id="${productId}"] .product-price`);
    if (priceEl) priceEl.textContent = formatPrice(getPrice(product, type));
    
    document.querySelectorAll(`.type-btn[data-product-id="${productId}"]`).forEach(btn => {
        if (btn.dataset.type === type) btn.classList.add('active');
        else btn.classList.remove('active');
    });
}

// Product Detail Page Functions
function renderProductDetail() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    if (!productId) { window.location.href = 'index.html'; return; }
    
    const product = findProductById(productId);
    if (!product) {
        document.getElementById('productDetail').innerHTML = '<div class="error">Product not found. <a href="index.html">Return to shop</a></div>';
        return;
    }
    
    if (!selectedColors[product.id]) selectedColors[product.id] = product.colors[0];
    if (!selectedTypes[product.id]) selectedTypes[product.id] = product.typeOptions ? product.typeOptions[0] : null;
    if (!selectedSizes[product.id]) selectedSizes[product.id] = product.sizes[0];
    
    const images = getProductImages(product, selectedColors[product.id]);
    const currentImage = Array.isArray(images) ? images[0] : images;
    const price = getPrice(product, selectedTypes[product.id]);
    
    let thumbnails = '';
    if (Array.isArray(images) && images.length > 1) {
        for (let i = 0; i < images.length; i++) {
            thumbnails += `<img src="${images[i]}" class="thumbnail" data-index="${i}" alt="Thumbnail" onerror="this.src='https://placehold.co/600x600/111111/FFFFFF?text=Image+Error'">`;
        }
    }
    
    let colorBtns = '';
    for (const c of product.colors) {
        colorBtns += `<button class="color-btn ${selectedColors[product.id] === c ? 'active' : ''}" data-color="${c}">${product.colorNames[c]}</button>`;
    }
    
    let typeBtns = '';
    if (product.typeOptions) {
        for (const t of product.typeOptions) {
            typeBtns += `<button class="type-btn ${selectedTypes[product.id] === t ? 'active' : ''}" data-type="${t}">${t}</button>`;
        }
    }
    
    let sizeBtns = '';
    for (const s of product.sizes) {
        sizeBtns += `<button class="size-btn ${selectedSizes[product.id] === s ? 'active' : ''}" data-size="${s}">${s}</button>`;
    }
    
    document.getElementById('productDetail').innerHTML = `
        <div class="product-detail-grid">
            <div class="product-detail-images">
                <img src="${currentImage}" class="product-detail-main-image" id="mainImage" alt="${product.name}" onerror="this.src='https://placehold.co/600x600/111111/FFFFFF?text=Image+Not+Found'">
                ${thumbnails ? '<div class="product-detail-thumbnails">' + thumbnails + '</div>' : ''}
            </div>
            <div class="product-detail-info">
                <h1>${escapeHtml(product.name)}</h1>
                <div class="product-detail-price" id="detailPrice">${formatPrice(price)}</div>
                <div class="product-detail-description">${escapeHtml(product.description).replace(/\n/g, '<br>')}</div>
                <div><strong>Color:</strong><br> ${colorBtns}</div>
                ${typeBtns ? '<div><strong>Style:</strong><br> ' + typeBtns + '</div>' : ''}
                <div><strong>Size:</strong><br> ${sizeBtns}</div>
                <button class="add-to-cart-detail" id="addToCartDetail">Add to Cart</button>
                <div><a href="index.html" class="back-link">← Back to Shop</a></div>
            </div>
        </div>`;
    
    // Thumbnail click handler
    if (thumbnails) {
        document.querySelectorAll('.thumbnail').forEach((thumb, i) => {
            thumb.addEventListener('click', function() {
                document.getElementById('mainImage').src = this.src;
                document.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active'));
                this.classList.add('active');
            });
        });
        if (document.querySelector('.thumbnail')) document.querySelector('.thumbnail').classList.add('active');
    }
    
    // Color buttons
    document.querySelectorAll('.color-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const color = btn.dataset.color;
            selectedColors[product.id] = color;
            const newImages = getProductImages(product, color);
            document.getElementById('mainImage').src = Array.isArray(newImages) ? newImages[0] : newImages;
            
            // Update thumbnails if exists
            if (Array.isArray(newImages) && newImages.length > 1) {
                const thumbContainer = document.querySelector('.product-detail-thumbnails');
                if (thumbContainer) {
                    let newThumbs = '';
                    for (let i = 0; i < newImages.length; i++) {
                        newThumbs += `<img src="${newImages[i]}" class="thumbnail" data-index="${i}" alt="Thumbnail">`;
                    }
                    thumbContainer.innerHTML = newThumbs;
                    document.querySelectorAll('.thumbnail').forEach((thumb, i) => {
                        thumb.addEventListener('click', function() {
                            document.getElementById('mainImage').src = this.src;
                            document.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active'));
                            this.classList.add('active');
                        });
                    });
                    if (document.querySelector('.thumbnail')) document.querySelector('.thumbnail').classList.add('active');
                }
            }
            
            document.querySelectorAll('.color-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });
    
    // Type buttons
    document.querySelectorAll('.type-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const type = btn.dataset.type;
            selectedTypes[product.id] = type;
            document.getElementById('detailPrice').textContent = formatPrice(getPrice(product, type));
            document.querySelectorAll('.type-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });
    
    // Size buttons
    document.querySelectorAll('.size-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            selectedSizes[product.id] = btn.dataset.size;
        });
    });
    
    // Add to cart
    document.getElementById('addToCartDetail').addEventListener('click', () => {
        addToCart({
            id: product.id, name: product.name, description: product.description,
            color: selectedColors[product.id], colorName: product.colorNames[selectedColors[product.id]],
            size: selectedSizes[product.id], type: selectedTypes[product.id],
            price: getPrice(product, selectedTypes[product.id])
        });
    });
    
    // Recommendations
    const recommendations = [];
    for (const cat in productsData) {
        recommendations.push(...productsData[cat].filter(p => p.id !== product.id && p.category === product.category));
    }
    const recs = recommendations.slice(0, 4);
    const recContainer = document.getElementById('recommendationsGrid');
    if (recContainer) {
        if (recs.length === 0) recContainer.innerHTML = '<p>No recommendations available.</p>';
        else {
            let recHtml = '';
            for (const rec of recs) {
                const recImages = getProductImages(rec, rec.colors[0]);
                const recImage = Array.isArray(recImages) ? recImages[0] : recImages;
                recHtml += `<div class="recommendation-card" data-id="${rec.id}"><img src="${recImage}" alt="${rec.name}" onerror="this.src='https://placehold.co/600x600/111111/FFFFFF?text=Image+Error'"><h4>${escapeHtml(rec.name)}</h4><p>${formatPrice(rec.basePrice)}</p></div>`;
            }
            recContainer.innerHTML = recHtml;
            document.querySelectorAll('.recommendation-card').forEach(card => card.addEventListener('click', () => window.location.href = 'product.html?id=' + card.dataset.id));
        }
    }
}

// Initialization Functions
function initScrollHeader() {
    const header = document.getElementById('mainHeader');
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const currentScroll = window.scrollY;
        if (currentScroll > lastScroll && currentScroll > 100) {
            header.classList.add('header-hidden');
        } else if (currentScroll < lastScroll) {
            header.classList.remove('header-hidden');
        }
        lastScroll = currentScroll;
    });
}

function initMobileMenu() {
    const menuBtn = document.getElementById('mobileMenuBtn');
    const navMenu = document.getElementById('navMenu');
    if (menuBtn && navMenu) {
        menuBtn.addEventListener('click', () => navMenu.classList.toggle('active'));
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => navMenu.classList.remove('active'));
        });
    }
}

function initAboutModal() {
    const modal = document.getElementById('aboutModal');
    const aboutLinks = document.querySelectorAll('#aboutLink, #aboutLinkHero');
    const closeBtn = document.querySelector('.about-close');
    aboutLinks.forEach(link => link.addEventListener('click', (e) => { e.preventDefault(); modal.classList.add('show'); }));
    if (closeBtn) closeBtn.addEventListener('click', () => modal.classList.remove('show'));
    modal.addEventListener('click', (e) => { if (e.target === modal) modal.classList.remove('show'); });
}

function initCartModal() {
    const modal = document.getElementById('cartModal');
    const cartIcon = document.getElementById('cartIcon');
    const closeBtn = document.getElementById('closeCartBtn');
    const whatsappBtn = document.getElementById('whatsappOrderBtn');
    const clearCartBtn = document.getElementById('clearCartBtn');
    if (cartIcon) cartIcon.addEventListener('click', () => { renderCartModal(); modal.classList.add('open'); });
    if (closeBtn) closeBtn.addEventListener('click', () => modal.classList.remove('open'));
    if (whatsappBtn) whatsappBtn.addEventListener('click', sendWhatsAppQuote);
    if (clearCartBtn) clearCartBtn.addEventListener('click', clearCart);
    modal.addEventListener('click', (e) => { if (e.target === modal) modal.classList.remove('open'); });
}

// Start Application
document.addEventListener('DOMContentLoaded', () => {
    loadCart();
    initScrollHeader();
    initMobileMenu();
    initAboutModal();
    initCartModal();
    
    if (window.location.pathname.includes('product.html')) {
        renderProductDetail();
    } else {
        renderProductGrid('tshirts', productsData.tshirts);
        renderProductGrid('hoodies', productsData.hoodies);
        renderProductGrid('sweaters', productsData.sweaters);
        renderProductGrid('headwear', productsData.headwear);
    }
});
