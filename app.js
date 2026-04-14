let currentSection = 'upi';

// 1. Initialize the App
document.addEventListener('DOMContentLoaded', () => {
    // Default to UPI Section on Load
    const defaultNav = document.querySelector('.nav-btn');
    switchSection('upi', defaultNav);
});

// 2. Section Switching & Sorting Logic
function switchSection(category, element) {
    currentSection = category;

    // Update Nav UI
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
    element.classList.add('active');

    // Update Titles
    const meta = {
        upi: { title: "UPI Loot", sub: "Instant Digital Cashback" },
        bank: { title: "Bank Loot", sub: "Institutional Rewards" },
        crypto: { title: "Crypto Loot", sub: "Blockchain & Gmail Tasks" },
        special: { title: "Special & Premium", sub: "Coupons & Premium Vouchers" }
    };

    document.getElementById('page-display-title').innerText = meta[category].title;
    document.getElementById('page-subtitle').innerText = meta[category].sub;

    // Filter Data
    let filtered = offers.filter(o => o.category.includes(category));

    // --- SMART SORTING ---
    if (category === 'special') {
        // PIN PREMIUM AT TOP: Premium items (Buy Now) come first
        filtered.sort((a, b) => (b.isPremium ? 1 : 0) - (a.isPremium ? 1 : 0));
    } else {
        // ASCENDING SORT: Smallest rewards (e.g., ₹10) at the top for "Quick Wins"
        filtered.sort((a, b) => (a.reward || 0) - (b.reward || 0));
    }

    renderOffers(filtered);
    calculateRewards(filtered);
}

// 3. Render Offers to Screen
function renderOffers(data) {
    const container = document.getElementById('offer-list');
    container.innerHTML = '';

    if (data.length === 0) {
        container.innerHTML = `<p style="text-align:center; padding:40px; color:#555;">No offers available here yet.</p>`;
        return;
    }

    data.forEach((item, index) => {
        const card = document.createElement('div');
        const isPrem = item.isPremium || false;
        
        card.className = `offer-card ${isPrem ? 'premium' : ''}`;
        card.style.animationDelay = `${index * 0.05}s`;
        
        // Logical Labels
        const badgeClass = isPrem ? 'badge-gold' : 'badge-green';
        const badgeText = isPrem ? 'BUY' : `₹${item.reward}`;
        const subInfo = isPrem ? '⭐ Premium Verification' : item.instructions[0];

        card.onclick = () => openModal(item);
        card.innerHTML = `
            <div class="offer-info">
                <h4>${item.title}</h4>
                <p>${subInfo}</p>
            </div>
            <div class="reward-badge ${badgeClass}">${badgeText}</div>
        `;
        container.appendChild(card);
    });
}

// 4. Search Filter
function filterBySearch() {
    const term = document.getElementById('offerSearch').value.toLowerCase();
    const sectionData = offers.filter(o => o.category.includes(currentSection));
    const searched = sectionData.filter(o => o.title.toLowerCase().includes(term));
    renderOffers(searched);
}

// 5. Category-Specific Calculator
function calculateRewards(data) {
    const total = data.reduce((sum, item) => sum + (Number(item.reward) || 0), 0);
    document.getElementById('category-earnings-display').innerText = `₹${total}.00+`;
}

// 6. Modal / Popup Logic
function openModal(item) {
    const overlay = document.getElementById('modal-overlay');
    const body = document.getElementById('modal-content-body');
    const isPrem = item.isPremium || false;

    // Generate Steps
    const stepsHtml = item.instructions.map(step => 
        `<div class="instr-step ${isPrem ? 'gold-border' : ''}">${step}</div>`
    ).join('');

    body.innerHTML = `
        <h2 style="margin-bottom:5px; color:${isPrem ? 'var(--neon-gold)' : '#fff'}">${item.title}</h2>
        <p style="font-size:0.7rem; color:#555; margin-bottom:20px; letter-spacing:1px;">
            ${isPrem ? 'DIAMOND VERIFIED DEAL' : 'VERIFIED CAMPAIGN'}
        </p>

        ${isPrem ? `<h3 style="margin-bottom:15px; font-size:1.5rem;">Price: ₹${item.price}</h3>` : ''}

        <div style="margin-top:10px;">
            <p style="font-size:0.7rem; font-weight:700; color:${isPrem ? 'var(--neon-gold)' : 'var(--neon-green)'}; margin-bottom:10px;">STEPS TO COMPLETE:</p>
            ${stepsHtml}
        </div>

        <div class="action-group">
            <button class="btn ${isPrem ? 'btn-buy' : 'btn-claim'}" onclick="handleAction('${item.type}', '${item.link}', '${item.title}', '${item.price}')">
                ${item.type === 'copy' ? 'Copy Promo Code' : (isPrem ? 'Buy Now (WhatsApp)' : 'Claim Offer')}
            </button>
            
            ${item.video ? `<button class="btn btn-sec" onclick="playTutorial('${item.video}')">Watch Video Tutorial</button>` : ''}
            ${item.trackLink ? `<button class="btn btn-sec" onclick="window.open('${item.trackLink}', '_blank')">Track Status</button>` : ''}
            ${item.certLink ? `<button class="btn btn-sec" onclick="window.open('${item.certLink}', '_blank')">Download CA Certificate</button>` : ''}
        </div>
    `;

    overlay.style.display = 'flex';
}

// 7. Action Execution (Redirect, Copy, WhatsApp)
function handleAction(type, link, title, price) {
    if (type === 'buy') {
        const msg = encodeURIComponent(`Hi Alpha Campaigns, I want to purchase ${title} for ₹${price}. Please provide payment instructions.`);
        window.open(`https://wa.me/916372132268?text=${msg}`, '_blank');
    } 
    else if (type === 'copy') {
        navigator.clipboard.writeText(link);
        showToast();
        const btn = event.target;
        btn.innerText = "COPIED!";
        setTimeout(() => { btn.innerText = "Copy Promo Code"; }, 2000);
    } 
    else {
        window.open(link, '_blank');
    }
}

// 8. Built-in Video Player Logic
function playTutorial(videoSrc) {
    const videoOverlay = document.getElementById('video-overlay');
    const player = document.getElementById('tutorial-video');
    player.src = videoSrc;
    videoOverlay.style.display = 'flex';
    player.play();
}

function closeVideo() {
    const player = document.getElementById('tutorial-video');
    player.pause();
    document.getElementById('video-overlay').style.display = 'none';
}

// 9. UI Helpers
function closeModal() { document.getElementById('modal-overlay').style.display = 'none'; }
function closeOutside(e) { if (e.target.id === 'modal-overlay') closeModal(); }
function closeVideoOutside(e) { if (e.target.id === 'video-overlay') closeVideo(); }

function showToast() {
    const toast = document.getElementById('toast');
    toast.style.display = 'block';
    setTimeout(() => { toast.style.display = 'none'; }, 2000);
}