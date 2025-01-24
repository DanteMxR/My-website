const changeMoodBtn = document.getElementById("changeMoodBtn");
const body = document.body;

// Список тем
const themes = [
    "theme-dark", 
    "theme-light", 
    "theme-colorful",
    "theme-blue",
    "theme-green",
    "theme-purple",
    "theme-pink"
];
let currentThemeIndex = 0; // Индекс текущей темы

// Установить начальную тему
body.classList.add(themes[currentThemeIndex]);

changeMoodBtn.addEventListener("click", () => {
    // Удаляем текущую тему
    body.classList.remove(themes[currentThemeIndex]);

    // Переходим к следующей теме
    currentThemeIndex = (currentThemeIndex + 1) % themes.length;

    // Применяем новую тему
    body.classList.add(themes[currentThemeIndex]);
});

// Проверяем, есть ли сохранённая тема
const savedTheme = localStorage.getItem("selectedTheme");
if (savedTheme) {
    body.classList.add(savedTheme);
    currentThemeIndex = themes.indexOf(savedTheme);
} else {
    body.classList.add(themes[currentThemeIndex]);
}

// Сохраняем тему при переключении
changeMoodBtn.addEventListener("click", () => {
    body.classList.remove(themes[currentThemeIndex]);
    currentThemeIndex = (currentThemeIndex + 1) % themes.length;
    const newTheme = themes[currentThemeIndex];
    body.classList.add(newTheme);
    localStorage.setItem("selectedTheme", newTheme); // Сохраняем тему
});



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