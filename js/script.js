// ============================================
// CHRIST OR NOTHING - COMPLETE SCRIPT
// Mobile-Optimized with Working Products
// ============================================

// Product Database with Working Placeholder Images
const productsData = {
    tshirts: [
        { id: 'tshirt1', name: 'Christ or Nothing', description: 'Crew neck T-shirt\nChrist or nothing\nPremium quality cotton.', basePrice: 300, type: 'Standard', colors: [{ name: 'white', displayName: 'White', image: 'https://placehold.co/600x600/FFFFFF/000000?text=White+Tee' }, { name: 'camel', displayName: 'Camel Brown', image: 'https://placehold.co/600x600/C4A27A/FFFFFF?text=Camel+Tee' }, { name: 'black', displayName: 'Black', image: 'https://placehold.co/600x600/000000/FFFFFF?text=Black+Tee' }], sizes: ['S', 'M', 'L', 'XL', 'XXL'], category: 'tshirts' },
        { id: 'tshirt2', name: 'Faith Breaks Protocol', description: 'Faith breaks protocol\nCotton T-shirt\nBold statement design.', basePrice: 400, typeOptions: ['Standard', 'Oversized'], colors: [{ name: 'white', displayName: 'White', frontImage: 'https://placehold.co/600x600/FFFFFF/000000?text=Faith+White' }, { name: 'camel', displayName: 'Camel Brown', frontImage: 'https://placehold.co/600x600/C4A27A/FFFFFF?text=Faith+Camel' }, { name: 'black', displayName: 'Black', frontImage: 'https://placehold.co/600x600/000000/FFFFFF?text=Faith+Black' }], sizes: ['S', 'M', 'L', 'XL', 'XXL'], category: 'tshirts' },
        { id: 'tshirt3', name: 'Christ Died Once For All Time', description: 'Christ died once for all time\nCotton T-shirt\nPowerful gospel message.', basePrice: 400, typeOptions: ['Standard', 'Oversized'], colors: [{ name: 'white', displayName: 'White', frontImage: 'https://placehold.co/600x600/FFFFFF/000000?text=Christ+Died+White' }, { name: 'camel', displayName: 'Camel Brown', frontImage: 'https://placehold.co/600x600/C4A27A/FFFFFF?text=Christ+Died+Camel' }, { name: 'black', displayName: 'Black', frontImage: 'https://placehold.co/600x600/000000/FFFFFF?text=Christ+Died+Black' }], sizes: ['S', 'M', 'L', 'XL', 'XXL'], category: 'tshirts' },
        { id: 'tshirt4', name: 'Pray Without Ceasing', description: 'Pray without ceasing\nCotton T-shirt\nA reminder to stay in prayer.', basePrice: 400, typeOptions: ['Standard', 'Oversized'], colors: [{ name: 'white', displayName: 'White', frontImage: 'https://placehold.co/600x600/FFFFFF/000000?text=Pray+White' }, { name: 'camel', displayName: 'Camel Brown', frontImage: 'https://placehold.co/600x600/C4A27A/FFFFFF?text=Pray+Camel' }, { name: 'black', displayName: 'Black', frontImage: 'https://placehold.co/600x600/000000/FFFFFF?text=Pray+Black' }], sizes: ['S', 'M', 'L', 'XL', 'XXL'], category: 'tshirts' },
        { id: 'tshirt5', name: 'Jesus Christ The Perfect Sacrifice', description: 'Jesus Christ the perfect sacrifice\nCotton T-shirt\nDeclare the ultimate sacrifice.', basePrice: 400, typeOptions: ['Standard', 'Oversized'], colors: [{ name: 'white', displayName: 'White', frontImage: 'https://placehold.co/600x600/FFFFFF/000000?text=Sacrifice+White' }, { name: 'camel', displayName: 'Camel Brown', frontImage: 'https://placehold.co/600x600/C4A27A/FFFFFF?text=Sacrifice+Camel' }, { name: 'black', displayName: 'Black', frontImage: 'https://placehold.co/600x600/000000/FFFFFF?text=Sacrifice+Black' }], sizes: ['S', 'M', 'L', 'XL', 'XXL'], category: 'tshirts' }
    ],
    hoodies: [
        { id: 'hoodie1', name: 'Faith Breaks Protocol Hoodie', description: 'Faith breaks protocol\nHeavy hoodie\nPremium heavyweight hoodie.', basePrice: 600, colors: [{ name: 'white', displayName: 'White', frontImage: 'https://placehold.co/600x600/FFFFFF/000000?text=Hoodie+White' }, { name: 'camel', displayName: 'Camel Brown', frontImage: 'https://placehold.co/600x600/C4A27A/FFFFFF?text=Hoodie+Camel' }, { name: 'black', displayName: 'Black', frontImage: 'https://placehold.co/600x600/000000/FFFFFF?text=Hoodie+Black' }], sizes: ['S', 'M', 'L', 'XL', 'XXL'], category: 'hoodies' },
        { id: 'hoodie2', name: 'Christ Died Once For All Time Hoodie', description: 'Christ died once for all time\nHeavy hoodie\nWarm and faith-filled.', basePrice: 600, colors: [{ name: 'white', displayName: 'White', frontImage: 'https://placehold.co/600x600/FFFFFF/000000?text=Christ+Hoodie+White' }, { name: 'camel', displayName: 'Camel Brown', frontImage: 'https://placehold.co/600x600/C4A27A/FFFFFF?text=Christ+Hoodie+Camel' }, { name: 'black', displayName: 'Black', frontImage: 'https://placehold.co/600x600/000000/FFFFFF?text=Christ+Hoodie+Black' }], sizes: ['S', 'M', 'L', 'XL', 'XXL'], category: 'hoodies' },
        { id: 'hoodie3', name: 'Pray Without Ceasing Hoodie', description: 'Pray without ceasing\nHeavy hoodie\nStay warm while in prayer.', basePrice: 600, colors: [{ name: 'white', displayName: 'White', frontImage: 'https://placehold.co/600x600/FFFFFF/000000?text=Pray+Hoodie+White' }, { name: 'camel', displayName: 'Camel Brown', frontImage: 'https://placehold.co/600x600/C4A27A/FFFFFF?text=Pray+Hoodie+Camel' }, { name: 'black', displayName: 'Black', frontImage: 'https://placehold.co/600x600/000000/FFFFFF?text=Pray+Hoodie+Black' }], sizes: ['S', 'M', 'L', 'XL', 'XXL'], category: 'hoodies' },
        { id: 'hoodie4', name: 'Jesus Christ The Perfect Sacrifice Hoodie', description: 'Jesus Christ the perfect sacrifice\nHeavy hoodie\nPremium quality.', basePrice: 600, colors: [{ name: 'white', displayName: 'White', frontImage: 'https://placehold.co/600x600/FFFFFF/000000?text=Sacrifice+Hoodie+White' }, { name: 'camel', displayName: 'Camel Brown', frontImage: 'https://placehold.co/600x600/C4A27A/FFFFFF?text=Sacrifice+Hoodie+Camel' }, { name: 'black', displayName: 'Black', frontImage: 'https://placehold.co/600x600/000000/FFFFFF?text=Sacrifice+Hoodie+Black' }], sizes: ['S', 'M', 'L', 'XL', 'XXL'], category: 'hoodies' }
    ],
    sweaters: [
        { id: 'sweater1', name: 'Faith Breaks Protocol Sweater', description: 'Faith breaks protocol\nCrew neck sweater\nComfortable everyday wear.', basePrice: 560, colors: [{ name: 'white', displayName: 'White', frontImage: 'https://placehold.co/600x600/FFFFFF/000000?text=Sweater+White' }, { name: 'camel', displayName: 'Camel Brown', frontImage: 'https://placehold.co/600x600/C4A27A/FFFFFF?text=Sweater+Camel' }, { name: 'black', displayName: 'Black', frontImage: 'https://placehold.co/600x600/000000/FFFFFF?text=Sweater+Black' }], sizes: ['S', 'M', 'L', 'XL', 'XXL'], category: 'sweaters' },
        { id: 'sweater2', name: 'Christ Died Once For All Time Sweater', description: 'Christ died once for all time\nCrew neck sweater\nSoft and faith-inspired.', basePrice: 560, colors: [{ name: 'white', displayName: 'White', frontImage: 'https://placehold.co/600x600/FFFFFF/000000?text=Christ+Sweater+White' }, { name: 'camel', displayName: 'Camel Brown', frontImage: 'https://placehold.co/600x600/C4A27A/FFFFFF?text=Christ+Sweater+Camel' }, { name: 'black', displayName: 'Black', frontImage: 'https://placehold.co/600x600/000000/FFFFFF?text=Christ+Sweater+Black' }], sizes: ['S', 'M', 'L', 'XL', 'XXL'], category: 'sweaters' },
        { id: 'sweater3', name: 'Pray Without Ceasing Sweater', description: 'Pray without ceasing\nCrew neck sweater\nComfort meets faith.', basePrice: 560, colors: [{ name: 'white', displayName: 'White', frontImage: 'https://placehold.co/600x600/FFFFFF/000000?text=Pray+Sweater+White' }, { name: 'camel', displayName: 'Camel Brown', frontImage: 'https://placehold.co/600x600/C4A27A/FFFFFF?text=Pray+Sweater+Camel' }, { name: 'black', displayName: 'Black', frontImage: 'https://placehold.co/600x600/000000/FFFFFF?text=Pray+Sweater+Black' }], sizes: ['S', 'M', 'L', 'XL', 'XXL'], category: 'sweaters' },
        { id: 'sweater4', name: 'Jesus Christ The Perfect Sacrifice Sweater', description: 'Jesus Christ the perfect sacrifice\nCrew neck sweater\nPremium crewneck.', basePrice: 560, colors: [{ name: 'white', displayName: 'White', frontImage: 'https://placehold.co/600x600/FFFFFF/000000?text=Sacrifice+Sweater+White' }, { name: 'camel', displayName: 'Camel Brown', frontImage: 'https://placehold.co/600x600/C4A27A/FFFFFF?text=Sacrifice+Sweater+Camel' }, { name: 'black', displayName: 'Black', frontImage: 'https://placehold.co/600x600/000000/FFFFFF?text=Sacrifice+Sweater+Black' }], sizes: ['S', 'M', 'L', 'XL', 'XXL'], category: 'sweaters' }
    ],
    headwear: [
        { id: 'cap', name: 'Christ or Nothing CAP', description: 'Premium quality cap with embroidered logo\nAdjustable strap.', basePrice: 250, colors: [{ name: 'black', displayName: 'Black', image: 'https://placehold.co/600x600/000000/FFFFFF?text=Black+Cap' }], sizes: ['OSFA'], category: 'headwear' },
        { id: 'bucket', name: 'Christ or Nothing Bucket Hat', description: 'Street style bucket hat with faith message\nOne size fits most.', basePrice: 250, colors: [{ name: 'black', displayName: 'Black', image: 'https://placehold.co/600x600/000000/FFFFFF?text=Black+Bucket' }], sizes: ['OSFA'], category: 'headwear' }
    ]
};

