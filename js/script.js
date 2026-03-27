// ============================================
// CHRIST OR NOTHING - PRODUCT DETAIL PAGE
// Handles product display, cart integration
// ============================================

// Product Database (same as main)
const productsData = {
    tshirts: [
        { id: 'tshirt1', name: 'Christ or Nothing', description: 'Crew neck T-shirt\nChrist or nothing\nPremium quality cotton.', basePrice: 300, type: 'Standard', colors: ['white', 'camel', 'black'], colorNames: { white: 'White', camel: 'Camel Brown', black: 'Black' }, images: { white: 'https://placehold.co/600x600/FFFFFF/000000?text=White+Tee', camel: 'https://placehold.co/600x600/C4A27A/FFFFFF?text=Camel+Tee', black: 'https://placehold.co/600x600/000000/FFFFFF?text=Black+Tee' }, sizes: ['S', 'M', 'L', 'XL', 'XXL'], category: 'tshirts' },
        { id: 'tshirt2', name: 'Faith Breaks Protocol', description: 'Faith breaks protocol\nCotton T-shirt\nBold statement design.', basePrice: 400, typeOptions: ['Standard', 'Oversized'], colors: ['white', 'camel', 'black'], colorNames: { white: 'White', camel: 'Camel Brown', black: 'Black' }, images: { white: 'https://placehold.co/600x600/FFFFFF/000000?text=Faith+White', camel: 'https://placehold.co/600x600/C4A27A/FFFFFF?text=Faith+Camel', black: 'https://placehold.co/600x600/000000/FFFFFF?text=Faith+Black' }, sizes: ['S', 'M', 'L', 'XL', 'XXL'], category: 'tshirts' },
        { id: 'tshirt3', name: 'Christ Died Once For All Time', description: 'Christ died once for all time\nCotton T-shirt\nPowerful gospel message.', basePrice: 400, typeOptions: ['Standard', 'Oversized'], colors: ['white', 'camel', 'black'], colorNames: { white: 'White', camel: 'Camel Brown', black: 'Black' }, images: { white: 'https://placehold.co/600x600/FFFFFF/000000?text=Christ+Died+White', camel: 'https://placehold.co/600x600/C4A27A/FFFFFF?text=Christ+Died+Camel', black: 'https://placehold.co/600x600/000000/FFFFFF?text=Christ+Died+Black' }, sizes: ['S', 'M', 'L', 'XL', 'XXL'], category: 'tshirts' },
        { id: 'tshirt4', name: 'Pray Without Ceasing', description: 'Pray without ceasing\nCotton T-shirt\nA reminder to stay in prayer.', basePrice: 400, typeOptions: ['Standard', 'Oversized'], colors: ['white', 'camel', 'black'], colorNames: { white: 'White', camel: 'Camel Brown', black: 'Black' }, images: { white: 'https://placehold.co/600x600/FFFFFF/000000?text=Pray+White', camel: 'https://placehold.co/600x600/C4A27A/FFFFFF?text=Pray+Camel', black: 'https://placehold.co/600x600/000000/FFFFFF?text=Pray+Black' }, sizes: ['S', 'M', 'L', 'XL', 'XXL'], category: 'tshirts' },
        { id: 'tshirt5', name: 'Jesus Christ The Perfect Sacrifice', description: 'Jesus Christ the perfect sacrifice\nCotton T-shirt\nDeclare the ultimate sacrifice.', basePrice: 400, typeOptions: ['Standard', 'Oversized'], colors: ['white', 'camel', 'black'], colorNames: { white: 'White', camel: 'Camel Brown', black: 'Black' }, images: { white: 'https://placehold.co/600x600/FFFFFF/000000?text=Sacrifice+White', camel: 'https://placehold.co/600x600/C4A27A/FFFFFF?text=Sacrifice+Camel', black: 'https://placehold.co/600x600/000000/FFFFFF?text=Sacrifice+Black' }, sizes: ['S', 'M', 'L', 'XL', 'XXL'], category: 'tshirts' }
    ],
    hoodies: [
        { id: 'hoodie1', name: 'Faith Breaks Protocol Hoodie', description: 'Faith breaks protocol\nHeavy hoodie\nPremium heavyweight hoodie.', basePrice: 600, colors: ['white', 'camel', 'black'], colorNames: { white: 'White', camel: 'Camel Brown', black: 'Black' }, images: { white: 'https://placehold.co/600x600/FFFFFF/000000?text=Hoodie+White', camel: 'https://placehold.co/600x600/C4A27A/FFFFFF?text=Hoodie+Camel', black: 'https://placehold.co/600x600/000000/FFFFFF?text=Hoodie+Black' }, sizes: ['S', 'M', 'L', 'XL', 'XXL'], category: 'hoodies' },
        { id: 'hoodie2', name: 'Christ Died Once For All Time Hoodie', description: 'Christ died once for all time\nHeavy hoodie\nWarm and faith-filled.', basePrice: 600, colors: ['white', 'camel', 'black'], colorNames: { white: 'White', camel: 'Camel Brown', black: 'Black' }, images: { white: 'https://placehold.co/600x600/FFFFFF/000000?text=Christ+Hoodie+White', camel: 'https://placehold.co/600x600/C4A27A/FFFFFF?text=Christ+Hoodie+Camel', black: 'https://placehold.co/600x600/000000/FFFFFF?text=Christ+Hoodie+Black' }, sizes: ['S', 'M', 'L', 'XL', 'XXL'], category: 'hoodies' },
        { id: 'hoodie3', name: 'Pray Without Ceasing Hoodie', description: 'Pray without ceasing\nHeavy hoodie\nStay warm while in prayer.', basePrice: 600, colors: ['white', 'camel', 'black'], colorNames: { white: 'White', camel: 'Camel Brown', black: 'Black' }, images: { white: 'https://placehold.co/600x600/FFFFFF/000000?text=Pray+Hoodie+White', camel: 'https://placehold.co/600x600/C4A27A/FFFFFF?text=Pray+Hoodie+Camel', black: 'https://placehold.co/600x600/000000/FFFFFF?text=Pray+Hoodie+Black' }, sizes: ['S', 'M', 'L', 'XL', 'XXL'], category: 'hoodies' },
        { id: 'hoodie4', name: 'Jesus Christ The Perfect Sacrifice Hoodie', description: 'Jesus Christ the perfect sacrifice\nHeavy hoodie\nPremium quality.', basePrice: 600, colors: ['white', 'camel', 'black'], colorNames: { white: 'White', camel: 'Camel Brown', black: 'Black' }, images: { white: 'https://placehold.co/600x600/FFFFFF/000000?text=Sacrifice+Hoodie+White', camel: 'https://placehold.co/600x600/C4A27A/FFFFFF?text=Sacrifice+Hoodie+Camel', black: 'https://placehold.co/600x600/000000/FFFFFF?text=Sacrifice+Hoodie+Black' }, sizes: ['S', 'M', 'L', 'XL', 'XXL'], category: 'hoodies' }
    ],
    sweaters: [
        { id: 'sweater1', name: 'Faith Breaks Protocol Sweater', description: 'Faith breaks protocol\nCrew neck sweater\nComfortable everyday wear.', basePrice: 560, colors: ['white', 'camel', 'black'], colorNames: { white: 'White', camel: 'Camel Brown', black: 'Black' }, images: { white: 'https://placehold.co/600x600/FFFFFF/000000?text=Sweater+White', camel: 'https://placehold.co/600x600/C4A27A/FFFFFF?text=Sweater+Camel', black: 'https://placehold.co/600x600/000000/FFFFFF?text=Sweater+Black' }, sizes: ['S', 'M', 'L', 'XL', 'XXL'], category: 'sweaters' },
        { id: 'sweater2', name: 'Christ Died Once For All Time Sweater', description: 'Christ died once for all time\nCrew neck sweater\nSoft and faith-inspired.', basePrice: 560, colors: ['white', 'camel', 'black'], colorNames: { white: 'White', camel: 'Camel Brown', black: 'Black' }, images: { white: 'https://placehold.co/600x600/FFFFFF/000000?text=Christ+Sweater+White', camel: 'https://placehold.co/600x600/C4A27A/FFFFFF?text=Christ+Sweater+Camel', black: 'https://placehold.co/600x600/000000/FFFFFF?text=Christ+Sweater+Black' }, sizes: ['S', 'M', 'L', 'XL', 'XXL'], category: 'sweaters' },
        { id: 'sweater3', name: 'Pray Without Ceasing Sweater', description: 'Pray without ceasing\nCrew neck sweater\nComfort meets faith.', basePrice: 560, colors: ['white', 'camel', 'black'], colorNames: { white: 'White', camel: 'Camel Brown', black: 'Black' }, images: { white: 'https://placehold.co/600x600/FFFFFF/000000?text=Pray+Sweater+White', camel: 'https://placehold.co/600x600/C4A27A/FFFFFF?text=Pray+Sweater+Camel', black: 'https://placehold.co/600x600/000000/FFFFFF?text=Pray+Sweater+Black' }, sizes: ['S', 'M', 'L', 'XL', 'XXL'], category: 'sweaters' },
        { id: 'sweater4', name: 'Jesus Christ The Perfect Sacrifice Sweater', description: 'Jesus Christ the perfect sacrifice\nCrew neck sweater\nPremium crewneck.', basePrice: 560, colors: ['white', 'camel', 'black'], colorNames: { white: 'White', camel: 'Camel Brown', black: 'Black' }, images: { white: 'https://placehold.co/600x600/FFFFFF/000000?text=Sacrifice+Sweater+White', camel: 'https://placehold.co/600x600/C4A27A/FFFFFF?text=Sacrifice+Sweater+Camel', black: 'https://placehold.co/600x600/000000/FFFFFF?text=Sacrifice+Sweater+Black' }, sizes: ['S', 'M', 'L', 'XL', 'XXL'], category: 'sweaters' }
    ],
    headwear: [
        { id: 'cap', name: 'Christ or Nothing CAP', description: 'Premium quality cap with embroidered logo\nAdjustable strap.', basePrice: 250, colors: ['black'], colorNames: { black: 'Black' }, images: { black: 'https://placehold.co/600x600/000000/FFFFFF?text=Black+Cap' }, sizes: ['OSFA'], category: 'headwear' },
        { id: 'bucket', name: 'Christ or Nothing Bucket Hat', description: 'Street style bucket hat with faith message\nOne size fits most.', basePrice: 250, colors: ['black'], colorNames: { black: 'Black' }, images: { black: 'https://placehold.co/600x600/000000/FFFFFF?text=Black+Bucket' }, sizes: ['OSFA'], category: 'headwear' }
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
function formatPrice(price) { return 'R ' + price.toLocaleString(); }
function getPrice(product, type) { if (product.typeOptions && type === 'Oversized') return product.basePrice + 100; return product.basePrice; }

function showNotification(msg) {
    const existing = document.querySelector('.notification');
    if (existing) existing.remove();
    const n = document.createElement('div');
    n.className = 'notification';
    n.innerHTML = msg;
    document.body.appendChild(n);
    setTimeout(() => n.remove(), 3000);
}

function findProductById(id) {
    for (const category in productsData) {
        const found = productsData[category].find(p => p.id === id);
        if (found) return found;
    }
    return null;
}

// Cart Functions
function saveCart() { localStorage.setItem('christOrNothingCart', JSON.stringify(cart)); }
function loadCart() { const saved = localStorage.getItem('christOrNothingCart'); if (saved) { try { cart = JSON.parse(saved); updateCartUI(); } catch(e) {} } }
function addToCart(item) { cart.push(item); saveCart(); updateCartUI(); showNotification(item.name + ' added to cart'); }
function removeFromCart(idx) { cart.splice(idx, 1); saveCart(); updateCartUI(); showNotification('Item removed'); }
function clearCart() { cart = []; saveCart(); updateCartUI(); showNotification('Cart cleared'); }
function getCartTotal() { return cart.reduce((t, i) => t + i.price, 0); }

function updateCartUI() {
    const count = document.getElementById('cartCount');
    if (count) count.textContent = cart.length;
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
        html += `<div class="cart-item"><div><strong>${escapeHtml(item.name)}</strong><br><small>${escapeHtml(item.colorName)} | ${escapeHtml(item.size)}${item.type ? ' | ' + escapeHtml(item.type) : ''}</small><br>${formatPrice(item.price)}</div><button class="remove-item" data-index="${i}">Remove</button></div>`;
    }
    container.innerHTML = html;
    document.getElementById('cartTotalPrice').textContent = 'Total Items: ' + cart.length;
    const subtotal = getCartTotal();
    document.getElementById('cartTotalAmount').innerHTML = `Subtotal: ${formatPrice(subtotal)}<br>Delivery: ${formatPrice(DELIVERY_FEE)}<br><strong>Total: ${formatPrice(subtotal + DELIVERY_FEE)}</strong>`;
    document.querySelectorAll('.remove-item').forEach(btn => btn.addEventListener('click', () => removeFromCart(parseInt(btn.dataset.index))));
}

function sendWhatsAppQuote() {
    if (cart.length === 0) { showNotification('Cart is empty'); return; }
    let msg = "*CHRIST OR NOTHING - ORDER SUMMARY*\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n";
    msg += "Order #: ORD-" + Date.now().toString().slice(-6) + "\nDate: " + new Date().toLocaleString() + "\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n*ITEMS ORDERED:*\n─────────────────\n";
    for (let i = 0; i < cart.length; i++) {
        const item = cart[i];
        msg += (i+1) + ". " + item.name + (item.type ? " (" + item.type + ")" : "") + "\n   Color: " + item.colorName + "\n   Size: " + item.size + "\n   Price: " + formatPrice(item.price) + "\n   ─────────────────\n";
    }
    const subtotal = getCartTotal();
    msg += "\n*PRICE SUMMARY:*\n─────────────────\nSubtotal: " + formatPrice(subtotal) + "\nDelivery: " + formatPrice(DELIVERY_FEE) + "\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n*TOTAL: " + formatPrice(subtotal + DELIVERY_FEE) + "*\n\n*CUSTOMER DETAILS:*\n─────────────────\nFull Name: \nAddress: \nPhone: \n\n*THANK YOU!*";
    window.open('https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(msg), '_blank');
}

function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/[&<>]/g, m => m === '&' ? '&amp;' : m === '<' ? '&lt;' : '&gt;');
}

