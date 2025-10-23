// Navigation Links
document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', (e) => {
        if (item.href && item.href !== '#') {
            e.preventDefault();
            window.location.href = item.href;
        }
    });
});

// Create Strategy Button
document.querySelector('.btn-create').addEventListener('click', (e) => {
    e.preventDefault();
    alert('Opening Strategy Creator... 🎯');
});

// Activate Strategy
document.querySelectorAll('.btn-activate').forEach(btn => {
    btn.addEventListener('click', () => {
        const card = btn.closest('.strategy-card');
        card.classList.add('active');
        alert('Strategy Activated! 🚀');
    });
});

// Pause Strategy
document.querySelectorAll('.btn-pause').forEach(btn => {
    btn.addEventListener('click', () => {
        alert('Strategy Paused ⏸');
    });
});

// Delete Strategy
document.querySelectorAll('.btn-delete').forEach(btn => {
    btn.addEventListener('click', () => {
        if (confirm('Delete this strategy?')) {
            btn.closest('.strategy-card').style.display = 'none';
            alert('Strategy Deleted! 🗑');
        }
    });
});

// Demo Buttons
document.querySelectorAll('.btn-demo').forEach(btn => {
    btn.addEventListener('click', () => {
        alert('Starting Demo Mode... 📊');
    });
});

// AI Assistant
document.querySelector('.btn-chat').addEventListener('click', () => {
    alert('AI Assistant: How can I help you create a strategy? 🤖');
});

document.querySelector('.btn-send').addEventListener('click', () => {
    const input = document.querySelector('.assistant-input input');
    if (input.value.trim()) {
        alert(`AI Generated: "Aggressive Scalping Strategy for ${input.value}"`);
        input.value = '';
    }
});

document.querySelector('.assistant-input input').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        document.querySelector('.btn-send').click();
    }
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