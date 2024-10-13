document.querySelectorAll('.menu-item > span').forEach(item => {
    item.addEventListener('click', function() {
        const submenu = this.nextElementSibling;
        submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
    });
});

