// Connect Wallet
document.querySelector('.btn-connect').addEventListener('click', () => {
    alert('Connecting to Somnia Wallet... 🔗');
});

// Quick Trade
document.querySelector('.btn-quick-trade').addEventListener('click', () => {
    document.querySelector('.trading-table .table-row').click();
});

// Table Row Click
document.querySelectorAll('.table-row').forEach(row => {
    row.addEventListener('click', () => {
        const pair = row.querySelector('.pair').textContent;
        alert(`Trading ${pair} - Opening trade modal... 📈`);
    });
});

// Filter Buttons
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
    });
});

// AI Chat
document.querySelector('.btn-chat').addEventListener('click', () => {
    alert('AI Assistant: How can I help you trade smarter today? 🤖');
});

// Search
document.querySelector('.search-input').addEventListener('input', (e) => {
    console.log('Searching for:', e.target.value);
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