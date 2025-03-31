// Search functionality
const searchButton = document.querySelector('.search-button');
const searchInput = document.querySelector('.search-input');

if (searchButton && searchInput) {
    searchButton.addEventListener('click', () => {
        const query = searchInput.value.trim();
        if (query) {
            // You can customize the search URL as needed
            window.location.href = `/search?q=${encodeURIComponent(query)}`;
        }
    });

    // Handle enter key in search input
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            searchButton.click();
        }
    });
}

// Mobile menu toggle
const mobileMenuButton = document.createElement('button');
mobileMenuButton.className = 'mobile-menu-toggle';
mobileMenuButton.innerHTML = '☰';
document.querySelector('.header-content').prepend(mobileMenuButton);

mobileMenuButton.addEventListener('click', () => {
    document.querySelector('.main-nav').classList.toggle('active');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    const nav = document.querySelector('.main-nav');
    const button = document.querySelector('.mobile-menu-toggle');
    if (nav.classList.contains('active') && 
        !nav.contains(e.target) && 
        !button.contains(e.target)) {
        nav.classList.remove('active');
    }
});