let cart = [];
const WHATSAPP_NUMBER = '27671664440';
const DELIVERY_FEE = 60;
let selectedColors = {};
let selectedTypes = {};
let selectedSizes = {};

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

function showNotification(msg) {
    let existing = document.querySelector('.notification');
    if (existing) existing.remove();
    let n = document.createElement('div');
    n.className = 'notification';
    n.innerHTML = msg;
    document.body.appendChild(n);
    setTimeout(() => n.remove(), 3000);
}

function formatPrice(p) { return 'R ' + p.toLocaleString(); }
function getRandomColor(colors) { return colors[Math.floor(Math.random() * colors.length)].name; }
function getPrice(p, type) { if (p.typeOptions && type === 'Oversized') return p.basePrice + 100; return p.basePrice; }
function getProductImages(p, colorName) {
    let c = p.colors.find(c => c.name === colorName);
    if (!c) return [];
    if (c.image) return [c.image];
    if (c.frontImage) return [c.frontImage];
    return ['https://placehold.co/600x600/111111/FFFFFF?text=Product'];
}

// Cart Functions
function addToCart(item) {
    cart.push(item);
    saveCart();
    updateCartUI();
    showNotification(item.name + ' (' + item.colorName + ', ' + item.size + (item.type ? ', ' + item.type : '') + ') added');
}

