/* --- Alpha Campaigns v5.0 Core Engine --- */

let currentCat = 'upi';
let touchStartX = 0;

// 1. Initialization
document.addEventListener('DOMContentLoaded', () => {
    initApp();
    setupEventListeners();
    setupMobileSwiper();
    startLiveProofFeed();
});

function initApp() {
    // Start with UPI category
    const initialData = offers.filter(o => o.category.includes(currentCat));
    renderOffers(initialData);
    updateHeaderStats(initialData);
}

// 2. Navigation Logic (PC & Mobile)
function setupEventListeners() {
    // Handle Navigation Clicks (Dual Nav Support)
    const navButtons = document.querySelectorAll('.nav-item, .m-nav-item');
    navButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const cat = btn.getAttribute('data-cat');
            switchTab(cat, btn);
        });
    });

    // Modal Close
    document.querySelector('.modal-close-btn').addEventListener('click', closeModal);
    document.querySelector('.video-close-btn').addEventListener('click', closeVideo);
}

function switchTab(cat, element) {
    currentCat = cat;

    // Update UI Active States
    document.querySelectorAll('.nav-item, .m-nav-item').forEach(b => b.classList.remove('active'));
    
    // Sync both PC and Mobile Nav active classes
    document.querySelectorAll(`[data-cat="${cat}"]`).forEach(b => b.classList.add('active'));

    // Update Page Titles
    const meta = {
        upi: { t: "UPI LOOT", s: "Instant verified digital cashback." },
        bank: { t: "BANK REWARDS", s: "High-value rewards & verified apps." },
        services: { t: "SMM HUB", s: "Premium growth for IG, YT, FB & TG." },
        refer: { t: "REFER & EARN", s: "Unlock massive bonuses via sharing." },
        special: { t: "SPECIAL DEALS", s: "Premium vouchers & exclusive offers." },
        crypto: { t: "CRYPTO TASKS", s: "Blockchain tasks & Gmail earning." }
    };

    const titleEl = document.getElementById('page-display-title');
    const subEl = document.getElementById('page-subtitle');
    
    titleEl.innerText = meta[cat].t;
    subEl.innerText = meta[cat].s;

    // Filter and Render
    const filtered = offers.filter(o => o.category.includes(cat));
    renderOffers(filtered);
    updateHeaderStats(filtered);
    
    // Smooth scroll to top on mobile switch
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 3. Rendering Engine (Bento Grid)
function renderOffers(data) {
    const grid = document.getElementById('offer-list');
    grid.innerHTML = '';

    if (data.length === 0) {
        grid.innerHTML = `<div class="empty-state">No offers available in this section yet.</div>`;
        return;
    }

    data.forEach((item, index) => {
        const isDone = localStorage.getItem(`alpha_done_${item.id}`);
        const isSMM = item.category === 'services';
        const card = document.createElement('div');
        
        // Dynamic Classing
        card.className = `offer-card glass ${isSMM ? 'premium-glow' : ''} ${isDone ? 'completed-op' : ''}`;
        card.style.animationDelay = `${index * 0.05}s`;

        const rewardText = isSMM ? `₹${item.price}` : `₹${item.reward}`;
        
        card.innerHTML = `
            ${isDone ? '<div class="check-mark">✅ DONE</div>' : ''}
            <div class="card-content">
                <h3>${item.title}</h3>
                <p>${item.instructions[0].substring(0, 45)}...</p>
            </div>
            <div class="reward-badge ${isSMM ? 'gold' : ''}">${rewardText}</div>
        `;

        card.onclick = () => openModal(item);
        grid.appendChild(card);
    });
}

// 4. Modal & Action Logic
function openModal(item) {
    const body = document.getElementById('modal-content-body');
    const isSMM = item.category === 'services';
    
    const stepsHtml = item.instructions.map(step => {
        const isWarning = step.includes('⚠️');
        return `<div class="modal-step ${isWarning ? 'warning-step' : ''}">${step}</div>`;
    }).join('');

    body.innerHTML = `
        <h2 class="syncopate" style="margin-bottom:10px; font-size:1.4rem;">${item.title}</h2>
        <p style="color:var(--accent-p); font-weight:800; font-size:0.7rem; margin-bottom:20px; letter-spacing:1px;">
            ${isSMM ? 'PREMIUM SMM SERVICE' : 'VERIFIED CAMPAIGN'}
        </p>

        <div class="steps-list">${stepsHtml}</div>

        <div class="modal-footer">
            <button class="btn-main-action" id="primary-action-btn">
                ${isSMM ? 'Order via WhatsApp' : (item.type === 'copy' ? 'Copy Promo Code' : 'Claim Offer Now')}
            </button>
            
            <div class="extra-actions">
                ${item.video ? `<button class="btn-sec" onclick="playTutorial('${item.video}')">🎥 Watch Tutorial</button>` : ''}
                ${item.trackLink ? `<button class="btn-sec" onclick="window.open('${item.trackLink}')">🔍 Track Status</button>` : ''}
            </div>
        </div>
    `;

    document.getElementById('primary-action-btn').onclick = () => executeAction(item);
    document.getElementById('modal-overlay').style.display = 'flex';
}

function executeAction(item) {
    if (item.category === 'services') {
        const waText = encodeURIComponent(`Hi Alpha Campaigns! I want to order this service:\n\n📌 Service: ${item.title}\n💰 Price: ₹${item.price}\n\nMy Link: [Paste Your Profile/Post Link Here]\nQuantity: [Enter Amount]\n\nPlease provide payment instructions.`);
        window.open(`https://wa.me/916372132268?text=${waText}`, '_blank');
    } else if (item.type === 'copy') {
        navigator.clipboard.writeText(item.link);
        showToast("Promo Code Copied!");
    } else {
        localStorage.setItem(`alpha_done_${item.id}`, 'true');
        window.open(item.link, '_blank');
        // Refresh grid to show "Done" checkmark
        renderOffers(offers.filter(o => o.category.includes(currentCat)));
    }
}

// 5. Mobile Swipe Logic
function setupMobileSwiper() {
    const cats = ['upi', 'bank', 'services', 'refer', 'special'];
    
    window.addEventListener('touchstart', e => {
        touchStartX = e.changedTouches[0].screenX;
    });

    window.addEventListener('touchend', e => {
        let touchEndX = e.changedTouches[0].screenX;
        let diff = touchStartX - touchEndX;
        let currentIndex = cats.indexOf(currentCat);

        if (Math.abs(diff) > 120) { // Threshold for swipe
            if (diff > 0 && currentIndex < cats.length - 1) {
                // Swipe Left -> Go Next
                const nextCat = cats[currentIndex + 1];
                switchTab(nextCat, document.querySelector(`[data-cat="${nextCat}"]`));
            } else if (diff < 0 && currentIndex > 0) {
                // Swipe Right -> Go Prev
                const prevCat = cats[currentIndex - 1];
                switchTab(prevCat, document.querySelector(`[data-cat="${prevCat}"]`));
            }
        }
    });
}

// 6. Search Logic
function filterBySearch() {
    const term = document.getElementById('offerSearch').value.toLowerCase();
    const filtered = offers.filter(o => 
        o.category.includes(currentCat) && 
        (o.title.toLowerCase().includes(term) || o.instructions.join(' ').toLowerCase().includes(term))
    );
    renderOffers(filtered);
}

// 7. Trust Builders & UI Helpers
function startLiveProofFeed() {
    const names = ["Rahul", "Priya", "Amit", "Soni", "Ankit", "Vikram", "Sneha", "Karan"];
    const proofContainer = document.getElementById('proof-feed');

    setInterval(() => {
        if (!proofContainer) return;
        const name = names[Math.floor(Math.random() * names.length)];
        const amt = [10, 50, 100, 150, 200, 500][Math.floor(Math.random() * 6)];
        
        const card = document.createElement('div');
        card.className = 'proof-card glass';
        card.innerHTML = `🛡️ <b>@${name}</b> just claimed <b>₹${amt}</b>`;
        
        proofContainer.prepend(card);
        if (proofContainer.children.length > 5) proofContainer.lastChild.remove();
    }, 4000);
}

function updateHeaderStats(data) {
    const total = data.reduce((sum, item) => sum + (Number(item.reward) || 0), 0);
    document.getElementById('category-earnings-display').innerText = `₹${total}.00+`;
}

function showToast(msg) {
    const t = document.getElementById('toast');
    t.innerText = msg;
    t.style.display = 'block';
    setTimeout(() => t.style.display = 'none', 2500);
}

function closeModal() { document.getElementById('modal-overlay').style.display = 'none'; }
function closeOutside(e) { if (e.target.id === 'modal-overlay') closeModal(); }

function playTutorial(src) {
    const v = document.getElementById('tutorial-video');
    v.src = src;
    document.getElementById('video-overlay').style.display = 'flex';
    v.play();
}

function closeVideo() {
    const v = document.getElementById('tutorial-video');
    v.pause();
    document.getElementById('video-overlay').style.display = 'none';
}

function copySiteLink() {
    navigator.clipboard.writeText(window.location.href);
    showToast("Site link copied to share!");
}