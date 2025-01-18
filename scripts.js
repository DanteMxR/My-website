window.addEventListener('load', () => {
    const loader = document.getElementById('loader-container');
    const mainContent = document.getElementById('main-content');
    const header = document.querySelector('header'); // Ссылка на header

    setTimeout(() => {
        header.classList.remove('hidden'); // Показать header после загрузки
        loader.style.display = 'none';
        mainContent.style.display = 'block';
    }, 3000); // Задержка в 3 секунды
});

// Темная тема
document.querySelector(".change-mood").addEventListener("click", function() {
    document.body.classList.toggle('dark-mode');
});

// Анимация header при прокрутке
let lastScrollTop = 0; // Последнее положение прокрутки
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > lastScrollTop) {
        // Прокрутка вниз
        header.style.transform = 'translateY(-100%)';
    } else {
        // Прокрутка вверх
        header.style.transform = 'translateY(0)';
    }

    lastScrollTop = currentScroll;
});
function smoothScroll() {
    let isScrolling = false;

    window.addEventListener('wheel', (e) => {
        if (isScrolling) return;

        isScrolling = true;
        const scrollAmount = e.deltaY > 0 ? 100 : -100; // Направление прокрутки
        const targetPosition = window.scrollY + scrollAmount;

        // Плавная анимация прокрутки
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });

        // Завершаем анимацию после её завершения
        setTimeout(() => {
            isScrolling = false;
        }, 350); // Длительность анимации (можно подстроить)
    });
}

// Инициализация плавной прокрутки
smoothScroll();
