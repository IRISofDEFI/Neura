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
    const ctx = document.getElementById('realPortfolioChart').getContext('2d');
    const realPortfolioChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['10:00', '10:15', '10:30', '10:45', '11:00', '11:15'],
            datasets: [{
                label: 'Real Portfolio Value',
                data: [15500, 15600, 15700, 15780, 15750, 15780],
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

// Filter Assets
document.querySelector('.input-filter').addEventListener('change', (e) => {
    const filter = e.target.value.toLowerCase();
    document.querySelectorAll('.holdings-row').forEach(row => {
        const asset = row.querySelector('span:first-child').textContent.toLowerCase();
        row.style.display = (filter === 'all' || asset === filter) ? 'flex' : 'none';
    });
});

// Add Asset Button
document.querySelector('.btn-add-asset').addEventListener('click', () => {
    alert('Opening Real Asset Adder... 💼');
});

// AI Chat
document.querySelector('.btn-chat').addEventListener('click', () => {
    alert('AI Assistant: Want to optimize your real portfolio? Ask me! 🤖');
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