function removeFromCart(idx) {
    let removed = cart[idx];
    cart.splice(idx, 1);
    saveCart();
    updateCartUI();
    showNotification(removed.name + ' removed');
}

function clearCart() {
    if (cart.length) { cart = []; saveCart(); updateCartUI(); showNotification('Cart cleared'); }
}

function getCartTotal() { return cart.reduce((t, i) => t + i.price, 0); }

function saveCart() { localStorage.setItem('christOrNothingCart', JSON.stringify(cart)); }
function loadCart() {
    let saved = localStorage.getItem('christOrNothingCart');
    if (saved) { try { cart = JSON.parse(saved); updateCartUI(); } catch(e) {} }
}

function updateCartUI() {
    let count = document.getElementById('cartCount');
    if (count) count.textContent = cart.length;
    renderCartModal();
}

function renderCartModal() {
    let container = document.getElementById('cartItemsList');
    if (!container) return;
    if (cart.length === 0) {
        container.innerHTML = '<div class="empty-cart">Your cart is empty</div>';
        document.getElementById('cartTotalPrice').textContent = 'Total Items: 0';
        document.getElementById('cartTotalAmount').innerHTML = 'Total: R 0';
        return;
    }
    let html = '';
    for (let i = 0; i < cart.length; i++) {
        let item = cart[i];
        html += `<div class="cart-item"><div class="cart-item-info"><div class="cart-item-title">${escapeHTML(item.name)}</div><div class="cart-item-details">${escapeHTML(item.colorName)} | ${escapeHTML(item.size)}${item.type ? ' | ' + item.type : ''}</div><div class="cart-item-details">${formatPrice(item.price)}</div></div><button class="remove-item" data-index="${i}">Remove</button></div>`;
    }
    container.innerHTML = html;
    document.getElementById('cartTotalPrice').textContent = 'Total Items: ' + cart.length;
    let subtotal = getCartTotal();
    document.getElementById('cartTotalAmount').innerHTML = `Subtotal: ${formatPrice(subtotal)}<br>Delivery: ${formatPrice(DELIVERY_FEE)}<br><strong>Total: ${formatPrice(subtotal + DELIVERY_FEE)}</strong>`;
    document.querySelectorAll('.remove-item').forEach(btn => btn.addEventListener('click', function() { removeFromCart(parseInt(this.dataset.index)); }));
}