// Render Product Detail
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
    
    const currentImage = product.images[selectedColors[product.id]];
    const price = getPrice(product, selectedTypes[product.id]);
    
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
                <img src="${currentImage}" class="product-detail-main-image" id="mainImage" alt="${product.name}">
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
    
    // Color buttons
    document.querySelectorAll('.color-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const color = btn.dataset.color;
            selectedColors[product.id] = color;
            document.getElementById('mainImage').src = product.images[color];
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
                recHtml += `<div class="recommendation-card" data-id="${rec.id}"><img src="${rec.images[rec.colors[0]]}" alt="${rec.name}"><h4>${escapeHtml(rec.name)}</h4><p>${formatPrice(rec.basePrice)}</p></div>`;
            }
            recContainer.innerHTML = recHtml;
            document.querySelectorAll('.recommendation-card').forEach(card => card.addEventListener('click', () => window.location.href = 'product.html?id=' + card.dataset.id));
        }
    }
}

// Initialize
function init() {
    loadCart();
    // Mobile menu
    const menuBtn = document.getElementById('mobileMenuBtn');
    const navMenu = document.getElementById('navMenu');
    if (menuBtn && navMenu) menuBtn.addEventListener('click', () => navMenu.classList.toggle('active'));
    // Cart modal
    const modal = document.getElementById('cartModal');
    const cartIcon = document.getElementById('cartIcon');
    const closeBtn = document.getElementById('closeCartBtn');
    const whatsappBtn = document.getElementById('whatsappOrderBtn');
    const clearCartBtn = document.getElementById('clearCartBtn');
    if (cartIcon) cartIcon.addEventListener('click', () => { renderCartModal(); modal.classList.add('open'); });
    if (closeBtn) closeBtn.addEventListener('click', () => modal.classList.remove('open'));
    if (whatsappBtn) whatsappBtn.addEventListener('click', sendWhatsAppQuote);
    if (clearCartBtn) clearCartBtn.addEventListener('click', clearCart);
    modal.addEventListener('click', e => { if (e.target === modal) modal.classList.remove('open'); });
    renderProductDetail();
}

init();
