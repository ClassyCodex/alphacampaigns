/* --- Alpha Master v7.1 - Core Logic Engine --- */

let currentMainCat = 'upi';
let currentSubFilter = 'all';
let touchStartX = 0;

document.addEventListener('DOMContentLoaded', () => {
    initApp();
    setupNavigation();
    startFOMOEngine();
});

// 1. Initial Launch
function initApp() {
    renderSection('upi');
    // Global Swipe Support for Mobile
    window.addEventListener('touchstart', e => touchStartX = e.touches[0].clientX);
    window.addEventListener('touchend', e => handleSwipe(e.changedTouches[0].clientX));
}

// 2. Navigation Control (PC & Mobile Sync)
function setupNavigation() {
    const navItems = document.querySelectorAll('[data-main]');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const target = item.getAttribute('data-main');
            
            // Sync active classes across PC Sidebar and Mobile Floating Nav
            document.querySelectorAll('[data-main]').forEach(n => n.classList.remove('active'));
            document.querySelectorAll(`[data-main="${target}"]`).forEach(n => n.classList.add('active'));

            renderSection(target);
        });
    });
}

function renderSection(cat) {
    currentMainCat = cat;
    currentSubFilter = 'all';
    
    const container = document.getElementById('bento-container');
    
    // Smooth Transition: Fade Out
    container.style.opacity = '0';
    container.style.transform = 'translateY(10px)';

    setTimeout(() => {
        // Update Titles & Subtitles
        const meta = {
            upi: { t: "UPI LOOTS", s: "Instant work, verified digital cashback." },
            finance: { t: "FINANCE HUB", s: "Bank, Jio & High-value demats." },
            smm: { t: "SMM PANEL", s: "Professional social growth hub." },
            refer: { t: "REFER & EARN", s: "Unlock massive bonuses via sharing." },
            gaming: { t: "GAMING HUB", s: "Verified Apps. Play & Withdraw." },
            special: { t: "COUPONS & MORE", s: "Premium vouchers & cashback deals." }
        };

        document.getElementById('display-title').innerText = meta[cat].t;
        document.getElementById('display-subtitle').innerText = meta[cat].s;

        // Fetch the specific Data from your modular DB files
        let data = getCategoryData(cat);
        
        // Update Sub-Navigation Pills
        renderSubNav(cat, data);

        // Render the Bento Cards
        renderCards(data);

        // [FIXED] Calculation Logic for Reward Pool
        updateStats(data);

        // Smooth Transition: Fade In
        container.style.opacity = '1';
        container.style.transform = 'translateY(0)';
        
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 300);
}

// 3. Sub-Filtering (Platform selection for SMM/Gaming)
function renderSubNav(cat, data) {
    const subBar = document.getElementById('sub-nav-bar');
    subBar.innerHTML = '';
    
    const filterable = ['smm', 'gaming', 'special'];
    if (!filterable.includes(cat)) return;

    const subs = ['all', ...new Set(data.map(item => item.sub).filter(s => s))];
    
    subs.forEach(s => {
        const pill = document.createElement('div');
        pill.className = `sub-pill ${s === currentSubFilter ? 'active' : ''}`;
        pill.innerText = s.toUpperCase();
        pill.onclick = () => {
            currentSubFilter = s;
            document.querySelectorAll('.sub-pill').forEach(p => p.classList.remove('active'));
            pill.classList.add('active');
            renderCards(s === 'all' ? data : data.filter(i => i.sub === s));
        };
        subBar.appendChild(pill);
    });
}

// 4. Data Routing Engine
function getCategoryData(cat) {
    if (cat === 'upi') return db_upi;
    if (cat === 'finance') return db_finance;
    if (cat === 'refer') return db_refer;
    if (cat === 'smm') return db_smm;
    if (cat === 'gaming') return db_gaming;
    if (cat === 'special') return db_special;
    return [];
}

// 5. Card Rendering Engine
function renderCards(data) {
    const grid = document.getElementById('bento-container');
    grid.innerHTML = '';

    data.forEach((item, index) => {
        const isSMM = currentMainCat === 'smm';
        const isDone = localStorage.getItem(`alpha_done_${item.id}`);
        
        const card = document.createElement('div');
        card.className = `offer-card glass ${item.isPremium ? 'premium-glow' : ''}`;
        card.style.animationDelay = `${index * 0.05}s`;

        // Use Price for SMM, Reward for Others
        const displayVal = isSMM ? `₹${item.price}` : `₹${item.reward}`;

        card.innerHTML = `
            <div class="card-body">
                <h3 class="theme-font">${item.title}</h3>
                <p>${item.instructions[0].substring(0, 45)}...</p>
            </div>
            <div class="reward-badge ${isSMM ? 'gold' : ''}">${displayVal}</div>
            ${isDone ? '<div style="font-size:0.6rem; color:var(--neon-green); font-weight:900; margin-top:5px;">✅ VERIFIED</div>' : ''}
        `;

        card.onclick = () => openOfferModal(item);
        grid.appendChild(card);
    });
}

// 6. Modal System
function openOfferModal(item) {
    const body = document.getElementById('modal-body');
    const isSMM = currentMainCat === 'smm';

    const steps = item.instructions.map(s => {
        const isWarning = s.includes('⚠️');
        return `<div class="modal-step ${isWarning ? 'warning-step' : ''}">${s}</div>`;
    }).join('');

    body.innerHTML = `
        <h2 class="theme-font" style="font-size:1.8rem; margin-bottom:10px;">${item.title}</h2>
        <div style="display:flex; gap:10px; margin-bottom:20px;">
            ${item.trackLink ? `<button class="btn-track" onclick="window.open('${item.trackLink}')">TRACK STATUS</button>` : ''}
            ${item.video ? `<button class="btn-video" onclick="playVideo('${item.video}')">WATCH VIDEO</button>` : ''}
        </div>
        <div class="steps-container">${steps}</div>
        <button class="btn-main-action" id="action-trigger">
            ${isSMM ? 'ORDER VIA WHATSAPP' : (item.type === 'copy' ? 'COPY PROMO CODE' : 'CLAIM REWARD NOW')}
        </button>
    `;

    document.getElementById('action-trigger').onclick = () => executeAction(item);
    document.getElementById('modal-overlay').style.display = 'flex';
}

function executeAction(item) {
    if (currentMainCat === 'smm') {
        const text = encodeURIComponent(`Hi Alpha Campaigns! I want to order:\n📌 Service: ${item.title}\n💰 Price: ₹${item.price}\n\nMy Link: [Paste Link Here]\nQuantity: [Enter Amount]`);
        window.open(`https://wa.me/916372132268?text=${text}`);
    } else if (item.type === 'copy') {
        navigator.clipboard.writeText(item.link);
        showToast("Code Copied!");
    } else {
        localStorage.setItem(`alpha_done_${item.id}`, 'true');
        window.open(item.link, '_blank');
        renderCards(getCategoryData(currentMainCat));
    }
}

// 7. [FIXED] Reward Pool Calculator
function updateStats(data) {
    const display = document.getElementById('reward-pool-display');
    if (!display) return;

    const total = data.reduce((sum, item) => {
        // Count Price for SMM hub, Reward for everything else
        const val = currentMainCat === 'smm' ? (item.price || 0) : (item.reward || 0);
        return sum + Number(val);
    }, 0);

    display.innerText = `₹${total.toFixed(0)}+`;
}

// 8. FOMO / Ad-Popup Engine
function startFOMOEngine() {
    const labels = ["MOST ACTIVE", "BEST SELLER", "HOT COUPON", "HIGH VALUE"];
    const names = ["Rahul", "Priya", "Amit", "Soni", "Ankit", "Vikram", "Sneha"];
    
    setInterval(() => {
        const popup = document.getElementById('ad-popup');
        const label = labels[Math.floor(Math.random() * labels.length)];
        const name = names[Math.floor(Math.random() * names.length)];
        const amt = [10, 50, 100, 150, 200, 500][Math.floor(Math.random() * 6)];

        document.getElementById('ad-label').innerText = label;
        document.getElementById('ad-text').innerHTML = `User <b>@${name}</b> claimed <b>₹${amt}</b>`;

        popup.classList.add('active');
        setTimeout(() => popup.classList.remove('active'), 6000);
    }, 18000); // Every 18 seconds
}

// 9. Helpers
function handleSearch() {
    const term = document.getElementById('offerSearch').value.toLowerCase();
    const data = getCategoryData(currentMainCat);
    const filtered = data.filter(i => i.title.toLowerCase().includes(term) || i.instructions.join(' ').toLowerCase().includes(term));
    renderCards(filtered);
}

function handleSwipe(endX) {
    const cats = ['upi', 'finance', 'smm', 'refer', 'gaming', 'special'];
    let i = cats.indexOf(currentMainCat);
    if (touchStartX - endX > 100 && i < cats.length - 1) {
        const next = cats[i+1];
        document.querySelector(`[data-main="${next}"]`).click();
    }
    if (touchStartX - endX < -100 && i > 0) {
        const prev = cats[i-1];
        document.querySelector(`[data-main="${prev}"]`).click();
    }
}

function showToast(msg) {
    const t = document.getElementById('toast');
    t.innerText = msg; t.style.display = 'block';
    setTimeout(() => t.style.display = 'none', 3000);
}

function closeModal() { document.getElementById('modal-overlay').style.display = 'none'; }
function playVideo(src) { 
    const p = document.getElementById('tutorial-player');
    p.src = src; document.getElementById('video-overlay').style.display = 'flex'; p.play();
}
function closeVideo() { 
    const p = document.getElementById('tutorial-player');
    p.pause(); document.getElementById('video-overlay').style.display = 'none'; 
}