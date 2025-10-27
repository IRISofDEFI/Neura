// Navigation Links
document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', (e) => {
        if (item.href && item.href !== '#') {
            e.preventDefault();
            window.location.href = item.href;
        }
    });
});

// Chart Setup (Using Chart.js)
document.addEventListener('DOMContentLoaded', () => {
    const ctx = document.getElementById('priceChart').getContext('2d');
    const priceChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['10:00', '10:15', '10:30', '10:45', '11:00', '11:15'],
            datasets: [{
                label: 'SOMI/STT Price',
                data: [0.0350, 0.0355, 0.0360, 0.0364, 0.0362, 0.0365],
                borderColor: '#7c3aed',
                tension: 0.4,
                fill: false,
                pointRadius: 4,
                pointHoverRadius: 6
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: { grid: { color: 'rgba(30, 31, 35, 0.5)' } },
                y: { grid: { color: 'rgba(30, 31, 35, 0.5)' }, beginAtZero: false }
            },
            plugins: {
                legend: { display: false }
            }
        }
    });
});

// Trading Controls
document.querySelector('.btn-buy').addEventListener('click', () => {
    const amount = document.querySelector('.input-amount').value;
    if (amount) {
        alert(`Buying SOMI with ${amount} STT... ✅`);
        document.querySelector('.input-amount').value = '';
    } else {
        alert('Please enter an amount!');
    }
});

document.querySelector('.btn-sell').addEventListener('click', () => {
    const amount = document.querySelector('.input-amount').value;
    if (amount) {
        alert(`Selling STT with ${amount} SOMI... ✅`);
        document.querySelector('.input-amount').value = '';
    } else {
        alert('Please enter an amount!');
    }
});

// AI Chat
document.querySelector('.btn-chat').addEventListener('click', () => {
    alert('AI Assistant: Need trading tips for SOMI/STT? Ask me! 🤖');
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