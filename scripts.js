const changeMoodBtn = document.getElementById("changeMoodBtn");
const body = document.body;
const danteImg = document.querySelector('.dante-img');
const translateBtn = document.getElementById('translateBtn');
const langText = document.getElementById('langText');

// Список тем и соответствующих гифок
const themes = [
    "theme-dark", 
    "theme-light", 
    "theme-colorful",
    "theme-blue",
    "theme-green",
    "theme-purple",
    "theme-pink"
];

const gifUrls = [
    "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExdTMxN3YxdGd4cjJqMHkyeDJhaDJwbG51dmQ4am9oaDA2MGRxemdsbiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/mBvUaCuDPEXNnIk2NK/giphy.gif",
    "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExdTRxOG82cmd5ZnAwZ2tiaHdocm43YjF3YnBnZWw4bmk4a2dpZDEwbCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/tqU9tTWnImTJe/giphy.gif",
    "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExN3JkcjJ3OW9icGU2ZThkZ2Nnd205dXZodGw4MzE2cTRieDJ6Nng4MiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/dH4eBrNQXB8S4/giphy.gif",
    "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMmUxdW82emMzNXhoMGdoc2wyY2d0OHlvMWN4Z3RqYjF3aDhrcHdqYiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/VGHtpsS3UJNRK/giphy.gif",
    "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExcXBrd3F4NmRyYmthYnBlaWN0dW44bnNreHN1dzJ1ZzVuY2ZraTY5bSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/8wvYd8bWGKPao/giphy.gif",
    "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMWI3cjhmcGhhYThyeHgydmkya3EyZHZmdTlqZHp4MWpkM3BiNWxseSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/aQwvKKi4Lv3t63nZl9/giphy.gif",
    "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExaGlkcjVlaW9wbzZtMXNld29uMmo4c2hoNjZ2Y3pscm9vZjYzcHIyaSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/wr7oA0rSjnWuiLJOY5/giphy.gif"
];

let currentThemeIndex = 0;
let isRussian = false;

// Функция обновления гифки
function updateGif() {
    danteImg.src = gifUrls[currentThemeIndex];
}

// Проверяем сохранённую тему
const savedTheme = localStorage.getItem("selectedTheme");
if (savedTheme) {
    currentThemeIndex = themes.indexOf(savedTheme);
    body.classList.add(savedTheme);
    updateGif();
} else {
    body.classList.add(themes[currentThemeIndex]);
}

// Обработчик клика для смены темы
changeMoodBtn.addEventListener("click", () => {
    body.classList.remove(themes[currentThemeIndex]);
    currentThemeIndex = (currentThemeIndex + 1) % themes.length;
    const newTheme = themes[currentThemeIndex];
    body.classList.add(newTheme);
    localStorage.setItem("selectedTheme", newTheme);
    updateGif();
});

// Функция перевода
function toggleLanguage() {
    isRussian = !isRussian;
    document.querySelectorAll('[data-en], [data-ru]').forEach(element => {
        if (isRussian) {
            if (element.dataset.ru) element.textContent = element.dataset.ru;
        } else {
            if (element.dataset.en) element.textContent = element.dataset.en;
        }
    });
    
    // Обновление иконки
    langText.textContent = isRussian ? 'RU' : 'EN';
    translateBtn.setAttribute('aria-label', isRussian ? 'Switch to English' : 'Переключить на Русский');
    localStorage.setItem('language', isRussian ? 'ru' : 'en');
}

// Проверка сохранённого языка
const savedLang = localStorage.getItem('language');
if (savedLang === 'ru') {
    isRussian = true;
    toggleLanguage();
}

// Обработчики событий
translateBtn.addEventListener('click', toggleLanguage);

window.addEventListener('load', () => {
    const loader = document.getElementById('loader-container');
    const mainContent = document.getElementById('main-content');
    const header = document.querySelector('header');

    setTimeout(() => {
        header.classList.remove('hidden');
        loader.style.display = 'none';
        mainContent.style.display = 'block';
    }, 3000);
});

// Анимация header при прокрутке
let lastScrollTop = 0;
const headerElement = document.querySelector('header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    headerElement.style.transform = currentScroll > lastScrollTop 
        ? 'translateY(-100%)' 
        : 'translateY(0)';
    lastScrollTop = currentScroll;
});

// Плавная прокрутка
function smoothScroll() {
    let isScrolling = false;

    window.addEventListener('wheel', (e) => {
        if (isScrolling) return;

        isScrolling = true;
        const scrollAmount = e.deltaY > 0 ? 100 : -100;
        const targetPosition = window.scrollY + scrollAmount;

        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });

        setTimeout(() => {
            isScrolling = false;
        }, 350);
    });
}

smoothScroll();

const glitchText = document.querySelector('.pixel-glitch');
        let isGlitching = false;

        glitchText.addEventListener('mousemove', (e) => {
            if (!isGlitching) {
                isGlitching = true;
                const baseX = e.clientX / window.innerWidth;
                const baseY = e.clientY / window.innerHeight;
                
                glitchText.style.textShadow = `
                    ${Math.random() * 4 - 2}px ${Math.random() * 4 - 2}px rgba(255,0,255,0.7),
                    ${Math.random() * 4 - 2}px ${Math.random() * 4 - 2}px rgba(0,255,255,0.7)
                `;
                
                setTimeout(() => {
                    glitchText.style.textShadow = '';
                    isGlitching = false;
                }, 50);
            }
        });