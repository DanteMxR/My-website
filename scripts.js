window.addEventListener('load', () => {
    const loader = document.getElementById('loader-container');
    const mainContent = document.getElementById('main-content');

    setTimeout(() => {
        loader.style.display = 'none';
        mainContent.style.display = 'block';
    }, 3000); // Задержка в 3 секунды
});
document.querySelector(".change-mood").addEventListener("click", function() {
    document.body.classList.toggle('dark-mode');
  });