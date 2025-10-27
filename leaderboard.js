// Navigation Links
document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', (e) => {
        if (item.href && item.href !== '#') {
            e.preventDefault();
            window.location.href = item.href;
        }
    });
});

// Filter Buttons
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        // Filter rows based on mode
        const mode = btn.textContent.toLowerCase();
        document.querySelectorAll('.table-row').forEach(row => {
            const rowMode = row.querySelector('.mode').textContent.toLowerCase();
            row.style.display = (mode === 'all' || rowMode === mode) ? 'grid' : 'none';
        });
    });
});

// Row Click - View Strategy Details
document.querySelectorAll('.table-row').forEach(row => {
    row.addEventListener('click', () => {
        const strategy = row.querySelector('.strategy-name span:first-child').textContent;
        const model = row.querySelector('.ai-model').textContent;
        alert(`Viewing ${strategy} details (AI Model: ${model})... 📈`);
        // Could redirect to strategy details page
    });
});

// AI Chat
document.querySelector('.btn-chat').addEventListener('click', () => {
    alert('AI Assistant: Who do you want to compete with on the leaderboard? 🤖');
});

// Connect Wallet
document.querySelector('.btn-connect').addEventListener('click', () => {
    alert('Connecting to Somnia Wallet... 🔗');
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add hover animation for rows
document.querySelectorAll('.table-row').forEach(row => {
    row.addEventListener('mouseenter', () => {
        row.style.transform = 'translateX(4px)';
    });
    row.addEventListener('mouseleave', () => {
        row.style.transform = 'translateX(0)';
    });
});