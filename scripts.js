const changeMoodBtn = document.getElementById("changeMoodBtn");
const body = document.body;
const danteImg = document.querySelector('.dante-img');

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
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > lastScrollTop) {
        header.style.transform = 'translateY(-100%)';
    } else {
        header.style.transform = 'translateY(0)';
    }

    lastScrollTop = currentScroll;
});

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