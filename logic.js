const SUPABASE_URL = 'https://jufmwyutaasacmearqsb.supabase.co';
const SUPABASE_KEY = 'sb_publishable_nU3BiJtyp_BMahgbn4Rhsw_fZwXPK13';
const _supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

let currentTab = 'upi';
let allData = [];
let adminClicks1 = 0;
let adminClicks2 = 0;

document.addEventListener('DOMContentLoaded', () => {
    fetchLoot();
    setupAdmin();
});

async function fetchLoot() {
    const { data } = await _supabase.from('campaigns').select('*').order('created_at', { ascending: false });
    if (data) { allData = data; renderGrid(); }
}

function renderGrid() {
    const grid = document.getElementById('lootGrid');
    grid.innerHTML = '';
    const filtered = allData.filter(i => i.category === currentTab);
    
    filtered.forEach((item, idx) => {
        const card = document.createElement('div');
        card.className = 'offer-card glass';
        card.style.animation = `slideUp 0.5s ease-out both ${idx * 0.05}s`;
        card.innerHTML = `
            <h3 class="theme-font">${item.title}</h3>
            <div class="reward-badge">₹${item.reward || item.price}</div>
            ${item.video ? '<p style="color:var(--purple); font-size:0.7rem; font-weight:900;">🎬 VIDEO GUIDE</p>' : ''}
        `;
        card.onclick = () => openTask(item);
        grid.appendChild(card);
    });
}

function switchTab(tab) {
    currentTab = tab;
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    event.target.classList.add('active');
    renderGrid();
}

function openTask(item) {
    const content = document.getElementById('modalContent');
    const steps = item.instructions.map(s => `<div style="padding:12px; background:rgba(255,255,255,0.03); border-radius:10px; margin-bottom:8px; border-left:4px solid var(--accent)">${s}</div>`).join('');
    
    content.innerHTML = `
        <h2 class="theme-font" style="margin-bottom:20px;">${item.title}</h2>
        ${item.video ? `<button class="btn-primary" style="background:var(--purple); color:#fff; margin-bottom:10px;" onclick="playVideo('${item.video}')">WATCH VIDEO</button>` : ''}
        <div style="margin-bottom:20px;">${steps}</div>
        <button class="btn-primary" onclick="window.open('${item.link}')">CLAIM NOW</button>
    `;
    document.getElementById('taskModal').style.display = 'flex';
}

function playVideo(src) {
    const p = document.getElementById('player');
    p.src = src; document.getElementById('videoModal').style.display = 'flex'; p.play();
}

// Admin Logic
function setupAdmin() {
    document.getElementById('admin-trigger-1').onclick = () => { adminClicks1++; checkAdmin(); };
    document.getElementById('admin-trigger-2').onclick = () => { adminClicks2++; checkAdmin(); };
}

function checkAdmin() {
    if (adminClicks1 >= 7 && adminClicks2 >= 7) {
        const p = prompt("Password:");
        if (p === "alpha777") { document.getElementById('adminPortal').style.display = 'flex'; }
        adminClicks1 = 0; adminClicks2 = 0;
    }
}

async function saveTask() {
    const task = {
        title: document.getElementById('taskTitle').value,
        reward: document.getElementById('taskReward').value,
        category: document.getElementById('taskCat').value,
        link: document.getElementById('taskLink').value,
        video: document.getElementById('taskVideo').value,
        instructions: document.getElementById('taskSteps').value.split('\n')
    };
    const { error } = await _supabase.from('campaigns').insert([task]);
    if (!error) { showToast("Task Live!"); fetchLoot(); closeAdmin(); }
}

function closeModals(e) { if(e.target.classList.contains('overlay')) { e.target.style.display = 'none'; document.getElementById('player').pause(); } }
function closeAdmin() { document.getElementById('adminPortal').style.display = 'none'; }
function closeVideo() { document.getElementById('videoModal').style.display = 'none'; document.getElementById('player').pause(); }
function showToast(m) { const t = document.getElementById('toast'); t.innerText = m; t.classList.add('active'); setTimeout(()=>t.classList.remove('active'), 3000); }
function filterLoot() { const q = document.getElementById('mainSearch').value.toLowerCase(); renderGrid(allData.filter(i => i.title.toLowerCase().includes(q))); }