function sendWhatsApp() {
    if (cart.length === 0) { showNotification('Cart is empty'); return; }
    let msg = "*CHRIST OR NOTHING - ORDER SUMMARY*\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n";
    msg += "Order #: ORD-" + Date.now().toString().slice(-6) + "\nDate: " + new Date().toLocaleString() + "\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n";
    msg += "*ITEMS ORDERED:*\n─────────────────\n";
    for (let i = 0; i < cart.length; i++) {
        let item = cart[i];
        msg += (i+1) + ". " + item.name + (item.type ? " (" + item.type + ")" : "") + "\n";
        msg += "   Color: " + item.colorName + "\n   Size: " + item.size + "\n   Price: " + formatPrice(item.price) + "\n   ─────────────────\n";
    }
    let subtotal = getCartTotal();
    msg += "\n*PRICE SUMMARY:*\n─────────────────\nSubtotal: " + formatPrice(subtotal) + "\nDelivery: " + formatPrice(DELIVERY_FEE) + "\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n*TOTAL: " + formatPrice(subtotal + DELIVERY_FEE) + "*\n\n*CUSTOMER DETAILS:*\n─────────────────\nFull Name: \nAddress: \nPhone: \n\n*THANK YOU!*";
    window.open('https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(msg), '_blank');
}

// Carousel Functions
function createCarousel(images, productId) {
    if (!images || images.length === 0) return '<div class="carousel"><div class="carousel-images"><img src="https://placehold.co/600x600/111111/FFFFFF?text=Product" class="carousel-img"></div></div>';
    let html = '<div class="carousel" data-carousel data-product-id="' + productId + '"><div class="carousel-images">';
    for (let img of images) html += '<img src="' + img + '" class="carousel-img" alt="Product" loading="lazy">';
    html += '</div>';
    if (images.length > 1) html += '<button class="carousel-btn prev">‹</button><button class="carousel-btn next">›</button>';
    html += '</div>';
    return html;
}

function initCarousels() {
    document.querySelectorAll('.carousel[data-carousel]').forEach(carousel => {
        let imgContainer = carousel.querySelector('.carousel-images');
        let images = carousel.querySelectorAll('.carousel-img');
        let prev = carousel.querySelector('.prev');
        let next = carousel.querySelector('.next');
        if (images.length <= 1) return;
        let current = 0;
        function update() { imgContainer.style.transform = 'translateX(-' + (current * 100) + '%)'; }
        if (prev) {
            let newPrev = prev.cloneNode(true);
            prev.parentNode.replaceChild(newPrev, prev);
            newPrev.addEventListener('click', e => { e.stopPropagation(); current = (current - 1 + images.length) % images.length; update(); });
        }
        if (next) {
            let newNext = next.cloneNode(true);
            next.parentNode.replaceChild(newNext, next);
            newNext.addEventListener('click', e => { e.stopPropagation(); current = (current + 1) % images.length; update(); });
        }
    });
}

function changeProductColor(productId, color) {
    selectedColors[productId] = color;
    let product = findProductById(productId);
    if (!product) return;
    let newImages = getProductImages(product, color);
    let carousel = document.querySelector('.carousel[data-product-id="' + productId + '"]');
    if (carousel) {
        let imgContainer = carousel.querySelector('.carousel-images');
        if (imgContainer) {
            imgContainer.innerHTML = newImages.map(src => '<img src="' + src + '" class="carousel-img" alt="Product" loading="lazy">').join('');
            imgContainer.style.transform = 'translateX(0)';
            if (newImages.length > 1) {
                carousel.setAttribute('data-carousel', '');
                initCarousels();
            }
        }
    }
    let priceEl = document.querySelector('.product-card[data-product-id="' + productId + '"] .product-price');
    if (priceEl) priceEl.textContent = formatPrice(getPrice(product, selectedTypes[productId]));
    document.querySelectorAll('.color-swatch[data-product-id="' + productId + '"]').forEach(sw => {
        if (sw.dataset.color === color) sw.classList.add('active');
        else sw.classList.remove('active');
    });
}

function changeProductType(productId, type) {
    selectedTypes[productId] = type;
    let product = findProductById(productId);
    if (!product) return;
    let priceEl = document.querySelector('.product-card[data-product-id="' + productId + '"] .product-price');
    if (priceEl) priceEl.textContent = formatPrice(getPrice(product, type));
    document.querySelectorAll('.type-btn[data-product-id="' + productId + '"]').forEach(btn => {
        if (btn.dataset.type === type) btn.classList.add('active');
        else btn.classList.remove('active');
    });
}

function findProductById(id) {
    for (let cat in productsData) {
        let found = productsData[cat].find(p => p.id === id);
        if (found) return found;
    }
    return null;
}

// Render Homepage
function renderProductGrid(category, productsArray) {
    let container = document.getElementById(category + 'Grid');
    if (!container) return;
    container.innerHTML = '';
    for (let p of productsArray) {
        if (!selectedColors[p.id]) selectedColors[p.id] = getRandomColor(p.colors);
        if (!selectedTypes[p.id]) selectedTypes[p.id] = p.typeOptions ? p.typeOptions[0] : null;
        if (!selectedSizes[p.id]) selectedSizes[p.id] = p.sizes[0];
        let images = getProductImages(p, selectedColors[p.id]);
        let carouselHTML = createCarousel(images, p.id);
        let price = getPrice(p, selectedTypes[p.id]);
        let colorSwatches = '';
        for (let c of p.colors) {
            let active = selectedColors[p.id] === c.name ? 'active' : '';
            colorSwatches += `<div class="color-swatch color-swatch-${c.name} ${active}" data-product-id="${p.id}" data-color="${c.name}" title="${c.displayName}"></div>`;
        }
        let typeBtns = '';
        if (p.typeOptions) {
            for (let t of p.typeOptions) {
                let active = selectedTypes[p.id] === t ? 'active' : '';
                typeBtns += `<button class="type-btn ${active}" data-product-id="${p.id}" data-type="${t}">${t}</button>`;
            }
        }
        let card = document.createElement('div');
        card.className = 'product-card';
        card.setAttribute('data-product-id', p.id);
        card.innerHTML = carouselHTML + `<div class="product-info"><h3 class="product-name">${escapeHTML(p.name)}</h3><div class="product-price">${formatPrice(price)}</div><div class="product-desc">${escapeHTML(p.description).substring(0, 80)}...</div>${typeBtns ? '<div class="type-options">' + typeBtns + '</div>' : ''}<div class="color-options">${colorSwatches}</div></div>`;
        card.addEventListener('click', function(e) {
            if (!e.target.classList.contains('color-swatch') && !e.target.classList.contains('type-btn') && !e.target.classList.contains('carousel-btn')) {
                window.location.href = 'product.html?id=' + p.id;
            }
        });
        container.appendChild(card);
    }
    document.querySelectorAll('.color-swatch').forEach(sw => sw.addEventListener('click', e => { e.stopPropagation(); changeProductColor(sw.dataset.productId, sw.dataset.color); }));
    document.querySelectorAll('.type-btn').forEach(btn => btn.addEventListener('click', e => { e.stopPropagation(); changeProductType(btn.dataset.productId, btn.dataset.type); }));
    initCarousels();
}

// Product Detail Page
function renderProductDetail() {
    let urlParams = new URLSearchParams(window.location.search);
    let productId = urlParams.get('id');
    if (!productId) { window.location.href = 'index.html'; return; }
    let product = findProductById(productId);
    if (!product) { document.getElementById('productDetail').innerHTML = '<div class="error">Product not found. <a href="index.html">Return to shop</a></div>'; return; }
    if (!selectedColors[product.id]) selectedColors[product.id] = getRandomColor(product.colors);
    if (!selectedTypes[product.id]) selectedTypes[product.id] = product.typeOptions ? product.typeOptions[0] : null;
    if (!selectedSizes[product.id]) selectedSizes[product.id] = product.sizes[0];
    let images = getProductImages(product, selectedColors[product.id]);
    let price = getPrice(product, selectedTypes[product.id]);
    let thumbnails = '';
    for (let i = 0; i < images.length; i++) thumbnails += `<img src="${images[i]}" class="thumbnail" data-index="${i}" alt="Thumbnail">`;
    let colorBtns = '';
    for (let c of product.colors) colorBtns += `<button class="color-btn ${selectedColors[product.id] === c.name ? 'active' : ''}" data-color="${c.name}">${c.displayName}</button>`;
    let typeBtns = '';
    if (product.typeOptions) for (let t of product.typeOptions) typeBtns += `<button class="type-btn ${selectedTypes[product.id] === t ? 'active' : ''}" data-type="${t}">${t}</button>`;
    let sizeBtns = '';
    for (let s of product.sizes) sizeBtns += `<button class="size-btn ${selectedSizes[product.id] === s ? 'active' : ''}" data-size="${s}">${s}</button>`;
    document.getElementById('productDetail').innerHTML = `
        <div class="product-detail-grid">
            <div class="product-detail-images">
                <img src="${images[0]}" class="product-detail-main-image" id="mainImage" alt="${product.name}">
                <div class="product-detail-thumbnails">${thumbnails}</div>
            </div>
            <div class="product-detail-info">
                <h1>${escapeHTML(product.name)}</h1>
                <div class="product-detail-price" id="detailPrice">${formatPrice(price)}</div>
                <div class="product-detail-description">${escapeHTML(product.description).replace(/\n/g, '<br>')}</div>
                <div><strong>Color:</strong><br> ${colorBtns}</div>
                ${typeBtns ? '<div><strong>Style:</strong><br> ' + typeBtns + '</div>' : ''}
                <div><strong>Size:</strong><br> ${sizeBtns}</div>
                <button class="add-to-cart-detail" id="addToCartDetail">Add to Cart</button>
                <div><a href="index.html" class="back-link">← Back to Shop</a></div>
            </div>
        </div>`;
    document.querySelectorAll('.thumbnail').forEach((thumb, i) => thumb.addEventListener('click', function() { document.getElementById('mainImage').src = this.src; document.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active')); this.classList.add('active'); }));
    if (document.querySelector('.thumbnail')) document.querySelector('.thumbnail').classList.add('active');
    document.querySelectorAll('.color-btn').forEach(btn => btn.addEventListener('click', () => changeProductColorDetail(product.id, btn.dataset.color)));
    document.querySelectorAll('.type-btn').forEach(btn => btn.addEventListener('click', () => changeProductTypeDetail(product.id, btn.dataset.type)));
    document.querySelectorAll('.size-btn').forEach(btn => btn.addEventListener('click', function() { document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active')); this.classList.add('active'); selectedSizes[product.id] = this.dataset.size; }));
    document.getElementById('addToCartDetail').addEventListener('click', () => addToCart({ id: product.id, name: product.name, description: product.description, color: selectedColors[product.id], colorName: product.colors.find(c => c.name === selectedColors[product.id]).displayName, size: selectedSizes[product.id], type: selectedTypes[product.id], price: getPrice(product, selectedTypes[product.id]) }));
    renderRecommendations(product);
}

function changeProductColorDetail(productId, color) {
    selectedColors[productId] = color;
    let product = findProductById(productId);
    if (!product) return;
    let newImages = getProductImages(product, color);
    document.getElementById('mainImage').src = newImages[0];
    let thumbContainer = document.querySelector('.product-detail-thumbnails');
    if (thumbContainer) {
        thumbContainer.innerHTML = newImages.map((src, i) => `<img src="${src}" class="thumbnail" data-index="${i}" alt="Thumbnail">`).join('');
        document.querySelectorAll('.thumbnail').forEach((thumb, i) => thumb.addEventListener('click', function() { document.getElementById('mainImage').src = this.src; document.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active')); this.classList.add('active'); }));
        if (document.querySelector('.thumbnail')) document.querySelector('.thumbnail').classList.add('active');
    }
    document.querySelectorAll('.color-btn').forEach(btn => { if (btn.dataset.color === color) btn.classList.add('active'); else btn.classList.remove('active'); });
}

function changeProductTypeDetail(productId, type) {
    selectedTypes[productId] = type;
    let product = findProductById(productId);
    if (!product) return;
    document.getElementById('detailPrice').textContent = formatPrice(getPrice(product, type));
    document.querySelectorAll('.type-btn').forEach(btn => { if (btn.dataset.type === type) btn.classList.add('active'); else btn.classList.remove('active'); });
}

function renderRecommendations(currentProduct) {
    let recs = [];
    for (let cat in productsData) {
        recs = recs.concat(productsData[cat].filter(p => p.id !== currentProduct.id && p.category === currentProduct.category));
    }
    recs = recs.slice(0, 4);
    let container = document.getElementById('recommendationsGrid');
    if (!container) return;
    if (recs.length === 0) { container.innerHTML = '<p>No recommendations available.</p>'; return; }
    let html = '';
    for (let rec of recs) {
        let img = rec.colors[0].image || rec.colors[0].frontImage || 'https://placehold.co/600x600/111111/FFFFFF?text=Product';
        html += `<div class="recommendation-card" data-id="${rec.id}"><img src="${img}" alt="${rec.name}" loading="lazy"><h4>${escapeHTML(rec.name)}</h4><p>${formatPrice(rec.basePrice)}</p></div>`;
    }
    container.innerHTML = html;
    document.querySelectorAll('.recommendation-card').forEach(card => card.addEventListener('click', () => window.location.href = 'product.html?id=' + card.dataset.id));
}

// Modal and Navigation
function initModal() {
    let modal = document.getElementById('cartModal');
    let cartIcon = document.getElementById('cartIcon');
    let closeBtn = document.getElementById('closeCartBtn');
    let whatsappBtn = document.getElementById('whatsappOrderBtn');
    let clearCartBtn = document.getElementById('clearCartBtn');
    if (cartIcon) cartIcon.addEventListener('click', () => { renderCartModal(); modal.classList.add('open'); });
    if (closeBtn) closeBtn.addEventListener('click', () => modal.classList.remove('open'));
    if (whatsappBtn) whatsappBtn.addEventListener('click', sendWhatsApp);
    if (clearCartBtn) clearCartBtn.addEventListener('click', clearCart);
    modal.addEventListener('click', e => { if (e.target === modal) modal.classList.remove('open'); });
}

function initAboutModal() {
    let modal = document.getElementById('aboutModal');
    let links = document.querySelectorAll('#aboutLink, #aboutLinkHero');
    let closeBtn = document.querySelector('.about-close');
    if (links.length) links.forEach(link => link.addEventListener('click', e => { e.preventDefault(); modal.classList.add('show'); }));
    if (closeBtn) closeBtn.addEventListener('click', () => modal.classList.remove('show'));
    modal.addEventListener('click', e => { if (e.target === modal) modal.classList.remove('show'); });
}

function initMobileMenu() {
    let btn = document.getElementById('mobileMenuBtn');
    let menu = document.getElementById('navMenu');
    if (btn && menu) btn.addEventListener('click', () => menu.classList.toggle('active'));
}

function initScrollHeader() {
    let header = document.getElementById('mainHeader');
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        let current = window.scrollY;
        if (current > lastScroll && current > 100) header.classList.add('header-hidden');
        else if (current < lastScroll) header.classList.remove('header-hidden');
        lastScroll = current;
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    loadCart();
    initScrollHeader();
    initMobileMenu();
    initAboutModal();
    initModal();
    if (window.location.pathname.includes('product.html')) renderProductDetail();
    else {
        renderProductGrid('tshirts', productsData.tshirts);
        renderProductGrid('hoodies', productsData.hoodies);
        renderProductGrid('sweaters', productsData.sweaters);
        renderProductGrid('headwear', productsData.headwear);
    }
});
