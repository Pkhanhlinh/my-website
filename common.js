document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('header-placeholder').innerHTML = `
<div style="display: flex; justify-content: space-between; align-items: center;">
    <div style="font-size: 3em; font-weight: 900; font-family: 'Times New Roman', 'Arial Unicode MS', Arial, sans-serif; text-transform: uppercase;">KALYNK_AN TUỆ</div>
    <div class="nav-buttons">
        <a href="index.html" class="button">Home</a>
        <a href="homestay.html" class="button">Homestay Om.vibe</a>
        <a href="healing.html" class="button">Healing</a>
        <a href="villa.html" class="button">Flamingo</a>
        <a href="healthy.html" class="button">Healthy</a>
    </div>
</div>
`;

    // Add active class to current page button
    let currentPage = window.location.pathname.split('/').pop() || 'index.html';
    let activeLink = document.querySelector(`a[href="${currentPage}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }
});