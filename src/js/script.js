// Initialize AOS
AOS.init({ duration: 1000, once: false });

// Mobile Menu Logic
const menuToggle = document.getElementById('mobile-menu');
const mobileOverlay = document.getElementById('mobile-overlay');

if (menuToggle && mobileOverlay) {
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        mobileOverlay.classList.toggle('active');

        // Prevent scrolling when menu is open
        document.body.style.overflow = mobileOverlay.classList.contains('active') ? 'hidden' : 'auto';
    });

    // Close menu when clicking a link
    document.querySelectorAll('.mobile-item').forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            mobileOverlay.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    });
}

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (nav) {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    }
});

// Floating Icons Generation
const iconContainer = document.getElementById('floating-icons');
if (iconContainer) {
    const icons = ['🔫', '🎯', '🎮', '💣', '🛡️'];

    function createIcon() {
        const icon = document.createElement('div');
        icon.className = 'floating-icon';
        icon.innerText = icons[Math.floor(Math.random() * icons.length)];
        icon.style.left = Math.random() * 100 + 'vw';
        icon.style.fontSize = Math.random() * 20 + 15 + 'px';
        const dur = Math.random() * 8 + 7;
        icon.style.animationDuration = dur + 's';
        iconContainer.appendChild(icon);
        setTimeout(() => icon.remove(), dur * 1000);
    }
    setInterval(createIcon, 600);
}

// GSAP Smooth Blog Scroll (only if GSAP is loaded and element exists)
if (typeof gsap !== 'undefined' && document.getElementById('blogSlider')) {
    gsap.to("#blogSlider", {
        xPercent: -20,
        ease: "none",
        duration: 15,
        repeat: -1,
        yoyo: true
    });
}

// Leaderboard Search Functionality
const searchBar = document.querySelector('.search-bar');
if (searchBar) {
    searchBar.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const rows = document.querySelectorAll('.leaderboard-table tbody tr');
        rows.forEach(row => {
            const name = row.querySelector('.player-info span').textContent.toLowerCase();
            if (name.includes(searchTerm)) {
                row.style.display = '';
            } else {
                row.style.display = 'none';
            }
        });
    });
}