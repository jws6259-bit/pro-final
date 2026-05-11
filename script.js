/**
 * ArbiLab Interactive Scripts - Reverted to User Preferred Logic
 */

// --- NAVIGATION & VIEW ELEMENTS ---
const loginPage = document.getElementById('login-page');
const dashboardView = document.getElementById('dashboard-view');
const mainHeader = document.getElementById('main-header');

// --- VIEW CONTROLS ---


function handleLogin() {
    const btn = document.querySelector('.btn-login');
    btn.innerText = '인증 중...';
    btn.disabled = true;

    // Direct transition for speed & reliability
    setTimeout(() => {
        loginPage.style.display = 'none';
        dashboardView.style.display = 'block';
        mainHeader.style.display = 'block';
        window.scrollTo(0,0);
        console.log("ArbiLab Login Success");
    }, 600);
}

// --- TAB SYSTEM ---
function showTab(tabId, el) {
    // 1. Content switch
    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
    document.getElementById('tab-' + tabId).classList.add('active');
    
    // 2. Tab styling switch
    document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
    el.classList.add('active');
    
    // 3. UX
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// --- UTILITIES ---
// Copy Account Number
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('copy-btn')) {
        const text = "1002-123-456789";
        navigator.clipboard.writeText(text).then(() => {
            const originalText = e.target.innerText;
            e.target.innerText = "복사됨!";
            setTimeout(() => e.target.innerText = originalText, 2000);
        });
    }
});

console.log("ArbiLab Static Engine Ready.");
