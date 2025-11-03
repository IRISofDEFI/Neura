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
        
        const category = btn.textContent.toLowerCase();
        document.querySelectorAll('.table-row').forEach(row => {
            const rowCategory = row.querySelector('.category').textContent.toLowerCase();
            row.style.display = (category === 'all' || rowCategory === category) ? 'grid' : 'none';
        });
    });
});

// Edit Buttons
document.querySelectorAll('.btn-edit').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const setting = btn.closest('.table-row').querySelector('.setting').textContent;
        let newValue;
        if (setting === 'Password') {
            newValue = prompt('Enter new password:');
            if (newValue) {
                btn.closest('.table-row').querySelector('.status').textContent = newValue.replace(/./g, '*');
                alert(`${setting} updated successfully! 🔒`);
            }
        } else {
            newValue = prompt(`Enter new ${setting.toLowerCase()}:`, btn.closest('.table-row').querySelector('.status').textContent);
            if (newValue) {
                btn.closest('.table-row').querySelector('.status').textContent = newValue;
                alert(`${setting} updated successfully! ✅`);
            }
        }
    });
});

// Toggle Buttons
document.querySelectorAll('.btn-toggle').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const status = btn.closest('.table-row').querySelector('.status');
        const setting = btn.closest('.table-row').querySelector('.setting').textContent;
        if (status.textContent === 'Enabled' || status.textContent === 'Disabled') {
            status.textContent = status.textContent === 'Enabled' ? 'Disabled' : 'Enabled';
            btn.textContent = status.textContent === 'Enabled' ? 'Disable' : 'Enable';
            alert(`${setting} ${status.textContent.toLowerCase()}! ✅`);
        } else if (setting === 'Two-Factor Authentication') {
            status.textContent = 'Enabled';
            btn.textContent = 'Disable';
            alert('Two-Factor Authentication enabled! 🔐');
        }
    });
});

// Save Changes
document.querySelector('.btn-save').addEventListener('click', () => {
    const settings = [];
    document.querySelectorAll('.table-row').forEach(row => {
        settings.push({
            setting: row.querySelector('.setting').textContent,
            status: row.querySelector('.status').textContent
        });
    });
    alert('Settings saved!\n' + settings.map(s => `${s.setting}: ${s.status}`).join('\n') + ' ✅');
});

// AI Chat
document.querySelector('.btn-chat').addEventListener('click', () => {
    alert('AI Assistant: Need help with settings? Ask me! 🤖');
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